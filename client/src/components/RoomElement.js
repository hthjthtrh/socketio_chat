import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListItem, Typography } from '@material-ui/core';

import { joinChat } from '../actions/actions'

const originTransform = (origin, user) => origin.localeCompare(user)? origin : 'You'

export default function RoomElement(props) {
    const room = props.value
    //const unAcked = props.unAcked
    const roomMsgs = useSelector(state => state.messages[room])
    const user = useSelector(state => state.user)
    var previewContent = null
    if (roomMsgs.length > 0) {
        var {origin} = roomMsgs[roomMsgs.length - 1]        
        previewContent = originTransform(origin, user) + ': ' + roomMsgs[roomMsgs.length - 1].payload.data
    }

    const dispatch = useDispatch();

    const handleChatSelection = e => {
        dispatch(joinChat(e.currentTarget.getAttribute('value')));
    };

    return (
        <ListItem
            {...props}
            alignItems='flex-start'
            button divider
            onClick={handleChatSelection}
        >
            <div style={{ width: 'inherit' }}>
                <div>
                    <Typography color='textPrimary' variant='h6'>
                        {room}
                    </Typography>
                </div>
                <div>
                    <Typography noWrap variant='body2'>
                        {
                            previewContent == null
                            ? 'No messages yet.'
                            : previewContent
                        }
                    </Typography>
                </div>
            </div>


        </ListItem>
    )
}