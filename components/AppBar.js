import React, { useState, useEffect, useRef, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SideDrawer from "./Drawer";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 75,
  },
  appBar: {
    boxShadow: "none",
    width: "100vw",
    flexGrow: 1,
    position: "fixed",
    borderBottom: "1px solid #f0f0f0",

    height: 75,
  },
  toolbar: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    position: "fixed",
    left: theme.spacing(2),
    marginTop: 1,
  },
  title: {
    flexGrow: 1,
  },
  button: {},
  logo: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Playfair Display, serif",
    fontSize: "1.5rem",
    textTransform: "none",
    textAlign: "center",
    "&:hover": {
      opacity: 0.4,
      cursor: "pointer",
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState("left");
  const [y, setY] = useState(0);
  const [down, setDown] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    ref.current.addEventListener("onScroll", () => {
      const currentY = window.scrollY;
      const scrollingUp = yPos < lastYPos || yPos <= 0;

      setShowComponent(scrollingUp);
      setY(currentY);

      console.log(scrollingUp);
    });
  }, [y]);

  return (
    <div ref={ref} className={classes.root}>
      <AppBar className={classes.appBar}>
        <SideDrawer open={open} setOpen={setOpen} anchor={anchor} />
        <Toolbar className={classes.toolbar}>
          <IconButton
            onClick={() => setOpen(true)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <a className={classes.logo}>Task Force UK & EU</a>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
