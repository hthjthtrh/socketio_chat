import userReducer from './userReducer'
import currentChatReducer from './currentChatReducer'
import chatRoomsReducer from './chatRoomsReducer'
import messagesReducer from './messagesReducer'

const {combineReducers} = require('redux')


export default combineReducers({
    user: userReducer,
    currentChat: currentChatReducer,
    chatRooms: chatRoomsReducer,
    messages: messagesReducer
})