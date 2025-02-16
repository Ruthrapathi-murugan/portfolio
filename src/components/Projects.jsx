import React from "react";
import { Link } from "react-router-dom";
import employeeMSImage from "../assets/employee-ms.png";
import qr from "../assets/3bed.jpg";
import travel from "../assets/ndt-services.jpg";
import Dma from "../assets/DMA logo.jpg";

const projects = [
  {
    id: 1,
    name: "Employee MS",
    technologies: "MERN Stack",
    image: employeeMSImage,
    netlify: "https://boisterous-bienenstitch-2fcc86.netlify.app/",
  },
  {
    id: 2,
    name: "Hotel Website",
    technologies: "REACT JS",
    image: qr,
    netlify: "https://sampathresidency-palani.netlify.app/",
  },
  {
    id: 3,
    name: "ULTRAWAVE NDT SERVICES",
    technologies: "REACT JS",
    image: travel,
    netlify: "https://ultrawavendtservices.netlify.app/",
  },
];

const ongoingProjects = [
  {
    id: 1,
    name: "DMA Company",
    technologies: "REACT JS",
    image: Dma,
    netlify: "https://enchanting-starship-1ff8a4.netlify.app/",
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

        {/* Ongoing Projects Section */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold text-center mb-12">Ongoing Projects</h2>
          <div className="flex justify-center">
            {ongoingProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer w-96"
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

        {/* More Projects Button */}
        <div className="text-center mt-12">
          <Link to="/more-projects">
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full hover:scale-105 transform transition-transform duration-300">
              View More Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
