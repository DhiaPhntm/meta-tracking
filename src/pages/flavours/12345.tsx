import Link from "next/link";
import Head from "next/head";

import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          property="og:url"
          content="https://localhost:3001/flavours/12345"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dhia's Flavour results" />
        <meta
          property="og:description"
          content="Dhia's flavour tastes are 30% Irish, 30% Dutch"
        />
        <meta property="og:image" content="https://localhost:3001/fruit.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.center}>Flavour Results</div>
        <Link href="/oauth">Oauth page</Link>
      </main>
    </>
  );
}
