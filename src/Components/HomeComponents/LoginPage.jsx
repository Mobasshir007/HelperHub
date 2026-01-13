import React from "react";

const LoginPage = () => {
  return (
    <div className="flex justify-center py-10   ">
      <div className="border-4 w-100 h-100 bg-amber-800 text-gray-300">
        <div className="flex justify-center m-4">
          <h1 className="text-3xl font-bold">Customer Login</h1>
        </div>
        <div className="  px-10 mt-10 ">
          <div className="mb-10 flex justify-between ">
            <label htmlFor="">Username :</label>
            <input
              className="gap-10 border-2 pl-2 "
              type="text"
              name="name"
              placeholder="Username"
              id=""
            />
          </div>
          <div className="mb-10 flex justify-between ">
            <label htmlFor="">Password :</label>
            <input
              className="gap-10 border-2 pl-2"
              type="text"
              name="name"
              placeholder="Enter your Password"
              id=""
              
            />
          </div>
        </div>
        <div className="flex justify-center ">
          <button className=" bg-green-700 rounded w-24 text-xl p-2 font-bold " type="submit">Log In</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
