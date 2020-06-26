import React from 'react';
import { useSelector } from 'react-redux';
import { List } from '@material-ui/core';

import RoomElement from './RoomElement';

export default function ChatRoomList() {
    const state = useSelector(state => ({chatRooms:state.chatRooms, currentChat:state.currentChat}));

    const roomElements = state.chatRooms.map(roomObj => (
        <RoomElement
            key={roomObj.room} 
            value={roomObj.room} 
            //unAcked={roomObj.unAcked}
            selected={(roomObj.room.localeCompare(state.currentChat) === 0)}
        />
    ));

    return (
        <List >
            {roomElements}
        </List>     
    );
};