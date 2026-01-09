import React from "react";
import Header from "../../Header";
import { Workers } from "../../Data/Worker";
import { useLocation } from "react-router-dom";
const Workerlist = () => {
  const location = useLocation();
const selectedSkill = location.state?.skill;
const filteredWorkers = selectedSkill
  ? Workers.filter(worker => worker.skill === selectedSkill)
  : Workers;

 console.log(filteredWorkers)
  return (
    <div className="py-6 px-4 sm:px-8 lg:px-10 
                grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {" "}
      {filteredWorkers.map((worker) => {
        return (
          <div key={worker.id} className="w-full max-w-sm mx-auto
             border-2 rounded-xl overflow-hidden border-transparent
             hover:border-gray-400 cursor-pointer
             transition-all">
            <div className="h-48 sm:h-52 border-b-4">
              <img
                className="w-full h-full object-cover"
                src={worker.image}
                alt=""
              />
            </div>
            <div className=" bg-linear-to-r from-cyan-600 to-90% to-gray-700 px-3 py-3">
              <h1 className="text-base sm:text-lg font-bold "> {worker.name}</h1>
              <div className="text-gray-300 text-sm sm:text-base  ">
                <h2>
                  {" "}
                  <span className="mr-12">Skill :</span>{worker.skill}
                </h2>
                <h3>
                  <span className="mr-1">Experience: </span> {worker.experience} years
                </h3>
                <h4>
                  <span className="mr-12">City :</span> {worker.city}
                </h4>
                <p>
                  <span className="mr-8">Rating :</span> {worker.rating}
                </p>
                <p>
                  <span className="mr-8">Price :</span> {worker.pricePerHour} /H
                </p>
              </div>
              <div className="flex justify-center mt-4">
<button className="bg-green-600 rounded font-bold
                   w-full sm:w-32
                   py-2 text-base sm:text-lg
                   text-amber-900 hover:text-gray-300 hover:bg-orange-900">
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Workerlist;
