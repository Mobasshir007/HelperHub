import React from "react";
import ServicesCard from "./ServicesCard";

const OurServices = () => {
  return (
    <div className="">
      <div className="flex justify-center mb-4">
        <h1 className="text-4xl font-bold text-amber-800">Our Services</h1>
      </div>
      <div className=" px-10 ml-6">
        <ServicesCard />
      </div>
    </div>
  );
};

export default OurServices;
