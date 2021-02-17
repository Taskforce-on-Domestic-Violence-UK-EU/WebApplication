import Head from "next/head";
import Layout from "../../components/UI/Layout";
import Team from "../../components/Team/Core/Main";

import team from "../../lib/team/teamData";

export default function Home({}) {
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
        <title>Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Team team={team} />
      </Layout>
    </div>
  );
}
