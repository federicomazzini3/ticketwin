import { Container } from '@mui/system'
import React from 'react'
import { Typography, Link } from '@mui/material'

const Footer = ({ mode, setMode }) => {
    return (
        <Container maxWidth="md" component="footer"
            sx={{
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                mt: 8,
                py: [3, 6],
            }}>
                
            <Link onClick={e => setMode(mode === "light" ? "dark" : "light")}>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
                    Switch to dark mode
                </Typography>
            </Link>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
                Switch to daltonic mode
            </Typography>
            <Link href='/addcompetition'>
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