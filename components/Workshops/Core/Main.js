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
    padding: 0,
    margin: 0,
  },
}));

const Main = ({ workshops, displaySearch = false, admin = false }) => {
  const classes = useStyles();
  const [results, setResults] = useState(workshops);
  const type = "workshops";

  const reset = () => setResults(workshops);

  useEffect(() => {}, [workshops, results]);

  return (
    <div className={classes.root}>
      <Link href={"/workshops"}>
        <a className={classes.header}>Upcoming Workshops</a>
      </Link>
      {displaySearch ? (
        <Search
          data={workshops}
          results={results}
          setResults={setResults}
          type={type}
          reset={reset}
        />
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
