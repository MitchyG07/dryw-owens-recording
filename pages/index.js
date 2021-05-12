import { server } from "../config";
import { NextSeo } from "next-seo";
import CreditList from "../components/CreditList";

export default function Home({ credits }) {
  return (
    <div>
      <NextSeo
        title="Dryw Owens Music Recording, Audio Engineering, and Production Credits"
        description="Based in Northern California just east of Sacramento in Roseville, Dryw Owens has built a world class professional recording studio for musicians.  With over a decade of experience in the industry, and multiple Billboard charting credits to his name, Dryw brings his talent, passion, experience, and drive to deliver the highest quality recording product possible."
      />
      <CreditList credits={credits} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/credits`);
  const credits = await res.json();

  return {
    props: {
      credits,
    },
  };
};
