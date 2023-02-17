import Link from "next/link";
import Head from "next/head";

import { FACEBOOK_APP_ID } from "@/config/environment";

import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          property="og:url"
          content="https://meta-tracking.vercel.app/flavours/12345"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dhia's Flavour results" />
        <meta
          property="og:description"
          content="Dhia's flavour tastes are 30% Irish, 30% Dutch. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in ligula semper, luctus sapien ac, ornare mi. Sed fermentum in justo nec aliquam. Pellentesque condimentum dictum odio, sed bibendum justo elementum in. Suspendisse sit amet auctor diam. Praesent a semper nisi, non hendrerit leo. Quisque ornare justo blandit nunc vulputate, ac ornare risus porttitor. Fusce finibus lorem ut euismod pellentesque. Morbi efficitur, leo et consequat pulvinar, arcu odio pellentesque sapien, ac ornare nunc arcu ultrices felis. Quisque massa tortor, egestas at dapibus at, dictum vel nisi. Proin semper volutpat justo non posuere."
        />
        <meta
          property="og:image"
          content="https://meta-tracking.vercel.app/fruit.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="840" />
        <meta property="og:image:height" content="889" />

        <meta property="fb:app_id" content={FACEBOOK_APP_ID} />
      </Head>

      <main className={styles.main}>
        <div className={styles.center}>Flavour Results</div>
        <Link href="/oauth">Oauth page</Link>
      </main>
    </>
  );
}
