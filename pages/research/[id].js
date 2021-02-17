import Head from "next/head";
import Layout from "../../components/UI/Layout";
import Main from "../../components/Research/Article/Main";
import MobileMain from "../../components/Research/Article/MobileMain";
import useWidth from "../../hooks/useWidth";
import { useEffect } from "react";

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
          <MobileMain article={article} />
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

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://taskforce-cms.vercel.app/api/articles");
  const result = await res.json();
  const articles = result.data;

  // Get the paths we want to pre-render based on posts
  const paths = articles.map((article) => ({
    params: { id: article._id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const params = context.params;
  const res = await fetch(
    `https://taskforce-cms.vercel.app/api/articles/${params.id}`
  );
  const result = await res.json();

  const article = result.data;

  return {
    props: {
      article,
    },
    revalidate: 60,
  };
}
