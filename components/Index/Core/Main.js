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
    justifyContent: "flex-start",
    alignItems: "center",
    // backgroundColor: "#E3A8A8",
    marginTop: 50,
    width: "75vw",
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",

    width: "60%",
    height: "100%",
  },
  header: {
    fontFamily: "Playfair Display, serif",
    fontWeight: 500,
    fontSize: 65,
    color: "black",

    width: "100%",
  },
  text: {
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: 400,
    fontSize: 22,
    color: "black",
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
      <div className={classes.root}>
        {/* <img className={classes.image} src={"/sisters.webp"} /> */}
        <div className={classes.textWrapper}>
          <header className={classes.header}>We're Here For You</header>
          <p className={classes.text}>
            Covid-19 Task Force on Domestic Violence
          </p>
          {/* <Button variant="contained" className={classes.button}>
            Learn More
          </Button> */}
        </div>
      </div>
      <Workshops workshops={workshops} />
      <Research articles={articles} />
    </div>
  );
};

export default Main;
