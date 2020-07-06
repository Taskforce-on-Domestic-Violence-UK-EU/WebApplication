import { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../../../Layout";
import Card from "../../../Card";
import SmallCard from "../../../SmallCard";
import { makeStyles } from "@material-ui/core/styles";
import AddButton from "./FloatingActionButton";

const useStyles = makeStyles((theme) => ({
  Wrapper: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
  },

  title: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Playfair Display, serif",

    textAlign: "left",

    textAlign: "center",
    alignSelf: "center",
    maxWidth: "100%",
  },
  copy: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontSize: 18,
    textAlign: "left",
    marginTop: 1,

    textAlign: "center",
    fontWeight: 300,
    width: "80%",
  },
  copyWrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    background: "white",
    width: "80vw",
    borderRadius: 10,
    marginBottom: 30,
    marginTop: 30,
    padding: 10,
  },
  chip: {
    marginRight: 15,
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 500,
    fontSize: 11,
    backgroundColor: "#E5E5E5",
    "&:hover": {
      opacity: 0.5,
      cursor: "pointer",
    },
  },
  chipArray: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "90%",
  },
  smallCardWrapper: {
    display: "flex",
    width: "80vw",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
}));

export default function Home({ data }) {
  // const [articles, setArticles] = useState([]);
  const classes = useStyles();
  const [feature, setFeature] = useState({});
  const [articles, setArticles] = useState([]);

  const organizeArticles = async (articles) => {
    const list = [];

    console.log(articles);

    await articles.forEach((article) => {
      if (article.feature) {
        setFeature(article);
      } else {
        list.push(article);
      }
    });
    setArticles(list);
  };

  useEffect(() => {
    organizeArticles(data);
  }, [data]);

  return (
    <div>
      <AddButton />
      <Head>
        <title>To the Core</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={classes.Wrapper}>
          <Card admin={true} article={feature} />
          <div className={classes.smallCardWrapper}>
            {articles.map((article) => {
              return (
                <SmallCard admin={true} key={article._id} article={article} />
              );
            })}
          </div>
        </div>
      </Layout>
    </div>
  );
}
