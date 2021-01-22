import React from "react";
import OverviewSvg from "../../components/SVGS/headers/overviewIcon.svg";
import DotLoader from "react-spinners/DotLoader";
import LazyLoad from "react-lazyload";
import { Element, Link } from "react-scroll";
import { Row, Col } from "reactstrap";

// SVGS
import Data from "../../components/SVGS/ess/source.svg";
import Source from "../../components/SVGS/ess/Db.svg";
import Scale from "../../components/SVGS/ess/scale.svg";
import Observations from "../../components/SVGS/ess/observations.svg";
import Variable from "../../components/SVGS/ess/variable.svg";
import Cycle from "../../components/SVGS/ess/variable.svg";
import Countryimg from "../../components/SVGS/ess/country.svg";
//

function Overview({ data }) {
  console.log("Data is Overview is ", data);
  return (
    <>
      <div className="headerblock">
        <div className="line">
          <OverviewSvg
            style={{
              verticalAlign: "middle",
              borderStyle: "none",
              height: "48px",
              width: "48px",
              margin: "0 10px 0 4px",
            }}
          />
          <h2 className="tit" id="overview">
            {" "}
            Overview
          </h2>
        </div>
      </div>
      <Element name="overview">
        <Row>
          <Col sm="6">
            <Row>
              <ul>
                <Row
                  style={{
                    paddingTop: "8px",
                    paddingBottom: "8px",
                  }}
                >
                  <Data
                    style={{
                      height: "20px",
                      width: "20px",
                      marginRight: "9px",
                    }}
                  />{" "}
                  Data Source:{" "}
                  <Link href={"/source/ess"}>
                    <button
                      className="reptag sourcereptag"
                      style={{ marginLeft: "10px" }}
                    >
                      <Source
                        fill="#fff"
                        style={{
                          height: "10px",
                          width: "10px",
                          marginRight: "5px",
                          marginLeft: "5px",
                        }}
                      />
                      {data.data_source.long_name}
                    </button>
                  </Link>
                </Row>
                <Row
                  style={{
                    paddingTop: "8px",
                    paddingBottom: "8px",
                  }}
                >
                  <Variable
                    style={{
                      height: "20px",
                      width: "20px",
                      marginRight: "9px",
                    }}
                  />{" "}
                  Original Variable:
                  <i style={{ marginLeft: "4px" }}>
                    <b>happy </b>
                  </i>{" "}
                </Row>
                <Row
                  style={{
                    paddingTop: "8px",
                    paddingBottom: "8px",
                  }}
                >
                  <div id="cycleimg">
                    <Cycle
                      style={{
                        height: "20px",
                        width: "20px",
                        marginRight: "9px",
                      }}
                    />{" "}
                  </div>
                  <div id="textcycle" style={{ width: "300px" }}>
                    {" "}
                    Survey Cycles: {data.rounds}{" "}
                  </div>
                </Row>
                <Row
                  style={{
                    paddingTop: "8px",
                    paddingBottom: " 8px",
                  }}
                >
                  <Observations
                    style={{
                      height: "20px",
                      width: "20px",
                      marginRight: "9px",
                    }}
                  />{" "}
                  # of Valid Observations: 1333490
                </Row>
                <Row
                  style={{
                    paddingTop: "8px",
                    paddingBottom: " 8px",
                  }}
                >
                  <Countryimg
                    style={{
                      height: "20px",
                      width: "20px",
                      marginRight: "9px",
                    }}
                  />{" "}
                  # of Countries Covered: {data.countrycount}{" "}
                </Row>
                <Row
                  style={{
                    paddingTop: "8px",
                    paddingBottom: " 8px",
                    display: "block",
                  }}
                >
                  <Scale
                    style={{
                      height: "20px",
                      width: "20px",
                      marginRight: "9px",
                    }}
                  />{" "}
                  Original Scale: {data.scale}
                </Row>

                <Row>
                  {" "}
                  <Col>
                    <div id="xfer">
                      {" "}
                      <div style={{ fontSize: "20px", marginRight: "12px" }}>
                        {" "}
                        🛠
                      </div>{" "}
                      <div>
                        <b>Transformation </b>
                        <br></br>
                        {data.transformation}
                      </div>
                    </div>
                  </Col>{" "}
                </Row>
              </ul>
            </Row>
          </Col>
          <Col sm="6">
            {" "}
            <LazyLoad
              once={true}
              height={400}
              offset={0}
              placeholder={
                <div
                  style={{
                    marginTop: "40px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <DotLoader
                    margin={2}
                    size={50}
                    color={"#4590be"}
                    loading={true}
                  />
                </div>
              }
              debounce={200}
            >
              <img src="/graphs/map.png" height="500px" alt="" />
            </LazyLoad>
          </Col>
        </Row>
      </Element>
    </>
  );
}

export default Overview;
