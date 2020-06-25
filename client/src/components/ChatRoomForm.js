import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch} from 'react-redux'

import { joinChat } from '../actions/actions';

const useStyles = makeStyles({
    root: {
        position: 'inherit',
        top: '50%',
        left: '50%'
    }
})

export default function ChatRoomForm(props) {
    const [chatRoom, setChatRoom] = useState('')
    const dispatch = useDispatch()
    const classes = useStyles()

    const handleKeyDown = event => {
        if (event.key === 'Enter'){
            event.preventDefault();
            event.stopPropagation();
            console.log(chatRoom);
            dispatch(joinChat(chatRoom));
            setChatRoom('');
        }
    }

    return (
        <TextField {...props} required placeholder='Join a chat room' onKeyDown={handleKeyDown} onChange={e => setChatRoom(e.target.value)} value={chatRoom}/>
    );
}
