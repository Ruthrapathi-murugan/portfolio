
  import { FaCode, FaServer, FaDatabase, FaCloud, FaKeyboard } from "react-icons/fa";
  import {  FaPuzzlePiece } from "react-icons/fa";


  const Skills = () => {
    return (
      <div className="bg-black text-white py-24 relative overflow-hidden" id="skills">
        <div className="absolute inset-0 bg-gradient-radial opacity-20"></div>

        <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 drop-shadow-[0_5px_30px_rgba(0,255,150,0.5)] animate-fadeIn">
            My Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-slideUp">
            {/* Skill Card */}
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-2xl border border-transparent hover:border-gradient-to-r from-green-400 to-blue-500 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:rotate-[1deg]"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <skill.icon className="text-4xl text-indigo-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                  <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-500">
                    {skill.title}
                  </h3>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const skillsData = [
    {
      title: "Front-end Development",
      icon: FaCode,
      items: ["Next.js","React.js", "HTML, CSS (Tailwind, Bootstrap)", "JavaScript"],
    },
    {
      title: "Back-end Development",
      icon: FaServer,
      items: ["Node.js", "Express.js"],
    },
    {
      title: "Database",
      icon: FaDatabase,
      items: ["MongoDB", "SQL"],
    },
    {
      title: "Cloud Infrastructure",
      icon: FaCloud,
      items: ["AWS S3","AWS EC2"],
    },
    {
      title: "Programming Languages",
      icon: FaKeyboard,
      items: ["JavaScript", "Python"],
    },
    {
    title: "Tools & Integrations",
    icon: FaPuzzlePiece, // you can pick another icon like FaPuzzlePiece / FaConnectdevelop if you prefer
    items: ["Zoho CRM", "Interakt WhatsApp Integration", "Google Leads Automation"],
  },
  ];

  export default Skills;
