import { Container } from '@mui/system'
import React from 'react'
import { Typography, Link } from '@mui/material'
import { setDarkMode, setLightMode } from '../../actions/mode'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
//onClick={e => setMode(mode === "light" ? "dark" : "light")}
const Footer = ({ mode }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <Container maxWidth="md" component="footer"
            sx={{
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                mt: 8,
                py: [3, 6],
            }}>

            <Link onClick={() => mode === "light" ? dispatch(setDarkMode(dispatch)) : dispatch(setLightMode(dispatch))} >
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
                    Switch to {mode === "light" ? "dark" : "light"} mode
                </Typography>
            </Link>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
                Switch to daltonic mode
            </Typography>
            <Link onClick={() => history.push('/addcompetition')}>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
                    [DEBUG] Add a new competition
                </Typography>
            </Link>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
                {'Copyright © '}
                TicketWin
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Container>
    )
}

export default Footer