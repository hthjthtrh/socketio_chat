import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Message from './Message'
import { List, ListItem, Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {},
    msgLeft: {
        alignSelf: 'flex-start'
    },
    msgRight: {
        alignSelf: 'flex-end'
    }
})

export default function ChatMessagesPanel(props) {
    const hasOpenChat = useSelector(state => !(state.currentChat === null));
    var msgElements = null;
    const history = useSelector(state => state.messages[state.currentChat]);
    
    if (hasOpenChat) {
        msgElements = history.map((msg, idx) => {
            return (
                <Grid item >
                    <Message rawMsg={msg} />
                </Grid>
            );
        });
    }



    return (
        <Grid container direction='column' >
            {msgElements}
        </Grid>
    );

    return (
        <List>
            {history.map((msg, idx) => {
                return (
                    <ListItem key={idx}>
                        <Message rawMsg={msg} />
                    </ListItem>
                );
            })}
        </List>
    )

}