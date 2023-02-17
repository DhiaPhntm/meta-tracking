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
          content="Dhia's flavour tastes are 30% Irish, 30% Dutch"
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
