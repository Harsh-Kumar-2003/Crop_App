"use client";

import Image from "next/image";
import logo from "@/public/images/logo.jpg";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function NavBar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const [loading, setloading] = useState(false);
    const router = useRouter();
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

    const handleClick = (e) => {
      e.preventDefault();
      setloading(true);
      router.push("/user/login");
    };

    return (
    <nav className="w-full my-1" id="navBar">
        <div className="h-16 mx-auto px-4 container flex items-center justify-between">
          <div className="mx-4 flex items-center">
            <Image
              src={logo}
              width={70}
              className="mx-4 rounded-2xl"
              alt="Logo"
            />
            <div className="font-bold text-gray-700 text-3xl">FieldMaven</div>
          </div>
          <div className="hidden md:flex space-x-8 text-gray-500 text-xl font-semibold">
            <a
              href="/"
              className=" hover:text-green-500 hover:underline"
            >
              Home
            </a>
            <a
              href="/services"
              className=" hover:text-green-500 hover:underline"
            >
              Services
            </a>
            <a href="/schemes" className="hover:text-green-500 hover:underline">
              Latest Schemes
            </a>
            <a
              href="/contact"
              className="hover:text-green-500 hover:underline "
            >
              Contact
            </a>
          </div>
          {!isSpecificScreenSize &&(<button className="mx-11 px-6 py-2 bg-green-800 text-white rounded-xl hover:bg-indigo-600" onClick={handleClick}>
            {loading ? "Loading" : "Login"}
          </button>)}

          <button
            className="md:hidden text-gray-500 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:hidden bg-white shadow-md`}
        >
          <div className="flex flex-col space-y-4 text-gray-500 text-lg font-semibold p-4">
          <a
              href="/"
              className=" hover:text-green-500 hover:underline"
            >
              Home
            </a>
            <a
              href="/services"
              className="hover:text-green-500 hover:underline"
            >
              Services
            </a>
            <a href="/schemes" className="hover:text-green-500 hover:underline">
              Latest Schemes
            </a>
            <a href="/contact" className="hover:text-green-500 hover:underline">
              Contact
            </a>
            {isSpecificScreenSize &&(<button className="mx-11 px-6 py-2 bg-green-800 text-white rounded-xl hover:bg-indigo-600" onClick={handleClick}>
            {loading ? "Loading" : "Login"}
          </button>)}
          </div>
        </div>
      </nav>
    )
}