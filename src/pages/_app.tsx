import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import { FBAppStateProvider } from "../contexts/FBAppState";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider
      session={session}
      // In case you use a custom path and your app lives at "/cool-app" rather than at the root "/"
      basePath=""
      // Re-fetch session every 5 minutes
      refetchInterval={5 * 60}
      // Re-fetches session when window is focused
      refetchOnWindowFocus={true}
    >
      <FBAppStateProvider>
        <Component {...pageProps} />
      </FBAppStateProvider>
    </SessionProvider>
  );
}
