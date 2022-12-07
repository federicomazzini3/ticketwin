import React from 'react'
import { Grid, Box, ButtonBase } from '@mui/material'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { buyTicket } from '../../../actions/competitions';

const Ticket = ({ status, ticketNumber, cart, setCart }) => {

    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const { id } = useParams();

    const addToCart = () => {
        if (user) {
            const ticket = { number: ticketNumber, owner: user.result._id }
            //dispatch(buyTicket(id, ticket))
            setCart([...cart, ticket])
            console.log(cart)
        } else alert("User not logged")
    }


    const removeFromCart = () => {
        if (user) {
            const ticket = { number: ticketNumber, owner: user.result._id }
            //dispatch(buyTicket(id, ticket))
            setCart(cart.filter((t) => t.number != ticket.number))
            console.log(cart)
        } else alert("User not logged")
    }

    const handleBuyNotAvailable = () => {
        alert("Ticket already purchased" )
    }

    
    if (status == 'available') return (
        <Grid item xs={3} md={1}>
            <Box onClick={() => addToCart()}
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
            <Box onClick={() => removeFromCart()}
                sx={{
                    borderStyle: "solid",
                    textAlign: 'center',
                    backgroundColor: 'rgba(51, 170, 250, .9)',
                    '&:hover': {
                        backgroundColor: 'rgba(51, 170, 250, .2)',
                        cursor:'pointer'
                    }
                }}>{ticketNumber}</Box>
        </Grid>
    )

    if (status == 'unavailable') return (
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