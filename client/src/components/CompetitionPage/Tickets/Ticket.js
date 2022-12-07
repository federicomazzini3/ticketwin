import React from 'react'
import { Grid, Box, ButtonBase } from '@mui/material'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart, readCart, removeFromCart } from '../../../actions/cart';

const Ticket = ({ status, ticketNumber, competition }) => {

    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const { id } = useParams();

    const onClickAvailableTicket = () => {
        dispatch(addToCart(ticketNumber, user ? user.result._id : null, competition._id, competition.ticketPrice, competition.productName))
    }

    const onClickUnavailableTicket = () => {
        alert("Ticket already purchased" )
    }

    const onClickReservedTicket = () => {
        dispatch(removeFromCart(ticketNumber, competition._id))
    }

    
    if (status == 'available') return (
        <Grid item xs={3} md={1}>
            <Box onClick={() => onClickAvailableTicket()}
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


    if (status == 'clicked') return (
        <Grid item xs={3} md={1}>
            <Box onClick={() => onClickReservedTicket()}
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

    if (status == 'unavailable') return (
        <Grid item xs={3} md={1}>
            <Box onClick={() => onClickUnavailableTicket()}
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