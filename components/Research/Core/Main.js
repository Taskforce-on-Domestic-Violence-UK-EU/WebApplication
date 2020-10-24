import React, { useState, useEffect } from "react";

// Material UI

import { makeStyles } from "@material-ui/core/styles";

// Components

import Workshop from "../Content/Main";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    width: "100%",
    paddingTop: 100,
  },
  header: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    fontSize: 50,
    width: "80%",
    marginBottom: 75,
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "80%",
  },
}));

const Main = ({ articles }) => {
  const classes = useStyles();

  useEffect(() => {}, [articles]);

  return (
    <div className={classes.root}>
      <header className={classes.header}>Research</header>
      <div className={classes.wrapper}>
        {articles.map((article) => {
          return <Workshop key={article._id} article={article} />;
        })}
      </div>
    </div>
  );
};

export default Main;
