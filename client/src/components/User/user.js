import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'

const user = () => {

    const user_data = JSON.parse(localStorage.getItem('profile'))

  return (
      <Typography>{user_data.result.address}</Typography>
  )
}

export default user