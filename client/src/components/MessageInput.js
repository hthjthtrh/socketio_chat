import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'
import IconButton from '@material-ui/core/IconButton';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';
import { Grid } from '@material-ui/core';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import Files from "react-butterfiles";

import { sendMessage, sendFile } from '../actions/actions';

const useStyles = makeStyles(theme => ({
    textField: {
        width: '100%',
        margin: theme.spacing(0, 1)
    }
}));

export default function MessageInput(props) {
    const { user, currentChat } = useSelector(state => ({ user: state.user, currentChat: state.currentChat }));
    const hasNoActiveChat = ((user == null) || (currentChat == null));
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleSendMessage = () => {
        if (message == null || message === '') {
            return
        }
        dispatch(sendMessage(message));
        setMessage('');
    }

    const handleFileUpload = files => {
        files.forEach(file => {
            dispatch(sendFile(file.src));
        });
    }

    return (
        <form>
            <Grid container alignContent='center' justify='space-evenly' alignItems='center'>
                <Grid item xs={10} style={{ padding: '5px' }}>
                    <KeyboardEventHandler
                        handleKeys={['ctrl+enter']}
                        onKeyEvent={handleSendMessage}
                    >
                        <TextField
                            className={classes.textField}
                            rows={1}
                            rowsMax={3}
                            multiline
                            placeholder='Type your message here'
                            onChange={e => setMessage(e.target.value)}
                            value={message}
                            disabled={props.disabled}
                            variant='outlined'
                        />
                    </KeyboardEventHandler>
                </Grid>
                <Grid item xs={1} style={{ maxWidth: 48 }}>
                    <Files
                        multiple
                        convertToBase64
                        maxSize='12mb'
                        multipleMaxSize='60mb'
                        onSuccess={handleFileUpload}
                        onError={errs => alert('File size limit: 12mb')}
                    >
                        {({ browseFiles }) => (
                            <IconButton
                                color='primary'
                                onClick={browseFiles}
                                disabled={hasNoActiveChat}>
                                <PublishRoundedIcon />
                            </IconButton>
                        )}
                    </Files>
                </Grid>
                <Grid item xs={1} style={{ maxWidth: 48 }}>
                    <IconButton
                        color='primary'
                        onClick={handleSendMessage}
                        disabled={(message === '') || hasNoActiveChat}>
                        <SendRoundedIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </form>
    );
}