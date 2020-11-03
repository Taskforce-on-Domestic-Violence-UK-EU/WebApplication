import Head from "next/head";
import Layout from "../../components/UI/Layout";
import dbConnect from "../../utils/dbConnect";
import { getWorkshops } from "../api/workshops/index";

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
        marginBottom: 45,
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

  let workshops = await retrieveData(getWorkshops);

  return {
    props: {
      workshops,
    },
  };
}
