import Head from "next/head";
import dbConnect from "../../utils/dbConnect";
import Link from "next/link";
import { getOrganizations } from "../api/organizations/index";

export default function Home({ organizations }) {
  return (
    <div>
      <Head>
        <title>Organizations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        {organizations.map((organization) => {
          return (
            <li>
              <Link href={`/organizations/${organization._id}`}>
                {organization.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  const result = await getOrganizations();
  const json_string = JSON.stringify(result);
  const organizations = JSON.parse(json_string);

  return {
    props: {
      organizations: organizations,
    },
  };
}
