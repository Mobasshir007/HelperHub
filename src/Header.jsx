import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/banner5.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-gradient-to-r from-cyan-600 to-gray-400 shadow-xl shadow-cyan-100">
      {/* Main Header Container */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 py-4 md:py-0 md:h-28">
        {/* Logo and Mobile Controls Row */}
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="w-32 sm:w-40 md:w-64 lg:w-80 rounded-sm"
              src={logo}
              alt="Company Logo"
            />
          </div>

          {/* Mobile Menu Toggle & Login Button */}
          <div className="flex items-center gap-3 md:hidden">
           <button
  onClick={() => setIsLoggedIn(prev => !prev)}
  className="bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
>
  {isLoggedIn ? "Log Out" : "Log In"}
</button>
            <button
              className="text-3xl text-gray-800 hover:text-gray-600 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <ul className="flex gap-6 lg:gap-8 text-white">
            <Link to="/">
              <li className="hover:text-gray-800 transition-colors cursor-pointer font-medium">
                Home
              </li>
            </Link>
            <Link to="/services">
              <li className="hover:text-gray-800 transition-colors cursor-pointer font-medium">
                Services
              </li>
            </Link>
            <Link to="/how-it-works">
              <li className="hover:text-gray-800 transition-colors cursor-pointer font-medium">
                How it Works
              </li>
            </Link>
            <Link to="/about">
              <li className="hover:text-gray-800 transition-colors cursor-pointer font-medium">
                About
              </li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-gray-800 transition-colors cursor-pointer font-medium">
                Contact
              </li>
            </Link>
          </ul>

          <button onClick={()=>setIsLoggedIn(prev=>!prev)}  className="bg-green-800 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors whitespace-nowrap">
            {isLoggedIn ? "Log In" : "Log Out"}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-cyan-300 border-t border-cyan-400">
          <nav className="px-6 py-4">
            <ul className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-gray-900 font-medium hover:text-gray-600 transition-colors py-2"
              >
                Home
              </Link>
              <Link
                to="/services"
                onClick={() => setMenuOpen(false)}
                className="text-gray-900 font-medium hover:text-gray-600 transition-colors py-2"
              >
                Services
              </Link>
              <Link
                to="/how-it-works"
                onClick={() => setMenuOpen(false)}
                className="text-gray-900 font-medium hover:text-gray-600 transition-colors py-2"
              >
                How it Works
              </Link>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="text-gray-900 font-medium hover:text-gray-600 transition-colors py-2"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-gray-900 font-medium hover:text-gray-600 transition-colors py-2"
              >
                Contact
              </Link>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
