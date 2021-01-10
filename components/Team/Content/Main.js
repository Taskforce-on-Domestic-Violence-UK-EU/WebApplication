import React, { useState, useEffect } from "react";

// Material UI

import { makeStyles } from "@material-ui/core/styles";

// Components

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textDecoration: "none",
    color: "black",
    backgroundColor: "white",
    height: "100%",
    // minHeight: 350,
    // boxShadow: "11px 12px 24px -1px rgba(74,74,74,0.15)",
    borderRadius: 4,
    // padding: 50,
    width: "75vw",
    maxWidth: 500,
    marginBottom: 75,
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    // border: "1px solid black",
    width: "90%",
    height: "100%",
    padding: 0,
    margin: 0,
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
    fontSize: 35,
    marginTop: 0,
    width: "90%",
  },
  text: {
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: 500,
    fontSize: 17,
    margin: 0,
    marginTop: 10,
  },
  date: {
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: 400,
    fontSize: 16,
    margin: 0,
    marginTop: 15,
    color: "grey",
  },
  image: {
    width: 150,
    height: 150,
    objectFit: "cover",
    borderRadius: 3,
    marginBottom: 25,
  },
  button: {
    borderRadius: 2,
    textDecoration: "none",
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: 700,
    fontSize: 16,
    textAlign: "center",
    textTransform: "none",
    width: 140,

    backgroundColor: "black",
    color: "white",
    padding: 9.5,
    "&:hover": {
      opacity: 0.6,
    },
  },
}));

const Main = ({ person, admin = false }) => {
  const classes = useStyles();

  const { name, image, description, role } = person;

  // const format = (text) => {
  //   const words = text.split(" ");
  //   if (words.length > 80) {
  //     var sentence = [];
  //     words.forEach((word) => {
  //       let i = words.indexOf(word);
  //       if (i < 80) {
  //         sentence.push(word);
  //       } else {
  //         return;
  //       }
  //     });
  //     text = sentence.join(" ");
  //     return (text += "...");
  //   } else {
  //     return text;
  //   }
  // };

  // const determineLink = (admin) => {
  //   if (admin) {
  //     return `/admin/articles/${_id}`;
  //   } else {
  //     return `/research/${_id}`;
  //   }
  // };

  return (
    <div className={classes.root}>
      <div className={classes.textWrapper}>
        <img className={classes.image} src={image} />
        <header className={classes.header}>{name}</header>
        <p className={classes.date}>{role}</p>
        <p className={classes.text}>{description}</p>
      </div>
    </div>
  );
};

export default Main;
