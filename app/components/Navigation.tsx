"use client";

import { useState, useEffect, useRef } from "react";
import { links } from "../lib/data";
import { ralewaySans } from "../lib/fonts";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useObserverContext } from "../context/intersectionObserver";
import Theme from "./ThemeSwitcher";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

function Navigation() {
  const path = usePathname();
  const { scrollYProgress } = useScroll();
  const { activeSection, setActiveSection } = useObserverContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [path]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLinks = () => (
    <ul className="relative flex flex-col md:flex-row items-center gap-8 border-b-transparent border-b transition-all">
      {links.map((link) => {
        const isActiveSection = activeSection === link.title.toLowerCase();
        return (
          <li
            key={link.title}
            onClick={() => {
              setActiveSection(link.title.toLowerCase());
              setIsMenuOpen(false);
            }}
            className="relative w-full md:w-auto text-center"
          >
            <Link
              href={link.href}
              className={`block py-2 md:py-0 hover:text-fuchsia-500 transition-colors ${
                isActiveSection ? "text-fuchsia-500" : ""
              }`}
            >
              {link.title}
            </Link>
            {isActiveSection && (
              <div className="hidden md:block h-[1px] w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all" />
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`${ralewaySans.className} hidden md:flex dark:bg-[#181123] bg-[#FFFFFF] z-[99] h-[5vh] items-center justify-center gap-8 px-6 py-2 rounded-sm left-0 w-full fixed transition-all border-b border-b-slate-200 dark:border-black`}
      >
        <Theme />
        <NavLinks />
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 w-full z-[99]">
        <div className="flex justify-between items-center px-4 py-3 bg-white dark:bg-[#181123] border-b border-slate-200 dark:border-black">
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-700 dark:text-gray-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          <Theme />
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="bg-white/95 dark:bg-[#181123]/95 backdrop-blur-sm w-full max-h-[calc(100vh-4rem)] overflow-y-auto shadow-lg rounded-b-lg"
            >
              <div className="px-4 py-2">
                <NavLinks />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Navigation;
