import Head from "next/head";
import Layout from "../../components/UI/Layout";
// import dbConnect from "../../utils/dbConnect";
// import { getWorkshops } from "../api/workshops/index";

import retrieveData from "../../utils/retrieveData";

import Workshops from "../../components/Workshops/Core/Main";
import Search from "../../components/UI/Search";

export default function Home({ workshops }) {
  return (
    <div
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 0,
      }}
    >
      <Head>
        <title>Workshops</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Workshops workshops={workshops} displaySearch={true} />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://taskforce-cms.vercel.app/api/workshops");
  const result = await res.json();

  const workshops = result.data.sort((a, b) => a.position - b.position);

  return {
    props: {
      workshops,
    },
    revalidate: 60,
  };
}
