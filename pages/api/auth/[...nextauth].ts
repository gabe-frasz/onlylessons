import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

// TODO: set google provider and update github callback before going to production

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID!,
    //   clientSecret: process.env.GOOGLE_SECRET!,
    // }),
  ],
};

export default NextAuth(authOptions);
