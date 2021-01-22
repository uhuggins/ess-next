import React from "react";
import Link from "next/link";
import { FaTags } from "react-icons/fa";

function Tags({ data }) {
  console.log("Data is ", data);
  return (
    <>
      <FaTags color="#b7b7b7" style={{ marginRight: "5px" }} />
      <Link href={"/topic/" + data.topic.toLowerCase().split(" ").join("_")}>
        <button className="reptag">
          {data.topic ? data.topic : "needs a topic"}
        </button>
      </Link>
      <Link href={"/topic/" + data.tag1.toLowerCase().split(" ").join("_")}>
        <button className="reptag">
          {data.tag1 ? data.tag1 : "needs a tag"}
        </button>
      </Link>
    </>
  );
}

export default Tags;
