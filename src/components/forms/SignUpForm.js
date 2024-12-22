"use client";

import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid"; // Make sure to install Heroicons

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    // Proceed with form submission
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="FirstName"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          First Name
        </label>
        <input
          type="text"
          id="FirstName"
          name="first_name"
          className="mt-1 w-full rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 p-2"
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="LastName"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Last Name
        </label>
        <input
          type="text"
          id="LastName"
          name="last_name"
          className="mt-1 w-full rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 p-2"
        />
      </div>

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
          name="email"
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
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

      <div className="col-span-6 sm:col-span-3 relative">
        <label
          htmlFor="PasswordConfirmation"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Password Confirmation
        </label>
        <input
          type={"password"}
          id="PasswordConfirmation"
          name="password_confirmation"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="mt -1 w-full rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 p-2"
        />
      </div>

      <div className="col-span-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          By creating an account, you agree to our
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
        <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white">
          Create an account
        </button>

        <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
          Already have an account?
          <a
            href="/user/login"
            className="text-gray-700 underline dark:text-gray-200"
          >
            {" "}
            Log in{" "}
          </a>
          .
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
