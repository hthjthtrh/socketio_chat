import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, makeStyles } from '@material-ui/core';

import RoomElement from './RoomElement';
import { joinChat } from '../actions/actions'

export default function ChatRoomList() {
    const state = useSelector(state => ({chatRooms:state.chatRooms, currentChat:state.currentChat}));
    const dispatch = useDispatch();

    const handleChatSelection = e => {
        dispatch(joinChat(e.target.getAttribute('value')));
    };

    const roomElements = state.chatRooms.map(room => (
        <RoomElement
            key={room} 
            value={room} 
            selected={(state.currentChat.localeCompare(room) === 0)}
        />
    ));

    return (
        <List onClick={handleChatSelection}>
            {roomElements}
        </List>     
    );
};