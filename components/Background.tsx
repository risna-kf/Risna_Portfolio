'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Background() {
  const { scrollY } = useScroll();
  const yFlow = useTransform(scrollY, [0, 5000], [0, -350]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-50 dark:bg-[#030712] transition-colors duration-500">
      {/* 
        Dark Mode: Signature Continuous Left-Aligned Dark Teal/Green Glow Flow
        Gives the obsidian and green ambiance to the whole portfolio (Skills, About, Projects, etc.)
      */}
      <div className="hidden dark:block">
        <motion.div 
          style={{ y: yFlow }} 
          className="absolute top-0 left-[-180px] w-[580px] h-[950px] bg-[#073844]/55 rounded-full blur-[160px] opacity-80" 
        />
        
        <div className="absolute top-[750px] left-[-180px] w-[580px] h-[950px] bg-[#052e38]/60 rounded-full blur-[160px] opacity-85" />
        <div className="absolute top-[1650px] left-[-160px] w-[560px] h-[950px] bg-[#073c48]/55 rounded-full blur-[150px] opacity-80" />
        <div className="absolute top-[2550px] left-[-180px] w-[580px] h-[950px] bg-[#052e38]/60 rounded-full blur-[160px] opacity-85" />
        <div className="absolute top-[3450px] left-[-160px] w-[560px] h-[950px] bg-[#073844]/55 rounded-full blur-[150px] opacity-80" />

        {/* Subtle Right-Center Ambient Depth Glow */}
        <div className="absolute top-[25%] right-[-5%] w-[450px] h-[450px] bg-[#0284c7]/10 rounded-full blur-[160px]" />
        <div className="absolute top-[65%] right-[-10%] w-[500px] h-[500px] bg-[#0369a1]/10 rounded-full blur-[170px]" />

        {/* Deep Obsidian gradient keeping the center and right side clean and pitch-black */}
        <div className="absolute inset-y-0 right-0 w-3/5 bg-gradient-to-l from-[#02050b] via-[#030712]/90 to-transparent" />
      </div>

      {/* 
        Light Mode: Crisp, high-contrast, airy modern daylight aesthetic
        Gentle soft pastel sky and teal ambient blooms that keep cards and text crisp and readable
      */}
      <div className="block dark:hidden">
        <motion.div 
          style={{ y: yFlow }} 
          className="absolute top-0 left-[-150px] w-[550px] h-[850px] bg-teal-100/50 rounded-full blur-[140px]" 
        />
        <div className="absolute top-[800px] left-[-120px] w-[500px] h-[800px] bg-sky-100/60 rounded-full blur-[150px]" />
        <div className="absolute top-[1800px] left-[-150px] w-[550px] h-[850px] bg-cyan-100/40 rounded-full blur-[140px]" />
        <div className="absolute top-[2700px] left-[-120px] w-[500px] h-[800px] bg-teal-100/50 rounded-full blur-[150px]" />
        
        {/* Subtle right side pastel accent */}
        <div className="absolute top-[30%] right-[-5%] w-[450px] h-[450px] bg-sky-100/50 rounded-full blur-[140px]" />
        <div className="absolute top-[70%] right-[-10%] w-[500px] h-[500px] bg-cyan-100/45 rounded-full blur-[150px]" />
        
        {/* Subtle soft white gradient */}
        <div className="absolute inset-y-0 right-0 w-3/5 bg-gradient-to-l from-slate-100/60 via-slate-50/40 to-transparent" />
      </div>

      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
