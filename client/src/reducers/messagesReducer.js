const {RECEIVE_MESSAGE, SEND_MESSAGE, NEW_CHAT} = require('../actions/ActionTypes')

export default function(state = {},action) {

    switch (action.type) {
        case RECEIVE_MESSAGE:
            var messageCopy = Object.assign({},state)
            messageCopy[action.payload.room].push(action.payload)
            return messageCopy    
        
        case SEND_MESSAGE:
            var messageCopy = Object.assign({},state)
            messageCopy[action.payload.room].push(action.payload)
            return messageCopy  
        
        case NEW_CHAT:
            var messageCopy = Object.assign({},state)
            messageCopy[action.payload.room] = []
            return messageCopy

        default:
            return state
    }
}