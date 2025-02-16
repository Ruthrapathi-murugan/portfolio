import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const ConnectMe = () => {
  return (
    <div className="bg-black text-white py-8" id="connectme">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-8">Connect with Me</h2>
        <div className="flex justify-center space-x-8">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/ruthrapathi.m"
            className="text-[#1877F2] text-3xl transition-transform duration-300 hover:scale-110"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>

          {/* Twitter (X) */}
          <a
            href="https://x.com/ruthrapathi1"
            className="text-[#1DA1F2] text-3xl transition-transform duration-300 hover:scale-110"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ruthrapathim/"
            className="text-[#0A66C2] text-3xl transition-transform duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Ruthrapathi-murugan"
            className="text-white text-3xl transition-transform duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+919626380310"
            className="text-[#25D366] text-3xl transition-transform duration-300 hover:scale-110"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          {/* Phone */}
          <a
            href="tel:+919626380310"
            className="text-[#FF6F00] text-3xl transition-transform duration-300 hover:scale-110"
            aria-label="Phone"
          >
            <FaPhoneAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnectMe;
