function FullStackCard() {
  const items = [
    "Responsive and accessible UI architecture",
    "Scalable REST APIs and authentication flows",
    "Database modeling and clean service layers",
    "Deployment, monitoring, and iteration",
  ];

  return (
    <section className="py-16">
      <p className="terminal-heading mb-2 text-center">// selected work</p>
      <h2 className="text-center font-mono text-3xl font-bold text-white sm:text-4xl">
        $ ls -la ./deliverables
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="terminal-panel p-6">
          <h3 className="font-mono text-2xl font-semibold text-emerald-200">end-to-end development</h3>
          <p className="mt-4 text-slate-300">
            I build full-stack products from idea to deployment with a focus on clean
            code, smooth UX, and business-ready performance.
          </p>
        </div>
        <div className="terminal-panel p-6">
          <ul className="space-y-3 text-slate-200">
            {items.map((item) => (
              <li key={item} className="rounded-md border border-emerald-300/20 bg-emerald-500/10 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FullStackCard;
