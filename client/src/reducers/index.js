const {combineReducers} = require('redux')
const chatRoomsReducer = require('./chatRoomsReducer')
const currentChatReducer = require('./currentChatReducer')
const messagesReducer = require('./messagesReducer')
const userReducer = require('./userReducer')

export default combineReducers({
    user: userReducer,
    currentChat: currentChatReducer,
    chatRooms: chatRoomsReducer,
    messages: messagesReducer
})