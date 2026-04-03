import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-indigo-600">TI-08</span>
            <span className="hidden sm:inline text-gray-600">Dev</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-indigo-600 font-medium transition"
            >
              Beranda
            </Link>
            <Link
              to="/team"
              className="text-gray-600 hover:text-indigo-600 font-medium transition"
            >
              Tim
            </Link>
            <Link
              to="/contact"
              className="rounded-lg bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700 font-medium transition"
            >
              Hubungi
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </Link>
            <Link
              to="/team"
              className="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Tim
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-indigo-600 hover:bg-indigo-50 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Hubungi
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
