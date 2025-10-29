import React from "react";
import { FaRegBuilding, FaBriefcase, FaLaptopCode, FaGlobe } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const experienceDetails = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "BrainVoice.ai, Chennai",
    duration: "Jan 2024 – Mar 2025 (1 year 3 months)",
    description:
      "Collaborated on AI-powered web applications, focused on integrating machine learning models into web platforms.",
    icon: <FaBriefcase className="text-purple-500 text-3xl" />,
    website: "https://www.brainvoiceai.com/",
  },
  {
    id: 2,
    role: "Software Development Engineer",
    company: "MesklinTech, Mumbai",
    duration: "Apr 2025 – Jun 2025 (3 months)",
    description:
      "Focused on frontend development and UI/UX design using Figma and React. Contributed to building scalable interfaces with clean user experience.",
    icon: <FaBriefcase className="text-purple-500 text-3xl" />,
    website: "https://www.mesklintech.com",
  },
  {
    id: 3,
    role: "Associate Software Engineer",
    company: "Just Creative Designs, Bangalore",
    duration: "July 2025 – Present",
    description:
      "Built and optimized real-time web applications using Next.js, enhancing performance and scalability while gaining hands-on experience with modern full-stack development.",
    icon: <FaLaptopCode className="text-blue-500 text-3xl" />,
    website: "https://www.jcdinterior.com",
  },
  {
    id: 4,
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    duration: "2023 – Present",
    description:
      "Worked on multiple freelance projects, developing dynamic websites and dashboards for hotels, HR systems, and e-commerce platforms using the MERN stack and modern UI frameworks.",
    icon: <FaGlobe className="text-green-500 text-3xl" />,
    website: "https://ruthrapathi-info.netlify.app/",
  },
];

const Experience = () => {
  return (
    <div className="bg-black text-white py-20" id="experience">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Experience</h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {experienceDetails.map((experience) => (
            <SwiperSlide key={experience.id}>
              <a
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform py-3
                transition-transform duration-300 hover:scale-105"
              >
                <div className="flex justify-between items-center mb-4">
                  <div
                    className="text-2xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-green-600 to-blue-400"
                  >
                    {experience.id}
                  </div>
                  <div>{experience.icon}</div>
                </div>

                <h3
                  className="mt-2 text-3xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500"
                >
                  {experience.company}
                </h3>

                <p
                  className="mt-3 text-sm text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-600 to-blue-400"
                >
                  {experience.role}
                </p>

                <p className="mt-1 text-gray-400">Duration: {experience.duration}</p>
                <p className="mt-2 text-gray-300">{experience.description}</p>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Experience;
