import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCompetition } from '../../actions/competitions'
import { Typography, CircularProgress, Container, Grid, Stack, Button } from '@mui/material'
import Countdown from './Countdown'
import Tickets from './Tickets/Tickets'
import Summary from './Summary'
import CompetitionDetails from './CompetitionDetails'
import Progress from './Progress'
import moment from 'moment'
import { useHistory } from 'react-router-dom';


const CompetitionPage = () => {
  const { competition, isLoading } = useSelector((state) => state.competitions);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [cart, setCart] = useState([]);
  const [terminated, setTerminated] = useState(false);
  const history = useHistory();

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
    <Container sx={{ mt: 10, height: '100%', display: 'flex', flexDirection: 'column', py: 8, p: 3 }} maxWidth="md">
      <Grid container>
        <CompetitionDetails competition={competition}></CompetitionDetails>
        {((competition.status == 'ongoing') && (terminated == false)) && ( // mostra i Tickets solo se il countdown non è finito -> todo: modificare con terminated
        <>
            <Countdown deadline={competition?.deadline} competition={competition} terminated = {terminated} setTerminated = {setTerminated}></Countdown>
            <Progress maxTicketNumber={competition.maxTicketNumber} ticketSoldNumber={competition.tickets.length}></Progress>
            <Summary price={competition?.ticketPrice} id={competition._id}></Summary>
            <Tickets competition={competition} cart={cart} setCart={setCart}></Tickets>
            <Summary price={competition?.ticketPrice} id={competition._id}></Summary>
        </>
        )}
        {(competition.status == 'terminated') && (
          <> 
           <Grid container item xs={12} sx={{ mt: 10, textAlign: 'center' }}>
            <Grid item xs={12}>
               <Typography  variant='h3'>La competizione è terminata.</Typography>
               {(competition.tickets.find(tw => tw.status === "win")?.number) && (
                <Typography  variant='h3'>Il ticket vincente è il: {competition.tickets.find(tw => tw.status === "win")?.number}</Typography>
               )}
            </Grid>
          </Grid>
          </>
        )}
        {((competition.status == 'ongoing') && (terminated == true)) && (
          <> 
          <Grid container item xs={12} sx={{ mt: 10, textAlign: 'center' }}>
            <Grid item xs={12}>
              <Typography variant='h3'>La competizione è terminata.</Typography>
            </Grid>
            <Grid item xs={12} sx={{ mt: 10, mb: -3, width: "100%", alignItems: 'center', justifyItems: 'center' }}>
              <Stack direction="row" spacing={2} justifyContent="center" >
                <Button variant='contained' size='large' onClick={() => history.push(`/competitions/${competition._id}`)} >
                  Visualizza il Vincitore
                </Button>
              </Stack>
            </Grid>
          </Grid>
          </>
        )}
      </Grid>
    </Container>
  )
}

export default CompetitionPage;

//Se non funziona: <Button variant='contained' size='large' onClick={() => window.location.reload(false)} >