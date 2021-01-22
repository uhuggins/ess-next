import React from "react";
import Link from "next/link";
import { Table } from "reactstrap";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdTextFields, MdEqualizer, MdFormatAlignLeft } from "react-icons/md";
import Source from "../SVGS/ess/Db.svg";

function Info({ data }) {
  return (
    <Table
      className="infotable"
      style={{ marginTop: "2em", marginBottom: "2em" }}
      responsive
    >
      <thead>
        <tr>
          <th>
            {" "}
            <FaGlobeAmericas /> Data Source{" "}
          </th>
          <th>
            {" "}
            <MdFormatAlignLeft /> Time Period
          </th>
          <th>
            {" "}
            <FaGlobeAmericas />
            Geography
          </th>
          <th>
            {" "}
            <MdTextFields />
            Original Variable
          </th>
          <th>
            {" "}
            <MdEqualizer />
            Observations
          </th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ textAlign: "center" }}>
          <td>
            <Link href={"/source/ess"}>
              <button className="reptag sourcereptag">
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
          </td>
          <td>{data.data_source.timespan}</td>
          <td>{data.data_source.geo}</td>
          <td>happy</td>
          <td>150003</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Info;
