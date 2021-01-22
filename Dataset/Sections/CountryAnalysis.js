import React from "react";
import DotLoader from "react-spinners/DotLoader";
import LazyLoad from "react-lazyload";
import { Element } from "react-scroll";
// SVGS
import CountrySvg from "../../components/SVGS/headers/countryIcon.svg";
//

function CountryAnalysis({ data }) {
  return (
    <>
      <div className="headerblock">
        <div className="line">
          <CountrySvg
            style={{
              verticalAlign: "middle",
              borderStyle: "none",
              height: "48px",
              width: "48px",
              margin: "0 10px 0 4px",
            }}
          />
          <h2 className="tit">Country Analysis</h2>
        </div>
      </div>
      <div>
        <Element name="country" style={{ width: "100%" }}>
          <div id="about"></div>
          <p>
            This section provides analysis at the Country level. First set of
            graphs show the correlation between average country {data.shortname}{" "}
            (computed over all survey cycles) with a variety of country-level
            attributes, grouped in four sets: Wealth, Inequality, Diversity, and
            Cultural.
          </p>
          <div className="bubdiv">
            <h3 align="center">Correlation with Country Attributes</h3>{" "}
            <LazyLoad
              once={true}
              height={400}
              offset={0}
              placeholder={
                <div
                  style={{
                    marginTop: "140px",
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
              <img src="/graphs/correlations.png" height="600px" alt="" />
            </LazyLoad>
          </div>
          <div className="headerblock">
            <div
              className="sectionline"
              style={{
                fontSize: "18px",
                fontWeight: "100",
              }}
            >
              Demographic Variation
            </div>
          </div>
          <p>
            European Social Survey provides a large set of demographic
            characteristics about survey respondents. These include measures of
            socio-economic status such as Income, education; respondents'
            political and religious ideologies, and other demographics such as
            Age group, Gender, and Marital status. Graph below shows how
            responses vary across countries and demographics{" "}
            <b>
              <i>within</i>
            </b>{" "}
            each country.
          </p>{" "}
          <div class="quote">
            <p>
              Demographic icons are ordered based on their predictive power
              using a Random Forest algorithm (see section Key Predictors
              below).
            </p>
          </div>
        </Element>{" "}
        <Element name="demographics">
          <div className="demodiv">
            <LazyLoad
              once={true}
              height={400}
              offset={0}
              placeholder={
                <div
                  style={{
                    marginTop: "110px",
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
              <img
                src="/graphs/country_demographics.png"
                height="900px"
                alt=""
              />
            </LazyLoad>
          </div>
        </Element>
      </div>
    </>
  );
}

export default CountryAnalysis;
