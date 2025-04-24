import React from "react";
import { Link } from "react-router-dom";
const Orders = () => {
  return (
    <div className="h-auto w-full py-[15%] text-center text-4xl">
      <h1>Your Orders Will Appear Here...</h1>
      <Link to="/shop" className="text-xl text-blue-400 ">
        Continue Shopping
      </Link>
    </div>
  );
};

export default Orders;
