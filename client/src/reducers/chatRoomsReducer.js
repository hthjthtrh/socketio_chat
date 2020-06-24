const {NEW_CHAT} = require('../actions/ActionTypes')

export default function(state = [], action) {

    switch (action.type) {
        case NEW_CHAT:
            return [action.payload.room, ...state]

        default:
            return state
    }
}