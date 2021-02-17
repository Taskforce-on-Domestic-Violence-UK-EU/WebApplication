import Head from "next/head";
import Layout from "../../components/UI/Layout";
import Workshop from "../../components/Workshops/Workshop/Main";
import { useEffect } from "react";

// Hooks
import useWidth from "../../hooks/useWidth";

export default function Home({ workshop, articles }) {
  const { width, setWidth } = useWidth();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  if (width < 850) {
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
          <Workshop workshop={workshop} articles={articles} />
        </Layout>
      </div>
    );
  } else {
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
          <Workshop workshop={workshop} articles={articles} />
        </Layout>
      </div>
    );
  }
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

const fetchArticle = async (id) => {
  const req = await fetch(
    `https://taskforce-cms.vercel.app/api/articles/${id}`
  );
  const res = await req.json();
  const data = res.data;
  return data;
};

const fetchArticles = async (workshop) => {
  let batch = [];

  for (var id of workshop.articles) {
    console.log(id);
    var article = await fetchArticle(id);
    batch.push(article);
  }
  return batch;
};

export async function getStaticProps(context) {
  const params = context.params;
  const res = await fetch(
    `https://taskforce-cms.vercel.app/api/workshops/${params.id}`
  );
  const result = await res.json();

  const workshop = result.data;
  const articles = await fetchArticles(workshop);

  return {
    props: {
      workshop,
      articles,
    },
    revalidate: 60,
  };
}
