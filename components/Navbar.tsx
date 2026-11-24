'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { cn } from '../lib/utils';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-white/85 dark:bg-[#030712]/80 backdrop-blur-md border-b border-slate-200/80 dark:border-white/5 py-3 shadow-sm dark:shadow-none"
          : "bg-white/60 dark:bg-transparent backdrop-blur-sm md:backdrop-blur-none border-b border-slate-200/40 dark:border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center group py-0.5"
        >
          {/* Transparent signature logo: crisp charcoal/black in light mode, crisp white in dark mode */}
          <img
            src="/images/fathima-risna-signature.png"
            alt="Fathima Risna"
            className="h-8 md:h-10 w-auto object-contain filter invert dark:invert-0 drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_2px_10px_rgba(255,255,255,0.4)] transition-all duration-300 group-hover:scale-105"
          />
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-xs font-semibold uppercase tracking-wider text-slate-800 hover:text-cyan-600 dark:text-slate-100 dark:hover:text-cyan-400 transition-colors drop-shadow-sm"
            >
              {link.name}
            </motion.a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 bg-slate-900 text-white dark:bg-white dark:text-black rounded-full text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all shadow-sm"
          >
            Hire Me
          </a>

          {/* Industry Standard Theme Switcher with Unique Glowing Aesthetics */}
          <ThemeToggle />
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            className="text-slate-800 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark absolute top-full left-0 right-0 overflow-hidden border-b border-slate-200/80 dark:border-white/10 shadow-xl"
          >
            <div className="flex flex-col p-6 gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-900 hover:text-cyan-600 dark:text-white dark:hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-6 pt-4 border-t border-slate-200/60 dark:border-white/10">
                <a
                  href="https://github.com/risna-kf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/fathima-risna-1040b7263/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
