import React, { useState } from 'react';
import Files from "react-butterfiles";
import IconButton from '@material-ui/core/IconButton';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';
import { Popover, Typography } from '@material-ui/core';

export default function FileInputWrapper() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleFileUpload = files => {
        files.forEach(file => {
            dispatch(sendFile(file.src));
        });
    }

    const handleError = error => {
        setAnchorEl(event.currentTarget);
    }

    return (
        <div>
            <Files
                multiple
                convertToBase64
                maxSize='15mb'
                multipleMaxSize='60mb'
                onSuccess={handleFileUpload}
                onError={handleError}
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
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography>Single file cannot be over 15mb and total size cannot be over 60mb.</Typography>
            </Popover>
        </div>

    )

}