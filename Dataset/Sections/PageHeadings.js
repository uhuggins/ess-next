import { Link } from "react-scroll";
import { Row, Col } from "reactstrap";
//SVGS
import Overview from "../../components/SVGS/headers/overviewIcon.svg";
import Int from "../../components/SVGS/headers/interactionIcon.svg";
import Regression from "../../components/SVGS/headers/regressionIcon.svg";
import Predictor from "../../components/SVGS/headers/predictorIcon.svg";
import Country from "../../components/SVGS/headers/countryIcon.svg";

function PageHeadings() {
  return (
    <div className="" style={{ textAlign: "center" }}>
      <Row>
        <Col>
          <Link
            hashSpy={true}
            to="overview"
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
            to="country"
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
            to="regression"
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
            to="interaction"
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
            to="predictor"
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

export default PageHeadings;
