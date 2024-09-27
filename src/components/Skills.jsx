import React from "react";
import { FaCode, FaServer, FaDatabase, FaCloud, FaKeyboard } from "react-icons/fa"; // Importing icons

const Skills = () => {
  return (
    <div className="bg-black text-white py-20" id="skills">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Front-end Development */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <FaCode className="text-indigo-500 text-3xl" />
              <h3 className="text-2xl font-semibold">Front-end Development</h3>
            </div>
            <ul className="list-disc list-inside">
              <li>React.js</li>
              <li>HTML, CSS (Tailwind, Bootstrap)</li>
              <li>JavaScript</li>
            </ul>
          </div>

          {/* Back-end Development */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <FaServer className="text-indigo-500 text-3xl" />
              <h3 className="text-2xl font-semibold">Back-end Development</h3>
            </div>
            <ul className="list-disc list-inside">
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>

          {/* Database */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <FaDatabase className="text-indigo-500 text-3xl" />
              <h3 className="text-2xl font-semibold">Database</h3>
            </div>
            <ul className="list-disc list-inside">
              <li>MongoDB</li>
              <li>SQL</li>
            </ul>
          </div>

          {/* Cloud Infrastructure */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <FaCloud className="text-indigo-500 text-3xl" />
              <h3 className="text-2xl font-semibold">Cloud Infrastructure</h3>
            </div>
            <ul className="list-disc list-inside">
              <li>AWS S3</li>
            </ul>
          </div>

          {/* Programming Languages */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <FaKeyboard className="text-indigo-500 text-3xl" />
              <h3 className="text-2xl font-semibold">Programming Languages</h3>
            </div>
            <ul className="list-disc list-inside">
              <li>JavaScript</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
