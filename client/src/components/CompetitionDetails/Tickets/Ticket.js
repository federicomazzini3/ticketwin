import React from 'react'
import { Grid, Box, ButtonBase } from '@mui/material'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { buyTicket } from '../../../actions/competitions';

const Ticket = ({ available, ticketNumber }) => {

    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const { id } = useParams();

    const handleBuy = () => {
        if (user) {
            const ticket = { number: ticketNumber, owner: user.result._id }
            dispatch(buyTicket(id, ticket))
        } else alert("User not logged")
    }

    const handleBuyNotAvailable = () => {
        alert("Ticket already purchased" )
    }


    if (available) return (
        <Grid item xs={3} md={1}>
            <Box onClick={() => handleBuy(ticketNumber)}
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

    if (!available) return (
        <Grid item xs={3} md={1}>
            <Box onClick={() => handleBuyNotAvailable(ticketNumber)}
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