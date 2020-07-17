import Head from "next/head";
import Layout from "../../../Layout";
import Card from "../../../Card";
import SmallCard from "../../../SmallCard";
import Chip from "@material-ui/core/Chip";
import MobileCard from "../../../MobileCard";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import useWitdh from "../../../../hooks/useWidth";
import Link from "next/link";
import AddButton from "./FloatingActionButton";

const useStyles = makeStyles((theme) => ({
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

export default function Home({ data, admin }) {
  // const [articles, setArticles] = useState([]);
  const classes = useStyles();
  const [feature, setFeature] = useState({});
  const [articles, setArticles] = useState([]);
  const { width, setWidth } = useWitdh();

  const determineLink = (id) => {
    if (admin) return `/admin/${id}`;
    else {
      return `/articles/${id}`;
    }
  };

  const determinePlaceHolder = () => {
    if (admin) return `/admin/[id]`;
    else {
      return `/articles/[id]`;
    }
  };

  const organizeArticles = async (articles) => {
    const list = [];

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
    setWidth(window.innerWidth);
    organizeArticles(data);
  }, []);

  if (width == 0) {
    return null;
  }

  if (width < 1000) {
    return (
      <div>
        <Head>
          <title>To the Core</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          {articles.map((article) => {
            return (
              <Link
                key={article._id}
                href={determinePlaceHolder()}
                as={determineLink(article._id)}
              >
                <MobileCard article={article} />
              </Link>
            );
          })}
        </Layout>
      </div>
    );
  } else {
    return (
      <div>
        <Head>
          <title>To the Core</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          {admin ? <AddButton /> : null}
          <div className={classes.copyWrapper}>
            {/* <h1
              style={{ fontSize: width < 500 ? 50 : 16 }}
              className={classes.title}
            >
              Core Issues, Real Analysis.
            </h1> */}
            <div className={classes.chipArray}>
              <Chip
                size="small"
                color="primary"
                label={"Criminal Law"}
                className={classes.chip}
              />
              <Chip
                size="small"
                color="primary"
                label={"Social Justice"}
                className={classes.chip}
              />
              <Chip
                size="small"
                color="primary"
                label={"Immigration Law"}
                className={classes.chip}
              />
              <Chip
                size="small"
                color="primary"
                label={"Human Rights"}
                className={classes.chip}
              />
              <Chip
                size="small"
                color="primary"
                label={"Education"}
                className={classes.chip}
              />
              <Chip
                size="small"
                color="primary"
                label={"Lockdown"}
                className={classes.chip}
              />
            </div>
            {/* <h2 className={classes.copy}>A New Type of Journalism</h2> */}
          </div>
          <Link href={determinePlaceHolder()} as={determineLink(feature._id)}>
            <Card article={feature} />
          </Link>
          <div className={classes.smallCardWrapper}>
            {articles.map((article) => {
              return (
                <Link
                  key={article._id}
                  href={determinePlaceHolder()}
                  as={determineLink(article._id)}
                >
                  <SmallCard article={article} />
                </Link>
              );
            })}
          </div>
        </Layout>
      </div>
    );
  }
}
