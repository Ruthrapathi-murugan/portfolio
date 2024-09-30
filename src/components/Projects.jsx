import React from "react";
import { Link } from "react-router-dom"; // For navigation
import employeeMSImage from "../assets/employee-ms.png";
import qr from "../assets/qr.png";
import travels from "../assets/3bed.jpg";

const projects = [
  {
    id: 1,
    name: "Employee MS",
    technologies: "MERN Stack",
    image: employeeMSImage,
    github: "https://github.com/Ruthrapathi-murugan/Frontend-HrManagement-Dashboard",
    netlify: "https://boisterous-bienenstitch-2fcc86.netlify.app/",
  },
  {
    id: 2,
    name: "Hotel Website",
    technologies: "REACT JS",
    image: qr,
    github: "https://github.com/Ruthrapathi-murugan/sampath-residency",
    netlify: "https://sampathresidency.netlify.app/",
  },
  {
    id: 3,
    name: "TRAVELS",
    technologies: "REACT JS",
    image: travels,
    github: "https://github.com/Ruthrapathi-murugan/nakshatra-travels",
    netlify: "https://nakshatra-travels.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full mr-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={project.netlify}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Netlify
              </a>
            </div>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="text-center mt-12">
          <Link to="/more-projects">
            <button
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full hover:scale-105 transform transition-transform duration-300"
            >
              View More Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
