// route.js

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/libs/mongodb"; // MongoDB connection
import User from "@/models/User";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials) {
        try {
          console.log("Authorization credentials:", credentials);
          const { email, password, mode, name } = credentials;

          // Ensure MongoDB connection is established
          if (mongoose.connection.readyState !== 1) {
            await mongoose.connect(process.env.MONGODB_URI);
          }

          if (mode === "signup") {
            // Check if user already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
              throw new Error("User already exists");
            }

            // Create a new user
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({ email, password: hashedPassword, name });
            await newUser.save();

            return {
              email: newUser.email,
              id: newUser._id,
              name: newUser.name,
            };
          }

          if (mode === "login") {
            // Find user by email
            const user = await User.findOne({ email });
            if (!user) {
              throw new Error("Invalid email or password");
            }

            // Verify password
            const isValidPassword = await bcrypt.compare(
              password,
              user.password
            );
            if (!isValidPassword) {
              throw new Error("Invalid email or password");
            }

            return { email: user.email, id: user._id, name: user.name };
          }

          throw new Error("Invalid mode");
        } catch (error) {
          console.error("Error in authorize function:", error.message);
          throw new Error(error.message);
        }
      },
    }),
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt({ token, user, account, profile }) {
      console.log("JWT callback triggered");

      // OAuth-based login (e.g., Google)
      if (await account) {
        console.log("OAuth login detected");
        token.accessToken = account.access_token;

        // Use profile data if available, otherwise fallback
        token.id = profile?.id || token.id;
        token.email = profile?.email || token.email;
        token.name = profile?.name || token.name;
      }

      // Credentials-based login
      if (await user) {
        console.log("Credentials-based login detected");
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }

      console.log("Token after JWT callback:", token);
      return token;
    },
    async session({ session, token }) {
      console.log("Session callback triggered");

      // Add custom properties to the session object
      session.accessToken = token.accessToken;
      session.user.id = token.id || session.user.id;
      session.user.email = token.email || session.user.email;
      session.user.name = token.name || session.user.name;

      console.log("Session after modification:", session);
      return session;
    },
    async redirect({ url, baseUrl }) {
      console.log("Redirect callback triggered");
      console.log("Redirecting to URL:", url);
      console.log("Base URL:", baseUrl);
      console.log("Callback URL:", url);

      // Redirect to a dynamic user-specific route after login
      if (url === `${baseUrl}/user/login` || url === `${baseUrl}/user/signup`) {
        return `${baseUrl}/user/`;
      }
      if (
        url === `http://192.168.29.127:3000/user/login` ||
        url === `http://192.168.29.127:3000/user/signup`
      ) {
        return `http://192.168.29.127:3000/user/`;
      }

      // Allow other valid redirections
      // if (url.startsWith("/")) return ${baseUrl}${url};
      // if (new URL(url).origin === baseUrl) return url;

      return baseUrl; // Default fallback
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };