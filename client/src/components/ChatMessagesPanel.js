import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx'

import Message from './Message'
import { List, ListItem, Grid } from '@material-ui/core';

const useStyles = makeStyles( theme => ({
    root: {
        padding: theme.spacing(2),
    },
    msgLeft: {
        alignSelf: 'flex-start'
    },
    msgRight: {
        alignSelf: 'flex-end'
    },
    messageGrid: {
        padding: theme.spacing(1)
    }
}));

export default function ChatMessagesPanel(props) {
    const hasOpenChat = useSelector(state => !(state.currentChat == null));
    var msgElements = null;
    const history = useSelector(state => state.messages[state.currentChat]);
    const userName = useSelector(state => state.user);
    const classes = useStyles();
    
    if (hasOpenChat) {        
        msgElements = history.map((msg, idx) => {
            const {origin} = msg;
            return (
                <Grid 
                    item 
                    key={idx} 
                    className={ 
                        clsx(
                            origin.localeCompare(userName) === 0
                            ? classes.msgRight
                            : classes.msgLeft,
                            classes.messageGrid
                            )
                    }               
                >
                    <Message rawMsg={msg} />
                </Grid>
            );
        });
    }

    return (
        <Grid container >
            <Grid className={classes.root} alignSelf='flex-end' item container direction='column' justify='flex-end'>
                {msgElements}
            </Grid>
        </Grid>

    );
}