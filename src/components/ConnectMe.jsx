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
            href="https://www.facebook.com/ruthrapathi.m?mibextid=qi2Omg&rdid=uGGQcy74swtlCaq9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FcnJMbDH8bdM3s31e%2F%3Fmibextid%3Dqi2Omg"
            className="text-gray-400 hover:text-white text-3xl"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/i/flow/login?redirect_after_login=%2Fruthrapathi1"
            className="text-gray-400 hover:text-white text-3xl"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ruthrapathim/"
            className="text-gray-400 hover:text-white text-3xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Ruthrapathi-murugan"
            className="text-gray-400 hover:text-white text-3xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+919626380310" // Replace 'yourphonenumber' with the actual phone number
            className="text-gray-400 hover:text-white text-3xl"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          {/* Phone */}
          <a
            href="tel:+919626380310" // Replace with the actual phone number
            className="text-gray-400 hover:text-white text-3xl"
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
