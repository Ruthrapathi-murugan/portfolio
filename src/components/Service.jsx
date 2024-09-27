import React from "react";
import { FaCode, FaServer, FaLayerGroup } from "react-icons/fa"; // Import relevant icons

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: <FaCode className="text-indigo-500 text-4xl mb-4" /> // Icon for Frontend
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
    icon: <FaServer className="text-green-500 text-4xl mb-4" /> // Icon for Backend
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
    icon: <FaLayerGroup className="text-blue-500 text-4xl mb-4" /> // Icon for Full-Stack
  },
];

const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105 text-center"
            >
              <br>
              </br>
              <div className="flex justify-center mb-4">
                {service.icon} {/* Display the icon */}
              </div>
              <h3
                className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
              >
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-green-400 hover:text-blue-500 transition duration-300"
              >
              
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
