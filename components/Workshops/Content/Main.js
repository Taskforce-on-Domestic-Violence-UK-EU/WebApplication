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
    // boxShadow: "11px 12px 24px -1px rgba(74,74,74,0.15)",
    borderRadius: 4,
    // padding: 50,
    width: "75vw",
    maxWidth: 450,
    marginBottom: 75,
    marginTop: 0,
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    // border: "1px solid black",
    width: "90%",
    height: "100%",
    padding: 0,
    margin: 0,
    marginTop: 20,
  },
  actionWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 45,
  },
  header: {
    fontFamily: "Playfair Display, serif",
    fontWeight: 500,
    fontSize: 32,
    marginTop: 0,
    width: "95%",
  },
  text: {
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: 500,
    fontSize: 18,
    margin: 0,
    marginTop: 15,
  },
  date: {
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: 400,
    fontSize: 17,
    margin: 0,
    marginTop: 15,
    color: "grey",
  },
  image: {
    width: "100%",
    height: 325,
    objectFit: "cover",
    borderRadius: 2,
  },
  button: {
    borderRadius: 2,
    textDecoration: "none",
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: 700,
    fontSize: 16,
    textAlign: "center",
    textTransform: "none",
    width: 170,

    backgroundColor: "black",
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

  const determineLink = (admin) => {
    let link = `/workshops/${_id}`;

    if (admin) {
      link = "/admin" + link;
    }
    return link;
  };

  return (
    <div className={classes.root}>
      <img className={classes.image} src={image} />
      <div className={classes.textWrapper}>
        <header className={classes.header}>{title}</header>
        <p className={classes.date}>{date}</p>
        <p className={classes.text}>{format(description)}</p>
      </div>
      <div className={classes.actionWrapper}>
        <a className={classes.button} href={determineLink(admin)}>
          Make Reservation
        </a>
      </div>
    </div>
  );
};

export default Main;
