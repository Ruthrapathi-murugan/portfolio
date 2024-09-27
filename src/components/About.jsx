import React from "react";
import { FaUserGraduate, FaMapMarkerAlt, FaGlobe, FaBirthdayCake } from 'react-icons/fa'; // Importing icons
import AboutImage from "../assets/aboutme-image.png";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-5xl font-bold text-center mb-12 tracking-wide">
          About <span className="text-indigo-500">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="About Me"
            className="w-72 h-80 rounded-full object-cover mb-8 md:mb-0 shadow-lg hover:scale-105 transform transition-transform duration-300"
          />

          <div className="flex-1 text-lg leading-relaxed space-y-8">
            {/* Category: Born */}
            <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4">
                <FaBirthdayCake className="text-indigo-500 text-3xl" />
                <div>
                  <p className="text-sm text-gray-400">Born</p>
                  <p className="text-xl font-semibold">June 7, 1993</p>
                </div>
              </div>
            </div>

            {/* Category: Education */}
            <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4">
                <FaUserGraduate className="text-indigo-500 text-3xl" />
                <div>
                  <p className="text-sm text-gray-400">Education</p>
                  <p className="text-xl font-semibold">Bachelor of Engineering in Computer Science</p>
                </div>
              </div>
            </div>

            {/* Category: Location */}
            <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-indigo-500 text-3xl" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-xl font-semibold">Bangalore</p>
                </div>
              </div>
            </div>

            {/* Category: Languages Known */}
            <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4">
                <FaGlobe className="text-indigo-500 text-3xl" />
                <div>
                  <p className="text-sm text-gray-400">Languages Known</p>
                  <p className="text-xl font-semibold">English, Tamil, Malayalam</p>
                </div>
              </div>
            </div>

            {/* About description */}
            <div className="mt-6">
              <p className="text-lg leading-relaxed">
                I'm a full-stack developer with a passion for building dynamic and modern web applications. 
                I love tackling challenges and learning new technologies to keep up with the ever-evolving web development landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
