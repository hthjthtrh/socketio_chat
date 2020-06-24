import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const sampleState = {
    user: 'temp',
    currentChat: '2',
    chatRooms: ['1','2','3','4','5','6','7','8','9'],
    messages: {}
}

sampleState.chatRooms.forEach(room => {
    sampleState.messages[room] = []
})

const store = createStore(
    rootReducer,
    //sampleState,
    applyMiddleware(thunk)
);

export default store;