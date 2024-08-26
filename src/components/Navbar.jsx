import { Link } from "react-router-dom";
import React, { useState } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Products from "../pages/Products";
import Button from "@mui/material/Button";

import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-14">
            <div className="flex-1 flex items-center justify-start">
              <Link to="/" element={<Home />}>
                <span className="text-white font-bold text-xl">
                  Miljaega.com
                </span>
              </Link>
            </div>
            <div className="hidden sm:block ml-auto">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  element={<Home />}
                  className="text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  element={<Products />}
                  className="text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Products
                </Link>

                <Link
                  to="/about"
                  element={<About />}
                  className="text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  to="/profile"
                  element={<Profile />}
                  className="text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Account
                </Link>
                <Button>
                  <FaShoppingCart size={25} />
                </Button>
                <Button variant="contained" sx={{ fontWeight: "bold" }}>
                  Shop Now
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                element={<Home />}
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                to="/products"
                element={<Products />}
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Products
              </Link>
              <Link
                to="/signup"
                element={<SignUp />}
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Sign Up
              </Link>
              <Link
                to="/signin"
                element={<SignIn />}
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Sign In
              </Link>
              <Link
                to="/profile"
                element={<Profile />}
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Account
              </Link>
              <Button variant="contained" sx={{ fontWeight: "bold" }}>
                Shop Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
