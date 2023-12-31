import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        "277692744282-4berhn25p8u3a26125e6da1kimj0tteg.apps.googleusercontent.com" as string,
      clientSecret: "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" as string,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn(user: any) {
      return true;
    },
  },
};
