import { useState } from "react";
// Components
import AppBar from "./AppBar";
// Material UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  layout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "scroll",
    zIndex: 0,
  },
}));

function Layout(props) {
  const classes = useStyles();
  return (
    <div>
      <AppBar />
      {props.children}
    </div>
  );
}

export default Layout;
