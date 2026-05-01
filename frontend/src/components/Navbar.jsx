import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const navClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-violet-300"
        : "text-slate-200 hover:text-white hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.65)]"
    }`;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          className="text-xl font-bold tracking-tight text-white transition hover:text-violet-300"
          onClick={() => setMenuOpen(false)}
        >
          Zaru<span className="text-violet-400">.dev</span>
        </NavLink>

        <ul className="hidden items-center gap-7 text-sm font-medium md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <NavLink to={link.to} className={navClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href="/zararCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-violet-400/45 px-4 py-1.5 text-violet-200 transition hover:bg-violet-500/15 hover:text-white"
            >
              Resume
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <NavLink
            to="/contact"
            className="hidden rounded-full border border-white/15 p-2 text-slate-200 transition hover:border-violet-300/50 hover:text-white md:block"
            title="Contact Me"
          >
            <MessageCircle size={18} />
          </NavLink>
          <button
            type="button"
            className="rounded-md p-2 text-slate-200 transition hover:bg-white/10 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden">
          <ul className="space-y-4 text-sm font-medium">
            {links.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  className={navClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href="/zararCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-violet-400/45 px-4 py-1.5 text-violet-200 transition hover:bg-violet-500/15 hover:text-white"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
