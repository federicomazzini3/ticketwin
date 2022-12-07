import { Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { readCart } from '../../actions/cart';

const Summary = ({price, id}) => {

  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
      dispatch(readCart(dispatch))
  },[])

  const competitionTicketsOnly = () => {
    return cart.find(c => c.id === id)
  }

  if (competitionTicketsOnly() && competitionTicketsOnly().tickets.length > 0) return (
    <Grid item xs={12} sx={{ mt: 10, mb: -3, width: "100%", alignItems: 'center', justifyItems: 'center' }}>

      <Stack direction="row" spacing={2} justifyContent="center" >
        <Button variant='contained' size='large' startIcon={<ShoppingCartIcon />}>Purchase now for {competitionTicketsOnly().tickets.length * price}€</Button>
      </Stack>
    </Grid>
  )
  else return (<></>)
}

export default Summary