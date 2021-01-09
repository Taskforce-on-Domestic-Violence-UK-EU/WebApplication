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
    fontFamily: "Playfair Display, serif",
    fontWeight: 500,
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
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: 400,
    fontSize: 22,
    margin: 0,
    marginTop: 10,
    width: "90%",
    maxWidth: 800,
  },
  date: {
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: 400,
    fontSize: 18,
    marginTop: 10,
    color: "grey",
  },

  button: {
    borderRadius: 2,
    textDecoration: "none",
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: 700,
    fontSize: 18,
    textAlign: "center",
    textTransform: "none",
    width: 250,
    marginTop: 35,
    backgroundColor: "black",
    color: "white",
    padding: 17.5,
    "&:hover": {
      opacity: 0.6,
    },
  },
}));

const Main = ({ workshop, articles = [] }) => {
  const classes = useStyles();
  const { title, date, description } = workshop;
  // const [articles, setArticles] = useState([]);

  // const fetchArticle = async (id) => {
  //   const req = await fetch(
  //     `https://taskforce-cms.vercel.app/api/articles/${id}`
  //   );
  //   const res = await req.json();
  //   const data = res.data;
  //   return data;
  // };

  // const fetchArticles = async () => {
  //   let batch = [];

  //   for (var id of workshop.articles) {
  //     console.log(id);
  //     var article = await fetchArticle(id);
  //     batch.push(article);
  //   }
  //   setArticles(batch);
  // };

  useEffect(() => {
    // fetchArticles();
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
      {articles.length > 0 ? <Research articles={articles} /> : null}
    </div>
  );
};

export default Main;
