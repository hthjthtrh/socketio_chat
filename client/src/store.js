import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

// Note: this API requires redux@>=3.1.0
const initialState = {
    user: null,
    currentChat: null,
    chatRooms: [],
    messages: {}
}

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
);

console.log(store.getState())

export default store;