import React from "react";
import "./CardB.css";
import crop_recommendation from "@/public/images/crop_recommendation.jpg";
import Image from "next/image";

const CardB = () => {
  return (
    <div
      className="shadow-lg rounded-lg p-6 w-full h-auto flex flex-col justify-between text-black"
      style={{
        backgroundImage: `url(${crop_recommendation.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* <Image
        src={crop_recommendation}
        alt="Crop Recommendation"
        className="w-full h-full object-cover rounded-lg"
      ></Image> */}
      <h1 className="text-8xl font-bold text-center text-white relative top-10 left-10">
        Crop <br /> Recomendation
        <hr className="w-1/2 mx-auto relative left-28 border-t-2" />
      </h1>
      <div className="text-white text-3xl my-32 text-center relative bottom-20 left-64 hidden lg:block">
        Based on soil and weather conditions
      </div>
    </div>
  );
};

export default CardB;
