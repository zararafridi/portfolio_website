import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-emerald-300/15 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-5 px-4 py-8 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
        <div className="font-mono text-base font-bold tracking-tight text-emerald-100">
          zarafridi<span className="text-emerald-400"> --portfolio</span>
        </div>
        <div className="text-sm text-slate-400">
          © {new Date().getFullYear()} Zarar Afridi. Built with React and Tailwind.
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/zararafridi"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="text-slate-300 transition hover:text-emerald-300"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://linkedin.com/in/zararafridi"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="text-slate-300 transition hover:text-emerald-300"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
