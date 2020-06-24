import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { ListItem } from '@material-ui/core';

export default function RoomElement(props) {
    const room = props.value

    return (
        <ListItem 
            {...props}
            alignItems='flex-start'
            button divider 
        >
            {room}
            <br/>
            second line
        </ListItem>
    )
}