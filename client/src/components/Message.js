import React, {useState, useEffect} from 'react';
import { Paper, Typography } from '@material-ui/core';

export default function Message({rawMsg}) {
    const {origin, time, payload} = rawMsg;
    const {_metaData, data} = payload;
    
    return (
        <Paper>
            <Typography variant='h3'>
                {origin + ' ' + data}
            </Typography>
        </Paper>
    );
}