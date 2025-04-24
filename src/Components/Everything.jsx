import React from "react";
import { General } from "../assets/GeneralData";
import Card from "./Card";
const Everything = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-wrap gap-4 justify-center py-[10%]">
        {General.map((gen, id) => (
          <Card
            key={id}
            image={gen.image}
            name={gen.name}
            price={gen.price}
            rating={gen.rating}
          />
        ))}
      </div>
    </>
  );
};

export default Everything;
