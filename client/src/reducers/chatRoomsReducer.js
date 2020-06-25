const { NEW_CHAT, POPULATE_HISTORY } = require('../actions/ActionTypes')

export default function (state = [], action) {

    switch (action.type) {
        case NEW_CHAT:
            return [action.payload.room, ...state]

        case POPULATE_HISTORY:
            return [action.payload.room, ...state]

        default:
            return state
    }
}