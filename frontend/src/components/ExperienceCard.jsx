import React from "react";
import { FaBriefcase } from "react-icons/fa";

function ExperienceCard() {
  return (
    <section className="py-16 min-w-[80vw] px-4 md:px-20 bg-slate-50">
      <h2 className="text-4xl font-bold text-center text-violet-700 mb-12">
        Experience
      </h2>

      <div className="space-y-8 max-w-4xl mx-auto">
        {/* Experience Item */}
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-4 mb-2">
            <FaBriefcase className="text-violet-600 text-2xl" />
            <h3 className="text-xl font-semibold text-slate-800">
              Full Stack Developer – Freelance
            </h3>
          </div>
          <p className="text-sm text-slate-500 mb-2">2023 – Present</p>
          <p className="text-slate-700">
            Built and deployed full-stack applications using MERN stack and PostgreSQL.
            Delivered scalable solutions for clients and personal projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ExperienceCard;
