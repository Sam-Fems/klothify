import React from "react";
import { kidsD } from "../assets/KidsData";
import Card from "./Card";
const KidsC = () => {
  return (
    <>
      <div className="py-[10%] max-sm:py-[15%]">
        <div className="px-[5%]">
          <h2 className="text-3xl">Kids Collection</h2>
          <hr className="h-0.5 w-[200px] bg-black mb-8 " />
        </div>
        <div className="w-full h-auto flex flex-wrap justify-center gap-4">
          {kidsD.map((kid, i) => (
            <Card
              key={i}
              name={kid.name}
              image={kid.image}
              price={kid.price}
              rating={kid.rating}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default KidsC;
