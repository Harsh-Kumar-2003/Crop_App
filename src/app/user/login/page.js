"use client";

import { useState, useEffect } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { signIn } from "next-auth/react";
import LoginWithGoogle from "@/components/LoginWithGoogle";
import Image from "next/image";
import irrigation from "@/public/images/irrigation.jpg";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const { data: session } = useSession();
  console.log("Session data:", session);

  useEffect(() => {
    if (session) {
      router.replace("/user");
    }
  }, [session, router]);

  const [showModal, setShowModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleResetPassword = async (e) => {
  //   console.log("Resetting password...");
  //   try {
  //     // Send email to user with reset link
  //     const response = await fetch(`/api/reset-password?email=${resetEmail}`, {
  //       method: "POST",
  //     });
  //     if (response.ok) {
  //       console.log("Password reset email sent!");
  //     }
  //     const data = await response.json();
  //     console.log(data);
  //     alert("Password reset email sent!");
  //     setShowModal(false);
  //   } catch (error) {
  //     console.error("Error sending reset email:", error);
  //   }
  //   //e.preventDefault();
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    // Proceed with form submission

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate password length
    if (!password || password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    try {
      const result = await signIn("credentials", {
        email,
        password,
        mode: "login",
      });
    } catch (error) {
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${irrigation.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <aside className="pl-3 bg-black bg-opacity-50 md:bg-transparent relative block h-16  lg:col-span-5 lg:h-full xl:col-span-6">
        <a href="/">
          <Image
            src="/fieldmaven1.png"
            alt="A description of the image"
            width={70}
            height={70}
            className="rounded-2xl "
          ></Image>
        </a>
      </aside>
      <div className="flex justify-center items-center">
        <div className="w-[700px] h-[500px] mt-2 mb-32 relative left-52 hidden md:flex justify-center items-center rounded-[62%_38%_24%_76%_/_59%_60%_40%_41%] shadow-[inset_5px_2px_20px_rgba(0,0,0,0.4),25px_35px_20px_rgba(0,0,0,0.09),25px_30px_30px_rgba(0,0,0,0.2),inset_-20px_-20px_25px_rgba(255,255,255,0.9)] transition-all duration-300 hover:rounded-full before:content-[''] before:absolute before:top-[50px] before:left-[85px] before:w-[35px] before:h-[35px] before:rounded-full before:bg-gray-200 before:opacity-90 after:content[' '] after:absolute after:top-[85px] after:left-[110px] after:width-[15px] after:height-[15px] after:rounded-full after:bg-slate-400 after:opacity-90">
          <div className="relative flex justify-center items-center flex-col text-center p-10 gap-4">
            <p className="font-bold text-black text-4xl mb-6">Login</p>
            <form
              action=""
              onSubmit={handleSubmit}
              className="text-black text-center flex flex-col items-center relative"
            >
              <div
                className="relative w-4/5 h-14 shadow-[inset_10px_30px_10px_rgba(255,255,255,0.3),inset_-2px_-5px_10px_rgba(0,0,0,0.4),2px_2px_3px_rgba(255,255,255,1),5px_1px_5px_rgba(255,255,255,5)]
              hover:shadow-[inset_20px_30px_10px_rgba(0,0,0,0.1),inset_2px_5px_10px_rgba(0,0,0,0.4),15px_15px_10px_rgba(0,0,0,0),15px_10px_15px_rgba(255,255,255,0.1)] rounded-3xl"
              >
                <input
                  type="email"
                  id="Email"
                  name="email" // Update name to match formData
                  value={formData.email} // Bind value to formData
                  onChange={handleChange} // Use handleChange
                  placeholder="Email"
                  className=" placeholder:pl-2 placeholder:text-black rounded-3xl h-14 text-black bg-transparent w-full font-bold p-3 outline-none"
                />
              </div>

              <div
                className="border-2 relative w-4/5 h-14 mt-6 shadow-[inset_10px_30px_10px_rgba(255,255,255,0.3),inset_-2px_-5px_10px_rgba(0,0,0,0.4),2px_2px_3px_rgba(255,255,255,1),5px_1px_5px_rgba(255,255,255,5)]
              hover:shadow-[inset_20px_50px_10px_rgba(0,0,0,0.1),inset_2px_5px_10px_rgba(0,0,0,0.4),15px_15px_10px_rgba(0,0,0,0),15px_10px_15px_rgba(255,255,255,0.1)] rounded-3xl"
              >
                {/* <label htmlFor="Password" className=" text-black ">
                      Password
                    </label> */}
                <input
                  type={showPassword ? "text" : "password"}
                  id="Password"
                  name="password" // Update name to match formData
                  value={formData.password} // Bind value to formData
                  onChange={handleChange} // Use handleChange
                  placeholder="Password"
                  className="placeholder:pl-2 placeholder:text-black text-black rounded-3xl h-14  bg-transparent w-full font-bold p-3 outline-none "
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-7 transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-7 text-gray-600 " />
                  ) : (
                    <EyeIcon className="h-7 text-gray-600 " />
                  )}
                </button>
              </div>

              <div className="mr-6">
                <p className="bg-stone-600 bg-opacity-80 text-sm h-6 text-white justify-center items-center dark:text-white mt-8">
                  By using our services, you agree to our
                  <a
                    href="/t&c"
                    className="text-red-500 underline dark:text-red-400"
                  >
                    {" "}
                    terms and conditions{" "}
                  </a>
                  and
                  <a
                    href="/privacy_policy"
                    className=" text-red-500 underline dark:text-red-400 "
                  >
                    {" "}
                    privacy policy{" "}
                  </a>
                  .
                </p>
              </div>
              <button
                type="submit" // Ensure the button type is set to "submit"
                className="w-56 shadow-[inset_20px_50px_10px_rgba(0,0,0,0.1),inset_-2px_-5px_10px_rgba(255,255,255,1),15px_15px_10px_rgba(0,0,0,0.5),15px_10px_15px_rgba(0,0,0,0.5)]
            rounded-3xl mt-6 relative right-48 md:right-0 border border-blue-600 bg-blue-600  py-3 text-sm font-medium text-white transition  hover:text-lg
                    focus:outline-none focus:ring active:text-blue-500 dark:hover:text-white dark:hover:font-semibold"
              >
                Log In Now
              </button>
            </form>
          </div>
        </div>
        <div className="relative left-20 bottom-4 hidden md:flex">
          <LoginWithGoogle />
        </div>
        <a href="/user/signup">
          <p
            className="font-bold relative right-16 w-40 h-32  hidden md:flex bg-blue-300 bg-opacity-50 justify-center items-center cursor-pointer no-underline text-center text-[0.8em] leading-[1.2em] tracking-[0.1em] transition-all duration-250 rounded-[44%_56%_65%_35%_/_57%_58%_42%_43%] px-4 py-2 hover:bg-cyan-400 hover:bg-opacity-40 hover:scale-105
       shadow-[inset_10px_10px_10px_rgba(247,127,0,0.05),15px_25px_10px_rgba(247,127,0,0.1),15px_20px_20px_rgba(247,127,0,0.1),inset_-10px_-10px_15px_rgba(225,225,225,0.9)] "
          >
            Don't have an account?
            <span
              className="font-serif font-semibold text-red-500 underline dark:text-red-400 rounded-[49% 51% 52% 48% / 63% 59% 41% 37%] shadow-[inset_10px_10px_10px_rgba(247,127,0,0.05),15px_25px_10px_rgba(247,127,0,0.1),15px_20px_20px_rgba(247,127,0,0.1),
          inset_-10px_-10px_15px_rgba(255,255,255,0.5)] hover:rounded-e-full"
            >
              {" "}
              Create Now{" "}
            </span>
          </p>
        </a>
      </div>

      <div className="flex flex-col justify-center items-center md:hidden bg-black bg-opacity-50">
        <p className="font-bold text-white text-4xl ">Login</p>
        <form
          action=""
          onSubmit={handleSubmit}
          className="text-black text-center mt-10 mb-16 flex flex-col items-center relative"
        >
          <div
            className="w-full h-14 bg-white bg-opacity-40 shadow-[inset_10px_30px_10px_rgba(255,255,255,0.3),inset_-2px_-5px_10px_rgba(0,0,0,0.4),2px_2px_3px_rgba(255,255,255,1),5px_1px_5px_rgba(255,255,255,5)]
              hover:shadow-[inset_20px_30px_10px_rgba(0,0,0,0.1),inset_2px_5px_10px_rgba(0,0,0,0.4),15px_15px_10px_rgba(0,0,0,0),15px_10px_15px_rgba(255,255,255,0.1)] rounded-3xl"
          >
            <input
              type="email"
              id="Email"
              name="email" // Update name to match formData
              value={formData.email} // Bind value to formData
              onChange={handleChange} // Use handleChange
              placeholder="Email"
              className=" placeholder:pl-2 placeholder:text-black text-black bg-transparent w-full font-bold p-3 outline-none"
            />
          </div>

          <div
            className="border-2 h-14 mt-6 w-full bg-white bg-opacity-40 shadow-[inset_10px_30px_10px_rgba(255,255,255,0.3),inset_-2px_-5px_10px_rgba(0,0,0,0.4),2px_2px_3px_rgba(255,255,255,1),5px_1px_5px_rgba(255,255,255,5)]
              hover:shadow-[inset_20px_50px_10px_rgba(0,0,0,0.1),inset_2px_5px_10px_rgba(0,0,0,0.4),15px_15px_10px_rgba(0,0,0,0),15px_10px_15px_rgba(255,255,255,0.1)] rounded-3xl"
          >
            <input
              type={showPassword ? "text" : "password"}
              id="Password"
              name="password" // Update name to match formData
              value={formData.password} // Bind value to formData
              onChange={handleChange} // Use handleChange
              placeholder="Password"
              className="placeholder:pl-2 placeholder:text-black text-black bg-transparent w-full font-bold p-3 outline-none "
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-24"
            >
              {showPassword ? (
                <EyeOffIcon className="h-7 text-gray-600 " />
              ) : (
                <EyeIcon className="h-7 text-gray-600 " />
              )}
            </button>
          </div>

          <div className="">
            <p className="bg-stone-600 bg-opacity-80 text-sm h-6 text-white justify-center items-center dark:text-white mt-8">
              By using our services, you agree to our
              <a href="#" className="text-red-500 underline dark:text-red-400">
                {" "}
                terms and conditions{" "}
              </a>
              and
              <a href="#" className="text-red-500 underline dark:text-red-400">
                {" "}
                privacy policy{" "}
              </a>
              .
            </p>
          </div>

          <div className="">
            <button
              type="submit" // Ensure the button type is set to "submit"
              className="w-40 md:w-56 shadow-[inset_20px_50px_10px_rgba(0,0,0,0.1),inset_-2px_-5px_10px_rgba(255,255,255,1),15px_15px_10px_rgba(0,0,0,0.5),15px_10px_15px_rgba(0,0,0,0.5)]
            rounded-3xl mt-6 relative right-0 md:right-0 border border-blue-600 bg-blue-600  py-3 text-sm font-medium text-white transition  hover:text-lg
                      focus:outline-none focus:ring active:text-blue-500 dark:hover:text-white dark:hover:font-semibold"
            >
              Log In Now
            </button>
          </div>

          <p className="font-bold text-white mt-6">
            Don't have an account?
            <a
              href="/user/signup"
              className="font-serif font-semibold text-red-500 underline dark:text-red-400 rounded-[49% 51% 52% 48% / 63% 59% 41% 37%] shadow-[inset_10px_10px_10px_rgba(247,127,0,0.05),15px_25px_10px_rgba(247,127,0,0.1),15px_20px_20px_rgba(247,127,0,0.1),
          inset_-10px_-10px_15px_rgba(255,255,255,0.5)] hover:rounded-e-full"
            >
              {" "}
              Create Now{" "}
            </a>
          </p>

          <div className="w-1/2 mt-6">
            <LoginWithGoogle />
          </div>
        </form>
      </div>
    </div>
  );
}
