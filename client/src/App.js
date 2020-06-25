import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import ChatRoomForm from './components/ChatRoomForm';
import ChatRoomList from './components/ChatRoomList';
import ChatRoomPanel from './components/ChatRoomPanel';
import LoginPanel from './components/LoginPanel.js'
import UserInfoPanel from './components/UserInfoPanel'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1)
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    padding: theme.spacing(1),
  },
  paper1: {
    height: '30px'
  },
  paper2: {
    height: '600px',
    overflow: 'auto'
  },
  paper3: {
    height: 'auto'
  },
  loginPanelContainer: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center'
  }
}));


export default function App() {
  const classes = useStyles();
  const loggedIn = useSelector(state => !(state.user === null));

  return (
    <div>
      <Paper style={{ margin: '50px', padding: '20px' }}>
        <Grid className={classes.root} container justify='center'>
          <Grid item xs={11}>
            <Paper className={classes.loginPanelContainer} variant='outlined'>
              {loggedIn
                ? <UserInfoPanel />
                : <LoginPanel />}
            </Paper>
          </Grid>
          <Grid item container direction='column' item xs={3}>
            <Grid item background='black'>
              <Paper variant='outlined' className={clsx(classes.paper, classes.paper1)}>
                <ChatRoomForm disabled={!loggedIn} />
              </Paper>
            </Grid>
            <Grid item background='black'>
              <Paper variant='outlined' className={clsx(classes.paper, classes.paper2)}>
                <ChatRoomList />
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <Paper variant='outlined' className={clsx(classes.paper, classes.paper3)}>
              <ChatRoomPanel disabled={!loggedIn}/>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
