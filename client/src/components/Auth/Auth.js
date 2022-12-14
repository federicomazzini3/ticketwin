import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@mui/material';
import { useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { signin, signup } from '../../actions/auth';
import useStyles from './styles';
import Input from './Input';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', country:'', city: '', address: '', cap:'' };

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      if(form.password == form.confirmPassword){
        dispatch(signup(form, () => (id) ? history.push(`/competitions/${id}`) : history.push('/')));
      } else {
        alert('Le password non corrispondono')
      }
    } else {
      dispatch(signin(form, () =>  (id) ? history.push(`/competitions/${id}`) : history.push('/')));
    }
  };


  const handleChange = (e) => {setForm({ ...form, [e.target.name]: e.target.value })};



  const { authData } = useSelector((state) => state.auth);

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
            <>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
            </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
            
            { isSignup && (
            <>
              <Input name="country" label="Country" handleChange={handleChange} autoFocus half />
              <Input name="city" label="City" handleChange={handleChange} half />
              <Input name="address" label="Address" handleChange={handleChange} half />
              <Input name="cap" label="CAP" handleChange={handleChange} half />
            </>
            )}
          </Grid>

          
            


          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;