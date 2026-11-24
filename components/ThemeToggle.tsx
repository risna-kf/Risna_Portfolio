'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse ${className}`} />
    );
  }

  const isDark = resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label="Toggle Theme"
      className={`relative w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer select-none shadow-sm ${
        isDark
          ? 'bg-[#181c24] border border-white/10 hover:border-amber-400/50 hover:bg-[#202632] hover:shadow-[0_0_15px_rgba(250,204,21,0.3)]'
          : 'bg-slate-100 border border-slate-300 hover:border-slate-400 hover:bg-slate-200 text-slate-800'
      } ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, scale: 0.7, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            {/* Exact warm yellow/gold sun icon matching reference */}
            <Sun
              size={20}
              className="text-[#facc15] drop-shadow-[0_0_6px_rgba(250,204,21,0.5)] stroke-[2.2]"
            />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, scale: 0.7, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <Moon
              size={19}
              className="text-slate-800 dark:text-slate-200 stroke-[2.2]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
