import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <div>
      <div>
        <Head>
          <title>About</title>
        </Head>

        <h1>About Dryw</h1>
        <p>
          Dryw Owens is a recording engineer based out of Sacramento,
          California. From his early days recording with his band, Consider the
          Thief, Dryw has worked to tirelessly to perfect his craft since
          learning to record, mix, and master in 2007. In 2009, Dryw decided it
          was time to build his own studio, colloquially known as Little Russia.
          Eventually, Little Russia moved away from its original warehouse and
          Dryw Owens Recording was born; Located conveniently behind Dryw's
          home. Dryw has worked with many notable artists including: Dance Gavin
          Dance, Sianvar, Hail the Sun, Eidola, A Lot Like Birds, Mirours, Amber
          de La Rosa, and Stablemate.{" "}
        </p>

        <img
          src="https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/145554444_180438223870989_2488487235406087036_n.jpg?tp=1&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=D9dSFJT9uBgAX-8Kmt9&edm=AP_V10EBAAAA&ccb=7-4&oh=e6ce2b8b2db82795d17f0d5a1ccb0ce4&oe=60C0A077&_nc_sid=4f375e"
          alt="Dryw Owens"
        />
      </div>
    </div>
  );
};

export default about;
