import React from "react";
import Hero from "../Components/Hero";
import NewArrivals from "../Components/NewArrivals";
import Category from "../Components/Category";
import Featured from "../Components/Featured";

const Home = () => {
  return (
    <>
      <Hero />
      <NewArrivals />
      <Category />
      <Featured />
    </>
  );
};

export default Home;
