import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, ShoppingCart, X, User } from "lucide-react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { useAuthStore } from "../stores/useAuthStore";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuthStore((state) => state);

  // Common link styles
  const linkStyles =
    "hover:text-orange-500 transition-colors py-2 px-3 rounded-md";

  // Toggle functions
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleUserDropdown = () => setUserDropdownOpen(!userDropdownOpen);
  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
  };

  return (
    <header className="w-full bg-base-100 shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-orange-500">
              E-Learning
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {isAuthenticated ? (
              <>
                <Link to="/" className={`${linkStyles}`}>
                  Home
                </Link>
                <Link to="/courses" className={`${linkStyles}`}>
                  Courses
                </Link>
                <Link to="/about" className={`${linkStyles}`}>
                  About
                </Link>
                <Link to="/contact" className={`${linkStyles}`}>
                  Contact
                </Link>
                <Link to="/favorites" className={`${linkStyles}`}>
                  Favorites
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className={`${linkStyles}`}>
                  Home
                </Link>
                <Link to="/courses" className={`${linkStyles}`}>
                  Courses
                </Link>
                <Link to="/skills" className={`${linkStyles}`}>
                  Skills
                </Link>
                <Link to="/testimonials" className={`${linkStyles}`}>
                  Testimonials
                </Link>
                <Link to="/faq" className={`${linkStyles}`}>
                  FAQ
                </Link>
              </>
            )}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center ml-4 space-x-4">
            {isAuthenticated ? (
              <>
                <Link to={"/cart"} className="btn p-2">
                  <ShoppingCart className="text-orange-500 size-5" />
                </Link>
                <div className="relative">
                  <button
                    onClick={toggleUserDropdown}
                    className="flex items-center space-x-2 focus:outline-none cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                      {user?.avatar ? (
                        <img
                          src={user.avatar}
                          alt="Profile"
                          className="w-full h-full rounded-full"
                        />
                      ) : (
                        <User className="text-orange-500 w-5 h-5" />
                      )}
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        userDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {userDropdownOpen && (
                      <Motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100"
                      >
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50"
                          onClick={closeAllMenus}
                        >
                          My Profile
                        </Link>
                        <Link
                          to="/settings"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50"
                          onClick={closeAllMenus}
                        >
                          Settings
                        </Link>
                        <button
                          onClick={() => {
                            logout();
                            closeAllMenus();
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50"
                        >
                          Sign Out
                        </button>
                      </Motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn btn-outline btn-sm rounded-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="btn btn-sm bg-orange-500 text-white rounded-full hover:bg-orange-600"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-3">
            {isAuthenticated && (
              <Link
                to="/cart"
                className="p-2 text-gray-600 hover:text-orange-500"
              >
                <ShoppingCart className="w-5 h-5" />
              </Link>
            )}
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-600 hover:text-orange-500 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                    onClick={closeAllMenus}
                  >
                    Home
                  </Link>
                  <Link
                    to="/courses"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                    onClick={closeAllMenus}
                  >
                    Courses
                  </Link>
                  <Link
                    to="/profile"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                    onClick={closeAllMenus}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      closeAllMenus();
                    }}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                    onClick={closeAllMenus}
                  >
                    Home
                  </Link>
                  <Link
                    to="/courses"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                    onClick={closeAllMenus}
                  >
                    Courses
                  </Link>
                  <Link
                    to="/login"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                    onClick={closeAllMenus}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-3 py-2 rounded-md text-base font-medium text-orange-600 hover:bg-orange-50"
                    onClick={closeAllMenus}
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
