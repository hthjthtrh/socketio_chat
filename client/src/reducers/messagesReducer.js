const {RECEIVE_MESSAGE, SEND_MESSAGE, NEW_CHAT, POPULATE_HISTORY} = require('../actions/ActionTypes')

export default function(state = {},action) {

    switch (action.type) {
        case RECEIVE_MESSAGE:
            var messageCopy = Object.assign({},state)
            messageCopy[action.payload.room] = messageCopy[action.payload.room].concat([action.payload])
            return messageCopy   
        
        case SEND_MESSAGE:
            var messageCopy = Object.assign({},state)
            messageCopy[action.payload.room] = messageCopy[action.payload.room].concat([action.payload])
            return messageCopy 
        
        case NEW_CHAT:
            var messageCopy = Object.assign({},state, {[action.payload.room]: []})
            return messageCopy

        case POPULATE_HISTORY:
            var messageCopy = Object.assign({}, state)
            messageCopy[action.payload.room] = action.payload.messages
            return messageCopy

        default:
            return state
    }
}