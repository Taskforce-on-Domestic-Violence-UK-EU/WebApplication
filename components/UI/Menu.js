import React from "react";
import Link from "next/link";

// Material UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: 300,
    maxWidth: 400,
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: 400,
    fontSize: 15,
    "&:hover": {
      opacity: 0.4,
    },
  },
}));

const SimpleMenu = () => {
  const classes = useStyles();

  return (
    <ul className={classes.wrapper}>
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
      {/* <li style={{ listStyle: "none" }}>
        <Link href={"/admin"}>
          <a className={classes.link}>Contribute</a>
        </Link>
      </li> */}
    </ul>
  );
};

export default SimpleMenu;
