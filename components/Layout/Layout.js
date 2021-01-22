import React, { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import Login from "../Login/Login";
import Navigator from "../Navigator/Navigator";

function Layout({ children, topics }) {
  const [slideMenu, setSlideMenu] = useState(false);
  return (
    <>
      <Login slideMenu={slideMenu} toggleSlideMenu={setSlideMenu} />
      <div className="layout">
        <div
          className="Side-menu-transition"
          style={
            slideMenu
              ? { transform: "translate(-400px)" }
              : { transform: "translate(0px)" }
          }
        >
          <SideMenu topics={topics} />
        </div>
        <div>
          <Navigator />
        </div>
        <main className="mount">{children}</main>
      </div>
    </>
  );
}

export default Layout;
