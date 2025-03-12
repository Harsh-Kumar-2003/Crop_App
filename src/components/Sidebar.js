"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AppSidebar from "./AppSidebar";
import Divider from "./Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LogoutButton from "./LogOutButton";

const Sidebar = ({ user , userName}) => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isSpecificScreenSize, setIsSpecificScreenSize] = useState(false);
  
    useEffect(() => {
      const updateScreenSize = () => {
        setIsSpecificScreenSize(
          window.innerWidth <= 1043 && window.innerHeight <= 1083
        );
      };
  
      updateScreenSize(); // Initial check
      window.addEventListener("resize", updateScreenSize);
  
      return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <nav className="bg-gray-200 rounded shadow-md p-4 flex justify-between items-center">
        <div className="flex">
          {/* Hamburger Button */}
          <button
            onClick={toggleNav}
            className="p-2 rounded-md bg-green-500 shadow inline-flex items-center gap-2 cursor-pointer z-30"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="pl-10 flex items-center">
            <img src="/fieldmaven1.png" alt="Logo" className="h-12 w-12 mr-2" />
            <span className="text-xl font-bold text-green-700">FieldMaven</span>
          </div>
        </div>
        {!isSpecificScreenSize&&(<div className="bg-green-100 text-green-700 font-medium px-4 py-2 rounded-full border border-green-500 shadow-sm">
          Hello, {userName}
        </div>)}
      </nav>

      {/* Overlay */}
      {isNavOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-20"
          onClick={toggleNav} // Close navigation when overlay is clicked
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`bg-white w-64 p-4 pt-6 shadow fixed top-0 bottom-0 z-30 transition-transform duration-300 ease-in-out ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="sticky top-0 pt-2">
          <div
            className="rounded-full overflow-hidden aspect-square w-12 mx-auto shadow-lg transition duration-300 ease-in-out 
              hover:shadow-xl hover:scale-105"
          >
            <Image
              src="/fieldmaven1.png"
              width={128}
              height={128}
              alt="avatar"
            />
          </div>
          {isSpecificScreenSize&&(<div className="bg-green-100 text-green-700 font-medium px-4 py-2 rounded-full border border-green-500 shadow-sm">
          Hello, {userName}
          </div>)}
          <div className="mb-4">
            <Link
              href="/"
              className="text-center mt-4 flex gap-1 items-center justify-center 
              bg-gradient-to-r from-white to-green-400 
              text-white font-semibold 
              py-2 px-4 rounded-lg 
              shadow-lg transition duration-300 ease-in-out 
              hover:shadow-xl hover:scale-105"
            >
              <span className="text-xl text-black">Home</span>
            </Link>
            {/* <Link
              href="/admin"
              className="text-center mt-4 flex gap-1 items-center justify-center 
              bg-gradient-to-r from-white to-blue-400 
              text-white font-semibold 
              py-2 px-4 rounded-lg 
              shadow-lg transition duration-300 ease-in-out 
              hover:shadow-xl hover:scale-105"
            >
              <span className="text-xl text-black">Administrator</span>
            </Link> */}
          </div>
          <Divider />
          <div className="text-center">
            <AppSidebar user={user} toggleNav={toggleNav} />
          </div>
          <Divider />
          <div className="text-center">
            <LogoutButton />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
