import React from "react";
import logo from "./assets/banner5.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-28 text-white shadow-xl shadow-cyan-100 bg-linear-to-r from-cyan-400 to-gray-200 flex justify-between  sticky top-0">
      <div>
        <img className="w-106 rounded-sm" src={logo} alt="" />
      </div>
      <div className="flex justify-center items-center sm:py-2  py-2 px-2 gap-4">
        <ul className="flex sm:gap-2 gap-12 ">
          <Link to="/">
            {" "}
            <li className="ul-item">Home</li>
          </Link>{" "}
          <Link to="/services">
            {" "}
            <li className="ul-item">Services</li>
          </Link>
          <Link to="/how-it-works">
            <li className="ul-item">How it Works</li>
          </Link>{" "}
          <Link to="/about">
            {" "}
            <li className="ul-item">About </li>
          </Link>
          <Link to="/contact">
            <li className="ul-item ">Contact</li>
          </Link>{" "}
        </ul>
      </div>
      <div className="flex items-center">
        <button className=" bg-green-800 w-12 h-8 rounded-md">Log in</button>
      </div>
    </div>
  );
};

export default Header;
