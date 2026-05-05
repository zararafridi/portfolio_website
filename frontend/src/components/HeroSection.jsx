import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function HeroSection() {
  return (
    <section className="grid min-h-[78vh] items-center gap-12 py-8 md:grid-cols-2 md:py-12">
      <div className="animate-fade-up text-center md:text-left">
        <p className="terminal-heading mb-4">// who am i</p>
        <p className="mb-4 inline-block rounded-sm border border-emerald-300/30 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-200">
          Full Stack Developer
        </p>
        <h1 className="font-mono text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-6xl">
          building production-ready
          <span className="block text-emerald-300">MERN applications</span>
        </h1>
        <h2 className="pt-4 text-xl font-semibold text-slate-200 sm:text-2xl">
          Hey, I am <span className="text-emerald-300">Zarar Afridi</span>. I design and develop
          production-ready MERN applications.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
          I create responsive interfaces, robust APIs, and clean architecture that help
          products launch confidently and grow smoothly.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
          <NavLink to="/contact">
            <button className="terminal-button-primary w-full sm:w-auto">
              ./hire-me.sh
            </button>
          </NavLink>
          <NavLink to="/projects">
            <button className="terminal-button-secondary w-full sm:w-auto">
              cat projects/
            </button>
          </NavLink>
        </div>
        <div className="mt-8 flex justify-center gap-7 md:justify-start">
          <a
            href="https://linkedin.com/in/zararafridi"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="text-slate-200 transition hover:scale-110 hover:text-emerald-300"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="https://github.com/zararafridi"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="text-slate-200 transition hover:scale-110 hover:text-emerald-300"
          >
            <FaGithub className="text-3xl" />
          </a>
        </div>
      </div>
      <div className="animate-fade-up-delay">
        <div className="terminal-panel mx-auto max-w-md p-6">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/65" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/35" />
          </div>
          <p className="terminal-heading">current focus</p>
          <h3 className="mt-2 font-mono text-2xl font-bold text-white">modern full stack apps</h3>
          <ul className="mt-5 space-y-3 text-slate-200">
            <li>&gt; React, Next.js, Tailwind, performance-first UI</li>
            <li>&gt; Node.js, Express, secure APIs</li>
            <li>&gt; MongoDB, PostgreSQL, Appwrite, cloud deployment</li>
          </ul>
          <div className="mt-6 rounded-md border border-emerald-300/25 bg-emerald-400/10 p-4 text-sm text-emerald-100">
            Available for freelance and remote opportunities.
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
