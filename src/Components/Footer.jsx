import React from "react";
import Logo from "../assets/Logo2.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="w-full h-auto flex bg-[#f0f0f0] justify-between py-[5%] px-10 max-sm:block max-sm:px-2">
        <div className="">
          <img src={Logo} alt="" />
          <p>
            Browse through our catalogue of endless choice of fashionable
            clothing.
            <br /> From casual wear to formal wear, we have got you covered.
          </p>
        </div>

        <div className="list-none text-center text-2xl">
          <li>
            <Link to="/" className="">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="">
              Shop
            </Link>
          </li>

          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/women" className="">
              Women
            </Link>
          </li>

          <li>
            <Link to="/kids">Kids</Link>
          </li>
        </div>
        <div className="w-[450px] h-[250px] rounded bg-black text-white max-sm:w-[300px] max-sm:h-auto ">
          <h1 className="text-2xl text-center">Subscribe to our newsletter</h1>
          <p className="text-center">
            Get exclusive offers, new arrivals updates, and style inspiration
            directly to your inbox.
          </p>
          <input
            type="email"
            placeholder="Enter Your Email....."
            className="w-[250px] p-2 mx-4 border-none bg-[#333] rounded "
            required
          />
          <button
            type="submit"
            className="p-2 px-3 rounded mx-2 bg-slate-200 text-black max-sm:my-3"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
