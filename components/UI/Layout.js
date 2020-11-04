import { useState } from "react";
// Components
import AppBar from "./AppBar";
import Footer from "./Footer";
// Material UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
}));

function Layout(props) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <AppBar />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
