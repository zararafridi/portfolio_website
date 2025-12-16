import React from "react";
import { FaReact, FaNode, FaDatabase, FaUserTie } from "react-icons/fa";
import AboutImg from "../assets/undraw_profile_d7qw.svg";

function About() {
  return (
    <section className="min-h-screen py-16 px-4 md:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-violet-700">About Me</h1>
        <p className="text-slate-600 mt-2 text-lg">
          Full-stack Developer • Lifelong Learner • Problem Solver
        </p>
      </div>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-1">
          <img src={AboutImg} alt="About" className="w-full max-w-md mx-auto" />
        </div>

        {/* Description */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4 text-violet-600">Who am I?</h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            I'm <span className="font-semibold text-violet-700">Zarar Afridi</span>, a MERN stack developer passionate about building modern, efficient, and scalable web applications. From crafting intuitive UIs to building solid backend systems, I thrive on creating impactful digital experiences.
          </p>
          <p className="text-slate-700 text-lg leading-relaxed mt-4">
            I love solving problems, learning new tools, and collaborating with others to build full-cycle applications that deliver real value.
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center text-violet-700 mb-8">What I Bring</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <FaReact className="text-4xl text-violet-600 mx-auto mb-4" />
            <h3 className="font-semibold text-xl text-slate-800 mb-2">Frontend</h3>
            <p className="text-slate-600">React, Redux, Tailwind, Vite</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <FaNode className="text-4xl text-violet-600 mx-auto mb-4" />
            <h3 className="font-semibold text-xl text-slate-800 mb-2">Backend</h3>
            <p className="text-slate-600">Node.js, Express, REST APIs</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <FaDatabase className="text-4xl text-violet-600 mx-auto mb-4" />
            <h3 className="font-semibold text-xl text-slate-800 mb-2">Database</h3>
            <p className="text-slate-600">MongoDB, Firebase, Appwrite</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <FaUserTie className="text-4xl text-violet-600 mx-auto mb-4" />
            <h3 className="font-semibold text-xl text-slate-800 mb-2">Soft Skills</h3>
            <p className="text-slate-600">Teamwork, Communication, Time Management, Problem Solving</p>
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center text-violet-700 mb-10">Journey</h2>
        <div className="relative border-l-4 border-violet-600 pl-6">
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-violet-600">2023 – Present</h3>
            <p className="text-slate-700">
              Freelancing & personal MERN stack projects. Helping clients build fast, clean, scalable applications.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-violet-600">2022 – 2023</h3>
            <p className="text-slate-700">
              Built multiple full-stack apps and contributed to open-source. Strengthened backend and database knowledge.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-violet-600">2021 – 2022</h3>
            <p className="text-slate-700">
              Started my self-taught journey. Focused on JavaScript, Git, and responsive UI design fundamentals.
            </p>
          </div>
        </div>
      </div>

      {/* Resume Buttons */}
      <div className="mt-16 text-center">
        <a
          href="/zararCV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-violet-600 text-white px-6 py-3 rounded-full font-medium hover:bg-violet-700 transition duration-300"
        >
          View My Resume
        </a>
        <a
          href="/zararCV.pdf"
          download
          className="ml-4 inline-block border-2 border-violet-600 text-violet-700 px-6 py-3 rounded-full font-medium hover:bg-violet-50 transition duration-300"
        >
          Download Resume
        </a>
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-semibold text-violet-700 mb-4">Want to collaborate?</h2>
        <p className="text-slate-700 text-lg mb-6">
          I’m always open to new opportunities, freelance projects, or team collaborations.
        </p>
        <a
          href="#contact"
          className="bg-violet-600 text-white px-6 py-3 rounded-full font-medium hover:bg-violet-700 transition duration-300"
        >
          Let’s Connect
        </a>
      </div>
    </section>
  );
}

export default About;
