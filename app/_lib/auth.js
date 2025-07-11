import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET
    })
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    }
  },
  pages: {
    signIn: "/login"
  }
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
