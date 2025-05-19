import React from "react";
import { Link } from "react-router-dom";
import employeeMSImage from "../assets/employee-ms.png";
import qr from "../assets/3bed.jpg";
import mesklintech from "../assets/mesklintech.jpeg";
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
    technologies: "React JS",
    image: qr,
    netlify: "https://sampathresidency-palani.netlify.app/",
  },
  {
    id: 3,
    name: "Mesklintech",
    technologies: "React JS",
    image: mesklintech,
    netlify: "https://mesklintech.netlify.app/",
  },
];

const ongoingProjects = [
  {
    id: 1,
    name: "DMA Company",
    technologies: "React JS",
    image: Dma,
    netlify: "https://enchanting-starship-1ff8a4.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black py-20 font-[Poppins]">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          🚀 My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl p-4 bg-gray-900/70 backdrop-blur-lg border border-gray-700 shadow-xl hover:scale-[1.05] transition duration-500 hover:shadow-cyan-500/30 cursor-pointer hover:-translate-y-2"
              onClick={() => window.open(project.netlify, "_blank")}
            >
              <div className="overflow-hidden rounded-xl shadow-lg mb-5">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-52 object-cover transform hover:scale-110 transition duration-700"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
              <p className="text-cyan-300 text-sm">{project.technologies}</p>
            </div>
          ))}
        </div>

        {/* Ongoing Projects */}
        <div className="mt-20 text-center">
          <h2 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            🔧 Ongoing Projects
          </h2>

          <div className="flex justify-center">
            {ongoingProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl p-5 bg-gray-900/70 backdrop-blur-lg border border-gray-700 shadow-xl hover:scale-[1.05] transition duration-500 hover:shadow-pink-500/30 cursor-pointer hover:-translate-y-2 w-96"
                onClick={() => window.open(project.netlify, "_blank")}
              >
                <div className="overflow-hidden rounded-xl shadow-lg mb-5">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-52 object-cover transform hover:scale-110 transition duration-700"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-pink-400 text-sm">{project.technologies}</p>
              </div>
            ))}
          </div>
        </div>

        {/* More Projects Button */}
        <div className="text-center mt-16">
          <Link to="/more-projects">
            <button className="bg-gradient-to-r from-emerald-400 to-cyan-500 text-white text-lg px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-500">
              ✨ View More Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
