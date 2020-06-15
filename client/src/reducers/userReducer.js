const {LOGIN} = require('../actions/ActionTypes')

export default function(state = null, action) {

    switch (action.type) {
        case LOGIN:
            return action.payload.user    
            
        default:
            return state
    }
}