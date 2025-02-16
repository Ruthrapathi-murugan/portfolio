import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 md:px-16 lg:px-24 shadow-lg">
      <div className="container py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold transform transition-transform duration-300 hover:scale-105 hover:rotate-1">
          Ruthrapathi-Murugan
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {[
            { name: 'Home', to: 'home' },
            { name: 'My Education', to: 'education' },
            { name: 'My Skills', to: 'skills' },
            { name: 'About Me', to: 'about' },
            { name: 'Services', to: 'service' },
            { name: 'Projects', to: 'project' },
            { name: 'Contact', to: 'contact' },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={500}
              className="relative text-lg font-medium cursor-pointer transition-transform duration-300 
                        hover:text-gray-400 hover:-translate-y-1 hover:rotate-[2deg] before:absolute 
                        before:w-full before:h-full before:bg-gray-600 before:opacity-0 before:rounded-lg before:transition-opacity 
                        before:duration-300 hover:before:opacity-20"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Connect Me Button - Visible on Desktop */}
        <Link
          to="connectme"
          smooth={true}
          duration={500}
          className="hidden md:inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full cursor-pointer 
          transform transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:rotate-2"
        >
          Connect Me
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu - Sidebar */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-black text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden z-50`}>
        <button 
          className="absolute top-5 right-5 text-2xl text-white"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>
        <div className="flex flex-col mt-20 space-y-6 text-center">
          {[
            { name: 'Home', to: 'home' },
            { name: 'My Education', to: 'education' },
            { name: 'My Skills', to: 'skills' },
            { name: 'About Me', to: 'about' },
            { name: 'Services', to: 'service' },
            { name: 'Projects', to: 'project' },
            { name: 'Contact', to: 'contact' },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={500}
              className="text-lg cursor-pointer hover:text-gray-400"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Backdrop when menu is open */}
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
