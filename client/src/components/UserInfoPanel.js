import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function UserInfoPanel() {
    const userName = useSelector(state => state.user);

    return (
        <Typography variant='h6' align='center' color='textPrimary'>
            <Box fontSize='subtitle1.fontSize' fontWeight='fontWeightRegular'>
                You are logged in as: 
            </Box>
            <Box fontWeight='fontWeightMedium'>
                {userName}
            </Box>
            
        </Typography>
    );
}