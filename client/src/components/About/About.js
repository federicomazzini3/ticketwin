import React from 'react'
import { Box, ButtonBase, Container, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

import { useState } from "react";
import { IconButton, Snackbar } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';

const About = () => {

    const [open, setOpen] = useState(false);

    const handleClick = (message) => {
        setOpen(true);
        navigator.clipboard.writeText(message);
    };

    return (
        <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }} >


            <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
                Developers
            </Typography>

            <Container xs={12}>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    Federico Mazzini
                </Typography>
                <Box sx={{textAlign:'center', mt:-2, mb:5}}>
                <IconButton href={'https://www.instagram.com/federicomazzini/'} target='_blank'>
                    <InstagramIcon />
                </IconButton>
                <IconButton href={'https://github.com/federicomazzini3'} target='_blank'>
                    <GitHubIcon />
                </IconButton>
                <IconButton onClick={() => handleClick('federico.mazzini3@studio.unibo.it')}>
                    <EmailIcon />
                </IconButton>
                </Box>
            </Container>

            <Container xs={12}>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    Carlo Di Raddo
                </Typography>
                <Box sx={{textAlign:'center', mt:-2, mb:5}}>
                <IconButton href={'https://www.instagram.com/carlo.diraddo/'} target='_blank'>
                    <InstagramIcon />
                </IconButton>
                <IconButton href={'https://github.com/carlodiraddo'} target='_blank'>
                    <GitHubIcon />
                </IconButton>
                <IconButton onClick={() => handleClick('carlo.diraddo@studio.unibo.it')}>
                    <EmailIcon />
                </IconButton>
                </Box>
            </Container>

            <Container xs={12}>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    Michele Mongardi
                </Typography>
                <Box sx={{textAlign:'center', mt:-2, mb:5}}>
                <IconButton href={'https://www.instagram.com/michele_mongardi/'} target='_blank'>
                    <InstagramIcon />
                </IconButton>
                <IconButton href={'https://github.com/michelemongardi2'} target='_blank'>
                    <GitHubIcon />
                </IconButton>
                <IconButton onClick={() => handleClick('michele.mongardi2@studio.unibo.it')}>
                    <EmailIcon />
                </IconButton>
                </Box>
            </Container>
            <Snackbar
                message="Email copied!"
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={2000}
                onClose={() => setOpen(false)}
                open={open} />
        </Box>
    )
}

export default About