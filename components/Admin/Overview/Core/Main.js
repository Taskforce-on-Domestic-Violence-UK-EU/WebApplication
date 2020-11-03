import Head from "next/head";
import Layout from "../../../UI/Layout";
import Research from "../../../Research/Core/Main";
import Workshops from "../../../Workshops/Core/Main";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import useWidth from "../../../../hooks/useWidth";
import AddButton from "./FloatingActionButton";

const useStyles = makeStyles((theme) => ({}));

export default function Home({ data, admin }) {
  const classes = useStyles();
  const { width, setWidth } = useWidth();
  const { articles, workshops } = data;

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  if (width < 500) {
    return null;
  } else {
    return (
      <div>
        <Head>
          <title>Admin</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          {admin ? <AddButton /> : null}
          <Research articles={articles} admin={true} />
          <Workshops workshops={workshops} admin={true} />
        </Layout>
      </div>
    );
  }
}
