import React from 'react'
import helper from "../../assets/helper.jpg";

const WeDo = () => {
    const WhatWeDo = [
  "Trusted local professionals",
  "Multiple services, one platform",
  "Transparent & fair pricing",
  "Simple and fast booking"
];
  return (
    <div>
        {/* <div className="ml-100 w-6/12 h-4  bg-linear-to-r from-cyan-400 to-gray-200"></div> */}
        {/* What we do section */}
<div className="flex flex-col lg:flex-row
                items-center gap-8
                py-10 px-4 sm:px-8 lg:px-16">
          <div className="w-full lg:w-6/12">
  <div className="w-full h-64 sm:h-80 lg:h-[400px]">
       <img src={helper} alt=""
     className="w-full h-full object-cover rounded-lg" />

            </div>
          </div>
          <div className="w-full lg:w-6/12 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl
               font-bold text-amber-800">
What we do</h1>
            <p className="text-base sm:text-lg lg:text-xl py-4">

              HelperHub makes it easy to find trusted local helpers for
              essential home and personal services. We focus on simplicity,
              safety, and convenience.
            </p>
            {WhatWeDo.map((data) => {
              return (
                <>
                  <div  className="text-xl  py-1">
                    <ul className="mt-4 space-y-2">
  <li className="text-sm sm:text-base lg:text-lg
                 font-semibold text-cyan-700">🔘 {data}</li>
                    </ul>
                  </div>
                </>
              );
            })}

           
          </div>
        </div>
        {/*  */}
      </div>
  )
}

export default WeDo