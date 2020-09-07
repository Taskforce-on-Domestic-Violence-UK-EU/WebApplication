import Head from "next/head";
import Layout from "../../components/Layout";
import HorizontalGrid from "../../components/HorizontalGrid";
import dbConnect from "../../utils/dbConnect";
import { getWorkshops } from "../api/workshops/index";

export default function Home({ data }) {
  const { workshops } = data;

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
        Workshops
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
        Welcome to the Workshops Directory.
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
        Upcoming
      </header>
      <HorizontalGrid data={workshops} />
    </div>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  // TODO : Store this function in general util & reuse

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
      data: { workshops },
    },
  };
}
