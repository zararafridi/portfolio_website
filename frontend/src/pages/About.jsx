import { FaReact, FaNode, FaDatabase, FaUserTie } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <section className="animate-fade-up min-h-screen py-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-white">About Me</h1>
        <p className="mt-2 text-lg text-slate-300">
          Full-stack Developer • Lifelong Learner • Problem Solver
        </p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
        <h2 className="mb-4 text-2xl font-bold text-violet-200">Who I am</h2>
        <p className="text-lg leading-relaxed text-slate-200">
          I am <span className="font-semibold text-violet-300">Zarar Afridi</span>, a MERN stack
          developer focused on building reliable, performant products with clean user
          experience and maintainable backend architecture.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-slate-200">
          I enjoy turning complex ideas into practical web solutions and collaborating with
          teams to ship features that create measurable value.
        </p>
      </div>
      <div className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">What I Bring</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <FaReact className="mb-4 text-4xl text-violet-300" />
            <h3 className="mb-2 text-xl font-semibold text-white">Frontend</h3>
            <p className="text-slate-300">React, Redux, Tailwind, Vite</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <FaNode className="mb-4 text-4xl text-violet-300" />
            <h3 className="mb-2 text-xl font-semibold text-white">Backend</h3>
            <p className="text-slate-300">Node.js, Express, REST APIs</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <FaDatabase className="mb-4 text-4xl text-violet-300" />
            <h3 className="mb-2 text-xl font-semibold text-white">Database</h3>
            <p className="text-slate-300">MongoDB, Firebase, Appwrite</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <FaUserTie className="mb-4 text-4xl text-violet-300" />
            <h3 className="mb-2 text-xl font-semibold text-white">Soft Skills</h3>
            <p className="text-slate-300">Teamwork, Communication, Time Management</p>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center">
        <h2 className="mb-4 text-2xl font-semibold text-white">Want to collaborate?</h2>
        <p className="mb-6 text-lg text-slate-300">
          I am open to new opportunities, freelance projects, and long-term product work.
        </p>
        <NavLink
          to="/contact"
          className="inline-block rounded-full bg-violet-500 px-7 py-3 font-semibold text-white transition hover:bg-violet-400"
        >
          Let us connect
        </NavLink>
      </div>
    </section>
  );
}

export default About;
