import React, { useState, useEffect } from "react";
import Link from "next/link";

// Material UI

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";

// Components

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textDecoration: "none",
    color: "black",
    backgroundColor: "white",
    minHeight: 350,
    boxShadow: "11px 12px 24px -1px rgba(74,74,74,0.31)",
    borderRadius: 15,
    padding: 50,
    width: "75vw",
    marginBottom: 75,
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",

    width: "90%",
    height: "100%",
  },
  actionWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
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
    width: 50,
    height: 50,
    objectFit: "fit",
    borderRadius: 50,
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

const Main = ({ workshop, admin }) => {
  const classes = useStyles();

  const { _id, title, image, date, description } = workshop;

  const format = (text) => {
    const words = text.split(" ");
    if (words.length > 80) {
      var sentence = [];
      words.forEach((word) => {
        let i = words.indexOf(word);
        if (i < 80) {
          sentence.push(word);
        } else {
          return;
        }
      });
      text = sentence.join(" ");
      return (text += "...");
    } else {
      return text;
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.textWrapper}>
        <header className={classes.header}>{title}</header>
        <p className={classes.date}>{date}</p>
        <p className={classes.text}>{format(description)}</p>
      </div>
      <div className={classes.actionWrapper}>
        <a
          className={classes.button}
          href={`/${admin ? "admin" : "workshops"}/${_id}`}
        >
          View
        </a>

        <img className={classes.image} src={image} />
      </div>
    </div>
  );
};

export default Main;
