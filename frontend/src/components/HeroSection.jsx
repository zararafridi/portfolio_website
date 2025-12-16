import React from "react";
import picture from "../assets/picture.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function HeroSection() {
  return (
    <section className="flex px-32 flex-col md:flex-row justify-between items-center min-h-[85vh] py-10">
      {/* Left Content */}
      <div className="text-center md:text-left md:max-w-[50%]">
        <h1 className="text-2xl md:text-3xl font-extrabold leading-tight text-slate-700">
          Hey, I'm <span className="text-violet-600">Zarar Afridi</span>{" "}
          <span className="animate-wave">👋</span>
        </h1>

        <h2 className="pt-4 text-2xl md:text-6xl font-extrabold leading-tight">
          <span className="text-violet-600">MERN Stack</span>
          <br />
          <span className="text-slate-800">Developer</span>
        </h2>

        <p className="text-slate-600 mt-4 text-lg leading-relaxed">
          Crafting seamless user experiences with React, Node.js, and MongoDB.
          <br />
          Passionate about building full-stack web apps with clean code and
          modern UI.
          <br />
          Experienced in REST APIs, JWT auth, Appwrite, and scalable backend systems.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <NavLink to='/contact'>
            <button className="bg-violet-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-violet-700 transition duration-300">
              Contact Me
            </button>
          </NavLink>
          <NavLink to='/projects'>
            <button className="border-2 border-violet-600 text-violet-600 px-6 py-3 rounded-xl font-medium hover:bg-violet-50 transition duration-300">
              View Projects
            </button>
          </NavLink>
        </div>

        {/* Social Icons */}
        <div className="flex gap-8 mt-8 justify-center md:justify-start">
          <a
            href="https://linkedin.com/in/zararafridi"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin className="text-4xl cursor-pointer text-slate-800 hover:scale-110 transition" />
          </a>
          <a
            href="https://github.com/zararafridi"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub className="text-4xl cursor-pointer text-slate-800 hover:text-violet-600 hover:scale-110 transition" />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0">
        <img
          src={picture}
          alt="Zarar Afridi"
          className="w-64 h-64 object-cover rounded-full border-4 border-violet-600 shadow-xl hover:scale-105 transition duration-300"
        />
      </div>
    </section>
  );
}

export default HeroSection;
