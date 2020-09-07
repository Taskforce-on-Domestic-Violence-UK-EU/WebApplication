import Head from "next/head";
import Layout from "../components/Layout";
import { Button } from "@material-ui/core";
import HorizontalGrid from "../components/HorizontalGrid";
import dbConnect from "../utils/dbConnect";
import { getArticles } from "./api/articles/index";

export default function Home({ data }) {
  return (
    <div
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 45,
      }}
    >
      <Head>
        <title>Covid 19 Task Force on Domestic Violence UK & EU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
      <h1
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: 36,
          width: "60%",
          textAlign: "left",
          marginBottom: 15,
          marginTop: 100,
        }}
      >
        Covid 19 Task Force on Domestic Violence UK & EU
      </h1>

      <p
        style={{
          fontFamily: "Frank Ruhl Libre, serif",
          fontWeight: 300,
          fontSize: 29,
          width: "60%",
          textAlign: "left",
          margin: 0,
          marginBottom: 30,
        }}
      >
        Welcome to the Task Force Directory.
        <br />
        <br />
      </p>
      <header
        style={{
          fontFamily: "Frank Ruhl Libre, serif",
          fontWeight: 500,
          fontSize: 24,
          width: "60%",
          textAlign: "left",
          marginBottom: 30,
        }}
      >
        Organization Directory
      </header>
      <HorizontalGrid data={data} />
      <header
        style={{
          fontFamily: "Frank Ruhl Libre, serif",
          fontWeight: 500,
          fontSize: 24,
          width: "60%",
          textAlign: "left",
          marginBottom: 30,
          marginTop: 45,
        }}
      >
        Articles
      </header>
      <HorizontalGrid data={data} />
      <header
        style={{
          fontFamily: "Frank Ruhl Libre, serif",
          fontWeight: 500,
          fontSize: 24,
          width: "60%",
          textAlign: "left",
          marginBottom: 30,
          marginTop: 45,
        }}
      >
        Workshops
      </header>
      <HorizontalGrid data={data} />
    </div>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  const result = await getArticles();
  const json_string = JSON.stringify(result);
  const articles = JSON.parse(json_string);

  return {
    props: {
      data: articles,
    },
  };
}
