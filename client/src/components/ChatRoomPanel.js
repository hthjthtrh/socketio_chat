import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ChatMessagesPanel from './ChatMessagesPanel';
import MessageInput from './MessageInput';

const useStyles = makeStyles(theme => ({
    root: {
        height: 'inherit',
    },
    top: {
        alignSelf: 'flex-end',
    },
    bottom: {
        alignSelf: 'flex-end',
    },
    paper: {
        width: 'inherit',
    }
}))

export default function ChatRoomPanel(props) {
    const currentChat = useSelector(state => state.currentChat);
    const classes = useStyles();

    return (
        <Grid container justify='space-evenly' direction='column' className={classes.root}>
            <Grid container item >
                <Paper style={{ height: '600px', overflow: 'auto'}} className={classes.paper} variant='outlined'>
                    <ChatMessagesPanel />
                </Paper>
            </Grid>
            <Grid container item >
                <Paper className={classes.paper} variant='outlined'>
                    <MessageInput disabled={props.disabled}/>
                </Paper>
            </Grid>
        </Grid>
    );
}