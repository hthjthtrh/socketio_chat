import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1)
    },
    textBox: {
        textAlign: 'start',
        fontFamily: 'inherit',
        margin: 0
    }
}))


export default function Message({rawMsg}) {
    const {origin, time, payload} = rawMsg;
    const {_metaData, data} = payload;
    const classes = useStyles();
    
    return (
        <Paper className={classes.root}>
            <Typography variant='body1'>
                <pre className={classes.textBox}>
                    {data}
                </pre>                
            </Typography>
        </Paper>
    );
}