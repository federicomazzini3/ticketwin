import React from 'react'
import { Grid, Box } from '@mui/material'
import { useDispatch } from 'react-redux'
import { buyTicket } from '../../../actions/competitions'
import { useParams } from 'react-router-dom'
import Ticket from './Ticket'

const Tickets = ({ competition }) => {

    return (
        <Grid container item xs={12} spacing={3} sx={{ mt: 10 }}>
            {Array.from({ length: competition.maxTicketNumber }, (_, i) => i + 1).map((ticket) => (
                competition.tickets.find(ticketSold => ticketSold.number == ticket)
                ? <Ticket key={ticket} available={false} ticketNumber={ticket}></Ticket>
                : <Ticket key={ticket} available={true} ticketNumber={ticket}></Ticket>
            ))}
        </Grid>
    )
}

export default Tickets