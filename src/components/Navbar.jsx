import { Link } from "react-router-dom";
import React, { useState } from "react";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 h-14 flex items-center">
        <ul className="flex ">
          <Link to="/" element={<Home />}>
            <li className="text-white mx-40">Logo</li>
          </Link>
          <Link to="/" element={<Home />}>
            <li className="text-white ml-80">Home</li>
          </Link>
          <Link to="/products" element={<Home />}>
            <li className="text-white ml-10">Search for a room</li>
          </Link>
          <Link to="/SignUp" element={<SignUp />}>
            <li className="text-white mx-9">Sign Up</li>
          </Link>
          <Link to="/" element={<Home />}>
            <li className="text-white mx-9">Sign In</li>
          </Link>
          <Link to="/" element={<Home />}>
            <li className="text-white mx-9">Account</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
