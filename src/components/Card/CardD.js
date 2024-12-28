import React from "react";
import about from "@/public/images/about.jpg";
import Image from "next/image";

const CardD = () => {
  return (
    <div
      className="shadow-lg rounded-lg p-6 w-full h-auto flex flex-col justify-between text-black"
      style={{
        backgroundImage: `url(${about.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-8xl font-bold text-center text-black">About Us</h1>
      <div className="text-white border-2 bg-stone-500 bg-opacity-45 h-2/3 lg:h-1/2 relative bottom-5 lg:bottom-28 mx-14">
        <p className="mx-5 my-5 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo velit
          pariatur consequuntur accusantium dolor praesentium repudiandae
          eligendi magni dolores, debitis iusto tempora expedita inventore
          asperiores quo dicta quaerat dignissimos officia! Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Nemo velit pariatur
          consequuntur accusantium dolor praesentium repudiandae eligendi magni
        </p>
      </div>
    </div>
  );
};

export default CardD;
