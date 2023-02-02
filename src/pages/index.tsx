import Head from "next/head";
import { signIn } from "next-auth/react";

import { useFBAppState } from "@/contexts/FBAppState";
import { FACEBOOK_APP_ID } from "@/config/environment";
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
          <a href={`https://developers.facebook.com/apps/${FACEBOOK_APP_ID}/`}>
            Facebook developer test-app link
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

          <button
            onClick={() =>
              signIn(
                "facebook",
                { callbackUrl: "https://localhost:3001/loggedin" },
                {
                  scope:
                    "email,user_birthday, user_age_range,user_friends, user_gender, user_location",
                }
              )
            }
          >
            Sign in with NextAuth Facebook
          </button>
          <br />
          <br />

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
      </main>
    </>
  );
}
