import Head from "next/head";
import Layout from "../components/Layout/Layout";
//Data
import hardTopics from "../Dataset/topiclist";

export default function PageNotFound() {
  return (
    <Layout topics={hardTopics}>
      <Head>
        <title>Page Not Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 style={{ marginTop: "5rem" }}>Page Not Found</h1>
    </Layout>
  );
}
