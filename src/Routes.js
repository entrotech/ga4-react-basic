import * as React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { createUseStyles } from "react-jss";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import useGoogleAnalytics from "./hooks/useGoogleAnalytics";

const useStyles = createUseStyles({
  container: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    flex: "1 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const Routes = () => {
  const classes = useStyles();
  useGoogleAnalytics();

  return (
    <div className={classes.container}>
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default Routes;
