import React from "react";
import picture from "../assets/picture.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function HeroSection() {
  return (
    <section className=" flex flex-col md:flex-row  justify-between min-h-[85vh]  ">
      <div className="text-center md:text-left md:max-w-[50%]">
        <h1 className="text-2xl md:text-3xl font-extrabold leading-tight opacity-70">
          Hey, I'm <span className="text-purple-600">Zarar</span>{" "}
          <span className="animate-wave">👋</span>
        </h1>
        <h2 className=" pt-4 text-2xl md:text-6xl font-extrabold leading-tight">
          <span className="text-purple-600">Full Stack</span > <br /><span className="text-gray-700"> Developer </span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Full-stack engineer bridging frontend elegance with backend robustness
          <br />
          Architecting complete digital solutions from concept to deployment
          <br />
          Transforming complex requirements into seamless user experiences
          <br />
          Crafting scalable systems with cutting-edge technologies
          <br />
          Delivering performant full-cycle applications users love to interact
          with
        </p>

        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-700 transition duration-300">
            Get in Touch
          </button>
          <button className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-xl font-medium hover:bg-purple-50 transition duration-300">
            Browse Projects
          </button>
        </div>
        <div className="flex gap-12 pl-14 mt-8">
          <span className=" ">
            {" "}
            <FaLinkedin className=" text-4xl cursor-pointer text-blue-600 " />{" "}
          </span>
          <span>
            <FaGithub className="text-4xl  cursor-pointer " />
          </span>
        </div>
      </div>

      <div className="mt-10 md:mt-0">
        <img
          src={picture}
          alt="Zarar Afridi"
          className="w-100 h-100 object-cover rounded-full border-4 border-purple-600 shadow-xl hover:scale-105 transition duration-300"
        />
      </div>
    </section>
  );
}

export default HeroSection;
