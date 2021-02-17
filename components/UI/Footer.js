import React, { useEffect } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components

// Hooks
import useWidth from "../../hooks/useWidth";

export default function Footer({}) {
  const { width, setWidth } = useWidth();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1,
      width: "100vw",
      marginBottom: 25,
      borderTop: "1px solid #e3dddc",
    },
    wrapper: {
      display: "flex",
      flexWrap: "wrap",
      width: "80vw",

      marginTop: 40,

      height: "100%",
    },
    header: {
      fontFamily: "Nunito Sans, sans serif",
      fontWeight: 700,
      fontSize: 18,
      width: 150,
      color: "black",
      marginBottom: 10,
      marginRight: 125,
    },
    list: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      listStyle: "none",
      margin: 0,
      marginTop: 8,
      minWidth: 200,
      padding: 0,
      marginRight: 75,
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

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <header className={classes.header}>Task Force on Domestic Abuse</header>
        <ul className={classes.list}>
          <li>
            <header className={classes.listHeader}>Contact</header>
          </li>
          <li className={classes.linkWrapper}>
            <a
              className={classes.link}
              href={"https://www.instagram.com/covid19dvtaskforceukeu/"}
              target="_blank"
            >
              hello@taskforceuk.com
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
