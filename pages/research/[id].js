import Head from "next/head";
import Layout from "../../components/UI/Layout";
import Main from "../../components/Research/Article/Main";
import Article from "../../models/article";
import MobileArticle from "../../components/Research/Article/MobileArticle";
import useWidth from "../../hooks/useWidth";
import { useEffect } from "react";
import dbConnect from "../../utils/dbConnect";

export default function Page({ article }) {
  const { width, setWidth } = useWidth();

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
          <title>{article.title}</title>
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

  var article = await Article.findById(params.id);
  article = JSON.stringify(article);
  article = JSON.parse(article);

  return {
    props: {
      article: article,
    },
  };
}
