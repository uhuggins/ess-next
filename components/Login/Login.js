import React from "react";
import Link from "next/link";

function Login({ slideMenu, toggleSlideMenu }) {
  return (
    <nav
      id="someID"
      style={{ background: "null !important" }}
      className="navbar_report with-title"
    >
      <div
        className="d-flex"
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          width: "300px",
          background: "#1A2226",
          cursor: "pointer",
          display: "inline-flex",
          padding: "0px 10px",
        }}
      >
        <div
          className="p-2"
          style={{
            marginTop: 0,
            color: "rgb(205, 205, 205)",
            marginLeft: 0,
          }}
        >
          <Link
            href="/"
            style={{
              color: "rgb(255, 255, 255)",
              border: "1px solid rgb(92, 92, 92)",
              fontSize: "10px",
            }}
          >
            On
          </Link>
        </div>{" "}
        <div>
          <div style={{ textAlign: "center" }}>
            <Link
              href="/source/ess"
              style={{
                fontSize: "14px",
                color: "rgb(4, 249, 85)",
                fontFamily: "Arial",
                fontSize: "12px",
              }}
            >
              <button
                className="reptag sourcereptag"
                style={{ fontSize: "9px" }}
              >
                European Social Survey
              </button>
            </Link>
          </div>
        </div>
        {!slideMenu && (
          <i
            className="fas fa-times p-2"
            onClick={() => toggleSlideMenu(true)}
          ></i>
        )}
        {slideMenu && (
          <i class="fas fa-bars" onClick={() => toggleSlideMenu(false)}></i>
        )}
      </div>
    </nav>
  );
}

export default Login;
