import React from 'react';
import { Link } from 'react-scroll'; // Import from react-scroll

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>Ruthrapathi-Murugan</div>
        <div className='space-x-6'>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className='hover:text-gray-400 cursor-pointer'
          >
            Home
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className='hover:text-gray-400 cursor-pointer'
          >
            My Education
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className='hover:text-gray-400 cursor-pointer'
          >
            My Skills
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className='hover:text-gray-400 cursor-pointer'
          >
            About Me
          </Link>
          <Link
            to="service"
            smooth={true}
            duration={500}
            className='hover:text-gray-400 cursor-pointer'
          >
            Services
          </Link>
          <Link
            to="project"
            smooth={true}
            duration={500}
            className='hover:text-gray-400 cursor-pointer'
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className='hover:text-gray-400 cursor-pointer'
          >
            Contact
          </Link>
        </div>
        <Link  
          to="connectme" 
          smooth={true}
          duration={500}
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full cursor-pointer'
        >
          Connect Me
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
