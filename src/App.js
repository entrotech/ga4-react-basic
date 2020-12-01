import * as React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createUseStyles } from "react-jss";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

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
// const Container = styled.div`
//   position: relative;
//   width: 100%;
//   min-height: 100vh;
//   flex: 1 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
// `;

export const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
