import React, { useState } from "react";

// Material UI

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SideDrawer from "./Drawer";
import Link from "next/link";
import Card from "../components/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "start",
    overflow: "none",
    width: "60%",
    padding: 0,
    margin: 0,
  },
  list: {
    display: "flex",
    justifyContent: "start",
    flexDirection: "row",
    overflowX: "scroll",
    width: "100%",
    margin: 0,
    padding: 0,
  },
}));

export default function ButtonAppBar({ data, cardType = "article" }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {data.map((item) => {
          return <Card article={item} />;
        })}
      </ul>
    </div>
  );
}
