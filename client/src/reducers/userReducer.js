const {LOGIN} = require('../actions/ActionTypes')

const userReducer = (state = null, action) => {
    switch (action.type) {
        case LOGIN:
            return action.payload.user    
            
        default:
            return state
    }
}

export default userReducer