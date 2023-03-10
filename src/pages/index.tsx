import Link from "next/link";
import Head from "next/head";

import { useFBAppState } from "@/contexts/FBAppState";
import FBRevokePermissions from "@/components/FBRevokePermissions";

import styles from "../styles/Home.module.css";
import FBShare from "../components/FBShare";
import FBLogout from "../components/FBLogout";
import FBLoginStatus from "../components/FBLoginStatus";
import FBLoginPrompt from "../components/FBLoginPrompt";

export default function Home() {
  const { FBStatus } = useFBAppState();
  return (
    <>
      <Head>
        <title>meta-tracking test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.center}>
          <a href={`https://www.facebook.com/profile.php?id=100088228576719`}>
            Facebook test page
          </a>
          <FBLoginStatus />
        </div>
        <div></div>

        <div className={styles.center}>
          <div
            className="fb-like"
            data-href="https://meta-tracking.vercel.app"
            data-width="500"
            data-layout="button_count"
            data-action="like"
            data-size="large"
          ></div>
          <br />
          <br />

          <FBShare />

          <FBLoginPrompt scope="" label="Basic Login" />
          <FBLoginPrompt scope="email" label="Email Login" />
          <FBLoginPrompt
            scope="email, user_friends"
            label="Email + Friends Login"
          />
          <FBLoginPrompt
            scope="email,user_birthday, user_age_range,user_friends, user_gender, user_location"
            label="Full Login"
          />
          <FBRevokePermissions />
          {FBStatus && FBStatus.status && FBStatus.status === "connected" && (
            <FBLogout />
          )}
        </div>
        <Link href="/oauth">Oauth page</Link>
      </main>
    </>
  );
}
