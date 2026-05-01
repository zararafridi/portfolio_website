import { FaBriefcase } from "react-icons/fa";

function ExperienceCard() {
  return (
    <section className="py-16">
      <h2 className="mb-10 text-center text-3xl font-bold text-white sm:text-4xl">
        Experience
      </h2>
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1">
          <div className="mb-2 flex items-center gap-4">
            <FaBriefcase className="text-2xl text-violet-300" />
            <h3 className="text-xl font-semibold text-white">
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
