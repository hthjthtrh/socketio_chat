const {JOIN_CHAT} = require('../actions/ActionTypes')

const currentChatReducer = (state = null, action) => {
    switch (action.type) {
        case JOIN_CHAT:
            return action.payload.chat    

        default:
            return state
    }
}

export default currentChatReducer