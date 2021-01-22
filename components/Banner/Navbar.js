import React from "react";
import { Link } from "react-scroll";
import { Row, Col } from "reactstrap";
import Overview from "../SVGS//headers/overviewIcon.svg";
import Int from "../SVGS/headers/interactionIcon.svg";
import Regression from "../SVGS//headers/regressionIcon.svg";
import Predictor from "../SVGS//headers/predictorIcon.svg";
import Country from "../SVGS//headers/countryIcon.svg";

function Navbar() {
  return (
    <div className="iconbar my-auto">
      <Row>
        <Col>
          <Link
            hashSpy={true}
            href="overview"
            spy={true}
            offset={-200}
            smooth={true}
            duration={500}
          >
            {" "}
            <div className="btn">
              {" "}
              <Overview
                style={{
                  height: " 20px",
                  width: "20px",
                  margin: "10px",
                }}
              />
            </div>
            <div> Overview</div>{" "}
          </Link>
        </Col>
        <Col>
          <Link
            hashSpy={true}
            href="country"
            spy={true}
            offset={-200}
            smooth={true}
            duration={500}
          >
            {" "}
            <div className="btn">
              {" "}
              <Country
                style={{
                  height: " 20px",
                  width: "20px",
                  margin: "10px",
                }}
              />
            </div>
            <div> Country Analysis</div>
          </Link>
        </Col>
        <Col>
          {" "}
          <Link
            hashSpy={true}
            href="regression"
            spy={true}
            offset={-200}
            smooth={true}
            duration={500}
          >
            <div className="btn">
              <Regression
                style={{
                  height: " 20px",
                  width: "20px",
                  margin: "10px",
                }}
              />{" "}
            </div>
            <div>Regression</div>
          </Link>
        </Col>
        <Col>
          {" "}
          <Link
            hashSpy={true}
            href="interaction"
            spy={true}
            offset={-200}
            smooth={true}
            duration={500}
          >
            {" "}
            <div className="btn">
              {" "}
              <Int
                style={{
                  height: " 20px",
                  width: "20px",
                  margin: "10px",
                }}
              />{" "}
            </div>
            <div>Interaction</div>{" "}
          </Link>
        </Col>
        <Col>
          {" "}
          <Link
            hashSpy={true}
            href="predictor"
            spy={true}
            offset={-200}
            smooth={true}
            duration={500}
          >
            {" "}
            <div className="btn">
              {" "}
              <Predictor
                style={{
                  height: " 20px",
                  width: "20px",
                  margin: "10px",
                }}
              />{" "}
            </div>
            <div>Key Predictors</div>{" "}
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Navbar;
