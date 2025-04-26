import React from "react";
import { newArrivals } from "../assets/NewArrivals";
import Card from "./Card";
const NewArrivals = () => {
  return (
    <>
      <div className="w-full h-auto max-sm:h-auto py-[5%] px-[5%]">
        <h2 className="text-3xl font-bold ">New Arrivals</h2>
        <hr className="h-0.5 w-[200px] bg-black " />
        <div className="w-full py-8 ">
          <div className="flex w-full justify-center flex-wrap gap-4">
            {newArrivals.map((newArrival, i) => (
              <Card
                key={i}
                image={newArrival.image}
                name={newArrival.name}
                price={newArrival.price}
                rating={newArrival.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
