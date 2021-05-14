import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Navi from "../components/Nav";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navi />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
