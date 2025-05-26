"use client";

import { useEffect, useState } from "react";

export default function Result() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("crop_result");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  if (!data) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-green-300 p-4">
      <div
        className="
          bg-white 
          rounded-xl 
          shadow-2xl 
          p-8 
          max-w-sm 
          text-center 
          animate-fadeInScale
        "
      >
        <h2 className="text-3xl font-bold text-green-700 mb-4">Prediction:</h2>
        <p className="text-xl text-gray-800">{data['result']}</p>
      </div>
    </div>
  );
}
