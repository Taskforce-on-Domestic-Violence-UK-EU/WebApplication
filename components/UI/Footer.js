import React, { useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexGrow: 1,
    width: "100vw",
    height: 150,
    borderTop: "1px solid #e3dddc",
    marginBottom: 100,
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    width: "80%",
    minWidth: 400,
    marginTop: 40,
    marginBottom: 200,
    height: "100%",
  },
  header: {
    fontFamily: "Nunito Sans, sans serif",
    fontWeight: 500,
    fontSize: 20,
    width: 300,
    color: "black",
    marginBottom: 10,
    marginRight: "10%",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    listStyle: "none",
    margin: 0,
    marginTop: 8,
    marginRight: "10%",
  },
  listHeader: {
    fontFamily: "Nunito Sans, sans serif",
    fontWeight: 700,
    fontSize: 16,
    color: "black",
    marginBottom: 15,
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Nunito Sans, sans serif",
    fontWeight: 400,
    fontSize: 16,
    margin: 0,
    marginBottom: 20,
    "&:hover": {
      opacity: 0.6,
    },
  },
  linkWrapper: {
    margin: 0,
    marginBottom: 10,
  },
}));
export default function Footer({}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <header className={classes.header}>
          Covid-19 Task Force on Domestic Abuse
        </header>
        <ul className={classes.list}>
          <li>
            <header className={classes.listHeader}>Company</header>
          </li>
          <li className={classes.linkWrapper}>
            <a
              className={classes.link}
              href={"https://www.instagram.com/covid19dvtaskforceukeu/"}
              target="_blank"
            >
              Sign up
            </a>
          </li>
        </ul>
        <ul className={classes.list}>
          <li>
            <header className={classes.listHeader}>Social</header>
          </li>
          <li className={classes.linkWrapper}>
            <a
              className={classes.link}
              href={"https://twitter.com/covid19dv_ukeu"}
              target="_blank"
            >
              Twitter
            </a>
          </li>
          <li className={classes.linkWrapper}>
            <a
              className={classes.link}
              href={"https://www.instagram.com/covid19dvtaskforceukeu/"}
              target="_blank"
            >
              Instagram
            </a>
          </li>
          <li className={classes.linkWrapper}>
            <a
              className={classes.link}
              href={"https://www.facebook.com/dvtaskforceUKEU/"}
              target="_blank"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
