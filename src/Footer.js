import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  footer: {
    width: "100%",
    flex: "0 0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "orange",
    minHeight: "3em",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      &copy; 2020 Entrotech Engineering, Inc.
    </div>
  );
};

export default Footer;
