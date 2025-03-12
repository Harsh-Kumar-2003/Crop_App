"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import animation library
import { useRouter } from "next/navigation";

export default function AppSidebar({ user, toggleNav }) {
  const path = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleNavigation = (href) => {
    if (path !== href) {
      setLoading(true);
      router.push(href); // Only navigate if it's a different page
    } else {
      toggleNav();
    }
  };

  useEffect(() => {
    setLoading(false);
    toggleNav();
  }, [path]);

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="inline-flex mx-auto flex-col text-center gap-2 text-black"
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {[
        { name: "Profile", path: "profile" },
        { name: "Crop Recommendation", path: "cropRecommendation" },
        { name: "Soil Conditioning", path: "soilConditioning" },
        { name: "Disease Prediction", path: "diseasePrediction" },
        { name: "Weather Updates", path: "weatherUpdates" },
        { name: "Pest Management", path: "pestManagement" },
        { name: "Notifications", path: "notifications" },
      ].map((item) => (
        <Link
          key={item.path}
          href={`/user/${user}/${item.path}`}
          className={`flex gap-4 p-2 ${
            path === `/user/${user}/${item.path}` ? "text-sky-500" : ""
          }`}
          onClick={(e) => {
            e.preventDefault(); // Prevent default link behavior
            handleNavigation(`/user/${user}/${item.path}`);
          }}
        >
          <span>{item.name}</span>
        </Link>
      ))}
    </motion.nav>
  );
}
