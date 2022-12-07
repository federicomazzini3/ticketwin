import React, { useEffect } from 'react'
import { Grid, Box } from '@mui/material'
import Ticket from './Ticket'
import { readCart } from '../../../actions/cart'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Tickets = ({ competition, setCart }) => {

    const dispatch = useDispatch();;
    const { cart } = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(readCart(dispatch))
    },[])

    return (
        <Grid container item xs={12} spacing={3} sx={{ mt: 10 }}>
            {Array.from({ length: competition.maxTicketNumber }, (_, i) => i + 1).map((ticket) => (
                (competition.tickets.find(ticketSold => ticketSold.number === ticket) &&
                    <Ticket key={ticket} status={'unavailable'} ticketNumber={ticket} competitionId={competition._id}></Ticket>) ||

                ((cart.some(ticketInCart => ticketInCart.id === competition._id && 
                                            ticketInCart.tickets.some(t => t.number === ticket))) && 
                    <Ticket key={ticket} status={'clicked'} ticketNumber={ticket} competitionId={competition._id}></Ticket>)  ||

                <Ticket key={ticket} status={'available'} ticketNumber={ticket} competitionId={competition._id}></Ticket>
            ))}
        </Grid>
    )
}

export default Tickets