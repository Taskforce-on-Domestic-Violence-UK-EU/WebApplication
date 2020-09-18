import Head from "next/head";
import Layout from "../../components/Layout";
import Organization from "../../models/organization";
import dbConnect from "../../utils/dbConnect";

export default function Page({ organization }) {
  return (
    <div>
      <Head>
        <title>{organization.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>{organization.title}</h1>
        <p>{organization.description}</p>
      </Layout>
    </div>
  );
}

// TODO : Switch to Static ?

// export async function getServerSideProps({ params }) {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library

//   await dbConnect();

//   const id = params.id;
//   const result = await getArticle(id);
//   const json_string = JSON.stringify(result);
//   const article = JSON.parse(json_string);

//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       article: article,
//     },
//   };
// }

export async function getServerSideProps({ params }) {
  await dbConnect();

  var organization = await Organization.findById(params.id);
  organization = JSON.stringify(organization);
  organization = JSON.parse(organization);

  return {
    props: {
      organization: organization,
    },
  };
}
