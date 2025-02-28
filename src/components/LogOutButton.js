"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  const handleLogout = () => {
    signOut({
      callbackUrl: "/", // Optional: Redirect to home page or any specific URL after logout
    });
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-green-800 text-white px-4 py-2 rounded hover:bg-red-700"
    >
      Logout
    </button>
  );
}
