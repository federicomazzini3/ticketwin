import { Container } from '@mui/system'
import React from 'react'
import { Typography, IconButton, Grid } from '@mui/material'
import { setDarkMode, setLightMode } from '../../actions/mode'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ColorLensIcon from '@mui/icons-material/ColorLens';

const Footer = ({ mode }) => {
    const dispatch = useDispatch();
    const location = useLocation();

    if (location.pathname !== '/')
        return (
            <Container maxWidth="md" component="footer"
                sx={{
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    mt: 8,
                    py: [3, 6],
                }}>

                <Grid container direction="row" justifyContent="space-between" alignItems="center">

                    <Grid item xs={4}> </Grid>

                    <Grid tabIndex={0} aria-label={"Copyright TicketWin"} item xs={4}>
                        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
                            {'Copyright © '}
                            TicketWin
                            {new Date().getFullYear()}
                            {'.'}
                        </Typography>
                    </Grid>

                    <Grid item xs={4} textAlign={'right'}>
                        <IconButton aria-label={"Change Theme"} onClick={() => mode === "light" ? dispatch(setDarkMode(dispatch)) : dispatch(setLightMode(dispatch))}>
                            {mode === "light" ? <DarkModeIcon></DarkModeIcon> : <LightModeIcon></LightModeIcon>}
                        </IconButton>
                    </Grid>

                </Grid>
            </Container>
        )
    else return (<></>)
}

export default Footer