import React, { useState, useEffect } from "react";
import Link from "next/link";

// Material UI

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// Components

import Research from "../../Research/Core/Main";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    paddingTop: 50,
  },
  header: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    fontSize: 50,
    width: "100%",
    marginBottom: 15,
    color: "black",
    textDecoration: "none",
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    listStyle: "none",
    paddingLeft: 0,
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    marginTop: 25,
    marginBottom: 50,
    width: "75%",
    height: "100%",
  },
  text: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 400,
    fontSize: 20,
    margin: 0,
    marginTop: 10,
  },
  date: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 400,
    fontSize: 16,
    marginTop: 10,
    color: "grey",
  },

  button: {
    borderRadius: 5,
    textDecoration: "none",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    fontSize: 18,
    textAlign: "center",
    textTransform: "none",
    width: 250,
    marginTop: 35,
    backgroundColor: "rgb(97, 183, 232)",
    color: "white",
    padding: 17.5,
    "&:hover": {
      opacity: 0.6,
    },
  },
}));

const Main = ({ workshop }) => {
  const classes = useStyles();
  const { title, date, description } = workshop;
  const [articles, setArticles] = useState([]);

  const fetchArticle = async (id) => {
    const req = await fetch(`/api/articles/${id}`);
    const res = await req.json();
    const data = res.data;
    return data;
  };

  const fetchArticles = async () => {
    let batch = [];

    for (var id of workshop.articles) {
      var article = await fetchArticle(id);
      batch.push(article);
    }
    setArticles(batch);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.textWrapper}>
        <header className={classes.header}>{title}</header>
        <p className={classes.date}>{date}</p>
        <p className={classes.text}>{description}</p>
        <a className={classes.button} href={"/"}>
          Make Reservation
        </a>
      </div>
      <Research articles={articles} />
    </div>
  );
};

export default Main;
