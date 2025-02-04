"use client";

import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { signIn } from "next-auth/react";
import ProfileForm from "./ProfileForm";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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
    const { firstName, lastName, email, password } = formData;

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  };

  return (
    <div>
      <div>
        <p className="text-center font-semibold text-4xl rounded-md border border-stone-500 bg-stone-500 text-white h-14 w-96 content-center relative left-32">
          Create Account
        </p>
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6 ">
            <label
              htmlFor="FirstName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Full Name
            </label>
            <input
              type="text"
              id="FirstName"
              name="firstName" // Update name to match formData
              value={formData.firstName} // Bind value to formData
              onChange={handleChange} // Use handleChange
              className="mt-1 w-full rounded-md  bg-stone-200 text-sm text-gray-700 shadow-sm  dark:bg-gray-800 dark:text-gray-200 p-2"
            />
          </div>

          {/* <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="LastName"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Last Name
          </label>
          <input
            type="text"
            id="LastName"
            name="lastName" // Update name to match formData
            value={formData.lastName} // Bind value to formData
            onChange={handleChange} // Use handleChange
            className="mt-1 w-full rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 p-2"
          />
        </div> */}

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
              className="mt-1 w-full rounded-md  bg-stone-200 text-sm text-gray-700 shadow-sm  dark:bg-gray-800 dark:text-gray-200 p-2"
            />
          </div>

          <div className="col-span-6 w-11/12">
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
              className="bg-stone-200 mt-1 w-full rounded-md text-sm text-gray-700 shadow-sm  dark:bg-gray-800 dark:text-gray-200 p-2"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-20 flex items-center pr-1 pt-9"
            >
              {showPassword ? (
                <EyeOffIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>

          <div className="col-span-6 ">
            <label
              htmlFor="PasswordConfirmation"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Password Confirmation
            </label>
            <input
              type="password"
              id="PasswordConfirmation"
              name="password_confirmation" // This can remain as is
              value={confirmPassword} // Bind value to confirmPassword state
              onChange={(e) => setConfirmPassword(e.target.value)} // Update confirmPassword state
              className="mt-1 w-full rounded-md  bg-stone-200 text-sm text-gray-700 shadow-sm  dark:bg-gray-800 dark:text-gray-200 p-2"
            />
          </div>

          <div className="col-span-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              By creating an account, you agree to our
              <a
                href="#"
                className="text-gray-700 underline dark:text-gray-200"
              >
                {" "}
                terms and conditions{" "}
              </a>
              and
              <a
                href="#"
                className="text-gray-700 underline dark:text-gray-200"
              >
                {" "}
                privacy policy{" "}
              </a>
              .
            </p>
          </div>

          <div className="justify-center col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              type="submit" // Ensure the button type is set to "submit"
              className=" rounded-md border border-stone-500 bg-stone-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-200 hover:text-blue-600  "
            >
              Create an account
            </button>
          </div>
          <p className="w-96 mx-28 text-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
            Already have an account ?
            <a
              href="/user/login"
              className="text-gray-700 underline dark:text-gray-200"
            >
              {" "}
              Log in{" "}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
