import AppBar from "./AppBar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Chip from "@material-ui/core/Chip";
import CardContent from "@material-ui/core/CardContent";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import useWitdh from "../hooks/useWidth";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    minHeight: "20%",
    justifyContent: "space-between",
    width: "48%",
    height: "100%",
    maxHeight: 200,

    "&:hover": {
      opacity: 0.8,
      cursor: "pointer",
    },

    marginBottom: 30,
    borderRadius: 10,
    boxShadow: "none",
  },

  innerWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",

    flexWrap: "wrap",
    padding: 0,
    margin: 0,
  },
  imageContainer: {
    display: "flex",

    alignItems: "center",
    margin: 0,
    padding: 0,
  },
  image: {
    width: "100%",
    height: "100%",

    objectFit: "cover",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: 300,
    margin: 0,
    height: "100%",
    padding: 25,
  },

  title: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Playfair Display, serif",
    textAlign: "left",
    fontWeight: 700,
    margin: 0,
    padding: 0,
    width: "90%",
  },

  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginBottom: 15,
  },
  author: {
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 500,
    fontSize: 11,

    margin: 0,
  },
  date: {
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 500,
    fontSize: 11,
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
    fontSize: 11,
    backgroundColor: "#E5E5E5",
  },
  chipArray: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    maxWidth: "100%",
    marginTop: 20,
  },
  button: {
    marginTop: 25,
  },
}));

function Preview({ article }) {
  const classes = useStyles();
  const { width, setWidth } = useWitdh();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    console.log(width);
  }, [width]);

  if (article) {
    return (
      <Link href={"/article"}>
        <Card className={classes.card}>
          {/* <CardContent className={classes.innerWrapper}> */}
          <div className={classes.content}>
            <div className={classes.details}>
              <h2 className={classes.author}>{article.author}</h2>
              <h2 className={classes.date}>{article.date}</h2>
            </div>
            <h1
              style={{ fontSize: width < 1200 ? 15 : 17 }}
              className={classes.title}
            >
              {article.title}
            </h1>
            {/* <p className={classes.description}>
            The term ‘domestic abuse’ is tightly wrapped in a layer of
            misconceptions and misunderstandings: widespread inaccurate beliefs
            about what abuse looks like, and what a victim looks like, extend
            not only to the general public, but also exist within essential
            services, including the police service.
          </p> */}

            <div className={classes.chipArray}>
              {article.tags.map((tag) => {
                return (
                  <Chip
                    size="small"
                    color="primary"
                    label={tag}
                    className={classes.chip}
                    key={tag}
                  />
                );
              })}
            </div>
          </div>
          <div
            style={{
              width: width < 1200 ? 200 : 200,
              height: width < 1200 ? 200 : 200,
            }}
            className={classes.imageContainer}
          >
            <img className={classes.image} src={article.image} />
          </div>
          {/* </CardContent> */}
        </Card>
      </Link>
    );
  }
}

export default Preview;
