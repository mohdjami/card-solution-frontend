import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "./db";

import { compare } from "bcrypt";
import { AuthOptions } from "next-auth";
import { User } from "lucide-react";
export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await db.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });
        if (!user) {
          return null;
        }
        if (!user.password) {
          const isValid = await compare(credentials.password, user.password!);
          if (!isValid) {
            return null;
          }
        }
        return {
          id: `${user.id}`,
          username: user.username,
          email: user.email,
          image: user.image,
          role: user.role,
        };
      },
    }),
  ],
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user = {
          ...session.user,
          id: token.id,
          name: token.name,
          email: token.email,
          image: token.picture,
          role: token.role,
        };
      }

      return session;
    },
    async jwt({ token, user }) {
      if (token.email !== null) {
        const dbUser = await db.user.findUnique({
          where: { email: token.email },
          select: {
            id: true,
            username: true,
            email: true,
            image: true,
            role: true,
          },
        });
        if (dbUser) {
          token.role = dbUser.role;
        }
        if (!dbUser) {
          if (user) {
            token.id = user?.id;
          }
          // Ensure that token always has an id property
          if (!token.id) {
            throw new Error("User id is missing");
          }
          return token;
        }
        return {
          id: dbUser.id,
          username: dbUser.username,
          email: dbUser.email,
          picture: dbUser.image,
          role: dbUser.role,
        };
      }
      // If token.email is null, throw an error instead of returning undefined
      throw new Error("Token email is null");
    },
  },
};
