import { useState, useEffect } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  text: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 300,
    fontSize: 22,
    height: "100%",
    lineHeight: "32px",
  },
  header: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 700,
    fontSize: 20,
    height: "100%",
    lineHeight: "32px",
  },
  imageContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    marginBottom: "1vh",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
}));

function Value({ item }) {
  const classes = useStyles();

  switch (item.type) {
    case "text":
      return <p className={classes.text}>{item.content}</p>;

    case "header":
      return <h3 className={classes.header}>{item.content}</h3>;

    case "image":
      return (
        <div className={classes.imageContainer}>
          <img className={classes.image} src={item.content} alt="image" />
        </div>
      );

    default:
      return null;
  }
}

export default Value;
