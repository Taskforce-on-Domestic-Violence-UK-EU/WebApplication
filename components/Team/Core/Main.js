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
}));

const Main = ({ team, admin = false }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
