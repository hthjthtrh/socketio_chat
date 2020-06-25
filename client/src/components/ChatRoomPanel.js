import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ChatMessagesPanel from './ChatMessagesPanel';
import MessageInput from './MessageInput';

const useStyles = makeStyles({
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
})

export default function ChatRoomPanel(props) {
    const classes = useStyles();

    return (
        <Grid container justify='space-evenly' direction='column' className={classes.root}>
            <Grid container item >
                <Paper style={{ height: '600px'}} className={classes.paper} variant='outlined'>
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