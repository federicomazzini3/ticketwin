import React from 'react'
import { Grid, Box } from '@mui/material'
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../actions/cart';

const Ticket = ({ status, competition, ticketNumber }) => {

    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    const onClickAvailableTicket = () => {
        dispatch(addToCart(ticketNumber, user ? user.result._id : null, competition._id, competition.ticketPrice, competition.productName))
    }

    const onClickUnavailableTicket = () => {
        alert("Ticket already purchased" )
    }

    const onClickReservedTicket = () => {
        dispatch(removeFromCart(ticketNumber, competition._id))
    }

    
    if (status === 'available') return (
        <Grid item xs={3} sm={2} md={1}>
            <Box onClick={() => onClickAvailableTicket()} onKeyPress={event => event.key === 'Enter' && onClickAvailableTicket()}
                aria-label = {`ticket number ${ticketNumber} is available for competition: ${competition.productName}. Click to add to cart.`}
                tabIndex={0}
                sx={{
                    borderStyle: "solid",
                    textAlign: 'center',
                    backgroundColor: 'rgba(51, 170, 51, .2)',
                    '&:hover': {
                        backgroundColor: 'rgba(51, 170, 51, .9)',
                        cursor:'pointer'
                    }
                }}>{ticketNumber}</Box>
        </Grid>
    )


    if (status === 'clicked') return (
        <Grid item xs={3} sm={2} md={1}>
            <Box onClick={() => onClickReservedTicket()} onKeyPress={event => event.key === 'Enter' && onClickReservedTicket()}
                aria-label = {`ticket number ${ticketNumber} is already in the cart for competition: ${competition.productName}. Click to romevo from cart.`}
                tabIndex={0}
                sx={{
                    borderStyle: "solid",
                    textAlign: 'center',
                    backgroundColor: 'rgba(51, 170, 250, .9)',
                    '&:hover': {
                        cursor:'pointer'
                    }
                }}>{ticketNumber}</Box>
        </Grid>
    )

    if (status === 'unavailable') return (
        <Grid item xs={3} sm={2} md={1}>
            <Box onClick={() => onClickUnavailableTicket()}
                aria-label = { `ticket number ${ticketNumber} is unavailable for competition: ${competition.productName}. Ticket already sold`}
                tabIndex={0}
                sx={{
                    borderStyle: "solid",
                    textAlign: 'center',
                    backgroundColor: 'rgba(255, 0, 0, .4)',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 0, 0, .4)',
                        cursor:'not-allowed'
                    }
                }}>{ticketNumber}</Box>
        </Grid>
    )
}


export default Ticket