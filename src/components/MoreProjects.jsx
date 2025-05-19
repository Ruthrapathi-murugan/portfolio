import React from "react";
import { Link } from "react-router-dom"; 
import project1Image from "../assets/blog.jpg";
import project2Image from "../assets/calculator.jpeg";
import qrc from "../assets/qr.png";
import travels from "../assets/travels.jpg";
import dei from "../assets/driving.jpg";
import travel from "../assets/ndt-services.jpg";

const moreProjects = [
  {
    id: 4,
    name: "Travels",
    technologies: "React, Node.js",
    image: travels,
    netlify: "https://nakshatra-travels.netlify.app/",
  },
  {
    id: 5,
    name: "Routing Project",
    technologies: "React",
    image: project1Image,
    netlify: "https://eloquent-queijadas-8063fc.netlify.app/",
  },
  {
    id: 6,  
    name: "Calculator",
    technologies: "JavaScript",
    image: project2Image,
    netlify: "https://ruthracalculator.netlify.app/",
  },
  {
    id: 7,  
    name: "QR Code Generator",
    technologies: "JavaScript",
    image: qrc,
    netlify: "https://qr-codegenerater.netlify.app/",
  },
  {
    id: 8,  
    name: "Driving School",
    technologies: "React, Express",
    image: dei,
    netlify: "https://nalludrivingschool.netlify.app/",
  },
  {
   id: 9,
    name: "ULTRAWAVE NDT SERVICES",
    technologies: "React JS",
    image: travel,
    netlify: "https://ultrawavendtservices.netlify.app/",
}
];

const MoreProjects = () => {
  return (
    <div className="bg-black text-white py-20" id="more-projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">More Projects</h2>

        {/* Navigation link to go back to home */}
        <div className="text-center mb-8">
          <Link 
            to="/" 
            className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full hover:scale-110 transform transition-transform duration-300 text-lg font-bold"
          >
            Back to Home
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {moreProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => window.open(project.netlify, "_blank")}
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400">{project.technologies}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreProjects;
