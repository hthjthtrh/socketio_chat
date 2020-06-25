import React from 'react';
import { useSelector } from 'react-redux';
import { ListItem, Typography, Box } from '@material-ui/core';

export default function RoomElement(props) {
    const room = props.value
    const roomMsgs = useSelector(state => state.messages[room])
    var previewContent = null
    if (roomMsgs.length > 0) {
        previewContent = roomMsgs[roomMsgs.length-1].payload.data
    }

    return (
        <ListItem 
            {...props}
            alignItems='flex-start'
            button divider 
        >
            <Typography>
                <Box alignSelf='flex-start'>
                    {room}
                </Box>
                <Box>
                    {previewContent}
                </Box>
            </Typography>
        </ListItem>
    )
}