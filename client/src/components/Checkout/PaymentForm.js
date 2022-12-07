import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function PaymentForm({paymentData, setPaymentData}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={paymentData.cardName || ''} 
            onChange={(e) => setPaymentData({ ...paymentData, cardName: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={paymentData.cardNumber || ''} 
            onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            value={paymentData.expDate || ''} 
            onChange={(e) => setPaymentData({ ...paymentData, expDate: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={paymentData.cvv || ''} 
            onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}