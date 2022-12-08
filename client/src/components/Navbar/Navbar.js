import React, { useState, useEffect} from 'react';
import { AppBar, Typography, Toolbar } from '@mui/material';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material';
import MobileMenu from './MobileMenu';
import AvatarComponent from './AvatarComponent';
import { LOGOUT } from '../../constants/actionType';


const Navbar = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const theme = useTheme();
  const isMatchMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: LOGOUT });

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

        <Typography variant="h5" color="inherit" noWrap sx={{ flexGrow: 1, textDecoration: 'none' }} component={Link} to="/">
          TicketWin
        </Typography>

        {isMatchMobile ? (
          <MobileMenu user={user} setUser={setUser} logout={logout}/>
        ) : (
          <>
            <nav>
              <Typography variant="h8" color="inherit" noWrap sx={{ flexGrow: 1, m: 1, mr: 3, textDecoration: 'none' }} component={Link} to="/competitions">Competitions</Typography>
            </nav>
            <AvatarComponent user={user} setUser={setUser} logout={logout}/>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;