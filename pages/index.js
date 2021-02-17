import Head from "next/head";
import Layout from "../components/UI/Layout";
// import dbConnect from "../utils/dbConnect";
// import { getArticles } from "./api/articles/index";
// import { getWorkshops } from "./api/workshops/index";
// import { getOrganizations } from "./api/organizations";

import Main from "../components/Index/Core/Main";

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
        marginTop: 0,
      }}
    >
      <Head>
        <title>Covid 19 Task Force on Domestic Violence UK & EU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Main data={data} />
      </Layout>
    </div>
  );
}

const fetchData = async (parameters) => {
  let res = await fetch(`https://taskforce-cms.vercel.app/api/${parameters}`);
  let result = await res.json();
  const data = result.data;
  return data;
};

export async function getStaticProps() {
  // let res = await fetch("https://taskforce-cms.vercel.app/api/workshops");
  // let result = await res.json();

  let workshops = await fetchData("workshops");
  let articles = await fetchData("articles");

  // Sort

  workshops = workshops.sort((a, b) => a.position - b.position);

  return {
    props: {
      data: { workshops, articles },
    },
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
//   let workshops = await retrieveData(getWorkshops);
//   // let organizations = await retrieveData(getOrganizations);

//   return {
//     props: {
//       data: { articles, workshops },
//     },
//   };
// }
