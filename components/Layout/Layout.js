import React, { useState } from "react";
import { useRouter } from "next/router";
import SideMenu from "../SideMenu/SideMenu";
import Login from "../Login/Login";
import Navigator from "../Navigator/Navigator";

function Layout({ children, topics }) {
  const router = useRouter();
  console.log("Router Props are ", router);

  //Start of Getting Page Title To Show in Navbar
  //When We have Dynamic Page Routing, we will get the PageTitle from Params.
  const { pathname } = router;
  const slugPage = pathname.split("/");
  const pageTitle = slugPage[3];
  //End of Getting Page Title To Show in Navbar

  const [slideMenu, setSlideMenu] = useState(false);
  return (
    <>
      <Login
        slideMenu={slideMenu}
        toggleSlideMenu={setSlideMenu}
        pageTitle={pageTitle}
      />
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
