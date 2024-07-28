import NextAuth, { NextAuthOptions, User as NextAuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import connectToDatabase from "../../../lib/mongoose";
import User from "../../../models/User";

interface Credentials {
  username?: string;
  email?: string;
  password: string;
}

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials: Credentials | undefined) => {
        if (!credentials) {
          throw new Error("No credentials provided");
        }

        await connectToDatabase();

        const user = await User.findOne({
          $or: [
            { email: credentials.email },
            { username: credentials.username },
          ],
        });

        if (!user) {
          throw new Error("No user found");
        }

        const isValid = await compare(credentials.password, user.password);

        if (!isValid) {
          throw new Error("Invalid credentials");
        }

        return {
          id: user._id.toString(),
          email: user.email,
          username: user.username,
        } as NextAuthUser;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
  },
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      session.user.id = token.id;
      return session;
    },
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = (req: any, res: any) => NextAuth(req, res, options);
export default handler;
