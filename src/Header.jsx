import React, { useState } from "react";
import logo from "./assets/banner5.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      className="w-full h-auto md:h-28
                text-white shadow-xl shadow-cyan-100
                bg-linear-to-r from-cyan-400 to-gray-200
                flex flex-col md:flex-row
                md:justify-between md:items-center px-4 "
    >
      <div>
        <img className="w-40 sm:w-52 md:w-80 rounded-sm" src={logo} alt="" />
      </div>
      <div
        className="flex justify-center items-center
                py-4 md:py-2 px-2 w-full"
      >
        {" "}
        <ul className="hidden md:flex gap-6 ">
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
     <div className="flex items-center w-full md:w-auto justify-between md:justify-end gap-4">

  {/* HAMBURGER ICON (MOBILE ONLY) */}
  <button
    className="md:hidden text-3xl text-gray-800"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    ☰
  </button>

  <button className="bg-green-800 w-full md:w-20 h-9 rounded-md text-sm font-medium">
    Log in
  </button>
</div>
{menuOpen && (
  <div className="md:hidden bg-cyan-300 px-6 py-4">
    <ul className="flex flex-col gap-4 text-gray-900 font-medium">
      <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
      <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
      <Link to="/how-it-works" onClick={() => setMenuOpen(false)}>How it Works</Link>
      <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
      <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
    </ul>
  </div>
)}
    </div>
    
  );
};

export default Header;
