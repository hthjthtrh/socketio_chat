const { NEW_CHAT, POPULATE_HISTORY, RECEIVE_MESSAGE } = require('../actions/ActionTypes')

export default function (state = [], action) {

    switch (action.type) {
        case NEW_CHAT:
            return [{room: action.payload.room, unAcked: false}, ...state]

        case POPULATE_HISTORY:
            return [{room: action.payload.room, unAcked: false}, ...state]

        case RECEIVE_MESSAGE:
            var targetRoom = action.payload.room
            return state.map(roomObj => {
                if (targetRoom.localeCompare(roomObj.room) === 0) {
                    return {room: targetRoom, unAcked: true}
                } else {
                    return roomObj
                }
            })


        default:
            return state
    }
}