import React from 'react'
import { Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCompetition } from '../../actions/competitions';

const CountdownComponent = ({deadline, terminated, setTerminated}) => {
  const dispatch = useDispatch();
  const countDownDate = new Date(deadline);
  const [countDown, setCountDown] = useState(countDownDate - new Date());

  const [days, hours, minutes, seconds] = getReturnValues(countDown)

  useEffect(() => {
    if((terminated == false) && (days <= 0) && (hours <= 0) && (minutes <= 0) && (seconds <= 0)){
      setTerminated(true);
    }
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate, days, hours, minutes, seconds, terminated]);

  if(minutes <= 0 ){
    return (
      <Grid container item xs={12} sx={{ mt: 10, textAlign: 'center' }}>
      <Grid item xs={12}>
        <Typography variant='h1'>{(seconds) ? seconds : '0'}</Typography>
        <Typography>secondi restanti</Typography>
      </Grid>
    </Grid>
    )
  }

  /*if((countDown < 0) && (!updatedCompetition)) {
    competition.status = "terminated";
    const [ticketsUpdated, ticketsByOwners] = getWinnerTicket(competition.tickets)
    competition.tickets = ticketsUpdated;
    dispatch(updateCompetition(competition._id, competition));
    /*.then(() => {
      for (const owner in ticketsByOwners){   
      dispatch(updateUser(owner, ticketsByOwners[owner]));    
      } 
      //history.push('/')
    });*/
    /*console.log("Qui abbiamo fatto Aggiornamento della Competizione e dell'User: ", ticketsUpdated);
    setUpdatedCompetition(true)
  }*/

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
    // calcola il tempo mancante
    let days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    let hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  
    // setta i valori a 0 se sono negativi
    if (days < 0) days = 0;
    if (hours < 0) hours = 0;
    if (minutes < 0) minutes = 0;
    if (seconds < 0) seconds = 0;
  
    return [days, hours, minutes, seconds];
  };

  /*const getWinnerTicket = (tickets) => {
    let randomIndex = Math.floor(Math.random() * tickets.length);
    let winnerTicket = tickets[randomIndex];
    winnerTicket.status = "win";

    let loserTickets = tickets.filter(ticket => ticket !== winnerTicket);
    loserTickets.forEach(ticket => ticket.status = "lose");

    let updatedTickets = [winnerTicket, ...loserTickets];
    
    let ticketsByOwner = {};

    updatedTickets.forEach((ticket) => {
      if (!ticketsByOwner[ticket.owner]) {
        ticketsByOwner[ticket.owner] = [ticket];
      } else {
        ticketsByOwner[ticket.owner].push(ticket);
      }
    });

    console.log("ticketbyowner: ", ticketsByOwner);
    return [updatedTickets, ticketsByOwner];
  };*/

export default CountdownComponent