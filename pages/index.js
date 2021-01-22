import Head from "next/head";
import Layout from "../components/Layout/Layout";
//Data
import hardTopics from "../Dataset/topiclist";

export default function Home({ topics }) {
  return (
    <Layout topics={topics}>
      <Head>
        <title>Omar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  );
}

Home.getInitialProps = async function () {
  const topics = hardTopics;
  return {
    topics: topics,
  };
};
