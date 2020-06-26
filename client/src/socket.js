import store from './store';
import * as Types from './actions/ActionTypes';

const io = require('socket.io-client');

var socket;

try {
    socket = io('http://localhost:3030');
    console.log('Socket connected');
} catch (error) {
    console.error(error);
};

socket.on('user joined', joinedUser => {
});

socket.on('history', roomHistory => {
    //console.log(roomHistory);
    store.dispatch({
        type: Types.POPULATE_HISTORY,
        payload: roomHistory
    })
});

socket.on('message', msg => {
    store.dispatch({
        type: Types.RECEIVE_MESSAGE,
        payload: msg
    })
});

export default socket;

