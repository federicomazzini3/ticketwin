import React from 'react'
import { Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react';

const CountdownComponent = ({deadline}) => {
  const countDownDate = new Date(deadline).getTime();

  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  const [days, hours, minutes, seconds] = getReturnValues(countDown)

  return (
    <Grid container item xs={12} sx={{ mt: 10, textAlign: 'center' }}>
          <Grid item xs={3}>
            <Typography variant='h5'>{(days) ? days : '0'}</Typography>
            <Typography>giorni</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant='h5'>{(hours) ? hours : '0'}</Typography>
            <Typography>ore</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant='h5'>{(minutes) ? minutes : '0'}</Typography>
            <Typography>minuti</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant='h5'>{(seconds) ? seconds : '0'}</Typography>
            <Typography>secondi</Typography>
          </Grid>
        </Grid>
  )
}

const getReturnValues = (countDown) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  
    return [days, hours, minutes, seconds];
  };

export default CountdownComponent