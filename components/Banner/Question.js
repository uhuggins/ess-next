import React from "react";

function Question({ data }) {
  const isBinary = data.final_scale === "Binary";
  const labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const labelText0 = labels[0];
  const labelText1 = labels.slice(-1)[0];

  let lem;
  if (data.scale == "10-point") {
    labels[0] = 0;
    labels[labels.length - 1] = 10;
    lem = "10";
  }

  return (
    <>
      <div
        id="topbar"
        style={{
          display: labels.length == 2 ? "flex" : "",
          marginBottom: labels.length == 2 ? "50px" : "",
        }}
      >
        <div className="quote">
          Question: <br></br>
          <i>{data.subtitle}</i> Please respond
          {data.scale == "Binary"
            ? "."
            : " on a " +
              data.scale +
              " scale (0 = " +
              labelText0 +
              ", " +
              lem +
              "=" +
              labelText1 +
              ")."}
        </div>
        <img src="/graphs/frequency.png" height="250px" alt="" />
      </div>
    </>
  );
}

export default Question;
