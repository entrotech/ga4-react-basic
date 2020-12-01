import React from "react";
import { NavLink } from "react-router-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  navbar: {
    width: "100%",
    flex: "0 0 ",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexBasis: "3em",
    justifyContent: "space-around",
    backgroundColor: "orange",
    height: "3em",
    padding: "0 1em",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <NavLink to="/home"> Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact"> Contact </NavLink>
    </div>
  );
};

export default Header;
