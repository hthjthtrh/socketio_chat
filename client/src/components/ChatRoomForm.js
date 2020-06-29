import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
//import { makeStyles } from '@material-ui/core/styles';
import {useDispatch} from 'react-redux'

import { joinChat } from '../actions/actions';

/*
const useStyles = makeStyles({
    root: {
        position: 'inherit',
        top: '50%',
        left: '50%'
    }
})
*/
export default function ChatRoomForm(props) {
    const [chatRoom, setChatRoom] = useState('')
    const dispatch = useDispatch()

    const handleKeyDown = event => {
        if (event.key === 'Enter'){
            event.preventDefault();
            event.stopPropagation();
            dispatch(joinChat(chatRoom));
            setChatRoom('');
        }
    }

    return (
        <TextField {...props} variant='outlined' required placeholder='Join a chat room' onKeyDown={handleKeyDown} onChange={e => setChatRoom(e.target.value)} value={chatRoom}/>
    );
}
