import Head from "next/head";
import Layout from "../../components/UI/Layout";

import Resources from "../../components/Resources/Core/Main";

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
        <Resources />
      </Layout>
    </div>
  );
}
