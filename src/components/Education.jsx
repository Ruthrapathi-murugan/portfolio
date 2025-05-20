import React from "react";
import { FaUniversity, FaBook, FaLaptopCode } from "react-icons/fa";

const educationDetails = [
  {
    id: 1,
    degree: "Bachelor of Computer Science and Engineering",
    institution: "Anna University, Chennai",
    College: "Sri Subramanya College of Engineering and Technology, Palani",
    year: "2011 - 2014",
    Marks: "60%",
    description: "Specialized in software development and system design.",
    icon: <FaUniversity className="text-pink-500 text-4xl drop-shadow-lg" />
  },
  {
    id: 2,
    degree: "Diploma in Computer Engineering",
    institution: "Anna University, Chennai",
    College: "Sri Balamurugan Polytechnic College, Palani",
    year: "2008 - 2011",
    Marks: "75%",
    description: "Studied core concepts of computer science and programming.",
    icon: <FaBook className="text-cyan-400 text-4xl drop-shadow-lg" />
  },
  {
    id: 3,
    degree: "Full Stack Developer",
    institution: "Guvi Geek Technology, Chennai",
    year: "2024",
    description: "Completed an intensive bootcamp focusing on full-stack web development.",
    icon: <FaLaptopCode className="text-emerald-400 text-4xl drop-shadow-lg" />
  },
];

const Education = () => {
  return (
    <div id="education" className="bg-gradient-to-br from-black via-gray-900 to-black py-20 font-[Poppins]">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-5xl font-bold text-center text-white mb-16 tracking-wide">
          🎓 My <span className="text-gradient bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Education</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {educationDetails.map((education) => (
            <div
              key={education.id}
              className="rounded-2xl p-6 bg-gray-900/70 backdrop-blur-lg border border-gray-700 shadow-2xl hover:scale-[1.05] transition-all duration-500 hover:shadow-cyan-500/40"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold text-cyan-300 drop-shadow-lg">{education.id}</span>
                {education.icon}
              </div>
              <h3 className="text-2xl font-extrabold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                {education.degree}
              </h3>
              <p className="text-gray-300 text-sm">{education.institution}</p>
              {education.College && <p className="text-gray-400 text-sm">{education.College}</p>}
              <p className="text-gray-500 text-sm mt-2">📅 {education.year}</p>
              {education.Marks && <p className="text-gray-500 text-sm">🎯 Marks: {education.Marks}</p>}
              <p className="text-gray-300 text-[15px] mt-3">{education.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
