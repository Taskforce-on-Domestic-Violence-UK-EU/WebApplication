import { useState, useEffect } from "react";
// Components
import AppBar from "./AppBar";
import Footer from "./Footer";
import FullNav from "./FullNav";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Hooks

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "center",
    margin: 0,
  },
}));

const Layout = (props) => {
  const classes = useStyles();
  const [displayFullNav, setDisplayFullNav] = useState(false);

  useEffect(() => {}, [displayFullNav]);

  useEffect(() => {}, []);

  return (
    <div className={classes.wrapper}>
      <AppBar
        displayFullNav={displayFullNav}
        setDisplayFullNav={setDisplayFullNav}
      />
      {displayFullNav ? (
        <FullNav
          displayFullNav={displayFullNav}
          setDisplayFullNav={setDisplayFullNav}
        />
      ) : (
        props.children
      )}
      {displayFullNav ? null : <Footer />}
    </div>
  );
};

export default Layout;
