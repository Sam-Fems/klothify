import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaX } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Logo2.png";

const Navbar = () => {
  const storedLoginState = localStorage.getItem("isLoggedIn") === "true";
  const [isLoggedIn, setIsLoggedIn] = useState(storedLoginState);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const handleLoginToggle = () => {
    setIsLoggedIn((prev) => !prev);
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-neutral-200/10 px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-[30px] pt-2" />
        </Link>

        <ul className="hidden lg:flex gap-4 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/kids">Kids</Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link to="/orders">My Orders</Link>
            </li>
          )}
        </ul>

        <div className="lg:hidden text-white text-2xl">
          {isMenuOpen ? (
            <FaX onClick={() => setIsMenuOpen(false)} />
          ) : (
            <FaBarsStaggered onClick={() => setIsMenuOpen(true)} />
          )}
        </div>

        <div className="max-lg:hidden">
          <button
            className="w-24 rounded-md h-10 bg-black text-white"
            onClick={handleLoginToggle}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>

      {/* Slide-in Menu & Backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[80%] bg-[#f0f0f0] z-50 shadow-lg flex flex-col items-center justify-start py-8 px-6 gap-6"
            >
              {/* Close (X) button inside */}
              <div className="self-end text-2xl text-gray-700 cursor-pointer">
                <FaX onClick={() => setIsMenuOpen(false)} />
              </div>

              {/* Menu links */}
              <nav className="flex flex-col items-center gap-6 text-gray-800 text-lg w-full">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
                <Link to="/men" onClick={() => setIsMenuOpen(false)}>Men</Link>
                <Link to="/women" onClick={() => setIsMenuOpen(false)}>Women</Link>
                <Link to="/kids" onClick={() => setIsMenuOpen(false)}>Kids</Link>
                {isLoggedIn && (
                  <Link to="/orders" onClick={() => setIsMenuOpen(false)}>
                    My Orders
                  </Link>
                )}
              </nav>

              {/* Login/Logout button */}
              <button
                className="w-32 rounded-md bg-black text-white py-2 mt-4"
                onClick={handleLoginToggle}
              >
                {isLoggedIn ? "Logout" : "Login"}
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
