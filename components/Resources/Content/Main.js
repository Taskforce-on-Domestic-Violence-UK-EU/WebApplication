import React, { useState, useEffect } from "react";
import Link from "next/link";

// Material UI

import { makeStyles } from "@material-ui/core/styles";

// Components

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    color: "black",
    backgroundColor: "white",
    minHeight: 350,
    boxShadow: "11px 12px 24px -1px rgba(74,74,74,0.31)",
    borderRadius: 15,
    padding: 50,
    width: "75vw",
    maxWidth: 700,
    marginBottom: 75,
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",

    width: "95%",
    height: "100%",
    marginTop: 10,
  },
  actionWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 35,
    marginBottom: 20,
    width: "95%",
  },
  header: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    fontSize: 25,
    marginTop: 0,
    width: "90%",
  },
  text: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 400,
    fontSize: 18,
    margin: 0,
    marginTop: 15,
  },
  date: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 400,
    fontSize: 15,
    margin: 0,
    marginTop: 15,
    color: "grey",
  },
  image: {
    width: "95%",
    maxWidth: 600,
    height: "auto",
    objectFit: "cover",
    borderRadius: 10,
    marginBottom: 30,
    marginTop: 15,
  },
  button: {
    borderRadius: 5,
    textDecoration: "none",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    fontSize: 16,
    textAlign: "center",
    textTransform: "none",
    width: 140,

    backgroundColor: "rgb(97, 183, 232)",
    color: "white",
    padding: 9.5,
    "&:hover": {
      opacity: 0.6,
    },
  },
}));

const Main = ({ resource }) => {
  const classes = useStyles();

  const { title, text, link } = resource;

  return (
    <div className={classes.root}>
      <div className={classes.textWrapper}>
        <header className={classes.header}>{title}</header>
        <ul>
          {text.map((item) => {
            return (
              <li>
                <p className={classes.text}>{item} </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classes.actionWrapper}>
        <a className={classes.button} href={link} target={"_blank"}>
          View
        </a>
      </div>
    </div>
  );
};

export default Main;
