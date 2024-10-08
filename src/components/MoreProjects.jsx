import React from "react";
import { Link } from "react-router-dom"; 
import project1Image from "../assets/blog.jpg";
import project2Image from "../assets/calculator.jpeg";
import qrc from "../assets/qr.png"

const moreProjects = [
  {
    id: 4,
    name: "Routing Project",
    technologies: "React, Node.js",
    image: project1Image,
    github: "https://github.com/Ruthrapathi-murugan/react-router",
    netlify: "https://eloquent-queijadas-8063fc.netlify.app/",
  },
  {
    id: 5,  
    name: "Calculator",
    technologies: "React, Express",
    image: project2Image,
    github: "https://github.com/Ruthrapathi-murugan/calculator-task",
    netlify: "https://ruthracalculator.netlify.app/",
  },
  {
    id: 6,  
    name: "Qr code Generator",
    technologies: "React, Express",
    image: qrc,
    github: "https://github.com/Ruthrapathi-murugan/QR-code-Generator",
    netlify: "https://qr-codegenerater.netlify.app/",
  },
  // Add more projects here
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {moreProjects.map((project) => (
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
        </div>
      </div>
    );
  };
  
  export default MoreProjects;
