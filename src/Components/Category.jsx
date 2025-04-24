import React from "react";
import { cates } from "../assets/Categorydata";
const Category = () => {
  return (
    <>
      <div className="w-full h-auto max-sm:h-auto bg-black px-2">
        <h2 className="text-3xl text-white">Shop By Category</h2>
        <hr className="h-0.5 w-[250px] bg-white " />
        <div className="flex flex-wrap justify-center mt-10 w-full">
          {cates.map((cat, i) => (
            <div className="w-[300px] overflow-hidden px-2" key={i}>
              <img src={cat.image} alt="" />
              <h2 className="text-white">{cat.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
