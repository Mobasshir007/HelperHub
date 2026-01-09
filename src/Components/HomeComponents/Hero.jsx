import React from "react";
import banner from "../../assets/bannermain.png";

const Hero = () => {
  return (
    <div className="w-full relative pt-28 h-[70vh] sm:h-[75vh] lg:h-[85vh]">
      <img
className="absolute inset-0 w-full h-full object-cover"         src={banner}
        alt="Banner"
      />{" "}
    <div className="relative z-10 h-full
                flex flex-col justify-center
                px-4 sm:px-8 lg:px-20
                max-w-3xl">
        <h1 className="text-3xl sm:text-5xl lg:text-8xl
               font-extrabold text-blue-500">
          {" "}
          Helper<span className="text-amber-600">Hub</span>{" "}
        </h1>
<p className="py-3 text-xl sm:text-3xl lg:text-4xl
              font-bold bg-linear-to-r from-purple-500 to-green-400
              bg-clip-text text-transparent">          Hire Trusted Helpers Near You
        </p>
        <div className="py-4 ">
          <p className="font-bold text-sm sm:text-lg lg:text-xl leading-relaxed">
            Electricians, plumbers, nurses, mechanics,painter, maid, labour{" "}
            <br /> and even Babysitter - all{" "}
            <span className="text-cyan-600">at one place</span>. <br />
            <span className="text-gray-500">Verified professionals</span>,{" "}
            <span className="text-gray-500">transparent pricing</span>, and{" "}
            <span className="text-lime-600">quick booking</span>. <br />
            <span className="bg-linear-to-r from-blue-500 to-red-400 bg-clip-text text-transparent">
              Trusted local help for every home need
            </span>
          </p>
        </div>
       <div className="flex flex-col sm:flex-row
                gap-4 sm:gap-10
                mt-6 sm:mt-10 font-medium w-full sm:w-auto">
          {" "}
<button className="w-full sm:w-36 py-2
                   bg-blue-400 hover:bg-green-600 rounded-lg cursor-pointer ">            Find Helpers
          </button>
          <button className="w-full sm:w-36 py-2 bg-cyan-300 hover:bg-amber-600 rounded-lg cursor-pointer">
            Register as Helper
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
