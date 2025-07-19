import React from 'react';
import { NavLink } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

function Navbar() {
  const baseLinkStyle = 'hover:text-purple-600 transition cursor-pointer';
  const activeLinkStyle = 'text-purple-700 font-semibold';

  return (
    <nav className="relative flex items-center justify-center px-20 py-4 bg-gradient-to-br from-white to-purple-50 shadow-md">
      {/* Logo - left */}
      <div className="absolute left-20 font-poppins font-bold text-3xl text-purple-700">
        Zaru.dev
      </div>

      {/* Centered Navigation Links */}
      <ul className="flex gap-8 text-lg text-gray-700 font-medium font-poppins">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${baseLinkStyle} ${isActive ? activeLinkStyle : ''}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${baseLinkStyle} ${isActive ? activeLinkStyle : ''}`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${baseLinkStyle} ${isActive ? activeLinkStyle : ''}`
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${baseLinkStyle} ${isActive ? activeLinkStyle : ''}`
            }
          >
            Projects
          </NavLink>
        </li>
      </ul>

      {/* Chat Icon - right */}
      <div className=" absolute right-20">
        <button className="text-purple-700 hover:text-purple-900 transition">
          <MessageCircle size={28} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
