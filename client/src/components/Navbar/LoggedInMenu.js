import React from 'react';
import { Avatar, Box, MenuItem, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import ListItemIcon from '@mui/material/ListItemIcon'
import Logout from '@mui/icons-material/Logout';

const LoggedInMenu = ({user, logout}) => {
    const classes = useStyles();
    
    if(user?.result) return (
        <Box>
            <MenuItem component={Link} to="/auth">
                <ListItemIcon>
                    <Avatar className={classes.purple} sx={{ width: 32, height: 32 }} alt={user?.result.name} src={user?.result.imageUrl}> {user?.result.name.charAt(0)}</Avatar>
                </ListItemIcon>
                My account
            </MenuItem>
        <Divider />
            <MenuItem onClick={logout}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>
        </Box>
    );
    return (<></>)
}

export default LoggedInMenu