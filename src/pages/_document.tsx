import Script from "next/script";
import { Html, Head, Main, NextScript } from "next/document";

import { FACEBOOK_APP_ID } from "@/config/environment";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* https://developers.facebook.com/quickstarts/671368507898087/?platform=web */}
        <Script
          id="fb"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.fbAsyncInit = function() {
              FB.init({
                appId      : ${FACEBOOK_APP_ID},
                xfbml      : true,
                version    : 'v15.0',
                status: true,
              });
              FB.AppEvents.logPageView();
            };
            (function(d, s, id){
               var js, fjs = d.getElementsByTagName(s)[0];
               if (d.getElementById(id)) {return;}
               js = d.createElement(s); js.id = id;
               js.src = "https://connect.facebook.net/en_US/sdk.js";
               fjs.parentNode.insertBefore(js, fjs);
             }(document, 'script', 'facebook-jssdk'));`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
