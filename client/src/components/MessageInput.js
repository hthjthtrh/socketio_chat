import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux'
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import { Grid } from '@material-ui/core';

const useStyles= makeStyles( theme => ({
    textField: {
        width: '100%',
    }
}));

export default function MessageInput(props) {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleSendMessage = () => {
        console.log(message);
        setMessage('');
    }

    return (
        <form>
            <Grid container alignContent='center' justify='center' alignItems='center'>
                <Grid item xs={11} style={{padding:'5px'}}>
                    <TextField 
                        className={classes.textField}
                        rows={1} 
                        rowsMax={3} 
                        multiline
                        placeholder='Type your message here' 
                        onChange={e => setMessage(e.target.value)} 
                        value={message} 
                    />
                </Grid>
                <Grid item xs={1}>
                    <IconButton color='primary' onClick={handleSendMessage} disabled={message === ''}>
                        <SendIcon fontSize='small'/>
                    </IconButton>
                </Grid>
            </Grid>
        </form>
    );
}