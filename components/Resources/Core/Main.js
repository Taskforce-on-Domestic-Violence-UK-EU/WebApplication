import React, { useState, useEffect } from "react";
import Link from "next/link";

// Material UI

import { makeStyles } from "@material-ui/core/styles";

// Components

import Resource from "../Content/Main";

// Utils

import { resources } from "../utils/resources";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    width: "75%",
    paddingTop: 50,
  },
  header: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    fontSize: 50,
    width: "100%",
    marginBottom: 45,
    color: "black",
    textDecoration: "none",
    "&:hover": {
      opacity: 0.5,
    },
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    width: "100%",
    listStyle: "none",
    paddingLeft: 0,
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href={"/resources"}>
        <a className={classes.header}>Resources</a>
      </Link>
      <ul className={classes.wrapper}>
        {resources.map((resource) => {
          return (
            <li key={resource.title}>
              <Resource resource={resource} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Main;
