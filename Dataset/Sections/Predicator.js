import React, { useState } from "react";
import { Element, Link, animateScroll as scroll } from "react-scroll";
import DotLoader from "react-spinners/DotLoader";
import LazyLoad from "react-lazyload";
import classnames from "classnames";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";

// SVGS
import PredicatorIcon from "../../components/SVGS/headers/predictorIcon.svg";
import HeatmapIcon from "../../components/SVGS/ess/heatmap.svg";
import DistributionIcon from "../../components/SVGS/ess/bubble.svg";

function Predicator() {
  const [activeTab, setActiveTab] = useState("distribution");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <div className="headerblock">
        <div className="line">
          <PredicatorIcon
            style={{
              verticalAlign: "middle",
              borderStyle: "none",
              height: "48px",
              width: "48px",
              margin: "0 10px 0 4px",
            }}
          />

          <h2 name="pred" className="tit">
            Key Predictors
          </h2>
        </div>
      </div>
      <Element name="predictor">
        <p>
          This section explores "variable importance" i.e. most important
          demographic predictors using a Random Forest algorithm. European
          Social Survey is large multi-national survey and pooled file across
          all survey cycles (2002-2018) provide sufficient data points to
          conduct analysis within each country. Such approach (coined "secret
          weapon" by Andrew Gelman<sup>1</sup>) can provide useful insights into
          general patterns observed in data and facilitate generalization.{" "}
        </p>
        <p>
          Here we use a similar idea and estimate RF model for each country
          separately. Specifically we use RF algorithm from H2O.ai to loop
          across all countries in the data. Besides other output, algorithm
          provides scaled variable importance for each demographic within each
          country. Heatmap below provides output from this exercise (see
          technical docs for full model details and replication codes).{" "}
        </p>

        <div className="heatmaptab">
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
            <div className="mb-2">
              <Nav tabs className="justify-content-center mb-2">
                <NavItem>
                  <NavLink
                    className={classnames(
                      "d-flex align-items-center h-100 w-100 ",
                      {
                        active: activeTab === "distribution",
                      }
                    )}
                    onClick={() => {
                      toggle("distribution");
                    }}
                  >
                    {" "}
                    <div className="tabname">
                      <DistributionIcon
                        style={{ width: "40px", height: "40px" }}
                        fill={
                          activeTab === "distribution" ? "#ff7a21" : "#000000"
                        }
                      />
                      Distribution
                    </div>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames(
                      "d-flex align-items-center h-100 w-100 ",
                      {
                        active: activeTab === "heatmap",
                      }
                    )}
                    onClick={() => {
                      toggle("heatmap");
                    }}
                  >
                    <HeatmapIcon
                      style={{ width: "40px", height: "40px" }}
                      fill={activeTab === "heatmap" ? "#ff7a21" : "#000000"}
                    />{" "}
                    <div className="tabname">Heatmap</div>
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab} className="w-100">
                <TabPane tabId="distribution">
                  <div className="l-body-outset">
                    <div
                      style={{
                        marginLeft: "-30%",
                        marginRight: "-30%",
                        backgroundColor: "#fff",
                      }}
                    >
                      <img
                        src="/graphs/variable_importance_2.png"
                        height="700px"
                      />
                    </div>{" "}
                  </div>
                </TabPane>
                <TabPane tabId="heatmap">
                  <div className="heatmap">
                    <img src="/graphs/variable_importance.png" height="700px" />
                  </div>
                </TabPane>
              </TabContent>
            </div>
          </LazyLoad>
        </div>
      </Element>
    </>
  );
}

export default Predicator;
