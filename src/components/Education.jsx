import React from "react";
import { FaUniversity, FaBook, FaLaptopCode } from "react-icons/fa"; // Import relevant icons

const educationDetails = [
  {
    id: 1,
    degree: "Bachelor of Computer Science and Engineering",
    institution: "Anna University, Chennai",
    College: "Sri Subramanya College of Engineering and Technology, Palani",
    year: "2011 - 2014",
    Marks: "60%",
    description: "Specialized in software development and system design.",
    icon: <FaUniversity className="text-indigo-500 text-3xl" /> // University icon
  },
  {
    id: 2,
    degree: "Diploma in Computer Engineering",
    institution: "Anna University, Chennai",
    College: "Sri Balamurugan Polytechnic College, Palani",
    year: "2008 - 2011",
    Marks: "75%",
    description: "Studied core concepts of computer science and programming.",
    icon: <FaBook className="text-green-500 text-3xl" /> // Diploma icon
  },
  {
    id: 3,
    degree: "Full Stack Developer",
    institution: "Guvi Geek Technology, Chennai",
    year: "2024",
    description: "Completed an intensive bootcamp focusing on full-stack web development.",
    icon: <FaLaptopCode className="text-blue-500 text-3xl" /> // Coding/Full Stack icon
  },
  // Add more education details as needed
];

const Education = () => {
  return (
    <div className="bg-black text-white py-20" id="education">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationDetails.map((education) => (
            <div
              key={education.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-between items-center mb-4">
                <div
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-600 to-blue-400"
                >
                  {education.id}
                </div>
                <div>{education.icon}</div> {/* Icon for each category */}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {education.degree}
              </h3>
              <p className="mt-2 text-gray-300">{education.institution}</p>
              {education.College && <p className="mt-2 text-gray-300">{education.College}</p>}
              <p className="mt-1 text-gray-400">Year: {education.year}</p>
              {education.Marks && <p className="mt-1 text-gray-400">Marks: {education.Marks}</p>}
              <p className="mt-2 text-gray-300">{education.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
