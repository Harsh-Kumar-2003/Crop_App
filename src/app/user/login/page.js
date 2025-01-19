// user/login

"use client";

import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { signIn } from "next-auth/react";
import LoginForm from "@/components/forms/LoginForm";
import SignUpForm from "@/components/forms/SignUpForm";
import LoginWithGoogle from "@/components/LoginWithGoogle";
import Link from "next/link";
import bg_login from "@/public/images/bg_login.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    // Proceed with form submission

    const result = await signIn("credentials", {
      email,
      password,
      mode: "login",
      // Specify mode for signup
    });

    if (result.error) {
      alert(result.error); // Display error message
    } else {
      alert("Login successful! Redirecting...");
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { email, password } = formData;
  //   // Proceed with form submission
  //   try {
  //     const result = await signIn("credentials", {
  //       email,
  //       password,
  //       mode: "login",
  //       // Specify mode for signup
  //     });

  //     if (result.error) {
  //       alert(result.error); // Display error message
  //     } else {
  //       alert("Login successful! Redirecting...");
  //     }
  //   } catch (error) {
  //     alert("Something went wrong. Please try again.");
  //   }
  // };

  return (
    <div className="h-screen">
      <section className="">
        <div
          className="border-2 border-white w-full h-screen "
          style={{
            backgroundImage: `url(${bg_login.src})`,
            backgroundSize: "cover",
          }}
        >
          <img
            className="h-14 w-14 relative left-5 top-5"
            alt="logo"
            src="/fieldmaven1.png"
          />
          {/* <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="/signup_image.jpeg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside> */}
          <p
            className="bg-white opacity-20 text-black text-4xl font-semibold w-72 h-12 rounded-lg relative left-1/3 mx-28 text-center"
            style={{
              fontFamily: "'Dancinf Script', cursive",
            }}
          >
            Login
          </p>

          <main
            className="bg-white ml-9 bg-opacity-20 shadow-xl h-3/4 w-max relative left-80 bottom-7 rounded-lg"
            style={{
              fontFamily: "'Dancing Script', cursive",
              color: "#4a4a4a",
              letterSpacing: "0.5px",
              textShadow: "0.5px 0.5px 2px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="max-w-xl lg:max-w-3xl">
              {/* <h1 className="mt-6 text-2xl font-bold text-yellow-300 sm:text-3xl md:text-4xl ">
                Welcome Back to FieldMaven
              </h1>

              <p
                className="mt-4 text-yellow-400 text-lg font-serif italic"
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  letterSpacing: "0.5px",
                  textShadow: "0.5px 0.5px 2px rgba(0, 0, 0, 0.1)",
                }}
              >
                "Welcome back to FieldMaven – Empowering Your Farming Journey.
                Log in to access personalized insights, manage your fields, and
                continue paving the way to sustainable success."
              </p> */}
              {/* <LoginForm /> */}
              <div>
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 grid grid-cols-6 gap-6 relative top-9"
                >
                  <div className="col-span-6 mx-4 ">
                    <label
                      htmlFor="Email"
                      className="block text-white text-sm font-medium  dark:text-gray-200"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="Email"
                      name="email" // Update name to match formData
                      value={formData.email} // Bind value to formData
                      onChange={handleChange} // Use handleChange
                      className="mt-1 w-full rounded-md border-gray-300 bg-white bg-opacity-40 text-sm text-black shadow-sm dark:border-gray-100 dark:bg-gray-800 dark:text-gray-200 p-2"
                    />
                  </div>

                  <div className="col-span-6  mx-4 w-11/12">
                    <label
                      htmlFor="Password"
                      className="block text-sm font-medium text-white dark:text-gray-200 w-max"
                    >
                      Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="Password"
                      name="password" // Update name to match formData
                      value={formData.password} // Bind value to formData
                      onChange={handleChange} // Use handleChange
                      className="mt-1 w-full rounded-md border-gray-300 bg-white bg-opacity-40 text-sm text-black shadow-sm dark:border-gray-100 dark:bg-gray-800 dark:text-gray-200 p-2"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-0 bottom-48 top-28 flex items-center pr-3"
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-6 w-6 text-gray-500 " />
                      ) : (
                        <EyeIcon className="h-6 w-6 text-white opacity-40" />
                      )}
                    </button>
                  </div>

                  <div className="col-span-6 mx-4">
                    <p className="text-sm text-white dark:text-gray-400">
                      By using our services, you agree to our
                      <a
                        href="#"
                        className="text-red-300 underline dark:text-gray-200"
                      >
                        {" "}
                        terms and conditions{" "}
                      </a>
                      and
                      <a
                        href="#"
                        className="text-red-300 underline dark:text-gray-200"
                      >
                        {" "}
                        privacy policy{" "}
                      </a>
                      .
                    </p>
                  </div>

                  <div className="w-80 mx-72">
                    <button
                      type="submit" // Ensure the button type is set to "submit"
                      className="my-6  inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
                    >
                      Log In Now
                    </button>

                    <p className="mt-4 -mx-8 text-sm text-white sm:mt-0 dark:text-gray-400">
                      Don't have an account?
                      <a
                        href="/user/signup"
                        className="text-red-300 underline dark:text-gray-200"
                      >
                        {" "}
                        Create Now{" "}
                      </a>
                    </p>
                  </div>
                </form>
              </div>
              <LoginWithGoogle />
            </div>
          </main>
        </div>
      </section>
         
    </div>
  );
}
