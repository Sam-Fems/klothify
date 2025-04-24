import React from "react";
import { women } from "../assets/WomensData";
import Card from "./Card";
const Womens = () => {
  return (
    <>
      <div className="py-[10%] max-sm:py-[15%]">
        <div className="px-[5%]">
          <h2 className="text-3xl">Women's Collection</h2>
          <hr className="h-0.5 w-[200px] bg-black mb-8 " />
        </div>
        <div className="w-full h-auto flex flex-wrap justify-center gap-4">
          {women.map((wom, i) => (
            <Card
              key={i}
              image={wom.image}
              name={wom.name}
              price={wom.price}
              rating={wom.rating}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Womens;
