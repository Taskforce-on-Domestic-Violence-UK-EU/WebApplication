import Head from "next/head";
import Main from "../../components/Admin/Overview/Core/Main";
import dbConnect from "../../utils/dbConnect";
import { getArticles } from "../api/articles/index";
import { getWorkshops } from "../api/workshops/index";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>To the Core</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main data={data} admin={true} />
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

  let articles = await retrieveData(getArticles);
  let workshops = await retrieveData(getWorkshops);
  // let organizations = await retrieveData(getOrganizations);

  return {
    props: {
      data: { articles, workshops },
    },
  };
}
