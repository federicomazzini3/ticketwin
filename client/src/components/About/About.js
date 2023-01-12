import React from 'react'
import { Box, Container, Typography } from '@mui/material'
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


            <Typography tabIndex={0} component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
                Developers
            </Typography>

            <Container xs={12}>
                <Typography tabIndex={0} variant="h5" align="center" color="text.secondary" paragraph>
                    Federico Mazzini
                </Typography>
                <Box sx={{textAlign:'center', mt:-2, mb:5}}>
                <IconButton aria-label={"Go to Federico's Instagram profile"} href={'https://www.instagram.com/federicomazzini/'} target='_blank'>
                    <InstagramIcon />
                </IconButton>
                <IconButton aria-label={"Go to Federico's GitHub profile"} href={'https://github.com/federicomazzini3'} target='_blank'>
                    <GitHubIcon />
                </IconButton>
                <IconButton aria-label={"Copy to clipboard Federico's email"} onClick={() => handleClick('federico.mazzini3@studio.unibo.it')}>
                    <EmailIcon />
                </IconButton>
                </Box>
            </Container>

            <Container xs={12}>
                <Typography tabIndex={0} variant="h5" align="center" color="text.secondary" paragraph>
                    Carlo Di Raddo
                </Typography>
                <Box sx={{textAlign:'center', mt:-2, mb:5}}>
                <IconButton aria-label={"Go to Carlo's Instagram profile"} href={'https://www.instagram.com/carlo.diraddo/'} target='_blank'>
                    <InstagramIcon />
                </IconButton>
                <IconButton aria-label={"Go to Carlo's GitHub profile"} href={'https://github.com/carlodiraddo'} target='_blank'>
                    <GitHubIcon />
                </IconButton>
                <IconButton aria-label={"Copy to clipboard Carlo's email"} onClick={() => handleClick('carlo.diraddo@studio.unibo.it')}>
                    <EmailIcon />
                </IconButton>
                </Box>
            </Container>

            <Container xs={12}>
                <Typography tabIndex={0} variant="h5" align="center" color="text.secondary" paragraph>
                    Michele Mongardi
                </Typography>
                <Box sx={{textAlign:'center', mt:-2, mb:5}}>
                <IconButton aria-label={"Go to Michele's Instagram profile"} href={'https://www.instagram.com/michele_mongardi/'} target='_blank'>
                    <InstagramIcon />
                </IconButton>
                <IconButton aria-label={"Go to Michele's GitHub profile"} href={'https://github.com/michelemongardi2'} target='_blank'>
                    <GitHubIcon />
                </IconButton>
                <IconButton aria-label={"Copy to clipboard Michele's email"} onClick={() => handleClick('michele.mongardi2@studio.unibo.it')}>
                    <EmailIcon />
                </IconButton>
                </Box>
            </Container>
            <Snackbar
                message="Email copied!"
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={2000}
                onClose={() => setOpen(false)}
                open={open} 
                />
        </Box>
    )
}

export default About