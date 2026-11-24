'use client';

import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-10 px-6 pt-16 pb-12 border-t border-white/5 bg-[#030712]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        {/* Top Row: Brand & Navigation */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Brand: Signature + Divider + Name & Portfolio Site */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center">
              <img
                src="/images/fathima-risna-signature.png"
                alt="Fathima Risna"
                className="h-9 md:h-10 w-auto object-contain filter invert dark:invert-0 drop-shadow-[0_2px_10px_rgba(255,255,255,0.4)]"
              />
            </a>

            {/* Vertical Divider */}
            <div className="h-8 w-[1px] bg-white/20" />

            {/* Name & Subtitle */}
            <div className="flex flex-col">
              <span className="text-white font-bold text-base tracking-tight leading-tight">
                Fathima Risna
              </span>
              <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 uppercase mt-0.5">
                PORTFOLIO SITE
              </span>
            </div>
          </div>

          {/* Nav Links & Scroll to Top */}
          <div className="flex items-center flex-wrap gap-6 sm:gap-8">
            <a
              href="#about"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>

            {/* Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="px-4 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-950/30 hover:bg-cyan-900/40 text-cyan-400 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(0,210,255,0.15)] cursor-pointer"
            >
              <span>Top</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Row: Copyright & Social Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-normal">
            &copy; {year} Fathima Risna. All rights reserved.
          </p>

          {/* Social Links (Circular buttons matching reference) */}
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <a
              href="https://github.com/risna-kf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 text-gray-400 hover:text-white flex items-center justify-center transition-all shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/fathima-risna-1040b7263/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 text-gray-400 hover:text-white flex items-center justify-center transition-all shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Email */}
            <a
              href="mailto:risnakf14@gmail.com"
              aria-label="Email"
              className="w-9 h-9 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 text-gray-400 hover:text-white flex items-center justify-center transition-all shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
