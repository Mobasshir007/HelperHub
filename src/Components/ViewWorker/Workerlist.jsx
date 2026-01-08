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
    <div className="py-10 px-10 flex flex-wrap gap-11 ">
      {" "}
      {filteredWorkers.map((worker) => {
        return (
          <div key={worker.id} className="w-50 h-100 border-2 rounded-xl overflow-hidden border-transparent  hover:border-gray-400 cursor-pointer ">
            <div className="h-6/12 border-b-4">
              <img
                className="w-full h-full "
                src={worker.image}
                alt=""
              />
            </div>
            <div className=" h-6/12 bg-linear-to-r from-cyan-600 to-90% to-gray-700 px-1">
              <h1 className="text-lg font-bold"> {worker.name}</h1>
              <div className="text-gray-300  ">
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
                <button className="bg-green-600 rounded font-extrabold w-30 text-xl text-amber-900 hover:text-gray-300 hover:bg-orange-900">
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
