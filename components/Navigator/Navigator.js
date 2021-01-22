import React from "react";
import { Link } from "react-scroll";
import ReactTooltip from "react-tooltip";

function Navigator() {
  return (
    <div data-spy="affix" id="dot-nav">
      <Link
        hashSpy={true}
        to="demographics"
        activeClass="active1"
        spy={true}
        offset={-200}
        smooth={true}
        duration={500}
      ></Link>
      <ul>
        {" "}
        <Link
          hashSpy={true}
          to="overview"
          activeClass="active1"
          spy={true}
          offset={-200}
          smooth={true}
          duration={500}
        >
          {" "}
          <li data-tip="Overview" className="awesome-tooltip" title="Overview">
            {" "}
            <ReactTooltip place="left" type="dark" effect="solid" />
          </li>{" "}
        </Link>{" "}
        <Link
          hashSpy={true}
          to="country"
          spy={true}
          activeClass="active1"
          offset={-200}
          smooth={true}
          duration={500}
        >
          <li data-tip="Country" className="awesome-tooltip" title="Country">
            <ReactTooltip place="left" type="dark" effect="solid" />
          </li>
        </Link>
        <Link
          hashSpy={true}
          to="regression"
          spy={true}
          activeClass="active1"
          offset={-200}
          smooth={true}
          duration={500}
        >
          <li
            className="awesome-tooltip"
            data-tip="Regression"
            title="regression"
          >
            <ReactTooltip place="left" type="dark" effect="solid" />
          </li>
        </Link>
        <Link
          hashSpy={true}
          to="interaction"
          spy={true}
          activeClass="active1"
          offset={-200}
          smooth={true}
          duration={500}
        >
          <li
            className="awesome-tooltip"
            data-tip="Interactions"
            title="interaction"
          >
            <ReactTooltip place="left" type="dark" effect="solid" />
          </li>
        </Link>
        <Link
          hashSpy={true}
          to="predictor"
          spy={true}
          activeClass="active1"
          offset={-200}
          smooth={true}
          duration={500}
        >
          <li
            className="awesome-tooltip"
            data-tip="Key Predictors"
            title="predictor"
          >
            <ReactTooltip place="left" type="dark" effect="solid" />
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navigator;
