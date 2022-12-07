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

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step, addressData, setAddressData, paymentData, setPaymentData, cart) {
  switch (step) {
    case 0:
      return <AddressForm addressData={addressData} setAddressData={setAddressData}/>;
    case 1:
      return <PaymentForm paymentData={paymentData} setPaymentData={setPaymentData}/>;
    case 2:
      return <Review addressData={addressData} paymentData={paymentData} cart={cart} />;
    default:
      throw new Error('Unknown step');
  }
}


export default function Checkout() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const [addressData, setAddressData] = useState({ firstName: '', lastName: '', address1: '', address2: '', city: '', state: '', postal: '', country: '' });
  const [paymentData, setPaymentData] = useState({ cardName: '', cardNumber: '', expDate: '', cvv: ''});
  
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
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography variant="h5" gutterBottom>
              Thank you for your order.
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {getStepContent(activeStep, addressData, setAddressData, paymentData, setPaymentData, cart)}
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