const {RECEIVE_MESSAGE, SEND_MESSAGE} = require('../actions/ActionTypes')

export default function(state = {},action) {

    switch (action.type) {
        case RECEIVE_MESSAGE:
            var messageCopy = Object.assign({},state)
            messageCopy[action.payload.chat] = [...messageCopy[action.payload.chat], action.payload.message]
            return messageCopy    
        
        case SEND_MESSAGE:
            var messageCopy = Object.assign({},state)
            messageCopy[action.payload.chat] = [...messageCopy[action.payload.chat], action.payload.message]
            return messageCopy  

        default:
            return state
    }
}