import React from 'react'
import {Box, Typography, Stack, Button, Container } from "@mui/material"

const Home = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }} >
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
              Ticket Win
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Un prodotto esclusivo, a un prezzo esclusivo
            </Typography>
            <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center" >
              <Button variant="contained" href="/competitions">Explore the competitions</Button>
            </Stack>
          </Container>
        </Box>
  )
}

export default Home