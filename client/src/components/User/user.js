import { Typography } from '@mui/material'
import React from 'react'

const User = () => {

    const user_data = JSON.parse(localStorage.getItem('profile'))

  return (
    <Typography>{user_data.result.name}</Typography>
  )
}

export default User