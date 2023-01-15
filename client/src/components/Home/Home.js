import React from 'react'
import {Box, Typography, Stack, Button, Container, Link } from "@mui/material"
import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory();
  return (
    <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }} >
          <Container tabIndex={0} maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
              Ticket Win
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Exlusive product, exclusive price
            </Typography>
            <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center" >
              <Button variant="contained" component={Link} onClick={() => history.push('/competitions')}>Explore the competitions</Button>
            </Stack>
          </Container>
        </Box>
  )
}

export default Home