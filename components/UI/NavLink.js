import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components

// Hooks

const NavLink = ({ link, title, setDisplayFullNav }) => {
  const router = useRouter();

  useEffect(() => {}, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setDisplayFullNav((display) => !display);
  };

  const useStyles = makeStyles((theme) => ({
    link: {
      textDecoration: "none",
      color: "black",
      fontFamily: "Nunito Sans, sans serif",
      fontWeight: 400,
      fontSize: 35,
      margin: 0,
      "&:hover": {
        opacity: 0.3,
      },
    },
    button: {
      textDecoration: "none",
      style: "none",
      border: "none",
      backgroundColor: "white",
      margin: 0,
      padding: 0,
      "&:hover": {
        cursor: "pointer",
      },
    },
    linkWrapper: {
      margin: 0,
      marginBottom: 15,
      listStyle: "none",
    },
  }));

  const classes = useStyles();
  return (
    <li className={classes.linkWrapper}>
      {link !== router.pathname ? (
        <Link href={link}>
          <a className={classes.link}>{title}</a>
        </Link>
      ) : (
        <button className={classes.button} onClick={(e) => onSubmit(e)}>
          <a className={classes.link}>{title}</a>
        </button>
      )}
    </li>
  );
};

export default NavLink;
