import { useState } from "react";
// Components
import AppBar from "./AppBar";
// Material UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

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
