import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid, Toolbar, Box, Stack, Button } from "@mui/material";
import CameraIcon from '@mui/icons-material/PhotoCamera';
import { useDispatch } from "react-redux";
import Competitions from "./components/Competitions/Competitions";
import Form from "./components/Form/Form";
import { getCompetitions } from "./actions/competitions";

//mui
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
const theme = createTheme();

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompetitions());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
        <AppBar position="static" color="inherit">
          <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap> TickeWin </Typography>
          </Toolbar>
        </AppBar>
        <main>
        <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }} >
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center" >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Grow in>
          <Container>
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}> <Competitions/> </Grid>
              <Grid item xs={12} sm={4}> <Form/> </Grid>
            </Grid>
          </Container>
        </Grow>
      </main>
    </ThemeProvider>
  );
};

export default App;
