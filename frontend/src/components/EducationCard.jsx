import { FaGraduationCap } from "react-icons/fa";

function EducationCard() {
  return (
    <section className="py-16">
      <h2 className="mb-10 text-center text-3xl font-bold text-white sm:text-4xl">
        Education
      </h2>
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1">
          <div className="mb-2 flex items-center gap-4">
            <FaGraduationCap className="text-2xl text-violet-300" />
            <h3 className="text-xl font-semibold text-white">
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
