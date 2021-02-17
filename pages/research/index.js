import Head from "next/head";
import Layout from "../../components/UI/Layout";
// import dbConnect from "../../utils/dbConnect";
// import { getArticles } from "../api/articles/index";

import Research from "../../components/Research/Core/Main";

export default function Home({ articles }) {
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
        <title>Research</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Research articles={articles} displaySearch={true} />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://taskforce-cms.vercel.app/api/articles");
  const result = await res.json();

  const articles = result.data;

  return {
    props: {
      articles,
    },
    revalidate: 60,
  };
}

// export async function getServerSideProps() {
//   await dbConnect();

//   const retrieveData = async (callback) => {
//     if (callback) {
//       const result = await callback();
//       const json_string = JSON.stringify(result);
//       const data = JSON.parse(json_string);
//       return data;
//     } else {
//       throw new Error("No Callback Was Given");
//     }
//   };

//   let articles = await retrieveData(getArticles);

//   return {
//     props: {
//       articles,
//     },
//   };
// }
