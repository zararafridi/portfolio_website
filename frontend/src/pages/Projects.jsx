import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { projects } from "../components/projectsData";

function Projects() {
  const navigate = useNavigate();

  return (
    <section className="animate-fade-up py-8" id="projects">
      {/* ── Header ── */}
      <div className="mb-12 text-center">
        <p className="terminal-heading mb-2">// projects</p>
        <h2 className="font-mono text-4xl font-extrabold text-white">
          $ ls ~/projects
        </h2>
        <p className="mt-2 text-lg text-slate-300">
          Real-world applications built with the MERN stack &amp; modern tools.
        </p>
      </div>

      {/* ── Cards ── */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="terminal-panel group flex flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40"
          >
            {/* Top content */}
            <div>
              {/* Index badge */}
              <p className="mb-2 font-mono text-xs text-emerald-500/60 tracking-widest">
                // 0{idx + 1}
              </p>

              {/* Title */}
              <h3 className="mb-1 font-mono text-xl font-semibold text-emerald-200 leading-tight">
                {project.title}
              </h3>
              <p className="mb-2 font-mono text-xs text-emerald-500/50 tracking-widest">
                -- {project.subtitle}
              </p>

              {/* Description */}
              <p className="mb-4 text-sm text-slate-400 leading-relaxed">
                {project.tagline}
              </p>

              {/* Tech chips */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="terminal-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom actions */}
            <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
              {/* Icon links */}
              <div className="flex items-center gap-4">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs text-slate-400 transition hover:text-emerald-300"
                  title="Source Code"
                >
                  <FaGithub className="text-base" />
                  <span>Code</span>
                </a>

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs text-slate-400 transition hover:text-emerald-300"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Live</span>
                  </a>
                )}
              </div>

              {/* View details CTA */}
              <button
                onClick={() => navigate(`/projects/${project.id}`)}
                className="flex items-center gap-1.5 font-mono text-xs text-emerald-400 transition-all hover:text-emerald-300 hover:gap-2.5"
              >
                <span>View Details</span>
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
