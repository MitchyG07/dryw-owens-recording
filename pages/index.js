import { server } from "../config"
import { NextSeo } from "next-seo"
import CreditList from "../components/CreditList"
import FooterComp from "../components/FooterComp"

export default function Home({ credits }) {
  return (
    <div>
      <CreditList credits={credits} />
      <FooterComp />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/credits`)
  const credits = await res.json()

  return {
    props: {
      credits,
    },
  }
}
