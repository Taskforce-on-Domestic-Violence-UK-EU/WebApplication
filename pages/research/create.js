import Head from "next/head";
import Layout from "../../components/UI/Layout";
import { useEffect } from "react";
import dbConnect from "../../utils/dbConnect";

// Components

import Main from "../../components/Research/Create/Main";

export default function CreateArticle() {
  useEffect(() => {}, []);

  return (
    <div>
      <Head>
        <title>Create Article</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}
