import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "CoinBounce – Crypto Blog Platform",
    description:
      "A full-stack blog platform showing real-time crypto prices, news, and user-generated blogs with secure JWT auth.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API"],
    codeLink: "https://github.com/zararafridi/coin-bounce",
  },
  {
    title: "CurrencySwap – Currency Converter",
    description:
      "Modern currency converter with swipe-based interface and real-time exchange rates using ExchangeRates API.",
    tech: ["React", "Tailwind CSS", "ExchangeRates API"],
    codeLink:
      "https://github.com/zararafridi/react-projects/tree/main/currencyApp",
    liveLink:
      "https://currencyconverter-lgcc3nwla-zararaftidi471gmailcoms-projects.vercel.app/",
  },
  {
    title: "MegaBlog – Modern Blogging Platform",
    description:
      "A responsive blog platform with Appwrite backend, secure login, rich text editing, and CRUD functionality.",
    tech: ["React", "Tailwind CSS", "Appwrite", "React Hook Form", "Zod"],
    codeLink:
      "https://github.com/zararafridi/react-projects/tree/main/06MegaProject",
  },
];

function Projects() {
  return (
    <section className="py-20 px-4 md:px-20 bg-gray-50" id="projects">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-purple-700">My Projects</h2>
        <p className="text-gray-600 text-lg mt-2">
          Real-world applications built with the MERN stack & modern tools.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
          >
            <div>
              <h3 className="text-2xl font-semibold text-purple-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 text-base mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 text-purple-700 px-3 py-1 text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-purple-600 text-lg transition"
                title="View Code"
              >
                <FaGithub />
              </a>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-purple-600 text-lg transition"
                  title="View Live"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
