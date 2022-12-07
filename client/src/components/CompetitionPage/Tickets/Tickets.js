import React from 'react'
import { Grid, Box } from '@mui/material'
import Ticket from './Ticket'

const Tickets = ({ competition, cart, setCart }) => {

    console.log(cart)
    return (
        <Grid container item xs={12} spacing={3} sx={{ mt: 10 }}>
            {Array.from({ length: competition.maxTicketNumber }, (_, i) => i + 1).map((ticket) => (
                (competition.tickets.find(ticketSold => ticketSold.number == ticket) &&
                    <Ticket key={ticket} status={'unavailable'} ticketNumber={ticket} cart={cart} setCart={setCart}></Ticket>) ||

                ((cart.find(ticketInCart => ticketInCart.number == ticket)) && 
                    <Ticket key={ticket} status={'clicked'} ticketNumber={ticket} cart={cart} setCart={setCart}></Ticket>)  ||

                <Ticket key={ticket} status={'available'} ticketNumber={ticket} cart={cart} setCart={setCart}></Ticket>
            ))}
        </Grid>
    )
}

export default Tickets