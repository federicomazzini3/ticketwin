import React from 'react';
import { Avatar, Menu} from '@mui/material';
import useStyles from './styles';
import { IconButton } from '@mui/material';
import LoggedInMenu from './LoggedInMenu';
import LoggedOutMenu from './LoggedOutMenu';

const AvatarComponent = ({user, setUser, logout}) => {

    const classes = useStyles();


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}>

                {user?.result && (
                    <Avatar className={classes.purple} sx={{ width: 32, height: 32 }} alt={user?.result.name} src={user?.result.imageUrl}> {user?.result.name.charAt(0)}</Avatar>)}

                {!user?.result && (
                    <Avatar sx={{ width: 32, height: 32 }}></Avatar>)}
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {user?.result && (
                    <LoggedInMenu  user={user} setUser={setUser} logout={logout}></LoggedInMenu>
                )}
                {!user?.result && (
                    <LoggedOutMenu  user={user} setUser={setUser} logout={logout}></LoggedOutMenu>
                )}
            </Menu>
        </>
    )
}

export default AvatarComponent