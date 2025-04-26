import React from "react";
import { Star } from "lucide-react";

const Card = ({ image, name, price, rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <Star
      key={index}
      className={`w-4 h-4 ${
        index < rating ? "text-yellow-500 fill-yellow-300" : "text-gray-300"
      }`}
    />
  ));

  return (
    <div className="w-[250px] p-4 rounded-md text-center">
      <img src={image} alt={name} className="w-full h-40 object-cover mb-2" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-700">₦{price.toLocaleString()}</p>
      <div className="mt-2 flex justify-center gap-1">{stars}</div>
    </div>
  );
};

export default Card;
