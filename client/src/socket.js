import store from './store';
import * as Types from './actions/ActionTypes';

const io = require('socket.io-client');

var socket;

try {
    socket = io();
    console.log('connected');
} catch (error) {
    console.error(error);
};

socket.on('user joined', joinedUser => {
    console.log(joinedUser);
});

socket.on('history', roomHistory => {
    console.log(roomHistory);
    store.dispatch({
        type: Types.POPULATE_HISTORY,
        payload: roomHistory
    })
});

socket.on('message', msg => {
    console.log(msg);
    store.dispatch({
        type: Types.RECEIVE_MESSAGE,
        payload: msg
    })
});

export default socket;

