'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react';
import HeroPaintSplash from './HeroPaintSplash';
import DeveloperPortrait from './DeveloperPortrait';

export default function Hero() {
  const [photoSrc] = useState<string>('/images/fathima-risna.png');

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-6 lg:px-12 overflow-hidden bg-transparent text-slate-900 dark:text-white transition-colors duration-300">
      {/* Subtle Black Shield ensuring the left side behind the text is mostly solid black in dark mode, and soft white in light mode */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-slate-50 via-slate-50/95 to-transparent dark:from-[#030712] dark:via-[#030712]/95 dark:to-transparent pointer-events-none -z-10 transition-colors duration-300" />
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        {/* Left Column: Information & Actions */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-6 w-fit"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-teal-50/90 dark:bg-[#08131e]/90 border border-teal-500/40 text-xs sm:text-sm text-teal-800 dark:text-teal-300 backdrop-blur-md shadow-sm dark:shadow-[0_0_20px_rgba(20,184,166,0.18)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              </span>
              <span className="font-medium tracking-wide">
                Open to Software Development & Full Stack Roles
              </span>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-slate-600 dark:text-slate-400 font-medium text-base sm:text-lg tracking-wide mb-1"
          >
            Hello, I'm
          </motion.p>

          {/* Name Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-2.5"
          >
            <span className="bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#06b6d4] dark:from-[#38bdf8] dark:via-[#67e8f9] dark:to-[#0ea5e9] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(56,189,248,0.25)]">
              Fathima Risna
            </span>
          </motion.h1>

          {/* Role / Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-sky-600 dark:text-[#38bdf8] tracking-tight mb-2"
          >
            Software Engineer & Full Stack Developer
          </motion.h2>

          {/* Academic / Affiliation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-normal mb-5"
          >
            Computer Science Undergraduate at Uva Wellassa University of Sri Lanka
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="text-slate-700 dark:text-slate-300/85 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mb-8 font-light"
          >
            Passionate about building reliable web applications and crafting intuitive digital experiences through modern full-stack architectures and disciplined engineering methodologies.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="flex flex-wrap items-center gap-3.5 mb-9"
          >
            {/* Primary Explore Projects Button */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00d2ff] via-[#0ea5e9] to-[#0284c7] hover:from-[#38bdf8] hover:to-[#0369a1] text-[#040812] font-bold text-sm sm:text-base flex items-center gap-2 shadow-[0_0_25px_rgba(0,210,255,0.4)] hover:shadow-[0_0_35px_rgba(0,210,255,0.6)] transition-all group"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4 ml-0.5 transition-transform group-hover:translate-x-1" />
            </motion.a>

            {/* Download CV Button */}
            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-3.5 rounded-xl bg-white dark:bg-[#09121d]/90 hover:bg-slate-100 dark:hover:bg-[#111e30] text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-800 hover:border-cyan-500/50 font-semibold text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-sm dark:shadow-md backdrop-blur-md"
            >
              <Download className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              Download CV
            </motion.a>

            {/* Contact Me Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-3.5 rounded-xl bg-white dark:bg-[#09121d]/90 hover:bg-slate-100 dark:hover:bg-[#111e30] text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-800 hover:border-cyan-500/50 font-semibold text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-sm dark:shadow-md backdrop-blur-md"
            >
              <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              Contact Me
            </motion.a>
          </motion.div>

          {/* Connect Links Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="flex items-center gap-3 pt-2"
          >
            <span className="text-[11px] font-bold tracking-widest text-slate-500 uppercase mr-1">
              CONNECT:
            </span>

            {/* GitHub Tile */}
            <motion.a
              href="https://github.com/risna-kf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#161821] hover:bg-[#202430] border border-white/10 hover:border-white/25 flex items-center justify-center transition-all shadow-md group cursor-pointer"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="white" />
                <path
                  d="M12 4.5c-4.14 0-7.5 3.36-7.5 7.5 0 3.32 2.15 6.13 5.14 7.13.38.07.51-.16.51-.36v-1.28c-2.09.45-2.53-1.01-2.53-1.01-.34-.87-.83-1.1-.83-1.1-.68-.47.05-.46.05-.46.75.05 1.15.77 1.15.77.67 1.15 1.76.82 2.18.63.07-.49.26-.82.48-1.01-1.67-.19-3.42-.84-3.42-3.72 0-.82.29-1.49.77-2.02-.08-.19-.33-.96.07-2 0 0 .63-.2 2.07.77.6-.17 1.25-.25 1.89-.25.64 0 1.29.08 1.89.25 1.44-.97 2.07-.77 2.07-.77.4 1.04.15 1.81.07 2 .48.53.77 1.2.77 2.02 0 2.89-1.76 3.53-3.43 3.71.27.23.51.69.51 1.39v2.07c0 .2.13.44.52.36 2.98-1 5.13-3.81 5.13-7.13 0-4.14-3.36-7.5-7.5-7.5z"
                  fill="#161821"
                />
              </svg>
            </motion.a>

            {/* LinkedIn Tile */}
            <motion.a
              href="https://www.linkedin.com/in/fathima-risna-1040b7263/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#161821] hover:bg-[#202430] border border-white/10 hover:border-white/25 flex items-center justify-center transition-all shadow-md group cursor-pointer"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="4" fill="white" />
                <circle cx="7" cy="8.2" r="1.3" fill="#161821" />
                <rect x="5.7" y="10.8" width="2.6" height="7.2" fill="#161821" />
                <path
                  d="M12.3 10.8h-2.5v7.2h2.5v-3.8c0-1 .4-1.9 1.6-1.9 1.1 0 1.4.8 1.4 1.9v3.8h2.5v-4.3c0-2.3-1.2-3.2-2.7-3.2-1.3 0-2 .7-2.3 1.3h-.1v-1z"
                  fill="#161821"
                />
              </svg>
            </motion.a>

            {/* Email Tile */}
            <motion.a
              href="mailto:risnakf14@gmail.com"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#161821] hover:bg-[#202430] border border-white/10 hover:border-white/25 flex items-center justify-center transition-all shadow-md group cursor-pointer"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H21C22.1046 19 23 18.1046 23 17V7C23 5.89543 22.1046 5 21 5H3ZM4.2 7.5L12 13L19.8 7.5H4.2ZM21 9.3L12.6 15.1C12.24 15.35 11.76 15.35 11.4 15.1L3 9.3V17H21V9.3Z"
                  fill="white"
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Visual with Cyan Paint Splash & Cutout Subject */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] lg:min-h-[580px]"
        >
          {/* Layer 1: Ambient Cyan Glow Backdrop */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[85%] h-[85%] bg-gradient-to-tr from-cyan-500/20 via-sky-400/25 to-blue-600/15 rounded-full blur-[70px]" />
          </div>

          {/* Layer 2: Artistic Paint Brush Splash & Splatters */}
          <div className="absolute inset-0 flex items-center justify-center scale-110 lg:scale-125 z-0">
            <HeroPaintSplash />
          </div>

          {/* Layer 3: Subject Portrait */}
          <div className="relative z-10 w-full flex items-end justify-center">
            <DeveloperPortrait
              imageSrc={photoSrc}
              alt="Fathima Risna - Software Engineer & Full Stack Developer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
