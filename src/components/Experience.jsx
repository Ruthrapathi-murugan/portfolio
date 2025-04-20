import React from "react";
import { FaRegBuilding, FaBriefcase, FaLaptopCode } from "react-icons/fa"; // Import relevant icons

const experienceDetails = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "Guvi Geek Technology, Chennai",
    duration: "2024-04-01 ( months)",
    description: "Worked on real-time web applications and gained hands-on experience with the MERN stack.",
    icon: <FaLaptopCode className="text-blue-500 text-3xl" /> // Coding/Full Stack icon
  },
  {
    id: 2,
    role: "Full Stack Developer Intern",
    company: "BrainVoice.ai, Chennai",
    duration: "2025-01-01 (3 months)",
    description: "Collaborated on AI-powered web applications, focused on integrating machine learning models into web platforms.",
    icon: <FaBriefcase className="text-purple-500 text-3xl" /> // Briefcase icon
  },
  
  // Add more experience details as needed
];

const Experience = () => {
  return (
    <div className="bg-black text-white py-20" id="experience">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experienceDetails.map((experience) => (
            <div
              key={experience.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-between items-center mb-4">
                <div
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-600 to-blue-400"
                >
                  {experience.id}
                </div>
                <div>{experience.icon}</div> {/* Icon for each category */}
              </div>
              <h3 className="mt-2 text-3xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {experience.company} {/* Large font for role */}
              </h3>
              <p className="mt-3 text-sm text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400">{/* Smaller font for company name */}
                {experience.role}
              </p>
              <p className="mt-1 text-gray-400">Duration: {experience.duration}</p>
              <p className="mt-2 text-gray-300">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
