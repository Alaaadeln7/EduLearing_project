import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { motion as Motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-base-100 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-orange-500">E-Learning</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
          <Link to="/home" className="hover:text-orange-500 transition-colors">
            Home
          </Link>
          <Link
            to="/courses"
            className="hover:text-orange-500 transition-colors"
          >
            Courses
          </Link>
          <Link
            to="/skills"
            className="hover:text-orange-500 transition-colors"
          >
            Skills
          </Link>
          <Link
            to="/testimonials"
            className="hover:text-orange-500 transition-colors"
          >
            Testimonials
          </Link>
          <Link to="/faq" className="hover:text-orange-500 transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          <Link
            to="/login"
            className="btn btn-outline btn-sm rounded-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="btn btn-sm bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button - Always on the right */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu with Framer Motion */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <Motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6"
            >
              <nav className="flex flex-col space-y-4 font-medium text-gray-700">
                <Link
                  to="/home"
                  className="hover:text-orange-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/courses"
                  className="hover:text-orange-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Courses
                </Link>
                <Link
                  to="/skills"
                  className="hover:text-orange-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Skills
                </Link>
                <Link
                  to="/testimonials"
                  className="hover:text-orange-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link
                  to="/faq"
                  className="hover:text-orange-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
              </nav>
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
