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
      <h2 className="mb-10 text-center text-3xl font-bold text-white sm:text-4xl">
        My Skills
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {groups.map((group) => (
          <article
            key={group.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-900/20"
          >
            <h3 className="mb-4 text-xl font-semibold text-violet-200">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.values.map((value) => (
                <li
                  key={value}
                  className="rounded-full border border-violet-300/20 bg-violet-500/10 px-3 py-1.5 text-sm text-slate-200"
                >
                  {value}
                </li>
              ))}
            </ul>
          </article>
        ))}
        <div className="rounded-2xl border border-cyan-300/20 bg-cyan-500/10 p-6 sm:col-span-2">
          <p className="text-sm uppercase tracking-wider text-cyan-200">Engineering mindset</p>
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
