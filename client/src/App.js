import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { Box, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import User from "./components/User/User";
import { useSelector } from "react-redux";
import CompetitionsPage from "./components/Competitions/CompetitionsPage";
import CompetitionPage from "./components/CompetitionPage/CompetitionPage"
import Checkout from "./components/Checkout/Checkout";

const App = () => {

  const user_data = () => JSON.parse(localStorage.getItem('profile'))
  const cart = () => JSON.parse(localStorage.getItem('cart'))
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
              <Route path="/competitions/:id"  component={CompetitionPage} />
              <Route path="/auth" exact component={() => !user_data() ? <Auth beforebuy={true}/> : <Redirect to='/user'/>} />
              <Route path="/auth/beforebuy/:id" exact component={() => !user_data() ? <Auth beforebuy={true}/> : <Redirect to='/user'/>} />
              <Route path="/user" exact component={User} />
              <Route path="/checkout" exact component={() => (user_data() && cart()) ? <Checkout/> : <Redirect to='/'/>} />
            </Switch>
            <Footer mode={mode}/>
          </Box>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
