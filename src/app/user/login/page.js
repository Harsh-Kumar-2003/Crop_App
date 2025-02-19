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
  const [showModal, setShowModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleResetPassword = async (e) => {
    console.log("Resetting password...");
    try {
      // Send email to user with reset link
      const response = await fetch(`/api/reset-password?email=${resetEmail}`, {
        method: "POST",
      });
      if (response.ok) {
        console.log("Password reset email sent!");
      }
      const data = await response.json();
      console.log(data);
      alert("Password reset email sent!");
      setShowModal(false);
    } catch (error) {
      console.error("Error sending reset email:", error);
    }
    //e.preventDefault();
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
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
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
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
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
                      type="submit"
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
              <button
                className="mt-4 text-sm text-blue-500 underline"
                onClick={() => setShowModal(true)}
              >
                Forgot Password?
              </button>
            </div>
          </main>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Reset Password</h2>
            <form onSubmit={handleResetPassword}>
              <label
                htmlFor="resetEmail"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="resetEmail"
                name="resetEmail"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm p-2"
              />
              <button
                type="submit"
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md"
              >
                Reset Password
              </button>
            </form>
            <button
              className="mt-4 w-full bg-gray-600 text-white py-2 rounded-md"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
