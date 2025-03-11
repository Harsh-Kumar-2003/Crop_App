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

    const name = `${firstName} ${lastName}`;
    try {
      const result = await signIn("credentials", {
        name,
        email,
        password,
        mode: "signup",
        // redirect: false,
        // Specify mode for signup
      });

      if (result.error) {
        alert(result.error); // Display error message
      } else {
        alert("Login successful! Redirecting...");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }

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
    <div className="ml-24">
      <p className="pt-7 text-center font-semibold text-5xl text-white">
        Create Account
      </p>
      <form onSubmit={handleSubmit} className="text-white item-center pt-5">
        <div className="col-span-6 mx-16">
          <p
            htmlFor="FirstName"
            className="text-sm font-medium text-white dark:text-white  mt-2"
          >
            First Name
          </p>
          <input
            type="text"
            id="FirstName"
            name="firstName" // Update name to match formData
            value={formData.firstName} // Bind value to formData
            onChange={handleChange} // Use handleChange
            className="pl-4 bg-white bg-opacity-20 text-white  w-full rounded-lg h-10"
          />
        </div>

        <div className="col-span-6 mx-16">
          <p
            htmlFor="LastName"
            className="text-sm font-medium text-white dark:text-white  mt-3"
          >
            Last Name
          </p>
          <input
            type="text"
            id="LastName"
            name="lastName" // Update name to match formData
            value={formData.lastName} // Bind value to formData
            onChange={handleChange} // Use handleChange
            className="pl-4 bg-white bg-opacity-20 text-white w-full rounded-lg h-10"
          />
        </div>

        <div className="col-span-6 mx-16">
          <p
            htmlFor="Email"
            className="text-sm font-medium text-white dark:text-white  mt-3"
          >
            Email
          </p>
          <input
            type="email"
            id="Email"
            name="email" // Update name to match formData
            value={formData.email} // Bind value to formData
            onChange={handleChange} // Use handleChange
            className="pl-4 bg-white bg-opacity-20 text-white  w-full rounded-lg h-10"
          />
        </div>

        <div className="col-span-6 mx-16 relative ">
          <p
            htmlFor="Password"
            className="text-sm font-medium text-white dark:text-white  mt-3"
          >
            Password
          </p>
          <input
            type={showPassword ? "text" : "password"}
            id="Password"
            name="password" // Update name to match formData
            value={formData.password} // Bind value to formData
            onChange={handleChange} // Use handleChange
            className="pl-4 bg-white bg-opacity-20 text-white w-full rounded-lg h-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-10 transform -translate-y-1/2"
          >
            {showPassword ? (
              <EyeOffIcon className="h-7 text-white" />
            ) : (
              <EyeIcon className="h-7 text-white" />
            )}
          </button>
        </div>

        <div className="col-span-6 mx-16 mt-12">
          <p
            htmlFor="PasswordConfirmation"
            className="text-sm font-medium text-white dark:text-white -mt-8 "
          >
            Confirm Password
          </p>
          <input
            type="password"
            id="PasswordConfirmation"
            name="password_confirmation" // This can remain as is
            value={confirmPassword} // Bind value to confirmPassword state
            onChange={(e) => setConfirmPassword(e.target.value)} // Update confirmPassword state
            className="pl-4 bg-white bg-opacity-20 text-white  w-full rounded-lg h-10"
          />
        </div>

        <div className="col-span-6 mx-16">
          <p className="text-sm text-white dark:text-white  mt-4">
            By creating an account, you agree to our
            <a href="/t&c" className="text-red-700 underline dark:text-red-600">
              {" "}
              terms and conditions{" "}
            </a>
            and
            <a href="/privacy_policy" className="text-red-700 underline dark:text-red-500">
              {" "}
              privacy policy{" "}
            </a>
            .
          </p>
        </div>

        <div className="justify-center col-span-6 sm:flex sm:items-center sm:gap-4">
          <button
            type="submit" // Ensure the button type is set to "submit"
            className=" rounded-md border border-green-500 bg-green-500 px-12 py-3 text-sm font-medium text-white  transition hover:bg-blue-200 hover:text-blue-600  "
          >
            Create an account
          </button>
        </div>
        <p className="text-center text-sm text-white dark:text-white  mt-4 pb-14">
          Already have an account ?
          <a
            href="/user/login"
            className="text-red-700 underline dark:text-red-500"
          >
            {" "}
            Log in{" "}
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
