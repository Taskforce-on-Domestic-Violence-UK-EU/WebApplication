import React, { useState, useEffect } from "react";
import Link from "next/link";

// Material UI

import { makeStyles } from "@material-ui/core/styles";

// Components

import Article from "../Content/Main";
import Search from "../../UI/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "75%",
    paddingTop: 50,
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

const Main = ({
  articles,
  displaySearch = false,
  admin = false,
  useLink = false,
}) => {
  const classes = useStyles();
  const [results, setResults] = useState(articles);
  const type = "research";

  const reset = () => setResults(articles);

  useEffect(() => {}, [results]);

  useEffect(() => {
    setResults(articles);
  }, [articles]);

  return (
    <div className={classes.root}>
      <Link href={"/research"}>
        <a className={classes.header}>Research</a>
      </Link>
      {displaySearch ? (
        <Search
          data={articles}
          results={results}
          setResults={setResults}
          type={type}
          reset={reset}
        />
      ) : null}
      <div className={classes.wrapper}>
        {results.map((article) => {
          if (article) {
            return (
              <Article admin={admin} key={article._id} article={article} />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Main;
