import { Grid, Typography, Box, ButtonBase } from '@mui/material'
import React from 'react'
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { getUser } from '../../actions/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { borderColor } from '@mui/system';
import { useHistory } from 'react-router-dom';

const User = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user_data = JSON.parse(localStorage.getItem('profile'))
  const { authData } = useSelector((state) => state.auth);
  const theme = useTheme();
  const isMatchMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const responsiveAlign = () => {
    if (isMatchMobile === true) return 'center'
    else return 'left'
  }

  const borderColor = (status) => {
    console.log(status)
    switch (status) {
      case 'win':
        return 'rgb(60, 179, 113)'
      case 'pending':
        return 'rgb(255, 165, 0)'
      case 'lose':
        return 'rgb(120, 120, 120)'
      default:
        return 'rgb(120, 120, 120)'
    }
  }

  const backgroundColor = (status) => {
    console.log(status)
    switch (status) {
      case 'win':
        return 'rgba(60, 179, 113, .3)'
      case 'pending':
        return 'rgba(255, 165, 0, .3)'
      case 'lose':
        return 'rgba(120, 120, 120, .3)'
      default:
        return 'rgba(120, 120, 120, .3)'
    }
  }

  useEffect(() => {
    dispatch(getUser(user_data?.result._id))
  }, []);

  return (
    <Grid container sx={{ p: 10 }}>

      <Grid item xs={12} sm={8} sx={{mb:3}}>
          <Typography variant='h3' textAlign={responsiveAlign()}>Il mio account</Typography>
        </Grid>

      <Grid item xs={12} sm={8} sx={{ml:1}}>
        <Typography variant='h5' textAlign={responsiveAlign()}>Name</Typography>
        <Typography textAlign={responsiveAlign()}>{user_data.result.name}</Typography>
      </Grid>

      <Grid item xs={12} sm={8} sx={{ pt: 5, ml:1 }}>
        <Typography variant='h5' textAlign={responsiveAlign()}>Password</Typography>
        <Typography textAlign={responsiveAlign()}>*********************</Typography>
      </Grid>

      <Grid item xs={12} sm={8} sx={{ pt: 5, ml:1  }}>
        <Typography variant='h5' textAlign={responsiveAlign()}>E-mail</Typography>
        <Typography textAlign={responsiveAlign()}>{user_data.result.email}</Typography>
      </Grid>

      <Grid item xs={12} sm={8} sx={{ pt: 5, ml:1  }}>
        <Typography variant='h5' textAlign={responsiveAlign()}>Address</Typography>
        <Typography textAlign={responsiveAlign()}>{user_data.result.address}</Typography>
      </Grid>

      {(authData?.result?.tickets?.length > 0) && (
        <Grid item xs={12} sm={8} sx={{ pt: 5, pb: 3 }}>
          <Typography variant='h3' textAlign={responsiveAlign()}>I miei ticket</Typography>
        </Grid>
      )}

      {authData?.result.tickets.map(ticket => (
        <Grid item xs={12} key={ticket._id}
          sx={{
            borderStyle: 'solid', mb: 10, p: 3, borderColor: borderColor(ticket.status), borderWidth: 6, borderRadius: 3,
            '&:hover': {
              backgroundColor: backgroundColor(ticket.status),
              cursor: 'pointer'
            }
          }}
          onClick={() => history.push(`/competitions/${ticket.competition}`)}>
          <Grid container item xs={12} direction='row' justifyContent='space-between' alignItems='center'>
            <Grid item xs={6}>
              <Typography variant='h5'>{ticket.productName}</Typography>
              <Typography>{ticket.productBrand}</Typography>
            </Grid>
            <Grid item xs={2} textAlign='right'>
              <Typography variant='h4'>#{ticket.number}</Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}

export default User