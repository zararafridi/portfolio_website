import React from "react";
import SkillPng from '../assets/undraw_certificate_71gt.png'
import { FaReact ,FaLinkedin, FaNode, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiRedux,
  SiVercel,
  SiNetlify,
  SiExpress
} from "react-icons/si";

const skills = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNode /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Netlify", icon: <SiNetlify /> },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="relative   dark:bg-zinc-900 overflow-hidden">
      {/* ✅ SVG BLOB Background */}
      <div className="absolute -top-32 -left-32 z-[-1] opacity-10 pointer-events-none">
        <img src={SkillPng} alt="skillpng" />
      </div>

      {/* ✅ Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-600 dark:text-purple-400">
        My Skills
      </h2>

      {/* ✅ Skills Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {skills.map((category, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-white mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-4">
              {category.items.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-zinc-800 text-purple-800 dark:text-white rounded-xl text-sm font-medium shadow-sm hover:scale-105 transition-all duration-200"
                >
                  <span className="text-xl">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
