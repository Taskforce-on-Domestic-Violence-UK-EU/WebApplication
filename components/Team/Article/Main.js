import { makeStyles } from "@material-ui/core/styles";
import KeyPoint from "./Key";
import { useRef } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100vw",
    backgroundColor: "white",
  },

  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },

  overview: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },

  title: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Playfair Display, serif",
    fontWeight: 500,
    fontSize: 52,
    textAlign: "left",
    width: "50%",
    marginBottom: 30,
    marginTop: 75,
  },

  imageContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 35,
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
  article: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "50%",
    minHeight: "100%",
    marginTop: "10",
    paddingBottom: "10rem",
  },
  innerWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    margin: 0,
    marginTop: 10,
    marginBottom: 55,
  },
  text: {
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: 400,
    fontSize: 22,
    margin: 0,
    marginBottom: 35,
    width: "100%",
    height: "100%",
    lineHeight: 1.8,
  },

  subheader: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: 700,
    fontSize: 22,
    width: "100%",
    height: "100%",
    margin: 0,
    marginBottom: 30,
  },
  author: {
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: 400,
    fontSize: 22,
    margin: 0,
    marginTop: 15,
    color: "black",
  },
  date: {
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: 400,
    fontSize: 18,
    margin: 0,
    marginTop: 15,
    color: "grey",
  },
  articleImage: {
    width: "100%",
    height: 400,
    objectFit: "cover",
    marginTop: 30,
    marginBottom: 30,
  },
  chip: {
    marginRight: 15,
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: "Open Sans, sans serif",
    fontWeight: 700,
    fontSize: 13,
    backgroundColor: "#E5E5E5",
    "&:hover": {
      opacity: 0.5,
      cursor: "pointer",
    },
  },
  chipArray: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    maxWidth: "100%",
    marginBottom: 30,
    marginTop: 7.5,
  },
}));

function Article({ article }) {
  const overviewRef = useRef(null);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.overview}>
        <h1 ref={overviewRef} className={classes.title}>
          {article.title}
        </h1>
      </div>
      <div className={classes.article}>
        {/* <div className={classes.chipArray}>
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
        </div> */}
        <div className={classes.innerWrapper}>
          <h2 className={classes.author}>{article.author}</h2>
          <h2 className={classes.date}>{article.date}</h2>
        </div>

        <div className={classes.body}>
          {article.content.map((item) => {
            switch (item.type) {
              case "text":
                return <p className={classes.text}>{item.content}</p>;

              case "header":
                return <h3 className={classes.subheader}>{item.content}</h3>;

              case "point":
                return <KeyPoint size={25} text={item.content} />;

              case "image":
                return (
                  <div className={classes.imageContainer}>
                    <img
                      className={classes.image}
                      src={item.content}
                      alt="image"
                    />
                  </div>
                );

              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Article;
