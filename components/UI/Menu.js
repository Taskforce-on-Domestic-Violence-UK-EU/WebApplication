import React from "react";
import Link from "next/link";

// Material UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    width: "98%",
  },
  leftWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    alignContent: "center",
    padding: 0,
  },
  rightWrapper: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    minHeight: "100%",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: 400,
    marginRight: 30,
    margin: 0,
    fontSize: 15,

    "&:hover": {
      opacity: 0.4,
    },
  },

  button: {
    borderRadius: 2,
    textDecoration: "none",
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: 700,
    fontSize: 16,
    textAlign: "center",
    textTransform: "none",
    width: 140,

    backgroundColor: "black",
    color: "white",
    padding: 9.5,
    "&:hover": {
      opacity: 0.6,
    },
  },

  escapeLink: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: 700,

    fontSize: 15,

    color: "white",
    backgroundColor: "#d292d3",
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,

    borderRadius: 2,
    "&:hover": {
      opacity: 0.4,
    },
  },
}));

const SimpleMenu = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ul className={classes.leftWrapper}>
        <li style={{ listStyle: "none" }}>
          <Link href={"/"}>
            <a className={classes.link}>Home</a>
          </Link>
        </li>
        <li style={{ listStyle: "none" }}>
          <Link href={"/workshops"}>
            <a className={classes.link}>Workshops</a>
          </Link>
        </li>
        <li style={{ listStyle: "none" }}>
          <Link href={"/research"}>
            <a className={classes.link}>Research</a>
          </Link>
        </li>
        <li style={{ listStyle: "none" }}>
          <Link href={"/team"}>
            <a className={classes.link}>Team</a>
          </Link>
        </li>
        {/* <li style={{ listStyle: "none" }}>
        <Link href={"/admin"}>
          <a className={classes.link}>Contribute</a>
        </Link>
      </li> */}
      </ul>
      <ul className={classes.rightWrapper}>
        <li style={{ listStyle: "none" }}>
          <Link href={"/team"}>
            <a className={classes.escapeLink}>Quick Exit</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SimpleMenu;
