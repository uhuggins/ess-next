import Head from "next/head";
import Layout from "../../../../components/Layout/Layout";
import Banner from "../../../../components/Banner/Banner";
//Data
import hardCodedData from "../../../../Dataset/data";
import hardTopics from "../../../../Dataset/topiclist";

//Sections
import PageHeadings from "../../../../Dataset/Sections/PageHeadings";
import Overview from "../../../../Dataset/Sections/Overview";
import Country from "../../../../Dataset/Sections/CountryAnalysis";
import Regression from "../../../../Dataset/Sections/Regression";
import Interaction from "../../../../Dataset/Sections/Interaction";
import Predicator from "../../../../Dataset/Sections/Predicator";
import OverheadTitle from "../../../../components/OverheadTitle/OverheadTitle";

function Happy({ topics, data }) {
  {
    /*Props Passed By GetIntiailProps API*/
  }
  return (
    <Layout topics={topics}>
      {" "}
      {/*Pass The Topics List for Side Menu*/}
      <Head>
        <title>Happy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OverheadTitle />{" "}
      {/*Pass The Headings of The Page for Above Navigation Bar*/}
      {/*The Below Components Are HardCoded - Modify Them As You Want*/}
      <Banner data={data} />
      <PageHeadings />
      <Overview data={data} />
      <Country data={data} />
      <Regression data={data} />
      <Interaction data={data} />
      <Predicator data={data} />
      {/*Sections Ends Here*/}
    </Layout>
  );
}

Happy.getInitialProps = async function () {
  //Fetch Topics From Backend
  //Fetch Content for Each Topic Clicked.
  const topics = hardTopics;
  const data = hardCodedData;
  //Return will Populate the Page Props with Topics and Data Key Value Pair
  return {
    topics: topics,
    data: data,
  };
};

export default Happy;
