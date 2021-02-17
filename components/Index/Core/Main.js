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
    flexWrap: "wrap",
    // backgroundColor: "#E3A8A8",
    marginTop: 75,
    width: "75vw",
    marginBottom: 25,
    maxWidth: 1000,
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    marginTop: 20,
    height: "100%",
  },
  header: {
    fontFamily: "Playfair Display, serif",
    fontWeight: 500,
    fontSize: 35,
    color: "black",
  },
  text: {
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: 400,
    fontSize: 20,
    color: "black",
    maxWidth: 398,
  },
  image: {
    width: 210,
    objectFit: "cover",
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
        <img
          className={classes.image}
          src={"https://taskforce.fra1.digitaloceanspaces.com/Logo.svg"}
        />
        <div className={classes.textWrapper}>
          <header className={classes.header}>Our Organization's Aims.</header>

          <p className={classes.text}>
            Research and create awareness of key domestic abuse issues.
            <br />
            <br />
            Advocate for policy change, especially for BAME, migrant, and LGBTQ+
            survivors. <br />
            <br />
            Connect stakeholders working in the domestic abuse field, in order
            to facilitate knowledge exchange and highlight innovation.
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
