import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import DebugCompetitionForm from "./components/DebugCompetitionForm/DebugCompetitionForm";
import Auth from "./components/Auth/Auth";

const theme = createTheme();

const App = () => {

  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/competitions" exact component={DebugCompetitionForm}/>
          <Route path="/auth" exact component={Auth}/>
        </Switch>
    </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
