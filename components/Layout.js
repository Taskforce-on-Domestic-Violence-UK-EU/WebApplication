import AppBar from "./AppBar";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  layout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
    minHeight: "100vh",
    minWidth: "100vw",
    zIndex: 0,
  },
}));

function Layout(props) {
  const classes = useStyles();
  return (
    <div>
      <AppBar />
      <Container className={classes.layout}>{props.children}</Container>
    </div>
  );
}

export default Layout;
