import { useEffect } from "react";

import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

import styles from "../styles/Home.module.css";

export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    console.log("session: " + session?.user?.email);
  }, [session]);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          <button
            onClick={() =>
              signIn(
                "facebook",
                { callbackUrl: "https://localhost:3001/oauth" },
                {
                  scope: "email",
                }
              )
            }
          >
            Sign in with NextAuth Facebook
          </button>
          <br />
          {session?.user?.email}
          <br />
        </div>
        <Link href="/">Home/SDK page</Link>
      </main>
    </>
  );
}
