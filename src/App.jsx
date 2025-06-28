import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AnimatePresence, motion as Motion } from "framer-motion";
import Policy from "./pages/Policy";
import TermsOfUse from "./pages/TermsOfUse";
import Contact from "./pages/contact/Contact";
import Courses from "./pages/courses/Courses";
import About from "./pages/about/About";
import Profile from "./pages/profile/Profile";
import Cart from "./pages/cart/Cart";

// Animation variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <LandingPage />
            </Motion.div>
          }
        />
        <Route
          path="/login"
          element={
            <Motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <LoginPage />
            </Motion.div>
          }
        />
        <Route
          path="/signup"
          element={
            <Motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <SignupPage />
            </Motion.div>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <Motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <ForgotPassword />
            </Motion.div>
          }
        />
        <Route
          path="/reset-password"
          element={
            <Motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <ResetPassword />
            </Motion.div>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Policy />
            </Motion.div>
          }
        />
        <Route
          path="/terms-of-use"
          element={
            <Motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <TermsOfUse />
            </Motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <Motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Contact />
            </Motion.div>
          }
        />
        <Route
          path="/courses"
          element={
            <Motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Courses />
            </Motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <Motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <About />
            </Motion.div>
          }
        />
        <Route
          path="/profile"
          element={
            <Motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Profile />
            </Motion.div>
          }
        />
        <Route
          path="/cart"
          element={
            <Motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Cart />
            </Motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return (
    <Router>
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <AnimatedRoutes />
        <Footer />
        <Toaster position="top-right" />
      </Motion.div>
    </Router>
  );
}
