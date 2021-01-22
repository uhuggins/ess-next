import "../styles/globals.css";
// import "katext/dist/katex.min.css"; //Loaded in Global Styles, not working here.
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../styles/main.css";
import "../styles/sidemenu.css";
import "../styles/report.css";
import "../styles/highcharts.css";
import "../styles/theme-default.css";
import "../styles/Layout.css";
import "../styles/overheadNav.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
