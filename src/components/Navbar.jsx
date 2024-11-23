import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavbarLink = ({ to, label, isMenuOpen, setIsMenuOpen }) => {
  return (
    <NavLink
      to={to}
      onClick={() => isMenuOpen && setIsMenuOpen(false)}
      className={({ isActive }) =>
        `px-4 py-2 rounded-md ${
          isActive
            ? "bg-blue-100 text-blue-800 shadow-sm"
            : "text-gray-700 hover:bg-gray-100 hover:text-gray-800"
        } transition duration-300 block`
      }
    >
      {label}
    </NavLink>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold flex items-center">
            <NavLink to="/" className="hover:text-gray-800 transition">
              PH
            </NavLink>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <NavbarLink to="/" label="Home" />
            <NavbarLink to="/all-student" label="All Students" />
            <NavbarLink to="/add-student" label="Add Student" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition duration-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <NavbarLink
            to="/"
            label="Home"
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          <NavbarLink
            to="/all-student"
            label="All Students"
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          <NavbarLink
            to="/add-student"
            label="Add Student"
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
