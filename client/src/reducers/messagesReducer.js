const {RECEIVE_MESSAGE, SEND_MESSAGE, NEW_CHAT, POPULATE_HISTORY} = require('../actions/ActionTypes')

export default function(state = {},action) {

    var messageCopy;

    switch (action.type) {
        case RECEIVE_MESSAGE:
            messageCopy = Object.assign({},state)
            messageCopy[action.payload.room] = messageCopy[action.payload.room].concat([action.payload])
            return messageCopy   
        
        case SEND_MESSAGE:
            messageCopy = Object.assign({},state)
            messageCopy[action.payload.room] = messageCopy[action.payload.room].concat([action.payload])
            return messageCopy 
        
        case NEW_CHAT:
            messageCopy = Object.assign({},state, {[action.payload.room]: []})
            return messageCopy

        case POPULATE_HISTORY:
            messageCopy = Object.assign({}, state)
            messageCopy[action.payload.room] = action.payload.messages
            return messageCopy

        default:
            return state
    }
}