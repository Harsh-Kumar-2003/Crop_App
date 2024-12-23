"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";

import { images } from "@/libs/images";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function Page() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      {/* Navbar */}
      <nav className="w-full my-1">
        <div className="h-16 mx-auto px-4 container flex items-center justify-between">
          <div className="mx-8">
            <Image
              src={logo}
              width={70}
              className="mx-4 rounded-2xl"
              alt="Logo"
            />
          </div>
          <div className="hidden md:flex space-x-8 text-gray-500 text-xl font-semibold">
            <a href="#" className="hover:text-green-500 hover:underline">
              Home
            </a>
            <a
              href="#services"
              className=" hover:text-green-500 hover:underline"
            >
              Services
            </a>

            <a href="#schemes" className="hover:text-green-500 hover:underline">
              Latest Schemes
            </a>
            <a
              href="#contact"
              className="hover:text-green-500 hover:underline "
            >
              Contact
            </a>
          </div>
          <Link href="/user/login">
            <button className="mx-11 px-6 py-2 bg-green-800 text-white rounded-xl hover:bg-indigo-600">
              Login
            </button>
          </Link>
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
            <a href="#" className="hover:text-green-500 hover:underline">
              Home
            </a>
            <a
              href="#services"
              className="hover:text-green-500 hover:underline"
            >
              Services
            </a>
            <a href="#schemes" className="hover:text-green-500 hover:underline">
              Latest Schemes
            </a>
            <a href="#contact" className="hover:text-green-500 hover:underline">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Swiper Content */}
      <div className="flex-grow relative">
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
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="h-full w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover "
                />
                {/* rounded-3xl */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

// "use client";
// import "./globals.css";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import Footer from "../components/footer.jsx";

// export default function Home() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div>
//       <nav className="bg-gray-200 shadow shadow-gray-300 w-full px-8 md:px-auto">
//         <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
//           {/* <div className="text-indigo-500 md:order-1 ">
//               <Image src='/smartdev_logo.jpg' width={60} height={60} alt="SmartDev Logo" />
//             </div> */}
//           <div className="text-indigo-500 md:order-1">
//             <Image src='/smartdev_name.jpg' width={150} height={100} alt="SmartDev Logo" />
//           </div>
//           <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
//             <ul className="hidden md:flex font-semibold justify-between">
//               <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Explore</a></li>
//               <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#about">About</a></li>
//               <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Contact</a></li>
//               <form className="max-w-md mx-auto"
//                 style={{ paddingLeft: 20 }}
//               >
//                 <label htmlFor="default-search" className="mb-0 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                     <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
//                     </svg>
//                   </div>
//                   <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Disease" required />
//                   <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
//                 </div>
//               </form>
//             </ul>
//           </div>
//           <div className="order-2 md:order-3">
//             <Link href='/user/signup'>
//               <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
//                 </svg>
//                 <span>Login</span>
//               </button>
//             </Link>
//           </div>
//           <button
//             className="md:hidden text-gray-500 hover:text-indigo-400 focus:outline-none"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
//             </svg>
//           </button>
//         </div>
//         {/* Mobile menu */}
//         <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
//           <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <li><a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700">Explore</a></li>
//             <li><a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700">About</a></li>
//             <li><a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700">Contact</a></li>
//             <form className="max-w-md mx-auto px-3 py-2">
//               <label htmlFor="default-search" className="mb-0 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                   <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
//                   </svg>
//                 </div>
//                 <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Disease" required />
//                 <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
//               </div>
//             </form>
//           </ul>
//         </div>
//       </nav>
//       <div className="introBox relative">
//         <Image src='/home_logo.jpg' width={1600} height={300} alt="Home_Logo" />
//         {/* <video id="introVideo" className="w-full h-auto" autoPlay muted>
//           <source src="/intro_vid.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video> */}
//         {/* Welcome to [Your Healthcare Website Name], your trusted partner in health and wellness. Our mission is to provide you with accurate, up-to-date medical information and resources to help you make informed decisions about your health. Whether you're a patient seeking advice, a healthcare provider looking for the latest research, or someone interested in maintaining a healthy lifestyle, we are here to support you every step of the way. Explore our comprehensive library of articles, tools, and services designed to enhance your well-being and empower you to take control of your health. From appointment scheduling and prescription refills to personalized health assessments and preventive care tips, we offer a wide range of features to meet your needs. Our platform is designed to foster a sense of community and support, connecting you with healthcare professionals and fellow patients. At [Your Healthcare Website Name], we believe in the power of knowledge and the importance of accessible healthcare. Our goal is to make healthcare information and services easily accessible to everyone, regardless of their location or background. We are committed to providing a user-friendly experience, ensuring that you can find the information and support you need quickly and easily. Join our community and embark on a journey towards better health and wellness. Your health is our priority, and we are dedicated to providing you with the best possible care and support. Together, we can achieve a healthier future, where everyone has the knowledge and resources to lead a healthy and fulfilling life. Thank you for choosing [Your Healthcare Website Name] as your partner in health. */}
//       </div>
//       <div className="py-12 bg-gray-100" id="about">
//         <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
//         <div className="flex flex-wrap justify-center gap-8">
//           <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
//             <Image src="/crp_prot.jpg" alt="Our Aim" width={150} height={150} />
//             <div className="mt-4">
//               <h4 className="text-2xl font-semibold">Crop Protection</h4>
//               <p className="mt-2 text-gray-600">
//                 Crop protection is a crucial aspect of agriculture that focuses on safeguarding crops from pests,
//                 diseases, and environmental challenges to maximize yield, ensure sustainability, and strengthen food security.
//                 As agriculture faces increasing pressures from population growth and climate change, adopting integrated pest
//                 management (IPM) strategies, which combine biological, cultural, and chemical methods, becomes essential.
//                 Farmers employ techniques like precision agriculture and genetic engineering to monitor crop health and enhance
//                 resilience against threats, while sustainable practices, such as crop rotation and the use of biopesticides,
//                 promote ecological balance. By prioritizing effective crop protection, farmers can secure their harvests,
//                 bolster economic stability, and contribute to a more sustainable and food-secure future.
//               </p>
//             </div>
//           </div>
//           <div className="about-card bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
//             <Image src="/crp_rec.jpg" alt="Our Vision" width={150} height={150} />
//             <div className="mt-4">
//               <h4 className="text-2xl font-semibold">Crop Recommendation</h4>
//               <p className="mt-2 text-gray-600">
//                 Crop recommendation involves suggesting the most suitable crops to grow in a specific area based on various factors
//                 such as climate, soil type, and market demand. This process takes into account local weather patterns,
//                 soil health, and nutrient availability, as well as regional agricultural practices. By analyzing these variables,
//                 crop recommendations can help farmers optimize their yields, reduce crop failures, and enhance sustainability.
//                 Advanced tools such as data analytics, machine learning, and geographic information systems (GIS) can further
//                 refine these recommendations. Ultimately, effective crop recommendation supports food security and boosts the
//                 profitability of farming operations.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
