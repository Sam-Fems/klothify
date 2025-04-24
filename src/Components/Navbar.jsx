import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaX } from "react-icons/fa6";
import Logo from "../assets/Logo2.png";

const Navbar = () => {
  // Retrieve login state from localStorage or default to false if not set
  const storedLoginState = localStorage.getItem("isLoggedIn") === "true";
  const [isLoggedIn, setIsLoggedIn] = useState(storedLoginState);

  const [openBar, setOpenBar] = useState(true);

  // Save login state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      <div className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-neutral-200/10 px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="" className="h-[30px] pt-2" />
        </Link>
        <ul className="hidden lg:flex gap-4">
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/shop" className="">
            Shop
          </Link>
          <Link to="/men">Men</Link>
          <Link to="/women" className="">
            Women
          </Link>
          <Link to="/kids">Kids</Link>
          {isLoggedIn ? <Link to="/orders">My Orders</Link> : ""}
        </ul>
        <FaBarsStaggered
          onClick={() => setOpenBar(!openBar)}
          className="lg:hidden text-2xl"
        />
        {!openBar && (
          <ul className="lg:hidden block w-full h-[55vh] bg-[#f0f0f0] text-gray-400 text-center text-2xl absolute left-0">
            <FaX onClick={() => setOpenBar(!openBar)} className="pl-2 pt-2" />
            <li>
              <Link to="/" className="py-2">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="py-2">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/men" className="py-2">
                Men
              </Link>
            </li>
            <li>
              <Link to="/women" className="py-2">
                Women
              </Link>
            </li>
            <li>
              <Link to="/kids" className="py-2">
                Kids
              </Link>
            </li>
            {isLoggedIn ? <Link to="/">My Orders</Link> : ""}
            <div>
              <button
                className="rounded-md bg-black text-white"
                onClick={() => setIsLoggedIn(!isLoggedIn)}
              >
                {isLoggedIn ? "Logout" : "Login"}
              </button>
            </div>
          </ul>
        )}
        <div className="max-lg:hidden">
          <button
            className="w-24 rounded-md h-10 bg-black text-white"
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
