import { Grid, Typography, Box, ButtonBase, Button, ButtonGroup, TextField, InputAdornment, IconButton } from '@mui/material'
import React from 'react'
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { getUser, updateUser } from '../../actions/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { borderColor } from '@mui/system';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Visibility as VisibilityIcon, VisibilityOff as VisibilityOffIcon } from '@mui/icons-material';

const User = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user_data = JSON.parse(localStorage.getItem('profile'))
  const { authData } = useSelector((state) => state.auth);
  const theme = useTheme();
  const isMatchMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [isEditing, setIsEditing] = useState(false);
  const [buttonText, setButtonText] = useState("Modifica Dati Utente"); 
  const [userData, setUserData] = useState({ name: user_data.result.name, email: user_data.result.email, password: '', address: user_data.result.address });
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const responsiveAlign = () => {
    if (isMatchMobile === true) return 'center'
    else return 'left'
  }

  const borderColor = (status) => {
    console.log(status)
    switch (status) {
      case 'win':
        return 'rgb(60, 179, 113)'
      case 'pending':
        return 'rgb(255, 165, 0)'
      case 'lose':
        return 'rgb(120, 120, 120)'
      default:
        return 'rgb(120, 120, 120)'
    }
  }

  const backgroundColor = (status) => {
    console.log(status)
    switch (status) {
      case 'win':
        return 'rgba(60, 179, 113, .3)'
      case 'pending':
        return 'rgba(255, 165, 0, .3)'
      case 'lose':
        return 'rgba(120, 120, 120, .3)'
      default:
        return 'rgba(120, 120, 120, .3)'
    }
  }

  useEffect(() => {
    dispatch(getUser(user_data?.result._id))
  }, []);
  

  const handleClick = () => {
    setIsEditing(!isEditing); // Inverti lo stato di isEditing
    setButtonText(isEditing ? "Modifica Dati Utente" : "Salva Modifiche"); // Aggiorna il testo del Button in base allo stato di isEditing
  }

  const clear = () => {
    setUserData({...userData, password: ''})
  }

  // Aggiungi la funzione per gestire il submit del form
  const handleSubmit = (e) => {
    e.preventDefault();
    // controlla se ci sono errori nei campi
    if((userData.name) && (userData.password) && (userData.address)){
      dispatch(updateUser(user_data?.result._id, userData)).then(() => {dispatch(getUser(user_data?.result._id))});
      setIsEditing(!isEditing); // Inverti lo stato di isEditing
      setButtonText(isEditing ? "Modifica Dati Utente" : "Salva Modifiche"); // Aggiorna il testo del Button in base allo stato di isEditing
      clear()
      }
    else{
        alert('Tutti i campi devono essere compilati')
    }
  }

return (
    <Grid container sx={{ p: 10 }}>

      <Grid item xs={12} sm={8} sx={{mb:3}}>
        <Typography variant='h3' textAlign={responsiveAlign()}>Il mio account</Typography>
      </Grid>

      <Grid item xs={12} sm={8} sx={{ml:1}}>
        <Typography variant='h5' textAlign={responsiveAlign()}>Name</Typography>
        {isEditing ? (
          // Mostra un input per modificare il testo quando isEditing è vero
          <TextField sx={{ mt: 1 }} name="name" variant="outlined" label="Name" fullWidth value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
        ) : (
          // Altrimenti, mostra solo il testo
          <Typography textAlign={responsiveAlign()}>{user_data.result.name}</Typography>
        )}
      </Grid>

      <Grid item xs={12} sm={8} sx={{ pt: 5, ml: 1 }}>
        <Typography variant="h5" textAlign={responsiveAlign()}>Password</Typography>
        {isEditing ? (
          // Mostra un input per modificare il testo quando isEditing è vero
          <TextField 
            sx={{ mt: 1 }} 
            type={showPassword ? 'text' : 'password'} 
            name="password" 
            variant="outlined" 
            label="Password" 
            fullWidth 
            value={userData.password} 
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword}>
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        ) : (
          // Altrimenti, mostra solo il testo
          <Typography textAlign={responsiveAlign()}>*********************</Typography>
        )}
      </Grid>

      <Grid item xs={12} sm={8} sx={{ pt: 5, ml:1  }}>
          <Typography variant='h5' textAlign={responsiveAlign()}>E-mail</Typography>
          <Typography textAlign={responsiveAlign()}>{user_data.result.email}</Typography>
          <div style={{height: '16px'}} />
      </Grid>

      <Grid item xs={12} sm={8} sx={{ pt: 5, ml: 1 }}>
        <Typography variant="h5" textAlign={responsiveAlign()}>Address</Typography>
        {isEditing ? (
          // Mostra un input per modificare il testo quando isEditing è vero
          <TextField sx={{ mt: 1 }} name="address" variant="outlined" label="Address" fullWidth value={userData.address} onChange={(e) => setUserData({ ...userData, address: e.target.value })} />
        ) : (
          // Altrimenti, mostra solo il testo
          <Typography textAlign={responsiveAlign()}>{user_data.result.address}</Typography>
        )}
      </Grid>

      <Grid item xs={12} sm={8} sx={{ pt: 5, ml:1  }}>
      {buttonText === "Modifica Dati Utente" ? (
        <Button variant="contained" color="primary" onClick={handleClick}>{buttonText}</Button>
      ) : (
        <ButtonGroup>
          <Button variant="contained" color="primary" onClick={handleSubmit}>{buttonText}</Button>
          {isEditing && <Button variant="contained" color="error" onClick={handleClick}>Annulla</Button>}
        </ButtonGroup>
      )}
      </Grid>

      {(authData?.result?.tickets?.length > 0) && (
        <Grid item xs={12} sm={8} sx={{ pt: 5, pb: 3 }}>
          <Typography variant='h3' textAlign={responsiveAlign()}>I miei ticket</Typography>
        </Grid>
      )}

      {authData?.result.tickets.map(ticket => (
        <Grid item xs={12} key={ticket._id}
          sx={{
            borderStyle: 'solid', mb: 10, p: 3, borderColor: borderColor(ticket.status), borderWidth: 6, borderRadius: 3,
            '&:hover': {
              backgroundColor: backgroundColor(ticket.status),
              cursor: 'pointer'
            }
          }}
          onClick={() => history.push(`/competitions/${ticket.competition}`)}>
          <Grid container item xs={12} direction='row' justifyContent='space-between' alignItems='center'>
            <Grid item xs={6}>
              <Typography variant='h5'>{ticket.productName}</Typography>
              <Typography>{ticket.productBrand}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant='h5'>{ticket.status}</Typography>
            </Grid>
            <Grid item xs={2} textAlign='right'>
              <Typography variant='h4'>#{ticket.number}</Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}

export default User