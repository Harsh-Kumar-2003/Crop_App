import React from "react";
import soil from "@/public/images/soil.jpg";
import Image from "next/image";

const CardC = () => {
  return (
    <div
      className="shadow-lg rounded-lg p-6 w-full h-auto flex flex-col justify-between text-black"
      style={{
        backgroundImage: `url(${soil.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-8xl font-bold mx-auto text-lime-950 relative left-64 top-20">
        Soil and <br /> Fertilization
      </h1>
      <div className="text-black text-3xl my-auto text-center relative left-80 bottom-12 hidden lg:block">
        <p className="relative top-2">
          Improving soil fertility, pH and water management.
          <br /> Preventing soil erosion and modifying soil structure.
        </p>
      </div>
    </div>
  );
};

export default CardC;
