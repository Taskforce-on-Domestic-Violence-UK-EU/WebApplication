import React, { useState, useEffect } from "react";

// Material UI

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// Components

import Workshops from "../../Workshops/Core/Main";
import Research from "../../Research/Core/Main";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "rgb(140,179,166)",
    padding: 50,
    width: "100%",
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",

    width: "40%",
    height: "100%",
  },
  header: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    fontSize: 50,
    color: "white",

    width: "100%",
  },
  text: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 400,
    fontSize: 18,
    color: "white",
  },
  image: {
    width: 375,
    borderRadius: 50,
  },
  button: {
    borderRadius: 100,
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    fontSize: 16,
    textTransform: "none",
    width: 200,
    marginTop: 17.5,
    backgroundColor: "black",
    color: "white",
    padding: 10,
  },
}));

const Main = ({ data }) => {
  const classes = useStyles();
  const { articles, workshops, organizations } = data;

  return (
    <div className={classes.wrapper}>
      {/* <div className={classes.root}>
        <img className={classes.image} src={"/women.svg"} />
        <div className={classes.textWrapper}>
          <header className={classes.header}>We're Here to Help.</header>
          <p className={classes.text}>
            We are passionate about helping those affected by domestic violence
            during.
          </p>
          <Button variant="contained" className={classes.button}>
            Learn More
          </Button>
        </div>
      </div> */}
      <Workshops workshops={workshops} />
      <Research articles={articles} />
    </div>
  );
};

export default Main;
