"use client";
import { SessionProvider } from "next-auth/react";

export default function LoginLayout({ children }) {
  return (
    <>
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </>
  );
}
