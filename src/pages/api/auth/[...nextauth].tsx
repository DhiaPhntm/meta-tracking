import FacebookProvider from "next-auth/providers/facebook";
import NextAuth from "next-auth";

import { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } from "@/config/environment";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
    }),
  ],
};
export default NextAuth(authOptions);
