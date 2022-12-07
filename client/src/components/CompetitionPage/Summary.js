import { Button, Grid, Stack, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { readCart, removeAllExcept } from '../../actions/cart';
import {Link} from '@mui/material';
import {useHistory} from 'react-router-dom'

const Summary = ({price, id}) => {

  const dispatch = useDispatch();
  const history = useHistory();

  const { cart } = useSelector((state) => state.cart);
  const user = JSON.parse(localStorage.getItem('profile'));

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
      dispatch(readCart(dispatch))
  },[])

  const competitionTicketsOnly = () => {
    return cart.find(c => c.id === id)
  }

  const handleClick = () => {
    if(user){
      dispatch(removeAllExcept(id)) //quando click su purchase now, elimino dal carrello tutto a parte quello selezionato per questa competition
      history.push('/checkout')
    } else {
      setOpen(true);
    }
  }

  const handleClose = () => {
    setOpen(false);
  };


  if (competitionTicketsOnly() && competitionTicketsOnly().tickets.length > 0) return (
    <>
    <Grid item xs={12} sx={{ mt: 10, mb: -3, width: "100%", alignItems: 'center', justifyItems: 'center' }}>

      <Stack direction="row" spacing={2} justifyContent="center" >
        <Button variant='contained' size='large' startIcon={<ShoppingCartIcon />} component={Link} onClick={() => handleClick()} >Purchase now for {competitionTicketsOnly().tickets.length * price}€</Button>
      </Stack>
    </Grid>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        Login required
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You must be logged to buy tickets
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => history.push(`/auth/beforebuy/${id}`)} autoFocus> Login now </Button>
        </DialogActions>
      </Dialog>
    </>
  )
  else return (<></>)
}

export default Summary