function SkillsCard() {
  const groups = [
    {
      title: "Frontend",
      values: ["React.js", "Redux Toolkit", "Vite", "HTML5 & CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend",
      values: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
    },
    {
      title: "Database & Cloud",
      values: ["MongoDB", "Firebase", "Appwrite", "Vercel", "GitHub"],
    },
    {
      title: "Collaboration",
      values: ["Problem Solving", "Team Collaboration", "Communication", "Time Management"],
    },
  ];

  return (
    <section className="py-16">
      <p className="terminal-heading mb-2 text-center">// toolchain</p>
      <h2 className="mb-10 text-center font-mono text-3xl font-bold text-white sm:text-4xl">
        $ cat ~/.config/stack.json
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {groups.map((group) => (
          <article
            key={group.title}
            className="terminal-panel p-6"
          >
            <h3 className="mb-4 font-mono text-xl font-semibold text-emerald-200">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.values.map((value) => (
                <li key={value} className="terminal-chip">
                  {value}
                </li>
              ))}
            </ul>
          </article>
        ))}
        <div className="rounded-2xl border border-emerald-300/20 bg-emerald-500/10 p-6 sm:col-span-2">
          <p className="terminal-heading text-emerald-200">engineering mindset</p>
          <p className="mt-2 text-slate-100">
            I focus on readable code, component reusability, accessibility, and real-world
            performance across desktop and mobile devices.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SkillsCard;
