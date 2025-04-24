import React from "react";
import { MensD } from "../assets/MensData";
import Card from "./Card";
import { Star } from "lucide-react";
const Mens = () => {
  return (
    <>
      <div className="py-[10%] max-sm:py-[15%]">
        <div className="px-[5%]">
          <h2 className="text-3xl">Men's Collection</h2>
          <hr className="h-0.5 w-[200px] bg-black mb-8 " />
        </div>
        <div className="w-full h-auto flex flex-wrap justify-center gap-4">
          {MensD.map((man, i) => (
            <Card
              key={i}
              image={man.image}
              name={man.name}
              price={man.price}
              rating={man.rating}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Mens;
