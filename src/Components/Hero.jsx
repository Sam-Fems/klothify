import React from "react";
import { Link } from "react-router-dom";
import { stats } from "../assets/stats";
import HeroImg from "../assets/Hero.jpg";
const Hero = () => {
  return (
    <>
      <div className="w-full h-auto px-10 pt-[5%] max-sm:h-auto flex max-md:block">
        <div className="pt-[10%] max-sm:pt-[15%]">
          <h1 className="text-5xl">WHERE FASHION MEETS ELEGANCE.</h1>
          <p className="text-xl text-gray-400">
            Browse through our catalogue of endless choice of fashionable
            clothing. <br /> From casual wear to formal wear, we have got you
            covered.
          </p>
          <div className="pt-[3%]">
            <Link to="/shop">
              <button className="w-[150px] h-[50px] bg-black text-white rounded-3xl">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="flex justify-between w-[500px] max-sm:block max-sm:w-auto pt-[5%]">
            {stats.map((stat, id) => (
              <div className="" key={id}>
                <h2 className="text-3xl">{stat.number}+</h2>
                <p className="text-gray-400">{stat.talk}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[500px] w-[500px] py-4 max-sm:w-[250px] overflow-hidden rounded">
          <img
            src={HeroImg}
            alt="Hero"
            className="w-full rounded mx-4 max-md:mx-2"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
