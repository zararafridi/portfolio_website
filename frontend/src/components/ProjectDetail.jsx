import { useParams, useNavigate } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight, FaChevronLeft } from "react-icons/fa";
import { projects } from "./projectsData";

/* ─────────────────────────────────────────────
   Small reusable sub-components
───────────────────────────────────────────── */

function SectionLabel({ children }) {
  return (
    <p className="mb-4 font-mono text-xs tracking-widest text-emerald-500/70">
      {children}
    </p>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="terminal-panel p-4 text-center">
      <p className="font-mono text-2xl font-bold text-emerald-300">{value}</p>
      <p className="mt-1 font-mono text-[10px] tracking-widest text-slate-500">
        {label}
      </p>
    </div>
  );
}

function TechChip({ tech }) {
  return (
    <span className="terminal-chip font-mono text-xs">{tech}</span>
  );
}

/* ─────────────────────────────────────────────
   Fake browser preview window
───────────────────────────────────────────── */
function BrowserPreview({ url, projectId }) {
  // Simple ASCII-art style content per project
  const previews = {
    coinbounce: (
      <div className="grid grid-cols-3 gap-0 h-full">
        <div className="border-r border-white/5 p-3">
          <p className="font-mono text-[10px] text-emerald-500/60 mb-2 tracking-widest">MENU</p>
          {["Dashboard", "Markets", "Blog", "Write Post"].map((item, i) => (
            <div
              key={i}
              className={`font-mono text-[11px] px-2 py-1.5 rounded mb-0.5 ${
                i === 0 ? "bg-emerald-900/30 text-emerald-400" : "text-slate-500"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="col-span-2 p-3">
          <p className="font-mono text-[10px] text-emerald-500/60 mb-3 tracking-widest">MARKET OVERVIEW</p>
          {[["BTC", "85%"], ["ETH", "62%"], ["SOL", "41%"], ["BNB", "28%"]].map(([coin, pct]) => (
            <div key={coin} className="flex items-center gap-2 mb-2">
              <span className="font-mono text-[10px] text-slate-400 w-8">{coin}</span>
              <div className="flex-1 h-1.5 bg-white/5 rounded">
                <div
                  className="h-full bg-emerald-500/60 rounded"
                  style={{ width: pct }}
                />
              </div>
              <span className="font-mono text-[10px] text-slate-500">{pct}</span>
            </div>
          ))}
          <p className="font-mono text-[10px] text-emerald-500/60 mt-3 mb-2 tracking-widest">LATEST POSTS</p>
          {["Why Bitcoin is the future...", "DeFi explained for beginners...", "Top 5 altcoins this week..."].map((post, i) => (
            <p key={i} className="font-mono text-[10px] text-slate-500 mb-1">&gt; {post}</p>
          ))}
        </div>
      </div>
    ),
    currencyswap: (
      <div className="flex items-center justify-center h-full p-4">
        <div className="w-full max-w-[260px] terminal-panel p-4">
          <p className="font-mono text-[10px] text-emerald-500/60 mb-3 tracking-widest">CURRENCY CONVERTER</p>
          <div className="bg-white/5 rounded p-2 mb-2">
            <p className="font-mono text-[9px] text-slate-500 mb-1">FROM</p>
            <div className="flex justify-between">
              <span className="font-mono text-sm text-emerald-300">USD</span>
              <span className="font-mono text-sm text-white">1,000</span>
            </div>
          </div>
          <div className="flex justify-center my-2">
            <div className="font-mono text-emerald-500 text-sm">⇅</div>
          </div>
          <div className="bg-white/5 rounded p-2 mb-3">
            <p className="font-mono text-[9px] text-slate-500 mb-1">TO</p>
            <div className="flex justify-between">
              <span className="font-mono text-sm text-emerald-300">PKR</span>
              <span className="font-mono text-sm text-white">278,450</span>
            </div>
          </div>
          <div className="text-center font-mono text-[10px] text-emerald-500/60">
            1 USD = 278.45 PKR
          </div>
        </div>
      </div>
    ),
    megablog: (
      <div className="p-3 h-full">
        <div className="flex justify-between items-center mb-3">
          <p className="font-mono text-[10px] text-emerald-500/60 tracking-widest">MEGABLOG</p>
          <div className="flex gap-1.5">
            <span className="font-mono text-[9px] text-slate-500 border border-white/10 px-2 py-0.5 rounded">Login</span>
            <span className="font-mono text-[9px] text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded">Write</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {["Getting Started with React", "Mastering Tailwind CSS", "Appwrite Deep Dive", "JWT Auth Guide"].map((title, i) => (
            <div key={i} className="border border-white/5 rounded p-2">
              <div className="h-8 bg-emerald-900/20 rounded mb-2" />
              <p className="font-mono text-[9px] text-slate-400 leading-tight">{title}</p>
              <p className="font-mono text-[8px] text-slate-600 mt-1">by zarar afridi</p>
            </div>
          ))}
        </div>
      </div>
    ),
  };

  return (
    <div className="rounded-md border border-white/8 overflow-hidden bg-[#060d07]">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-white/5 bg-[#0d1510] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28ca41]" />
        <div className="ml-2 flex-1 rounded bg-[#0a0f0a] px-2 py-1 font-mono text-[10px] text-slate-600">
          {url || "localhost:3000"}
        </div>
      </div>
      {/* Content */}
      <div className="h-44 overflow-hidden">
        {previews[projectId] || (
          <div className="flex h-full items-center justify-center font-mono text-xs text-slate-600">
            [ preview not available ]
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main ProjectDetail component
───────────────────────────────────────────── */
function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentIndex = projects.findIndex((p) => p.id === id);
  const project = projects[currentIndex];

  // 404 state
  if (!project) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <p className="font-mono text-emerald-500">// 404 — project not found</p>
        <button
          onClick={() => navigate("/projects")}
          className="flex items-center gap-2 font-mono text-sm text-slate-400 hover:text-emerald-300 transition"
        >
          <FaChevronLeft /> Back to projects
        </button>
      </div>
    );
  }

  const prevProject = projects[currentIndex - 1] ?? null;
  const nextProject = projects[currentIndex + 1] ?? null;

  return (
    <div className="mx-auto max-w-5xl animate-fade-up px-4 py-10">

      {/* ── Back navigation ── */}
      <button
        onClick={() => navigate("/#projects")}
        className="mb-8 flex items-center gap-2 font-mono text-xs text-slate-500 transition hover:text-emerald-300"
      >
        <FaArrowLeft className="text-xs" />
        cd ../projects
      </button>

      {/* ── Hero ── */}
      <div className="mb-8 border-b border-white/5 pb-8">
        <p className="mb-2 font-mono text-xs tracking-widest text-emerald-500/60">
          // project_detail / 0{currentIndex + 1}
        </p>
        <h1 className="mb-1 font-mono text-4xl font-extrabold text-white">
          $ <span className="text-emerald-300">{project.title}</span>
        </h1>
        <p className="mb-3 font-mono text-sm text-emerald-500/50 tracking-widest">
          -- {project.subtitle}
        </p>
        <p className="mb-6 max-w-2xl text-base leading-relaxed text-slate-400">
          {project.description}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded bg-emerald-500 px-5 py-2.5 font-mono text-xs font-bold text-black transition hover:bg-emerald-400"
            >
              <FaExternalLinkAlt />
              LIVE DEMO
            </a>
          )}
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded border border-emerald-500/40 px-5 py-2.5 font-mono text-xs text-emerald-400 transition hover:border-emerald-400 hover:text-emerald-300"
          >
            <FaGithub />
            SOURCE CODE
          </a>
        </div>
      </div>

      {/* ── Browser Preview ── */}
      <div className="mb-10">
        <SectionLabel>// preview</SectionLabel>
        <BrowserPreview url={project.previewUrl} projectId={project.id} />
      </div>

      {/* ── Stats ── */}
      <div className="mb-10 grid grid-cols-3 gap-4">
        {project.stats.map((stat, i) => (
          <StatCard key={i} value={stat.value} label={stat.label} />
        ))}
      </div>

      {/* ── Features + Stack ── */}
      <div className="mb-10 grid gap-8 md:grid-cols-2">
        {/* Features */}
        <div>
          <SectionLabel>// key_features</SectionLabel>
          <ul className="space-y-3">
            {project.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                <span className="mt-1 font-mono text-emerald-500 text-xs flex-shrink-0">▶</span>
                {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div>
          <SectionLabel>// tech_stack</SectionLabel>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech, i) => (
              <TechChip key={i} tech={tech} />
            ))}
          </div>

          <SectionLabel>// what_i_learned</SectionLabel>
          <ul className="space-y-2.5">
            {project.learned.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                <span className="font-mono text-emerald-600 flex-shrink-0">+</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Challenges ── */}
      <div className="mb-12">
        <SectionLabel>// challenges_solved</SectionLabel>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {project.challenges.map((ch, i) => (
            <div
              key={i}
              className="terminal-panel border-l-2 border-l-emerald-500/50 pl-4 p-4 rounded-none rounded-r-md"
            >
              <p className="mb-2 font-mono text-xs font-semibold tracking-widest text-emerald-400">
                {ch.title}
              </p>
              <p className="text-sm leading-relaxed text-slate-500">{ch.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Project navigation ── */}
      <div className="flex items-center justify-between border-t border-white/5 pt-8">
        {prevProject ? (
          <button
            onClick={() => navigate(`/projects/${prevProject.id}`)}
            className="group flex items-center gap-2 font-mono text-xs text-slate-500 transition hover:text-emerald-300"
          >
            <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
            <span>
              <span className="block text-[10px] text-slate-600 tracking-widest mb-0.5">PREV</span>
              {prevProject.title}
            </span>
          </button>
        ) : (
          <span />
        )}

        {/* Dot navigation */}
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => navigate(`/projects/${projects[i].id}`)}
              className={`h-1.5 rounded-full transition-all ${
                i === currentIndex
                  ? "w-6 bg-emerald-400"
                  : "w-1.5 bg-white/15 hover:bg-white/30"
              }`}
            />
          ))}
        </div>

        {nextProject ? (
          <button
            onClick={() => navigate(`/projects/${nextProject.id}`)}
            className="group flex items-center gap-2 text-right font-mono text-xs text-slate-500 transition hover:text-emerald-300"
          >
            <span>
              <span className="block text-[10px] text-slate-600 tracking-widest mb-0.5">NEXT</span>
              {nextProject.title}
            </span>
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
