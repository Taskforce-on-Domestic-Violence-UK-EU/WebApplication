import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import HorizontalGrid from "../components/HorizontalGrid";
import dbConnect from "../utils/dbConnect";
import { getArticles } from "./api/articles/index";
import { getWorkshops } from "./api/workshops/index";
import { getOrganizations } from "./api/organizations";

export default function Home({ data }) {
  const { articles, workshops, organizations } = data;

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
      <Link href="/organizations">
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
      </Link>
      <HorizontalGrid data={organizations} />
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
      <HorizontalGrid data={articles} />
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
      <HorizontalGrid data={workshops} />
    </div>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  const retrieveData = async (callback) => {
    if (callback) {
      const result = await callback();
      const json_string = JSON.stringify(result);
      const data = JSON.parse(json_string);
      return data;
    } else {
      throw new Error("No Callback Was Given");
    }
  };

  let articles = await retrieveData(getArticles);
  let workshops = await retrieveData(getWorkshops);
  let organizations = await retrieveData(getOrganizations);

  return {
    props: {
      data: { articles, workshops, organizations },
    },
  };
}
