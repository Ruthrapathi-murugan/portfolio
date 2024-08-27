import React from "react";

const educationDetails = [
  {
    id: 1,
    degree: "Bachelor of Computer Science and engineering",
    institution: "Anna University,Chennai",
    College:"sri subramanya college of engineering and technology,Palani",
    year: "2011 - 2014",
    Marks:"60%",
    description: " Specialized in software development and system design.",
  },
  {
    id: 2,
    degree: "Diploma in computer Engineering",
    institution: "Anna University ,Chennai",
    year: "2008 - 2011",
    College:"sri balamurugan Polytechnic college,Palani",
    Marks:"75%",
    description: "Studied core concepts of computer science and programming.",
  },
  {
    id: 3,
    degree: "Full Stack Developer",
    institution: "Guvi Geek technology,chennai",
    year: "2024",
  
    description: "Completed an intensive bootcamp focusing on full-stack web development.",
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
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {education.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {education.degree}
              </h3>
              <p className="mt-2 text-gray-300">{education.institution}</p>
              <p className="mt-2 text-gray-300">{education.College}</p>
              <p className="mt-1 text-gray-400">Year : {education.year}</p>
              <p className="mt-1 text-gray-400">Marks:{education.Marks}</p>
              <p className="mt-2 text-gray-300">{education.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
