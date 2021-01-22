import { useState, useEffect } from "react";
import { Link } from "react-scroll";
//SVGS
import Overview from "../SVGS/headers/overviewIcon.svg";
import Country from "../SVGS/headers/countryIcon.svg";
import Reeg from "../SVGS/headers/reeg.svg";
import Int from "../SVGS/headers/predictorIcon.svg";
import Predictor from "../SVGS/headers/predictorIcon.svg";

function OverheadTitle() {
  const [showSectionNav, setShowSectionNav] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (document.documentElement.scrollTop > 90) {
        setShowSectionNav(true);
      } else if (document.documentElement.scrollTop < 50) {
        setShowSectionNav(false);
      }
    }
    //Cleanup
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showSectionNav]);

  return (
    <nav
      className={`navbar1 overhead-custom ${
        showSectionNav ? "slideIn" : "slideOut"
      }`}
    >
      <ul>
        <li className="header">
          <Link
            activeClass="active"
            to="overview"
            spy={true}
            offset={-200}
            smooth={true}
            duration={500}
          >
            <span>
              {" "}
              <Overview
                fill="#e1e1e1"
                style={{
                  verticalAlign: "middle",
                  borderStyle: "none",

                  margin: "0 10px 0 4px",
                  height: "20px",
                  width: "20px",
                }}
              />{" "}
              <p className="header">Overview</p>
            </span>
          </Link>
        </li>
        <li className="header">
          <Link
            activeClass="active"
            to="country"
            spy={true}
            offset={-200}
            smooth={true}
            duration={500}
          >
            {" "}
            <span>
              {" "}
              <Country
                fill="#e1e1e1"
                style={{
                  verticalAlign: "middle",
                  borderStyle: "none",

                  margin: "0 10px 0 4px",
                  height: "20px",
                  width: "20px",
                }}
              />{" "}
              <p className="header">Country</p>
            </span>
          </Link>
        </li>
        <li className="header">
          <Link
            activeClass="active"
            to="regression"
            spy={true}
            offset={-200}
            smooth={true}
            duration={500}
          >
            <span>
              {" "}
              <Reeg
                fill="#e1e1e1"
                style={{
                  verticalAlign: "middle",
                  borderStyle: "none",

                  margin: "0 10px 0 4px",
                  height: "20px",
                  width: "20px",
                }}
              />{" "}
              <p className="header">Regression</p>
            </span>
          </Link>
        </li>
        <li className="header">
          <Link
            activeClass="active"
            to="interaction"
            spy={true}
            offset={-200}
            smooth={true}
            duration={500}
          >
            <span>
              {" "}
              <Int
                fill="#e1e1e1"
                style={{
                  verticalAlign: "middle",
                  borderStyle: "none",

                  margin: "0 10px 0 4px",
                  height: "20px",
                  width: "20px",
                }}
              />{" "}
              <p className="header">Interaction</p>
            </span>
          </Link>
        </li>{" "}
        <li className="header">
          <Link
            activeClass="active"
            to="predictor"
            spy={true}
            offset={-200}
            smooth={true}
            duration={500}
          >
            <span>
              {" "}
              <Predictor
                fill="#e1e1e1"
                style={{
                  verticalAlign: "middle",
                  borderStyle: "none",

                  margin: "0 10px 0 4px",
                  height: "20px",
                  width: "20px",
                }}
              />{" "}
              <p className="header">Key Predictors</p>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default OverheadTitle;
