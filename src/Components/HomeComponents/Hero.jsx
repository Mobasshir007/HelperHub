import React from "react";
import banner from "../../assets/bannermain.png";

const Hero = () => {
  return (
    <div className="w-full relative pt-20 sm:pt-24 md:pt-28 h-[70vh] sm:h-[75vh] lg:h-[85vh] min-h-[550px]">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={banner}
        alt="Banner"
      />
      
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-20 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-extrabold text-blue-500 leading-tight">
          Helper<span className="text-amber-600">Hub</span>
        </h1>
        
        <p className="py-2 sm:py-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-linear-to-r from-purple-500 to-green-400 bg-clip-text text-transparent">
          Hire Trusted Helpers Near You
        </p>
        
        <div className="py-3 sm:py-4">
          <p className="font-bold text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Electricians, plumbers, nurses, mechanics,painter, maid, labour <br className="hidden sm:block" /> and even Babysitter - all <span className="text-cyan-600">at one place</span>. <br className="hidden sm:block" />
            <span className="text-gray-500">Verified professionals</span>, <span className="text-gray-500">transparent pricing</span>, and <span className="text-lime-600">quick booking</span>. <br className="hidden sm:block" />
            <span className="bg-linear-to-r from-blue-500 to-red-400 bg-clip-text text-transparent">
              Trusted local help for every home need
            </span>
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 mt-4 sm:mt-6 md:mt-10 font-medium w-full sm:w-auto max-w-sm">
          <button className="w-full sm:w-36 md:w-40 py-2 md:py-2.5 bg-blue-400 hover:bg-green-600 rounded-lg cursor-pointer transition-colors">
            Find Helpers
          </button>
          <button className="w-full sm:w-36 md:w-40 py-2 md:py-2.5 bg-cyan-300 hover:bg-amber-600 rounded-lg cursor-pointer transition-colors">
            Register as Helper
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;