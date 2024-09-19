import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { FaShoppingCart, FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu open state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Desktop dropdown state
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // Mobile dropdown state
  const [categories, setCategories] = useState([]);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Access cart state from Redux
  const cart = useSelector((state) => state.cart.cart);
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      if (response.status === 200) {
        const data = response.data;
        const categoryArray = data.map((element) => element.category);
        const uniqueCategories = new Set(categoryArray);
        setCategories(Array.from(uniqueCategories));
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="bg-blue-900  lg:px-14  w-full">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-14">
            <div className="flex-1 flex items-center justify-start">
              <Link to="/" className="text-white font-bold text-xl">
                Miljaega.com
              </Link>
            </div>
            <div className="hidden sm:block ml-auto">
              <div className="flex space-x-4 items-center">
                <Link
                  to="/"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>

                {/* Dropdown for Categories */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    className="text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    Categories
                    <FaChevronDown
                      className={`ml-2 ${
                        isDropdownOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isDropdownOpen && (
                    <div
                      className="absolute bg-white text-black py-2 rounded shadow-lg mt-2 z-50"
                      style={{ zIndex: 50 }}
                    >
                      {categories.map((category) => (
                        <Link
                          key={category}
                          to={`/products/${encodeURIComponent(category)}`}
                          className="block px-4 py-2 text-sm hover:bg-gray-200"
                          onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to="/products"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Products
                </Link>
                <Link
                  to="/about"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>

                <div className="relative">
                  <Button
                    onClick={() => {
                      navigate("/cart");
                    }}
                  >
                    <FaShoppingCart size={25} color="white" />
                    {totalQuantity > 0 && (
                      <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1">
                        {totalQuantity}
                      </span>
                    )}
                  </Button>
                </div>
                <Button
                  className="sm:px-0 py-0"
                  variant="contained"
                  sx={{ fontWeight: "bold" }}
                  onClick={() => {
                    navigate("/products");
                  }}
                >
                  Shop Now
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <div className="relative">
                <Button
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  <FaShoppingCart size={25} color="white" />
                  {totalQuantity > 0 && (
                    <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1">
                      {totalQuantity}
                    </span>
                  )}
                </Button>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
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
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>

              {/* Mobile Dropdown for Categories */}
              <div className="relative">
                <button
                  className="text-white block px-3 py-2 rounded-md text-base font-medium flex items-center w-full"
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                >
                  Categories
                  <FaChevronDown
                    className={`ml-2 ${
                      isMobileDropdownOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {isMobileDropdownOpen && (
                  <div
                    className="absolute bg-white text-black py-2 rounded shadow-lg mt-2 w-full z-50"
                    style={{ zIndex: 50 }}
                  >
                    {categories.map((category) => (
                      <Link
                        key={category}
                        to={`/products/${encodeURIComponent(category)}`}
                        className="block px-4 py-2 text-sm hover:bg-gray-200"
                        onClick={() => setIsMobileDropdownOpen(false)} // Close dropdown on click
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/products"
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Products
              </Link>

              <Button
                className="sm:py-0 sm:px-0"
                variant="contained"
                sx={{ fontWeight: "bold" }}
                onClick={() => {
                  navigate("/products");
                }}
              >
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
