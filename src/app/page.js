"use client";

import React, { useEffect, useState } from "react";
import NavBar from "@/components/navbar.jsx"
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { cards } from "@/libs/images";

export default function Page() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
  

  return (
    <div>
    <div className="h-screen overflow-hidden flex flex-col">
      {/* Navbar */}
      <NavBar />
      {/* Swiper Content */}
      <div className="flex-grow relative top-11">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="h-full"
        >
          {/* {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center h-full bg-yellow-100">
                {card.component}
              </div>
            </SwiperSlide>
          ))} */}
          {cards
            .filter(
              (_, index) =>
                !(isSpecificScreenSize && (index === 1 || index === 2)) // Exclude CardB and CardC when the condition is met
            )
            .map((card, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center h-full bg-yellow-100">
                  {card.component}
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
    </div>
  );
}