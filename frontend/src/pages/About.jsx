import React from "react";
import { FaReact, FaNode, FaDatabase, FaUserTie } from "react-icons/fa";
import AboutImg from "../assets/undraw_profile_d7qw.svg"; // Replace with your illustration

function About() {
  return (
    <section className="min-h-screen py-16 px-4 md:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-purple-700">About Me</h1>
        <p className="text-gray-600 mt-2 text-lg">
          Full-stack Developer | Lifelong Learner | Problem Solver
        </p>
      </div>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-1">
          <img src={AboutImg} alt="About" className="w-full max-w-md mx-auto" />
        </div>

        {/* Description */}
        <div className="flex-1 text-center">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">Who am I?</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            I'm <span className="font-semibold text-purple-700">Zarar Afridi</span>, a passionate full-stack developer with a deep love for clean code and elegant user experiences. I specialize in building fast, scalable web apps that solve real-world problems using the latest technologies in the JavaScript ecosystem.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Whether it’s designing frontend interfaces or architecting backend logic, I love crafting software that people enjoy using.
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">What I Bring</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Frontend */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <FaReact className="text-4xl text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold text-xl text-gray-800 mb-2">Frontend</h3>
            <p className="text-gray-600">React.js, Redux, Tailwind CSS, Vite</p>
          </div>

          {/* Backend */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <FaNode className="text-4xl text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold text-xl text-gray-800 mb-2">Backend</h3>
            <p className="text-gray-600">Node.js, Express.js, REST APIs</p>
          </div>

          {/* Database */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <FaDatabase className="text-4xl text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold text-xl text-gray-800 mb-2">Database</h3>
            <p className="text-gray-600">MongoDB, Firebase, Appwrite</p>
          </div>

          {/* Soft Skills */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <FaUserTie className="text-4xl text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold text-xl text-gray-800 mb-2">Soft Skills</h3>
            <p className="text-gray-600">
              Teamwork, Communication, Time Management, Problem Solving
            </p>
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">Journey</h2>
        <div className="relative border-l-4 border-purple-600 pl-6">
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-purple-600">2023 – Present</h3>
            <p className="text-gray-700">
              Working on freelance & personal projects using MERN Stack and postgreSQL, helping clients build clean, fast, and scalable web apps.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-purple-600">2022 – 2023</h3>
            <p className="text-gray-700">
              Learned advanced frontend & backend development, contributed to open-source, and built full-stack applications.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-purple-600">2021 – 2022</h3>
            <p className="text-gray-700">
              Started my journey as a self-taught developer. Focused on JavaScript, HTML, CSS, and Git.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Want to collaborate?</h2>
        <p className="text-gray-700 text-lg mb-6">I’m always open to new opportunities and collaborations.</p>
        <a
          href="#contact"
          className="bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition duration-300"
        >
          Let's Connect
        </a>
      </div>
    </section>
  );
}

export default About;
