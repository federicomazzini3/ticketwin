import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

export default function Review({addressData, paymentData, cart}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart[0].tickets.map((ticket) => (
          <ListItem key={ticket.number} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={cart[0].productName} secondary={`Ticket #${ticket.number}`} />
            <Typography variant="body2">{`${cart[0].ticketPrice} €`}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {`${cart[0].tickets.length * cart[0].ticketPrice} €`}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}> 
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography> 
          <Typography gutterBottom>{`${addressData.firstName} ${addressData.lastName}`}</Typography>
          <Typography gutterBottom>{`${addressData.city}, ${addressData.address1}, ${addressData.zip}, ${addressData.state}, ${addressData.country}`}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment detail
          </Typography> 
          <Typography gutterBottom>{paymentData.cardName}</Typography>
          <Typography gutterBottom>{paymentData.cardNumber}</Typography>
          <Typography gutterBottom>{paymentData.expDate}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}