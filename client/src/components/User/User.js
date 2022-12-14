import { Grid, Typography, Box } from '@mui/material'
import React from 'react'
import {useMediaQuery} from '@mui/material';
import {useTheme} from '@mui/material';

const User = () => {

    const user_data = JSON.parse(localStorage.getItem('profile'))
    const theme = useTheme();
    const isMatchMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const responsiveAlign = () => {
      if(isMatchMobile === true) return 'center' 
      else return 'left'
  }

  return (
    <Grid container>
      <Grid item xs={12} sm={8} sx={{ p: 5 }}>
      <Typography variant='h5' textAlign={responsiveAlign()}>Name:</Typography>
        <Typography variant='h6' textAlign={responsiveAlign()}>{user_data.result.name}</Typography>
      </Grid>

      <Grid item xs={12} sm={8} sx={{ p: 5 }}>
      <Typography variant='h5' textAlign={responsiveAlign()}>Password:</Typography>
        <Typography variant='h6' textAlign={responsiveAlign()}>*********************</Typography>
      </Grid>

      <Grid item xs={12} sm={8} sx={{ p: 5 }}>
      <Typography variant='h5' textAlign={responsiveAlign()}>E-mail:</Typography>
        <Typography variant='h6' textAlign={responsiveAlign()}>{user_data.result.email}</Typography>
      </Grid>

      <Grid item xs={12} sm={8} sx={{ p: 5 }}>
      <Typography variant='h5' textAlign={responsiveAlign()}>Address:</Typography>
        <Typography variant='h6' textAlign={responsiveAlign()}>{user_data.result.address}</Typography>
      </Grid>

      {user_data.result.tickets.map(ticket => (
        <Grid item xs={12} sx={{ p: 5 }} key={ticket}>
          <Typography variant='h6' textAlign={responsiveAlign()}>{ticket.number}</Typography>
        </Grid>
      ))}
    </Grid>
  )
}

export default User