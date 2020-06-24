import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Container } from '@material-ui/core';

import {login} from '../actions/actions';

export default function LoginPanel() {
    const [user, setUser] = useState('');
    const dispatch = useDispatch();

    const handleChange = e => {
        setUser(e.target.value);
    }


    const handleKeyDown = event => {
        if (event.key === 'Enter'){
            event.preventDefault();
            event.stopPropagation();
            dispatch(login(user));
            setUser('');
        }
    }

    return (
            <TextField value={user} onKeyDown={handleKeyDown} onChange={handleChange} label='Enter your user name' required />
    );
};