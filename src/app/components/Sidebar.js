"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import AppSidebar from "./AppSidebar";
import Divider from "./Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

let page = true;

const Sidebar = () => {
  return (
    <main className="md:flex min-h-screen bg-white">
      <label
        htmlFor="navCb"
        className="md:hidden ml-8 mt-4 p-4 mr-8 rounded-md bg-blue-500 shadow inline-flex items-center gap-2 cursor-pointer"
      >
        <span className="">
          <FontAwesomeIcon icon={faBars} />
        </span>
      </label>
      <input id="navCb" type="checkbox" className="hidden" />
      <label
        htmlFor="navCb"
        className="hidden backdrop fixed inset-0 bg-black/80 z-10"
      ></label>
      <aside className="bg-white w-48 p-4 pt-6 shadow fixed md:static -left-48 top-0 bottom-0 z-20 transition-all">
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
            {page && (
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
            )}
            {page && (
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
            )}
          </div>
          <Divider className="" />
          <div className="text-center">
            <AppSidebar />
          </div>
        </div>
      </aside>
      {/* <div className="grow">{children}</div> */}
    </main>
  );
};

export default Sidebar;
