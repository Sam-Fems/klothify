import React from "react";
import { featured } from "../assets/Featured";
import Card from "./Card";
import { Star } from "lucide-react";
const Featured = () => {
  return (
    <>
      <div className="w-full py-[5%] px-[5%]">
        <h2 className="text-3xl">Featured</h2>
        <hr className="h-0.5 w-[200px] bg-black mb-8 " />
        <div className="flex w-full justify-center flex-wrap gap-4">
          {featured.map((feat, i) => (
            <Card
              key={i}
              price={feat.price}
              image={feat.image}
              name={feat.name}
              rating={feat.rating}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Featured;
