import React from 'react';
import { Box, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import ListItemIcon from '@mui/material/ListItemIcon'
import Login from '@mui/icons-material/Login';
import { useHistory } from 'react-router-dom'; 

const LoggedOutMenu = ({user}) => {
    const history = useHistory();

    if(!user?.result) return (
        <Box tabIndex={0} onKeyPress={event => {if (event.key === 'Enter') {history.push('/auth');}}}>
            <MenuItem component={Link} to="/auth">
                <ListItemIcon>
                    <Login fontSize="small" />
                </ListItemIcon>
                Login
            </MenuItem>
        </Box>
    );
    return (<></>)
}

export default LoggedOutMenu