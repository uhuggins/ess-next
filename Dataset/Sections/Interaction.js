import React from "react";
import { Element } from "react-scroll";
import DotLoader from "react-spinners/DotLoader";
import LazyLoad from "react-lazyload";
// SVGS
import Int from "../../components/SVGS/headers/interactionIcon.svg";

function Interaction() {
  return (
    <>
      <div className="headerblock" style={{ marginTop: "175px" }}>
        <div className="line">
          <Int
            style={{
              verticalAlign: "middle",
              borderStyle: "none",
              height: "48px",
              width: "48px",
              margin: "0 10px 0 4px",
            }}
          />
          <h2 className="tit">Exploring Interactions</h2>
        </div>
      </div>
      <Element name="interaction">
        <p>
          The regression model presented below controls for country differences
          using country-specific fixed effects. In addition, all respondent
          demographics enter as main effects. This section explores potential{" "}
          <i>interactions</i> using the following approach: First, rather than
          using FE, we control for country differences using attributes defining
          each country (e.g. GDP, Gini). Next, these country attributes are
          discretized into groups for ease of visualization (e.g. Low, Middle,
          and High GDP countries). Finally, we fix Age Group as one demographic
          and explore all possible interactions with other demographics (see
          technical documentation for modeling rationale).
        </p>
        <p>
          As an example, if user selects GDP as country attribute and Education
          as respondent demographic, graphs display marginal effect from the
          following regression:
        </p>

        {/* <TeX block>
          {` ${shortname}_{ict} = (GDP* Age Group * Education) + \\newline Other Country
          Attributes+ Other Demographics+ \\theta_c+\\tau_t+ \\epsilon`}
        </TeX> */}

        <p>
          This model includes 3-way interaction between GDP of country, Age
          Group and Education of the respondent. Model controls of other country
          attributes such as Gini as well as all respondent demographics
          outlined above. Finally, we include random effects for Country and
          Survey year. Model is estimated using LME4 package in R (see technical
          documentation for details and replication codes).{" "}
        </p>

        <div className="intcon">
          <LazyLoad
            once={true}
            height={600}
            offset={0}
            placeholder={
              <div
                style={{
                  marginTop: "40px",
                  height: "600px",
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
            <img src="/graphs/interaction.png" height="700px" />
          </LazyLoad>
        </div>
      </Element>
    </>
  );
}

export default Interaction;
