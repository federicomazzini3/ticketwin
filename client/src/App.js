import React from "react";
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Box, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import DetailsCompetition from "./components/DetailsCompetition/DetailsCompetition"
import Footer from "./components/Footer/Footer";
import Competitions from "./components/Competitions/Competitions";
import Form from "./components/Form/Form";

const App = () => {

  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <BrowserRouter>
          <Box bgcolor={"background.default"} color={"text.primary"}>
            <Navbar/>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/competitions" exact component={Competitions} />
              <Route path="/addcompetition" exact component={Form} />
              <Route path="/competitions/:id"  component={DetailsCompetition} />
              <Route path="/auth" exact component={Auth} />
            </Switch>
            <Footer mode={mode} setMode={setMode}/>
          </Box>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
