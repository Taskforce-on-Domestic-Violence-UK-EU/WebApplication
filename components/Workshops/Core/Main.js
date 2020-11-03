import React, { useState, useEffect } from "react";
import Link from "next/link";

// Material UI

import { makeStyles } from "@material-ui/core/styles";

// Components

import Workshop from "../Content/Main";
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
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    fontSize: 50,
    width: "100%",
    marginBottom: 45,
    color: "black",
    textDecoration: "none",
    "&:hover": {
      opacity: 0.5,
    },
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    listStyle: "none",
    paddingLeft: 0,
  },
}));

const Main = ({ workshops, displaySearch = false, admin = false }) => {
  const classes = useStyles();
  const [results, setResults] = useState(workshops);
  const type = "workshops";

  useEffect(() => {}, [workshops, results]);

  return (
    <div className={classes.root}>
      <Link href={"/workshops"}>
        <a className={classes.header}>Workshops</a>
      </Link>
      {displaySearch ? (
        <Search results={results} setResults={setResults} type={type} />
      ) : null}
      <ul className={classes.wrapper}>
        {results.map((workshop) => {
          return (
            <li key={workshop._id}>
              <Workshop workshop={workshop} admin={admin} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Main;
