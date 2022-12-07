import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { buyTicket, getCompetition } from '../../actions/competitions'
import { Typography, Box, CircularProgress, Container, Grid } from '@mui/material'
import useCountdown from './countDown'

const CompetitionDetails = () => {
  const { competition, competitions, isLoading } = useSelector((state) => state.competitions);
  const user = JSON.parse(localStorage.getItem('profile'))
  const [days, hours, minutes, seconds] = useCountdown(competition?.deadline);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCompetition(id))
  }, [id]);

  const onBuy = (ticketNumber) => {
    if(user){
      const ticket = {number:ticketNumber, owner: user.result._id}
      dispatch(buyTicket(id, ticket))
    } else alert("User not logged")
  }

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
        <Grid container item xs={12} sx={{ mt: 10, textAlign: 'center' }}>
          <Grid item xs={3}>
            <Typography variant='h5'>{(days) ? days : ''}</Typography>
            <Typography>giorni</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant='h5'>{(hours) ? hours : ''}</Typography>
            <Typography>ore</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant='h5'>{(minutes) ? minutes : ''}</Typography>
            <Typography>minuti</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant='h5'>{(seconds) ? seconds : ''}</Typography>
            <Typography>secondi</Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3} sx={{ mt: 10 }}>
          {Array.from({ length: competition.maxTicketNumber }, (_, i) => i + 1).map((ticket) => (
            competition.tickets.find(ticketSold => ticketSold.number == ticket)
              ? <Grid item key={ticket} xs={3} md={1}>
                <Box onClick={() => onBuy(ticket)}
                sx={{
                  borderStyle: "solid",
                  textAlign: 'center',
                  backgroundColor: 'rgba(255, 0, 0, .4)'
                }}>{ticket}</Box>
              </Grid>
              : <Grid item key={ticket} xs={3} md={1}>
                <Box onClick={() => onBuy(ticket)}
                sx={{
                  borderStyle: "solid",
                  textAlign: 'center',
                  backgroundColor: 'rgba(51, 170, 51, .2)',
                  '&:hover': {
                    backgroundColor: 'rgba(51, 170, 51, .9)',
                  }
                }}>{ticket}</Box>
              </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}

export default CompetitionDetails