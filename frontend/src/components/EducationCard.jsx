import React from "react";
import { FaGraduationCap } from "react-icons/fa";

function EducationCard() {
  return (
    <section className="py-16 px-4 md:px-10 ">
      <h2 className="text-4xl font-bold text-center text-violet-700 mb-12">
        Education
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-slate-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-4 mb-2">
            <FaGraduationCap className="text-violet-600 text-2xl" />
            <h3 className="text-xl font-semibold text-slate-800">
              BS in Computer Science
            </h3>
          </div>
          <p className="text-sm text-slate-500 mb-2">2022 – 2026 · INU, Peshawar</p>
          <p className="text-slate-700">
            GPA: 3.4/4.0 – Courses: DSA, DBMS, OS, SE, OOP. Focused on practical skills and real-world projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default EducationCard;
