import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button, Box } from '@mui/material';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import * as actionType from '../../constants/actionType';
import useStyles from './styles';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h5" color="inherit" noWrap sx={{ flexGrow: 1, textDecoration:'none' }} component={Link} to="/">
          TicketWin
        </Typography>

        <nav>
        <Typography variant="h8" color="inherit" noWrap sx={{ flexGrow: 1, m: 1, mr:3, textDecoration:'none' }} component={Link} to="/competitions">Competitions</Typography>
        </nav>

        {user?.result && (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
            <Avatar className={classes.purple} sx={{mr:3,textDecoration:'none'}} alt={user?.result.name} src={user?.result.imageUrl} component={Link} to="/user"> {user?.result.name.charAt(0)}</Avatar>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </Box>)}


        {!user?.result && (
          <Button component={Link} to="/auth" variant="outlined" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;