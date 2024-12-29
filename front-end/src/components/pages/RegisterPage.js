import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  const handleButtonClick = (event) => {
    event.preventDefault(); // Prevent default form submission
    navigate("/");
  };

  return (
    <div className="bg-gray-800 border border-black px-4 pt-3 grid grid-rows-[5rem_1fr] flex-1 h-screen">
      <div className="flex justify-between items-center relative">
        <div className="bg-black rounded-lg w-full flex items-center px-4 py-4">
          {/* Centered Text */}
          <h1 className="font-bold text-white flex-grow text-center text-4xl">
            NZ HOME
          </h1>
        </div>
      </div>

      <div className="bg-white rounded-lg w-2/6 mt-5 mb-5 mx-auto">
        <div className="text-center">
          <img
            src="./image/NZHome.png"
            alt="NZ Home Logo"
            className="w-2/5 mx-auto"
          />
          <h2>Register</h2>

          <form>
            <div className="mb-4">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                className="border rounded px-2 py-1"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="border rounded px-2 py-1"
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="border rounded px-2 py-1"
              />
            </div>

            <p>
              <input
                type="checkbox"
                name="checkbox"
                required
                className="mr-2"
              />
              I have read and agreed to the
              <a href=" " className="terms">
                {" "}
                Terms & Conditions of Use
              </a>
            </p>

            <button
              type="submit"
              className="button1 bg-green-500 text-white mt-3 w-[20%] h-[6%] rounded mx-auto"
              onClick={handleButtonClick}
            >
              Sign Up
            </button>

            <p className="my-4">
              -------------------------------- Or
              --------------------------------
            </p>

            <button
              type="button"
              className="button2 bg-blue-500 text-white mt-12 w-[20%] h-[6%] rounded mx-auto"
              onClick={handleButtonClick}
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
