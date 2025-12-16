import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-white to-purple-50 shadow-inner px-20 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left - Branding */}
        <div className="text-purple-700 font-bold text-2xl font-poppins">
          Zaru.dev
        </div>

        {/* Center - Copyright */}
        <div className="text-gray-600 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Zarar Afridi — All rights reserved.
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-6 items-center">
          <a
            href="https://github.com/zararafridi"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub className="text-xl text-gray-700 hover:text-purple-600 transition" />
          </a>
          <a
            href="https://linkedin.com/in/zararafridi"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin className="text-xl text-gray-700 hover:text-purple-600 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
