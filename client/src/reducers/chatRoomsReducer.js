const {NEW_CHAT} = require('../actions/ActionTypes')

const chatRoomsReducer = (state = [], action) => {
    switch (action.type) {
        case NEW_CHAT:
            var newChatRoom = {title: action.payload.chat}
            return [newChatRoom, ...state]

        default:
            return state
    }
}

export default chatRoomsReducer