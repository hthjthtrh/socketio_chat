import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField } from '@material-ui/core';

import { login } from '../actions/actions';

export default function LoginPanel() {
    const [user, setUser] = useState('');
    const dispatch = useDispatch();

    const handleChange = e => {
        setUser(e.target.value);
    }


    const handleKeyDown = event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            dispatch(login(user));
            setUser('');
        }
    }

    return (
        <TextField variant='outlined' value={user} onKeyDown={handleKeyDown} onChange={handleChange} label='Enter your user name' required />
    );
};