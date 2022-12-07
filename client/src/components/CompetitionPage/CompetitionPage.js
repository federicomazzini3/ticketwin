import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCompetition } from '../../actions/competitions'
import { Typography, Box, CircularProgress, Container, Grid } from '@mui/material'
import Countdown from './Countdown'
import Tickets from './Tickets/Tickets'
import Summary from './Summary'
import CompetitionDetails from './CompetitionDetails'

const CompetitionPage = () => {
  const { competition, isLoading } = useSelector((state) => state.competitions);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [cart, setCart] = useState([])

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
        <CompetitionDetails competition={competition}></CompetitionDetails>
        <Countdown deadline={competition?.deadline}></Countdown>
        <Summary cart={cart} price={competition?.ticketPrice}></Summary>
        <Tickets competition={competition} cart={cart} setCart={setCart}></Tickets>
        <Summary cart={cart} price={competition?.ticketPrice}></Summary>
      </Grid>
    </Container>
  )
}

export default CompetitionPage;