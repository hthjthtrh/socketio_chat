const http = require('http')
const express = require('express')
const assert = require('assert');
require('dotenv').config()

const storage = require('./storage')

const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)

const verify = credentials => true

const activeUsers = new Set()
const SidToUid = {}

const getRoomsForUser = uid => {
    const criterias = { parties: uid }
    const options = { projection: { _id: 0, parties: 0 } }
    return storage.retrieveDocuments('rooms', criterias, options)
}

const roomExists = async room => {
    const criterias = { room }
    const options = {}
    try {
        const result = await storage.retrieveDocuments('rooms', criterias, options)
        return (result.length === 0) ? false : true
    } catch (err) {
        console.error(err)
    }
}

const createRoom = (uid, room) => {
    const document = { room, parties: [uid] }
    storage.insertDocuments('rooms', [document])
}

io.on('connection', socket => {
    socket.on('login', async (credentials, ack) => {
        console.log(credentials);
        const uid = credentials.userName
        if (!(verify(credentials)) || activeUsers.has(uid)) {
            ack('failure')
            return
        }
        ack('okay')

        SidToUid[socket.id] = uid
        activeUsers.add(uid)
        console.log(`User ${uid} is on ${socket.id}.`)

        const rooms = (await getRoomsForUser(uid)).map(roomObj => roomObj.room)
        socket.join(rooms, () => {
            let chainedIo = io
            chainedIo = rooms.reduce((accumulatedIo, room) => accumulatedIo.to(room), chainedIo)
            chainedIo.emit(`user joined`, uid)
        })
    })

    socket.on('get history', async () => {
        const uid = SidToUid[socket.id]
        const rooms = await getRoomsForUser(uid)

        rooms.forEach(room => {
            const criterias = { ...room }
            const options = { projection: { _id: 0 }, sort: { time: 1 } }
            storage.retrieveDocuments('messages', criterias, options).then(messages => {
                console.log(messages);
                socket.emit('history', { ...room, messages })
            }).catch(err => console.err(err))
        })
    })

    socket.on('join room', async (room, ack) => {
        const uid = SidToUid[socket.id]
        //const roomExist = await roomExists(room);
        if (await roomExists(room)) {
            const criterias = { room }
            const update = { $addToSet: { parties: uid } }
            const options = {}
            try {
                await storage.updateDocument('rooms', criterias, update, options)
            } catch (err) {
                console.error(err)
            }
        } else {
            createRoom(uid, room)
        }
        socket.join(room)
        ack('okay')
    })

    socket.on('message', msg => {
        const uid = SidToUid[socket.id]
        msg.origin = uid
        console.log(msg);
        storage.insertDocuments('messages', [msg])
        socket.to(msg.room).emit('message', msg)
    })

    socket.on('disconnect', reason => {
        const uid = SidToUid[socket.id]
        delete SidToUid[socket.id]
        activeUsers.delete(uid)
        console.log(`User ${uid} disconnected`)
    })
})

const db_url = process.env.DB_URL
const db_user = process.env.DB_USER
const db_pass = process.env.DB_PASS
const db_name = process.env.DB_NAME
const dbCnntnString = db_url.replace('{user}', db_user).replace('{pass}', db_pass)

server.listen(3030, () => console.log('Messaging server running on port 3030'))
storage.initDbConnection(dbCnntnString, db_name)