import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCompetition } from '../../actions/competitions'
import { Typography, Box, CircularProgress, Container, Grid } from '@mui/material'
import Countdown from './Countdown'
import Tickets from './Tickets/Tickets'
import Summary from './Summary'

const CompetitionDetails = () => {
  const { competition, isLoading } = useSelector((state) => state.competitions);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCompetition(id))
  }, [id]);

  if (isLoading) return (
    <CircularProgress />
  )

  if (!competition) return (
    <Typography variant='h3'> Competition not found </Typography>
  )

  return (
    <Container sx={{ mt: 10, height: '100%', display: 'flex', flexDirection: 'column', py: 8, p: 10 }} maxWidth="md">
      <Grid container>
        <Grid item xs={12} sm={4} component='img' src={competition.image || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
        <Grid item xs={12} sm={8} sx={{ p: 5 }}>
          <Typography variant='h2'>{competition.productName}</Typography>
          <Typography variant='h3'>{competition.productBrand}</Typography>
          <Typography variant='h5' sx={{ textDecoration: 'line-through' }} >{competition.productPrice}€</Typography>
          <Typography variant='h5'>{competition.ticketPrice}€</Typography>
          <Typography variant='h5'>{competition.maxTicketNumber} ticket rimasti</Typography>
        </Grid>
        <Countdown deadline={competition?.deadline}></Countdown>
        <Summary></Summary>
        <Tickets competition={competition}></Tickets>
        <Summary></Summary>
      </Grid>
    </Container>
  )
}

export default CompetitionDetails