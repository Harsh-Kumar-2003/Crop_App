import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import Divider from "./Divider";

export default function AppSidebar() {
  const path = usePathname();

  return (
    <nav
      className="inline-flex mx-auto flex-col text-center gap-2
text-black"
    >
      <Link
        href={"/admin/user"}
        className={
          "flex gap-4 p-2 " + (path === "/admin/user" ? "text-blue-500" : "")
        }
      >
        <span>User Management</span>
      </Link>

      <Link
        href={"/admin/appointments"}
        className={
          "flex gap-4 p-2 " +
          (path === "/admin/appointments" ? "text-blue-500" : "")
        }
      >
        <span>Appointments</span>
      </Link>

      <Link
        href={"/admin/reviews"}
        className={
          "flex gap-4 p-2 " + (path === "/admin/reviews" ? "text-blue-500" : "")
        }
      >
        <span>Reviews</span>
      </Link>

      <Link
        href={"/admin/revenue"}
        className={
          "flex gap-4 p-2 " + (path === "/admin/revenue" ? "text-blue-500" : "")
        }
      >
        <span>Revenue</span>
      </Link>

      <Link
        href={"/admin/task"}
        className={
          "flex gap-4 p-2 " + (path === "/admin/task" ? "text-blue-500" : "")
        }
      >
        <span>Task Management</span>
      </Link>

      <Link
        href={"/admin/notifications"}
        className={
          "flex gap-4 p-2 " +
          (path === "/admin/notifications" ? "text-blue-500" : "")
        }
      >
        <span>Notifications</span>
      </Link>
    </nav>
  );
}
