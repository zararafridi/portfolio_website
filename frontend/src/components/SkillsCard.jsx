import React from "react";
import SkillsSVG from "../assets/undraw_visionary-technology_f6b3.svg"; // Replace with your SVG

function SkillsCard() {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold text-center">My Skills</h1>
      <div className="flex mt-6 gap-6 items-start flex-wrap md:flex-nowrap">
        {/* Left Side - Skills List */}
        <div className="flex-1 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend */}
            <div className="text-center">
              <h2 className="text-xl font-semibold text-purple-700">Frontend</h2>
              <ul className="list-disc list-inside text-gray-700 text-lg inline-block text-left">
                <li>React.js</li>
                <li>Redux Toolkit</li>
                <li>Vite</li>
                <li>HTML5, CSS3</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="text-center">
              <h2 className="text-xl font-semibold text-purple-700">Backend</h2>
              <ul className="list-disc list-inside text-gray-700 text-lg inline-block text-left">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>REST APIs</li>
              </ul>
            </div>

            {/* Database & Hosting */}
            <div className="text-center">
              <h2 className="text-xl font-semibold text-purple-700">Database & Hosting</h2>
              <ul className="list-disc list-inside text-gray-700 text-lg inline-block text-left">
                <li>MongoDB</li>
                <li>Firebase</li>
                <li>Appwrite</li>
                <li>Git & GitHub</li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="text-center">
              <h2 className="text-xl font-semibold text-purple-700">Soft Skills</h2>
              <ul className="list-disc list-inside text-gray-700 text-lg inline-block text-left">
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Communication</li>
                <li>Time Management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side - SVG Image */}
        <div className="flex-1 ">
          <img src={SkillsSVG} alt="skills" className=" w-full max-w-sm mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default SkillsCard;
