import { FaBriefcase } from "react-icons/fa";

function ExperienceCard() {
  return (
    <section className="py-16">
      <p className="terminal-heading mb-2 text-center">// experience</p>
      <h2 className="mb-10 text-center font-mono text-3xl font-bold text-white sm:text-4xl">
        $ cat experience.log
      </h2>
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="terminal-panel p-6 transition hover:-translate-y-1">
          <div className="mb-2 flex items-center gap-4">
            <FaBriefcase className="text-2xl text-emerald-300" />
            <h3 className="font-mono text-xl font-semibold text-white">
              Full Stack Developer – Freelance
            </h3>
          </div>
          <p className="mb-2 text-sm text-slate-300">2023 - Present</p>
          <p className="text-slate-200">
            Built and deployed full-stack applications using MERN stack and PostgreSQL.
            Delivered scalable solutions for clients and personal projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ExperienceCard;
