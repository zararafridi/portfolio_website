import React from "react";
import SkillsSVG from "../assets/undraw_visionary-technology_f6b3.svg";

function SkillsCard() {
  return (
    <section className="py-16 px-4 md:px-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-violet-600 mb-12">
        My Skills
      </h1>

      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Side - Skills List */}
        <div className="flex-1 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
            {/* Frontend */}
            <div>
              <h2 className="text-xl font-semibold text-violet-600 mb-2">Frontend</h2>
              <ul className="list-disc list-inside text-slate-700 text-lg text-left inline-block">
                <li>React.js</li>
                <li>Redux Toolkit</li>
                <li>Vite</li>
                <li>HTML5 & CSS3</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            {/* Backend */}
            <div>
              <h2 className="text-xl font-semibold text-violet-600 mb-2">Backend</h2>
              <ul className="list-disc list-inside text-slate-700 text-lg text-left inline-block">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>REST APIs</li>
              </ul>
            </div>

            {/* Database & Hosting */}
            <div>
              <h2 className="text-xl font-semibold text-violet-600 mb-2">Database & Hosting</h2>
              <ul className="list-disc list-inside text-slate-700 text-lg text-left inline-block">
                <li>MongoDB</li>
                <li>Firebase</li>
                <li>Appwrite</li>
                <li>Git & GitHub</li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div>
              <h2 className="text-xl font-semibold text-violet-600 mb-2">Soft Skills</h2>
              <ul className="list-disc list-inside text-slate-700 text-lg text-left inline-block">
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Communication</li>
                <li>Time Management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side - SVG */}
        <div className="flex-1">
          <img
            src={SkillsSVG}
            alt="Skills Illustration"
            className="w-full max-w-sm mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default SkillsCard;
