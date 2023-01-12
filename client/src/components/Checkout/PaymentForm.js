import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function PaymentForm({paymentData, setPaymentData, paymentDataErrors, setPaymentDataErrors}) {
  return (
    <React.Fragment>
      <Typography tabIndex={0} aria-label={"Payment Method"} variant="h6" gutterBottom>
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
            onChange={(e) => {setPaymentData({ ...paymentData, cardName: e.target.value }); setPaymentDataErrors({ ...paymentDataErrors, cardName: '' })}}
            error={!paymentDataErrors.cardName ? false : true}
            helperText={paymentDataErrors.cardName}
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
            onChange={(e) => {setPaymentData({ ...paymentData, cardNumber: e.target.value }); setPaymentDataErrors({ ...paymentDataErrors, cardNumber: '' })}}
            error={!paymentDataErrors.cardNumber ? false : true}
            helperText={paymentDataErrors.cardNumber}
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
            onChange={(e) => {setPaymentData({ ...paymentData, expDate: e.target.value }); setPaymentDataErrors({ ...paymentDataErrors, expDate: '' })}}
            error={!paymentDataErrors.expDate ? false : true}
            helperText={paymentDataErrors.expDate}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={paymentData.cvv || ''} 
            onChange={(e) => {setPaymentData({ ...paymentData, cvv: e.target.value }); setPaymentDataErrors({ ...paymentDataErrors, cvv: '' })}}
            error={!paymentDataErrors.cvv ? false : true}
            helperText={paymentDataErrors.cvv}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}