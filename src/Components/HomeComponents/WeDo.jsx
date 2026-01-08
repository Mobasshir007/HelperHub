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
        <div className="flex justify-center gap-6 py-10 px-10 ">
          <div className="w-6/12">
            <div className="h-100 ">
              {" "}
              <img src={helper} alt="" />
            </div>
          </div>
          <div className="w-6/12 ">
            <h1 className="text-4xl font-bold text-amber-800">What we do</h1>
            <p className="text-2xl py-4">
              HelperHub makes it easy to find trusted local helpers for
              essential home and personal services. We focus on simplicity,
              safety, and convenience.
            </p>
            {WhatWeDo.map((data) => {
              return (
                <>
                  <div  className="text-xl  py-1">
                    <ul>
                      <li className="font-bold text-cyan-700">🔘 {data}</li>
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