import React, { useEffect } from "react";
import Link from "next/link";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import { IconButton } from "@material-ui/core";

// Hooks
import useWidth from "../../hooks/useWidth";

const SimpleMenu = ({ displayFullNav, setDisplayFullNav }) => {
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
      listStyle: "none",
      margin: 0,
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
      padding: 12,
      paddingleft: 15,
      paddingright: 15,
      margin: 0,
      borderRadius: 2,
      "&:hover": {
        opacity: 0.4,
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ul className={classes.leftWrapper}>
        <li style={{ listStyle: "none" }}>
          <IconButton
            onClick={(e) => {
              e.defaultPrevented;
              setDisplayFullNav((value) => !value);
            }}
          >
            {displayFullNav ? <ClearIcon /> : <MenuIcon />}
          </IconButton>
        </li>
        {/* <li style={{ listStyle: "none" }}>
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
        </li> */}
      </ul>
      <ul className={classes.rightWrapper}>
        <li style={{ listStyle: "none" }}>
          <Link
            href={
              "https://www.google.co.uk/search?sxsrf=ALeKk03F_xqFhl8fpm7wAeL4UOHa4TzuaA%3A1613584629053&source=hp&ei=9VgtYNI2iLBSsZCmcA&iflsig=AINFCbYAAAAAYC1nBf3CAiYm1s-Qs6aka1ZgCTHVGXAq&q=uk+vaccine+covid&oq=uk+vaccine&gs_lcp=Cgdnd3Mtd2l6EAMYADIECCMQJzIICAAQsQMQgwEyCAgAELEDEIMBMgUIABCxAzIICAAQsQMQgwEyBQgAELEDMgUIABCxAzIICAAQsQMQgwEyCAgAELEDEIMBMgUIABCxAzoHCCMQ6gIQJzoLCC4QsQMQxwEQowI6CAguELEDEIMBOgIIAFD3E1ipImCCLmgBcAB4AIABQIgBkASSAQIxMJgBAKABAaoBB2d3cy13aXqwAQo&sclient=gws-wiz"
            }
          >
            <a className={classes.escapeLink}>Escape</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SimpleMenu;
