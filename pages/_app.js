import "../styles/globals.css"
import "bootstrap/dist/css/bootstrap.css"
import React from "react"
import Navi from "../components/Nav"
import "@fortawesome/fontawesome-free/js/fontawesome"
import "@fortawesome/fontawesome-free/js/solid"
import "@fortawesome/fontawesome-free/js/regular"
import "@fortawesome/fontawesome-free/js/brands"
import { NextSeo } from "next-seo"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Dryw Owens Music Recording, Audio Engineering, and Production Credits"
        description="Based in Northern California just east of Sacramento in Roseville, Dryw Owens has built a world class professional recording studio for musicians.  With over a decade of experience in the industry, and multiple Billboard charting credits to his name, Dryw brings his talent, passion, experience, and drive to deliver the highest quality recording product possible."
      />
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          width: "100%",
          top: "50%",
          left: "50%",
          height: "100%",
          objectFit: "fill",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src="/videos/drywStudio.mp4" type="video/mp4" />
      </video>
      <Navi />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
