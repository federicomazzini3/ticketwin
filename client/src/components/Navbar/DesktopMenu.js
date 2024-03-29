import React from 'react'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import AvatarComponent from './AvatarComponent'

const DesktopMenu = ({ user, setUser, logout }) => {
  return (
    <>
      <nav>
        <Typography aria-label={"Competitions: retrive the ongoing competitions"} variant="h8" color="inherit" noWrap sx={{ flexGrow: 1, m: 1, mr: 3, textDecoration: 'none' }} component={Link} to="/competitions">Competitions</Typography>
        <Typography aria-label={"About: meet the developers informations"} variant="h8" color="inherit" noWrap sx={{ flexGrow: 1, m: 1, mr: 3, textDecoration: 'none' }} component={Link} to="/about">About</Typography>
        {(user?.result.name === 'admin') && (
          <Typography variant="h8" color="inherit" noWrap sx={{ flexGrow: 1, m: 1, mr: 3, textDecoration: 'none' }} component={Link} to="/addcompetition">New competition</Typography>
        )}
      </nav>
      <AvatarComponent user={user} logout={logout} />
    </>
  )
}

export default DesktopMenu