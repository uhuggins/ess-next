import React from "react";
import { Element, Link, animateScroll as scroll } from "react-scroll";
import DotLoader from "react-spinners/DotLoader";
import LazyLoad from "react-lazyload";
import TeX from "@matejmazur/react-katex";
//SVGs
import RegressionIcon from "../../components/SVGS/headers/regressionIcon.svg";
function Regression({ data }) {
  return (
    <>
      <div className="headerblock">
        <div className="line">
          <RegressionIcon
            style={{
              verticalAlign: "middle",
              borderStyle: "none",
              height: "48px",
              width: "48px",
              margin: "0 10px 0 4px",
            }}
          />{" "}
          <h2 className="tit">Regression</h2>
        </div>
      </div>{" "}
      <Element name="regression">
        <p>
          This section formalizes the relationship between {data.shortname} and
          respondent demographics using a simple regression model of the
          following form:{" "}
        </p>
        <TeX block>{`
${"happiness"}_{ict}= 
\\theta_c+\\tau_t+\\delta Z+ \\epsilon
`}</TeX>
        <p>
          Here {data.shortname} for a respondent{" "}
          <b>
            <i>i</i>
          </b>{" "}
          in country{" "}
          <b>
            <i>c</i>
          </b>{" "}
          and survey cycle
          <b>
            <i> t</i>
          </b>{" "}
          is modeled as a function of their Demographics (Z) and Fixed effects
          for Country (<TeX>\theta_c</TeX>) & Survey year ( <TeX>\tau_t </TeX>
          ). Graphs below show the marginal effects from this regression
          (demographics are ordered by their relative predictive power, Country
          & Year fixed effects are presented at the bottom).
        </p>
        <div className="revdiv">
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
            {" "}
            {/* <img src={Effects} height="400px" alt="" /> */}
          </LazyLoad>
        </div>
      </Element>
    </>
  );
}

export default Regression;
