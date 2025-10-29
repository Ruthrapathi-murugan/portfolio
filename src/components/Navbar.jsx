import React, { useState } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (section) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      // Wait a bit for the homepage to load, then scroll
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
          offset: -70,
        });
      }, 500);
    } else {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    }
  };

  const navItems = [
    { name: "Home", to: "home" },
    { name: "My Education", to: "education" },
    { name: "My Skills", to: "skills" },
    { name: "About Me", to: "about" },
    { name: "Services", to: "service" },
    { name: "Projects", to: "Projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-black via-gray-800 to-black text-white px-6 md:px-16 lg:px-24 shadow-lg">
      <div className="container py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-2xl font-bold cursor-pointer transform transition-all duration-300 hover:scale-105 hover:rotate-1"
          onClick={() => handleNavClick("home")}
        >
          Ruthrapathi-Murugan
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(item.to)}
              className="relative text-lg font-medium cursor-pointer transform transition-all duration-300 hover:text-gray-400 hover:scale-110 hover:rotate-2 hover:translate-y-1 before:absolute before:w-full before:h-full before:bg-gradient-to-r from-cyan-500 to-emerald-500 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Connect Me Button */}
        <button
          onClick={() => handleNavClick("connectme")}
          className="hidden md:inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:rotate-2"
        >
          Connect Me
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gradient-to-b from-gray-800 to-black text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden z-50`}
      >
        <button
          className="absolute top-5 right-5 text-2xl text-white"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>

        <div className="flex flex-col mt-20 space-y-6 text-center">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(item.to)}
              className="text-lg cursor-pointer transform transition-all duration-300 hover:text-gray-400 hover:scale-110 hover:translate-x-2"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
