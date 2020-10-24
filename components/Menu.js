import React from "react";
import Link from "next/link";

// Material UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "50%",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    fontSize: 12,
  },
}));

const SimpleMenu = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Link href={"/resources"}>
        <a className={classes.link}>Resources</a>
      </Link>
      <Link href={"/workshops"}>
        <a className={classes.link}>Workshops</a>
      </Link>
      <Link href={"/research"}>
        <a className={classes.link}>Research</a>
      </Link>
      <Link href={"/organizations"}>
        <a className={classes.link}>Organizations</a>
      </Link>
    </div>
  );
};

export default SimpleMenu;
