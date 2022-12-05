import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { Box, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import { useSelector } from "react-redux";
import CompetitionsPage from "./components/Competitions/CompetitionsPage";
import CompetitionDetails from "./components/CompetitionDetails/CompetitionDetails";

const App = () => {

  const user = () => JSON.parse(localStorage.getItem('profile'))
  const {mode} = useSelector((state) => state.mode); //from reducers

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
              <Route path="/competitions" exact component={CompetitionsPage} />
              <Route path="/competitions/search" exact component={CompetitionsPage} />
              <Route path="/addcompetition" exact component={Form} />
              <Route path="/competitions/:id"  component={CompetitionDetails} />
              <Route path="/auth" exact component={() => !user() ? <Auth/> : <Redirect to='/user'/>} />
            </Switch>
            <Footer mode={mode}/>
          </Box>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
