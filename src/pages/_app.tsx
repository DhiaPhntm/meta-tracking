import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import { FBAppStateProvider } from "../contexts/FBAppState";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <FBAppStateProvider>
        <Component {...pageProps} />
      </FBAppStateProvider>
    </SessionProvider>
  );
}
