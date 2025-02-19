"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { signIn } from "next-auth/react";

export default function LoginWithGoogle() {
  return (
    <button
      onClick={() => signIn("google")}
      className="relative md:top-56 w-full md:w-40 h-16 md:h-32 cursor-pointer no-underline text-center text-[0.8em] md:leading-[1.2em] md:tracking-[0.1em] transition-all duration-250 rounded-3xl md:rounded-[44%_56%_65%_35%_/_57%_58%_42%_43%] md:px-4 md:py-2 hover:bg-cyan-400 hover:bg-opacity-40 hover:scale-105
       shadow-inner shadow-black md:shadow-[inset_10px_10px_10px_rgba(247,127,0,0.05),15px_25px_10px_rgba(247,127,0,0.1),15px_20px_20px_rgba(247,127,0,0.1),inset_-10px_-10px_15px_rgba(225,225,225,0.9)] 
        md:mx-24 mt-2 md:mt-9 flex items-center justify-center gap-3 font-medium md:border bg-blue-600 bg-opacity-70 md:bg-opacity-50 active:text-3xl text-white hover:text-white 
      md:focus:outline-none md:focus:ring active:text-white dark:hover:text-black dark:hover:text-3xl dark:hover:font-semibold"
    >
      <FontAwesomeIcon
        icon={faGoogle}
        className="h-6 w-6 text-white-700 text-3xl"
      />
      <span className="text-lg text-white-700">Sign In with Google</span>
    </button>
  );
}
