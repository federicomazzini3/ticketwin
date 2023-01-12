import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function AddressForm({addressData, setAddressData, addressDataErrors, setAddressDataErrors}) {

  return (
    <React.Fragment>
      <Typography tabIndex={0} aria-label={"Shipping Address: please, fill all fields"} variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={addressData.firstName || ''} 
            onChange={(e) => {setAddressData({ ...addressData, firstName: e.target.value }); setAddressDataErrors({ ...addressDataErrors, firstName: '' })}}
            error={!addressDataErrors.firstName ? false : true}
            helperText={addressDataErrors.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={addressData.lastName || ''} 
            onChange={(e) => {setAddressData({ ...addressData, lastName: e.target.value }); setAddressDataErrors({ ...addressDataErrors, lastName: '' })}}
            error={!addressDataErrors.lastName ? false : true}
            helperText={addressDataErrors.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={addressData.address1 || ''} 
            onChange={(e) => {setAddressData({ ...addressData, address1: e.target.value }); setAddressDataErrors({ ...addressDataErrors, address1: '' })}}
            error={!addressDataErrors.address1 ? false : true}
            helperText={addressDataErrors.address1}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value={addressData.address2 || ''} 
            onChange={(e) => setAddressData({ ...addressData, address2: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={addressData.city || ''} 
            onChange={(e) => {setAddressData({ ...addressData, city: e.target.value }); setAddressDataErrors({ ...addressDataErrors, city: '' })}}
            error={!addressDataErrors.city ? false : true}
            helperText={addressDataErrors.city}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            value={addressData.state || ''} 
            onChange={(e) => {setAddressData({ ...addressData, state: e.target.value }); setAddressDataErrors({ ...addressDataErrors, state: '' })}}
            error={!addressDataErrors.state ? false : true}
            helperText={addressDataErrors.state}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="postal"
            name="postal"
            label="Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={addressData.postal || ''} 
            onChange={(e) => {setAddressData({ ...addressData, postal: e.target.value }); setAddressDataErrors({ ...addressDataErrors, postal: '' })}}
            error={!addressDataErrors.postal ? false : true}
            helperText={addressDataErrors.postal}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            value={addressData.country || ''} 
            onChange={(e) => {setAddressData({ ...addressData, country: e.target.value }); setAddressDataErrors({ ...addressDataErrors, country: '' })}}
            error={!addressDataErrors.country ? false : true}
            helperText={addressDataErrors.country}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}