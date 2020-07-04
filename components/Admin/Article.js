import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import { useState, useEffect } from "react";

// Components
import Text from "./Text";
import Header from "./Header";

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
    fontSize: 52,
    textAlign: "left",
    width: "40%",
    marginBottom: "5vh",
    marginTop: "15vh",
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
  article: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "40%",
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
    marginTop: "10px",
  },
  text: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 300,
    fontSize: 22,
    width: "100%",
    height: "100%",
    lineHeight: "32px",
  },

  subheader: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 700,
    fontSize: 20,
    width: "100%",
    height: "100%",
    lineHeight: "32px",
  },
  author: {
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 500,
    fontSize: "14px",
    width: "80%",
    margin: 0,
  },
  date: {
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 500,
    fontSize: "14px",
    width: "80%",
    marginTop: 10,
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
    fontFamily: "Frank Ruhl Libre, serif",
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
  const classes = useStyles();
  const [content, setContent] = useState([]);
  const [reload, setReloads] = useState(0);
  const [length, setLength] = useState(0);

  // TODO : FIX RERENDER GARBAGE

  const onChange = (c) => {
    setContent(c);
  };

  useEffect(() => {
    setContent(article.content);
  }, []);

  useEffect(() => {
    console.log(content);
  }, [content]);

  const reRender = () => {
    setReloads((r) => r + 1);
  };

  return (
    <div className={classes.container}>
      <div className={classes.overview}>
        <h1 className={classes.title}>{article.title}</h1>
      </div>
      <div className={classes.article}>
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
        <div className={classes.innerWrapper}>
          <h2 className={classes.author}>{article.author}</h2>
          <h2 className={classes.date}>{article.date}</h2>
        </div>

        <div className={classes.body}>
          {content.map((item) => {
            let i = content.indexOf(item);

            switch (item.type) {
              case "text":
                return (
                  <Text
                    key={i}
                    reRender={reRender}
                    content={content}
                    onChange={onChange}
                    setContent={setContent}
                    item={item}
                  />
                );

              case "header":
                return (
                  <Header
                    key={i}
                    reRender={reRender}
                    content={content}
                    setContent={setContent}
                    item={item}
                  />
                );

              case "point":
                return <KeyPoint key={i} size={25} text={item.content} />;

              case "image":
                return (
                  <div key={i} className={classes.imageContainer}>
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
