import React, { useState, useEffect } from "react";
import Link from "next/link";

// Material UI

import { makeStyles } from "@material-ui/core/styles";

// Components

import Article from "../Content/Main";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "75%",
    paddingTop: 125,
  },
  header: {
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: 500,
    fontSize: 30,
    width: "100%",
    marginBottom: 80,
    textAlign: "right",
    color: "black",
    textDecoration: "none",
    "&:hover": {
      opacity: 0.5,
    },
    borderBottom: "1px solid #D9D9D9",
    paddingBottom: 10,
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    listStyle: "none",
    paddingLeft: 0,
    margin: 0,
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    // border: "1px solid black",
    width: "100%",
    height: "100%",
    padding: 0,
    margin: 0,
    marginTop: 20,
    marginBottom: 75,
  },
  subHeader: {
    fontFamily: "Playfair Display, serif",
    fontWeight: 500,
    fontSize: 32,
    marginTop: 0,
    marginBottom: 15,
    width: "95%",
  },
  text: {
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: 500,
    fontSize: 18,
    margin: 0,
    marginTop: 20,
  },
}));

const Main = ({ team, admin = false }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.textWrapper}>
        <header className={classes.subHeader}>Join Our Team</header>
        <p className={classes.text}>
          We are a dedicated team of volunteers and our base is always growing.
          If you would like to join our team, and dedicate around an hour a week
          to a research ‘sprint’ meeting, then please contact us at
          dvtaskforce.ukeu@gmail.com, we’d love to hear from you.
        </p>
        <p className={classes.text}>
          We are a group of activists and students who perform research and
          advocate for policy change in the domestic abuse area. We aim to
          support the work of domestic abuse organisations by undertaking
          analysis and facilitating discussions about key issues in the domestic
          abuse field.
        </p>
      </div>
      <Link href={"/team"}>
        <a className={classes.header}>Team</a>
      </Link>
      <div className={classes.wrapper}>
        {team.map((person) => {
          if (person) {
            return <Article admin={admin} key={person.name} person={person} />;
          }
        })}
      </div>
    </div>
  );
};

export default Main;
