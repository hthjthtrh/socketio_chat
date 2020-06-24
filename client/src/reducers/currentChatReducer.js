const {JOIN_CHAT} = require('../actions/ActionTypes')

export default function(state = null, action) {

    switch (action.type) {
        case JOIN_CHAT:
            return action.payload.room    

        default:
            return state
    }
}