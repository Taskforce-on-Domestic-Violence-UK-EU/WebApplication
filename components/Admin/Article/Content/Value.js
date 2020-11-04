import { useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import ImageModal from "./ImageModal";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  text: {
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 400,
    fontSize: 22,
    margin: 0,
    marginBottom: 35,
    width: "100%",
    height: "100%",
    lineHeight: 1.6,
  },
  header: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Open Sans, sans serif",
    fontWeight: 700,
    fontSize: 19,
    width: "100%",
    height: "100%",

    margin: 0,
    marginBottom: 20,
  },
  imageContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    marginBottom: "1vh",
    "&:hover": {
      opacity: 0.5,
      cursor: "pointer",
    },
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
}));

function Value({ item }) {
  const classes = useStyles();
  const [openImage, setOpenImage] = useState(false);

  switch (item.type) {
    case "text":
      return <p className={classes.text}>{item.content}</p>;

    case "header":
      return <h3 className={classes.header}>{item.content}</h3>;

    case "image":
      return (
        <div className={classes.imageContainer}>
          <ImageModal
            image={item.content}
            open={openImage}
            setOpen={setOpenImage}
          />
          <img
            className={classes.image}
            onClick={() => setOpenImage(true)}
            src={item.content}
            alt="image"
          />
        </div>
      );

    default:
      return null;
  }
}

export default Value;
