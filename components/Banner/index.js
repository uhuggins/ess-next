import React from "react";
import Tags from "./Tags";
import Question from "./Question";
import Info from "./Infotable";
import Navbar from "./Navbar";

function Banner({ data }) {
  return (
    <>
      <div className="coltitle">
        {" "}
        <h1 className="tit">{data.shortname}</h1>
      </div>
      <Tags data={data} />
      <Question data={data} />
      <Info data={data} />
      <Navbar />
    </>
  );
}

export default Banner;
