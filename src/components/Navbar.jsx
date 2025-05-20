import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/levic2.png";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const getActiveLink = (href) => location.pathname === href;


  const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Portfolio", to: "/portfolio" },
  { name: "Contact", to: "/contact" },
];

  const navLogo = {
  title: "Logo",
  image: logo,
};



  // Scroll shadow effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto"; // clean-up on unmount
  };
}, [isOpen]);


  // Dark mode toggle and persistence
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md bg-white/80 dark:bg-gray-950/80" : "bg-transparent"
      } backdrop-blur border-b border-gray-200 dark:border-gray-800`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-extrabold text-yellow-600 dark:text-yellow-400 tracking-tight"
            aria-label="Levic Home"
          >
            <img 
               src={navLogo.image} 
               alt={navLogo.title} 
               className="h-33 w-33" 
            />
            
            {/* Levic<span className="text-gray-900 dark:text-white">.</span> */}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 pt-5">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.to}
                className={`text-m font-medium transition-all ${
                 getActiveLink(link.to)

                    ? "text-yellow-600 dark:text-yellow-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center pt-5 space-x-4">
            {/* <button
              onClick={() => setIsDark(!isDark)}
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button> */}
            <Link
              href="/contact"
              className="px-5 py-2 rounded-full bg-yellow-600 text-white hover:bg-yellow-700 transition text-sm font-medium shadow-md"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden flex items-center space-x-2">
            {/* <button
              onClick={() => setIsDark(!isDark)}
              className="text-gray-800 dark:text-white"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button> */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-white"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'tween', duration: 0.4 }}
      className="fixed inset-0 z-50 bg-white/80 h-300 dark:bg-gray-950/80 backdrop-blur-lg flex flex-col justify-start items-center p-6 pt-24 space-y-8"
    >
      {/* Close button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-6 right-6 text-gray-800 dark:text-white"
        aria-label="Close Menu"
      >
        <X className="w-6 h-6" />
      </button>

      {navLinks.map((link, idx) => (
        <Link
          key={idx}
          to={link.to}
          onClick={() => setIsOpen(false)}
          className={`text-xl font-semibold ${
             getActiveLink(link.to)
              ? "text-yellow-600 dark:text-yellow-400"
              : "text-gray-800 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-400"
          } transition`}
        >
          {link.name}
        </Link>
      ))}

      <Link
        href="/"
        onClick={() => setIsOpen(false)}
        className="px-6 py-3 rounded-full bg-yellow-600 text-white hover:bg-yellow-700 transition text-sm font-medium shadow-md"
      >
        Start a Project
      </Link>
    </motion.div>
  )}
</AnimatePresence>

    </header>
  );
}
