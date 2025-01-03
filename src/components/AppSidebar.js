import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

export default function AppSidebar({ user }) {
  const path = usePathname();

  return (
    <nav
      className="inline-flex mx-auto flex-col text-center gap-2
text-black"
    >
      <Link
        href={`/user/${user}/profile`} // Use the dynamic uri in the href
        className={`flex gap-4 p-2 ${
          path === `/user/${user}/profile` ? "text-blue-600" : ""
        }`} // Check if the current path matches
      >
        <span>Profile</span>
      </Link>

      <Link
        href={`/user/${user}/cropRecommendation`}
        className={
          "flex gap-4 p-2 " +
          (path === `/user/${user}/cropRecommendation` ? "text-green-500" : "")
        }
      >
        <span>Crop Recommendation</span>
      </Link>

      <Link
        href={`/user/${user}/soilConditioning`}
        className={
          "flex gap-4 p-2 " +
          (path === `/user/${user}/soilConditioning` ? "text-amber-700" : "")
        }
      >
        <span>Soil Conditioning</span>
      </Link>

      <Link
        href={`/user/${user}/weatherUpdates`}
        className={
          "flex gap-4 p-2 " +
          (path === `/user/${user}/weatherUpdates` ? "text-sky-500" : "")
        }
      >
        <span>Weather Updates</span>
      </Link>

      <Link
        href={`/user/${user}/pestManagement`}
        className={
          "flex gap-4 p-2 " +
          (path === `/user/${user}/pestManagement` ? "text-red-600" : "")
        }
      >
        <span>Pest Management</span>
      </Link>

      <Link
        href={`/user/${user}/notifications`}
        className={
          "flex gap-4 p-2 " +
          (path === `/user/${user}/notifications` ? "text-yellow-500" : "")
        }
      >
        <span>Notifications</span>
      </Link>
    </nav>
  );
}
