const {JOIN_CHAT, POPULATE_HISTORY} = require('../actions/ActionTypes')

export default function(state = null, action) {

    switch (action.type) {
        case JOIN_CHAT:
            return action.payload.room

        case POPULATE_HISTORY:
            if (state == null) {
                return action.payload.room
            } else {
                return state
            }
        
        default:
            return state
    }
}