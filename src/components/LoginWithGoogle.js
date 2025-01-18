"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { signIn } from "next-auth/react";

export default function LoginWithGoogle() {
  return (
    <button
      onClick={() => signIn("google")}
      className="w-3/4 mx-24 mt-16 py-4 flex items-center justify-center gap-3
        rounded-lg bg-transparent border-2 border-blue-700"
    >
      <FontAwesomeIcon icon={faGoogle} className="h-6 w-6 text-blue-700" />
      <span className="text-lg text-blue-700">Sign In with Google</span>
    </button>
  );
}
