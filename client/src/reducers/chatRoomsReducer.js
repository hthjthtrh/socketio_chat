const {NEW_CHAT} = require('../actions/ActionTypes')

export default function(state = [], action) {

    switch (action.type) {
        case NEW_CHAT:
            var newChatRoom = {title: action.payload.chat}
            return [newChatRoom, ...state]

        default:
            return state
    }
}