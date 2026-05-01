import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function HeroSection() {
  return (
    <section className="grid min-h-[78vh] items-center gap-12 py-8 md:grid-cols-2 md:py-12">
      <div className="animate-fade-up text-center md:text-left">
        <p className="mb-4 inline-block rounded-full border border-violet-300/30 bg-violet-400/10 px-4 py-1 text-sm font-medium text-violet-200">
          Full Stack Developer
        </p>
        <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
          Building fast, scalable, and beautiful web products.
        </h1>
        <h2 className="pt-4 text-xl font-semibold text-slate-200 sm:text-2xl">
          Hey, I am <span className="text-violet-300">Zarar Afridi</span>. I design and develop
          production-ready MERN applications.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
          I create responsive interfaces, robust APIs, and clean architecture that help
          products launch confidently and grow smoothly.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
          <NavLink to="/contact">
            <button className="w-full rounded-xl bg-violet-500 px-6 py-3 font-semibold text-white transition hover:bg-violet-400 sm:w-auto">
              Contact Me
            </button>
          </NavLink>
          <NavLink to="/projects">
            <button className="w-full rounded-xl border border-violet-300/60 px-6 py-3 font-semibold text-violet-100 transition hover:bg-violet-400/10 sm:w-auto">
              View Projects
            </button>
          </NavLink>
        </div>
        <div className="mt-8 flex justify-center gap-7 md:justify-start">
          <a
            href="https://linkedin.com/in/zararafridi"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="text-slate-200 transition hover:scale-110 hover:text-violet-300"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="https://github.com/zararafridi"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="text-slate-200 transition hover:scale-110 hover:text-violet-300"
          >
            <FaGithub className="text-3xl" />
          </a>
        </div>
      </div>
      <div className="animate-fade-up-delay">
        <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-violet-900/25 backdrop-blur">
          <div className="mb-4 h-2 w-20 rounded-full bg-violet-400/70" />
          <p className="text-sm text-slate-300">Current focus</p>
          <h3 className="mt-2 text-2xl font-bold text-white">Modern Full Stack Apps</h3>
          <ul className="mt-5 space-y-3 text-slate-200">
            <li>- React, Tailwind, performance-first UI</li>
            <li>- Node.js, Express, secure APIs</li>
            <li>- MongoDB, Appwrite, and cloud deployment</li>
          </ul>
          <div className="mt-6 rounded-xl border border-violet-300/25 bg-slate-900/70 p-4 text-sm text-violet-100">
            Available for freelance and remote opportunities.
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
