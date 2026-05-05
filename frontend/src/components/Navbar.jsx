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
        ? "text-emerald-300"
        : "text-slate-300 hover:text-emerald-200"
    }`;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-emerald-300/15 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          className="font-mono text-lg font-bold tracking-tight text-emerald-100 transition hover:text-emerald-300"
          onClick={() => setMenuOpen(false)}
        >
          zarar afridi<span className="text-emerald-400"> --portfolio</span>
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
              className="rounded-md border border-emerald-300/35 px-4 py-1.5 text-emerald-100 transition hover:bg-emerald-400/10"
            >
              Resume
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <NavLink
            to="/contact"
            className="hidden rounded-md border border-emerald-300/20 p-2 text-emerald-100 transition hover:border-emerald-300/50 hover:text-emerald-300 md:block"
            title="Contact Me"
          >
            <MessageCircle size={18} />
          </NavLink>
          <button
            type="button"
            className="rounded-md p-2 text-emerald-100 transition hover:bg-emerald-400/10 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-emerald-300/15 bg-slate-950/95 px-4 py-4 md:hidden">
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
                className="inline-block rounded-md border border-emerald-300/35 px-4 py-1.5 text-emerald-100 transition hover:bg-emerald-400/10"
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
