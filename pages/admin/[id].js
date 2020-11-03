import Head from "next/head";
import Layout from "../../components/UI/Layout";
import Main from "../../components/Admin/Article/Core/Main";
import useWitdh from "../../hooks/useWidth";
import { useEffect } from "react";
import { getArticle } from "../api/articles/[id]";
import dbConnect from "../../utils/dbConnect";

export default function Page({ article }) {
  const { width, setWidth } = useWitdh();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  if (width == 0) {
    return null;
  }

  if (width < 850) {
    return (
      <div>
        <Head>
          <title>
            Gentle medicine could radically transform medical practice
          </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <MobileArticle />
        </Layout>
      </div>
    );
  } else {
    return (
      <div>
        <Head>
          <title>
            Gentle medicine could radically transform medical practice
          </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <Main article={article} />
        </Layout>
      </div>
    );
  }
}

// TODO : Switch to Static ?

export async function getServerSideProps({ params }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  await dbConnect();

  const id = params.id;
  const result = await getArticle(id);
  const json_string = JSON.stringify(result);
  const article = JSON.parse(json_string);

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      article: article,
    },
  };
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:3000/api/articles`);
//   const result = await res.json();

//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       articles: result.data,
//     },
//   };
// }
