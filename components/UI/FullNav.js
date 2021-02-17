import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// Material UI
import { makeStyles } from "@material-ui/core/styles";

// Components
import NavLink from "./NavLink";

// Hooks

export default function FullNav({ setDisplayFullNav }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1,
      width: "100vw",
      height: "100vh",
      margin: 0,
      backgroundColor: "white",
    },
    wrapper: {
      display: "flex",
      flexDirection: "column",
      width: "80%",
      justifyContent: "center",
      margin: 0,
    },
    header: {
      fontFamily: "Nunito Sans, sans serif",
      fontWeight: 700,
      fontSize: 35,
      color: "black",
      marginBottom: 35,
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
    },
  }));

  const classes = useStyles();

  const links = [
    { title: "Home", link: "/" },
    { title: "Workshops", link: "/workshops" },
    { title: "Research", link: "/research" },
    { title: "Team", link: "/team" },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <ul className={classes.list}>
          {links.map((link) => {
            return (
              <NavLink
                key={link.link}
                link={link.link}
                title={link.title}
                setDisplayFullNav={setDisplayFullNav}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
