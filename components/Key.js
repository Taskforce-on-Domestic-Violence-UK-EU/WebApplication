import AppBar from "./AppBar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Chip from "@material-ui/core/Chip";
import CardContent from "@material-ui/core/CardContent";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

function Preview({ text, size }) {
  const useStyles = makeStyles((theme) => ({
    card: {
      display: "flex",

      width: "100%",
      borderRadius: 0,
      padding: 0,
      marginTop: 25,
      marginBottom: 25,
      backgroundColor: "rgba(0,0,0,0.0)",
      boxShadow: "2px 3px 10px 0px rgba(0,0,0,0.2)",
      boxShadow: "none",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      borderTop: "1px solid rgba(0,0,0,0.1)",
    },

    innerWrapper: {
      display: "flex",
      width: "100%",
      flexDirection: "row",
      justifyContent: "center",
      flexWrap: "wrap",
      alignItems: "center",
      padding: 0,
    },
    imageContainer: {
      display: "flex",
      width: "450px",
      height: "400px",
      alignItems: "center",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },

    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 0,
    },

    title: {
      textDecoration: "none",
      color: "black",
      fontFamily: "Frank Ruhl Libre, serif",
      fontSize: size,
      textAlign: "center",
      fontWeight: 500,
      margin: 0,
      padding: 0,
      width: "80%",
      borderRadius: 5,

      marginTop: 25,
    },

    details: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "90%",
      marginBottom: 20,
      marginLeft: 5,
    },
    author: {
      color: "black",
      fontFamily: "Frank Ruhl Libre, serif",
      fontWeight: 500,
      fontSize: "14px",

      margin: 0,
    },
    date: {
      color: "black",
      fontFamily: "Frank Ruhl Libre, serif",
      fontWeight: 500,
      fontSize: "14px",
      margin: 0,
    },
    description: {
      textDecoration: "none",
      color: "black",
      fontFamily: "Frank Ruhl Libre, serif",
      fontWeight: 300,
      fontSize: "14px",
      maxWidth: "90%",
      marginTop: 30,
    },
    chip: {
      marginRight: theme.spacing(1),
      paddingLeft: 5,
      paddingRight: 5,
      fontFamily: "Frank Ruhl Libre, serif",
      fontWeight: 700,
      backgroundColor: "#E5E5E5",
    },
    chipArray: {
      display: "flex",
      flexWrap: "wrap",
      maxWidth: "90%",
      marginTop: 20,
    },
    button: {
      marginTop: 25,
    },
  }));

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.innerWrapper}>
        <h1 className={classes.title}>{text}</h1>
      </CardContent>
    </Card>
  );
}

export default Preview;
