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
    <section className="animate-fade-up py-8" id="projects">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold text-white">My Projects</h2>
        <p className="mt-2 text-lg text-slate-300">
          Real-world applications built with the MERN stack & modern tools.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-900/30 transition hover:-translate-y-1"
          >
            <div>
              <h3 className="mb-2 text-2xl font-semibold text-violet-200">{project.title}</h3>
              <p className="mb-4 text-base text-slate-300">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-violet-300/25 bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-100"
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
                className="text-lg text-slate-200 transition hover:text-violet-300"
                title="View Code"
              >
                <FaGithub />
              </a>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-slate-200 transition hover:text-violet-300"
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
