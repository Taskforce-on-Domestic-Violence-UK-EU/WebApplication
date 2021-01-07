import Head from "next/head";
import Layout from "../../components/UI/Layout";
// import dbConnect from "../../utils/dbConnect";
// import { getWorkshop } from "../api/workshops/[id]";

import Workshop from "../../components/Workshops/Workshop/Main";

export default function Home({ workshop }) {
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
        <title>{workshop.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Workshop workshop={workshop} />
      </Layout>
    </div>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://taskforce-cms.vercel.app/api/workshops");
  const result = await res.json();
  const workshops = result.data;

  // Get the paths we want to pre-render based on posts
  const paths = workshops.map((workshop) => ({
    params: { id: workshop._id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const params = context.params;
  const res = await fetch(
    `https://taskforce-cms.vercel.app/api/workshops/${params.id}`
  );
  const result = await res.json();

  const workshop = result.data;

  return {
    props: {
      workshop,
    },
  };
}

// export async function getServerSideProps({ params }) {
//   await dbConnect();

//   const retrieveData = async (callback) => {
//     if (callback) {
//       const result = await callback(params.id);
//       const json_string = JSON.stringify(result);
//       const data = JSON.parse(json_string);
//       return data;
//     } else {
//       throw new Error("No Callback Was Given");
//     }
//   };

//   // const retrieveBatchData = async (ids, callback) => {
//   //   var batch = [];

//   //   await ids.forEach(async (id) => {
//   //     var req = await retrieveData(callback, id);
//   //     var data = await req;
//   //     console.log(data);
//   //     batch.push(data);
//   //   });

//   //   return batch;
//   // };

//   let workshop = await retrieveData(getWorkshop);

//   return {
//     props: {
//       workshop,
//     },
//   };
// }
