import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid } from '@material-ui/core';
import clsx from 'clsx';
import MessageContentRender from './MessageContentRender';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1)
    },
    textBox: {
        margin: 0,
        whiteSpace: 'pre-line',
        overflowWrap: 'break-word',
        width: 'inherit'
    },
    leftBox: {
        textAlign: 'start'
    },
    rightBox: {
        textAlign: 'end'
    }
}))


const captionElement = content => {
    return (
        <Typography variant='caption' >
            {content}
        </Typography>
    )
}

export default function Message({ rawMsg, left }) {
    const { origin, time, payload } = rawMsg;
    const classes = useStyles();
    
    var readableTime = new Date(time);
    readableTime = `${('0' + readableTime.getHours()).slice(-2)}:${('0' + readableTime.getMinutes()).slice(-2)}`;

    return (
        <Paper className={classes.root}>
            <Grid container direction='column' >
                {left && <Grid item className={clsx(classes.textBox, classes.leftBox)}>
                    {captionElement(origin)}
                </Grid>}
                <MessageContentRender payload={payload} />
                <Grid item className={clsx(classes.textBox, classes.rightBox)}>
                    {captionElement(readableTime)}
                </Grid>

            </Grid>
        </Paper>
    );
}