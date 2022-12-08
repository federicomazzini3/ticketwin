import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { clearCart, readCart } from '../../actions/cart';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { useState } from 'react';
import { buyTicket } from '../../actions/competitions';
import { useHistory } from 'react-router-dom';

const steps = ['Shipping address', 'Payment details', 'Review your order'];


export default function Checkout() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { cart } = useSelector((state) => state.cart);
  const [addressData, setAddressData] = useState({ firstName: '', lastName: '', address1: '', address2: '', city: '', state: '', postal: '', country: '' });
  const [paymentData, setPaymentData] = useState({ cardName: '', cardNumber: '', expDate: '', cvv: ''});
  const [addressDataErrors, setAddressDataError] = useState({ firstName: '', lastName: '', address1: '', address2: '', city: '', state: '', postal: '', country: '' })
  const [paymentDataErrors, setPaymentDataErrors] = useState({ cardName: '', cardNumber: '', expDate: '', cvv: ''});
  const [activeStep, setActiveStep] = React.useState(0);
  useEffect(() => {
    dispatch(readCart(dispatch))
  }, [])

  const handleBuy = () => {
    setActiveStep(activeStep + 1);
    dispatch(buyTicket(cart[0].id, cart[0].tickets))
    dispatch(clearCart())
  }

  const handleNext = () => {
    if(activeStep === 0){
        if(!addressData.firstName) {setAddressDataError({...addressDataErrors, firstName: 'Insert valid First Name'}); return;}
        if(!addressData.lastName) {setAddressDataError({...addressDataErrors, lastName: 'Insert valid Last Name'}); return;}
        if(!addressData.address1) {setAddressDataError({...addressDataErrors, address1: 'Insert valid Address'}); return;}
        if(!addressData.city) {setAddressDataError({...addressDataErrors, city: 'Insert valid City'}); return;}
        if(!addressData.state) {setAddressDataError({...addressDataErrors, state: 'Insert valid State'}); return;}
        if(!addressData.postal) {setAddressDataError({...addressDataErrors, postal: 'Insert valid Postal Code'}); return;}
        if(!addressData.country) {setAddressDataError({...addressDataErrors, country: 'Insert valid Country'}); return;}
    }

    if(activeStep === 1) {
      if(!paymentData.cardName) {setPaymentDataErrors({...paymentDataErrors, cardName: 'Insert valid Card Name'}); return;}
      if(!paymentData.cardNumber) {setPaymentDataErrors({...paymentDataErrors, cardNumber: 'Insert valid Card Number'}); return;}
      if(!paymentData.expDate) {setPaymentDataErrors({...paymentDataErrors, expDate: 'Insert valid Date'}); return;}
      if(!paymentData.cvv) {setPaymentDataErrors({...paymentDataErrors, cvv: 'Insert valid CVV'}); return;}
    }

    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center">
          Checkout
        </Typography>
        { cart && cart.length > 0 && (
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper> )}
        { cart && cart.length === 0 && activeStep !== steps.length && (
          <React.Fragment>
            <Typography variant="h5" gutterBottom>
              No tickets in cart
            </Typography>
            <Button variant='text' onClick={() => history.push('/')}>Return to home</Button>
          </React.Fragment>
        )}
        { activeStep === steps.length && (
          <React.Fragment>
            <Typography variant="h5" gutterBottom>
              Thank you for your order.
            </Typography>
            <Button variant='text' onClick={() => history.push('/')}>Return to home</Button>
          </React.Fragment>
        )}
        { activeStep !== steps.length && cart && cart.length > 0 && (
          <React.Fragment>
          {(activeStep === 0) && <AddressForm addressData={addressData} setAddressData={setAddressData} addressDataErrors={addressDataErrors} setAddressDataErrors={setAddressDataError}/>}
          {(activeStep === 1) && <PaymentForm paymentData={paymentData} setPaymentData={setPaymentData} paymentDataErrors={paymentDataErrors} setPaymentDataErrors={setPaymentDataErrors}/>}
          {(activeStep === 2) && <Review addressData={addressData} paymentData={paymentData} cart={cart} />}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>
              )}

              <Button
                variant="contained"
                onClick={activeStep === steps.length - 1 ? handleBuy : handleNext}
                sx={{ mt: 3, ml: 1 }}
              >
                {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Paper>
    </Container>
  );
}