import React from 'react'
import { Typography } from '@mui/material'
import { Link} from 'react-router-dom';
import AvatarComponent from './AvatarComponent'

const DesktopMenu = ({user, setUser, logout}) => {
  return (
  <>
    <nav>
      <Typography variant="h8" color="inherit" noWrap sx={{ flexGrow: 1, m: 1, mr: 3, textDecoration: 'none' }} component={Link} to="/competitions">Competitions</Typography>
      <Typography variant="h8" color="inherit" noWrap sx={{ flexGrow: 1, m: 1, mr: 3, textDecoration: 'none' }} component={Link} to="/about">About</Typography>
    </nav>
    <AvatarComponent user={user} logout={logout}/>
  </>
  )
}

export default DesktopMenu