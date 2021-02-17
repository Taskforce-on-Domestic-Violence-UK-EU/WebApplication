import React, { useState } from "react";

// Material UI

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

// Components

import Menu from "./Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: "none",
    width: "100vw",
    flexGrow: 1,
    position: "fixed",
    height: 75,
  },
  toolbar: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function ButtonAppBar({ displayFullNav, setDisplayFullNav }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Menu
            displayFullNav={displayFullNav}
            setDisplayFullNav={setDisplayFullNav}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
