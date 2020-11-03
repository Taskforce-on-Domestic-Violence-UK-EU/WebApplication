import React, { useState, useEffect } from "react";
import Link from "next/link";

// Material UI

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// Components

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textDecoration: "none",
    color: "black",
    width: "90%",
    width: 400,
    marginBottom: 75,
    "&:hover": {
      opacity: 0.3,
    },
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    marginTop: 25,
    width: 400,
    height: "100%",
  },
  header: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    fontSize: 20,
    marginTop: 10,
    width: "100%",
  },
  text: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 400,
    fontSize: 18,
    margin: 0,
    marginTop: 10,
  },
  date: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 400,
    fontSize: 14,
    marginTop: 10,
  },
  image: {
    width: 400,
    borderRadius: 10,
  },
  button: {
    borderRadius: 100,
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    fontSize: 16,
    textTransform: "none",
    width: 150,
    marginTop: 30,
    backgroundColor: "black",
    color: "white",
    padding: 10,
  },
}));

const Main = ({ article }) => {
  const classes = useStyles();

  const { title, image, date, description } = article;

  return (
    <Link href={"/"}>
      <a className={classes.root}>
        <img className={classes.image} src={image} />
        <div className={classes.textWrapper}>
          <header className={classes.header}>{title}</header>
          <p className={classes.date}>{date}</p>
          <p className={classes.text}>{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default Main;
