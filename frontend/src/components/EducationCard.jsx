import { FaGraduationCap } from "react-icons/fa";

function EducationCard() {
  return (
    <section className="py-16">
      <p className="terminal-heading mb-2 text-center">// education</p>
      <h2 className="mb-10 text-center font-mono text-3xl font-bold text-white sm:text-4xl">
        $ cat education.log
      </h2>
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="terminal-panel p-6 transition hover:-translate-y-1">
          <div className="mb-2 flex items-center gap-4">
            <FaGraduationCap className="text-2xl text-emerald-300" />
            <h3 className="font-mono text-xl font-semibold text-white">
              BS in Computer Science
            </h3>
          </div>
          <p className="mb-2 text-sm text-slate-300">2022 - 2026 | INU, Peshawar</p>
          <p className="text-slate-200">
            GPA: 3.4/4.0 – Courses: DSA, DBMS, OS, SE, OOP. Focused on practical skills and real-world projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default EducationCard;
