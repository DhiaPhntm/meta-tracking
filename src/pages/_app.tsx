import "../styles/globals.css";
import type { AppProps } from "next/app";

import { FBAppStateProvider } from "../contexts/FBAppState";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FBAppStateProvider>
      <Component {...pageProps} />
    </FBAppStateProvider>
  );
}
