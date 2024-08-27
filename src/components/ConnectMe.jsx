import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const ConnectMe = () => {
  return (
    <div className="bg-black text-white py-8" id="connectme">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
   
        <div className="flex justify-center space-x-8">
          <a
            href="https://www.facebook.com/ruthrapathi.m?mibextid=qi2Omg&rdid=uGGQcy74swtlCaq9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FcnJMbDH8bdM3s31e%2F%3Fmibextid%3Dqi2Omg"
            className="text-gray-400 hover:text-white text-3xl"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/i/flow/login?redirect_after_login=%2Fruthrapathi1"
            className="text-gray-400 hover:text-white text-3xl"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/ruthrapathim/"
            className="text-gray-400 hover:text-white text-3xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Ruthrapathi-murugan"
            className="text-gray-400 hover:text-white text-3xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnectMe;
