"use client";

import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { signIn } from "next-auth/react";

export default function LoginForm() {
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
    try {
      await signIn("credentials", {
        email,
        password,
        mode: "login",
        redirect: false,
        // Specify mode for signup
      });

      if (result.error) {
        alert(result.error); // Display error message
      } else {
        alert("Login successful! Redirecting...");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
        <div className="col-span-6">
          <label
            htmlFor="Email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Email
          </label>
          <input
            type="email"
            id="Email"
            name="email" // Update name to match formData
            value={formData.email} // Bind value to formData
            onChange={handleChange} // Use handleChange
            className="mt-1 w-full rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 p-2"
          />
        </div>

        <div className="col-span-6 sm:col-span-3 relative">
          <label
            htmlFor="Password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="Password"
            name="password" // Update name to match formData
            value={formData.password} // Bind value to formData
            onChange={handleChange} // Use handleChange
            className="mt-1 w-full rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 p-2"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3 pt-5"
          >
            {showPassword ? (
              <EyeOffIcon className="h-5 w-5 text-gray-500" />
            ) : (
              <EyeIcon className="h-5 w-5 text-gray-500" />
            )}
          </button>
        </div>

        <div className="col-span-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            By using our services, you agree to our
            <a href="#" className="text-gray-700 underline dark:text-gray-200">
              {" "}
              terms and conditions{" "}
            </a>
            and
            <a href="#" className="text-gray-700 underline dark:text-gray-200">
              {" "}
              privacy policy{" "}
            </a>
            .
          </p>
        </div>

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button
            type="submit" // Ensure the button type is set to "submit"
            className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
          >
            Log In Now
          </button>

          <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
            Don't have an account?
            <a
              href="/user/signup"
              className="text-gray-700 underline dark:text-gray-200"
            >
              {" "}
              Create Now{" "}
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
}
