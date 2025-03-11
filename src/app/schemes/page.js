"use client";

import { useState, useEffect } from "react";
import NavBar from "@/components/navbar.jsx"


export default function LatestGovSchemes() {
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    fetch("/api/scheme", { method: "GET" })
      .then((response) => response.json())
      .then((data) => setSchemes(data))
      .catch((error) => console.error("Error fetching schemes:", error));
  }, []);

  return (
    <div>
      <NavBar />
      <div className="pt-24 min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-200 to-yellow-100 p-6">
        <h1 className="text-5xl font-extrabold text-green-800 mb-10 drop-shadow-lg">🌿 Latest Government Schemes 🌾</h1>
        
        <div className="w-full max-w-6xl bg-white p-10 rounded-3xl shadow-2xl grid gap-6 border border-green-300">
          {schemes.length > 0 ? (
            schemes.map((scheme, index) => (
              <div key={index} className="p-6 border-l-8 border-green-600 rounded-lg shadow-md bg-green-50">
                <h2 className="text-3xl font-bold text-green-900">{scheme.title}</h2>
                <p className="text-gray-700 mt-3">{scheme.description}</p>
                <a href={scheme.link} className="text-green-700 mt-4 inline-block font-medium underline" target="_blank" rel="noopener noreferrer">
                  🌱 Learn More
                </a>
              </div>
            ))
          ) : (
            <p className="text-gray-700 text-lg font-medium">🌾 Loading schemes...</p>
          )}
        </div>
      </div>
    </div>
  );
}