import Head from "next/head";
import Layout from "../../../components/UI/Layout";
import Main from "../../../components/Admin/Workshops/Core/Main";
import useWidth from "../../../hooks/useWidth";
import { useEffect } from "react";
import { getWorkshop } from "../../api/workshops/[id]";
import dbConnect from "../../../utils/dbConnect";

export default function Page({ workshop }) {
  const { width, setWidth } = useWidth();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  if (width < 850) {
    return null;
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
          <Main workshop={workshop} />
        </Layout>
      </div>
    );
  }
}

// TODO : Switch to Static ?

export async function getServerSideProps({ params }) {
  await dbConnect();

  const retrieveData = async (callback) => {
    if (callback) {
      const result = await callback(params.id);
      const json_string = JSON.stringify(result);
      const data = JSON.parse(json_string);
      return data;
    } else {
      throw new Error("No Callback Was Given");
    }
  };

  let workshop = await retrieveData(getWorkshop);

  return {
    props: {
      workshop,
    },
  };
}
