import React from "react";
import "./CardA.css";
import new_bg from "@/public/images/bg1.jpg";

const CardA = () => {
  return (
    <div
      className="shadow-lg rounded-lg p-6 w-full h-auto flex-col justify-between text-black "
      style={{
        backgroundImage: `url(${new_bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-3xl sm:text-7xl lg:text-8xl font-bold text-center text-white relative top-40 left-5 ">
        CROP MANAGEMENT <br /> SYSTEM
      </h1>
      <div className="text-black-600" id="soil"></div>
    </div>
  );
};

export default CardA;
