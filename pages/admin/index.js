import Head from "next/head";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import SmallCard from "../../components/SmallCard";
import Main from "../../components/Admin/Overview/Core/Main";
import dbConnect from "../../utils/dbConnect";
import { getArticles } from "../api/articles/index";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>To the Core</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main data={data} />
    </div>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  const result = await getArticles();
  const json_string = JSON.stringify(result);
  const articles = JSON.parse(json_string);

  return {
    props: {
      data: articles,
    },
  };
}
