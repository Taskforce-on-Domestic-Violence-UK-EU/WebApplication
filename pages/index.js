import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Covid 19 Task Force on Domestic Violence UK & EU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: 52,
            width: "60%",
            textAlign: "left",
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
          }}
        >
          Hello! We are currently developing our application. Things should be
          up and running shortly. Current proposed release date is :
          <br />
          <br />
          <p
            style={{
              fontFamily: "Frank Ruhl Libre, serif",
              fontWeight: 500,
              fontSize: 32,
              width: "60%",
              textAlign: "left",
            }}
          >
            October 1st, 2020.
          </p>
        </p>
      </Layout>
    </div>
  );
}
