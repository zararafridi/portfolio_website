function FullStackCard() {
  const items = [
    "Responsive and accessible UI architecture",
    "Scalable REST APIs and authentication flows",
    "Database modeling and clean service layers",
    "Deployment, monitoring, and iteration",
  ];

  return (
    <section className="py-16">
      <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
        What I Deliver
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-2xl font-semibold text-violet-200">End-to-End Development</h3>
          <p className="mt-4 text-slate-300">
            I build full-stack products from idea to deployment with a focus on clean
            code, smooth UX, and business-ready performance.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
          <ul className="space-y-3 text-slate-200">
            {items.map((item) => (
              <li key={item} className="rounded-lg border border-violet-300/20 bg-violet-500/10 px-4 py-3">
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
