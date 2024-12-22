"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { signIn } from "next-auth/react";

export default function LoginWithGoogle() {
  return (
    <button
      onClick={() => signIn("google")}
      className="w-full mt-3 py-4 flex items-center justify-center gap-3
        rounded-lg bg-gradient-to-r from-green-500 to-green-700
        text-white font-semibold shadow-md transition-transform duration-300
        hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4
        focus:ring-green-300 dark:focus:ring-green-700"
    >
      <FontAwesomeIcon icon={faGoogle} className="h-6 w-6 text-white" />
      <span className="text-lg">Sign In with Google</span>
    </button>
  );
}
