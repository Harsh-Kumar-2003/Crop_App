"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import AppSidebar from "./AppSidebar";
import Divider from "./Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LogoutButton from "./LogOutButton";
import { useState } from "react";

const Sidebar = ({ params }) => {
  const user = params.user;
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="md:flex min-h-screen bg-white">
      <button
        onClick={toggleNav}
        className="md:hidden ml-8 mt-4 p-4 mr-8 rounded-md bg-blue-500 shadow inline-flex items-center gap-2 cursor-pointer"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Overlay */}
      {isNavOpen && (
        <div
          className="backdrop fixed inset-0 bg-black/80 z-10"
          onClick={toggleNav} // Close navigation when overlay is clicked
        ></div>
      )}
      <aside
        className={`bg-white w-48 p-4 pt-6 shadow fixed md:static top-0 bottom-0 z-20 transition-all duration-300 ease-in-out ${
          isNavOpen ? "left-0" : "-left-48"
        }`}
      >
        <div className="sticky top-0 pt-2">
          <div
            className="rounded-full overflow-hidden aspect-square w-8 mx-auto
          shadow-lg transition duration-300 ease-in-out 
              hover:shadow-xl hover:scale-105"
          >
            <Image
              src="/smartdev_logo.svg"
              width={128}
              height={128}
              alt={"avatar"}
            />
          </div>
          <div className="mb-4">
            {
              <Link
                href={"/"}
                className="text-center mt-4 flex gap-1 items-center justify-center 
              bg-gradient-to-r from-white to-blue-400 
              text-white font-semibold 
              py-2 px-4 rounded-lg 
              shadow-lg transition duration-300 ease-in-out 
              hover:shadow-xl hover:scale-105"
              >
                <span className="text-xl text-black">Home</span>
              </Link>
            }
            {
              <Link
                href={"/admin"}
                className="text-center mt-4 flex gap-1 items-center justify-center 
              bg-gradient-to-r from-white to-blue-400 
              text-white font-semibold 
              py-2 px-4 rounded-lg 
              shadow-lg transition duration-300 ease-in-out 
              hover:shadow-xl hover:scale-105"
              >
                <span className="text-xl text-black">Administrator</span>
              </Link>
            }
          </div>
          <Divider className="" />
          <div className="text-center">
            <AppSidebar params={params} />
          </div>
          <Divider />
          <LogoutButton />
        </div>
      </aside>
      {/* <div className="grow">{children}</div> */}
    </div>
  );
};

export default Sidebar;
