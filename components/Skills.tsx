'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import * as Icons from 'lucide-react';
import { Briefcase, ChevronRight } from 'lucide-react';
import { SKILLS, EXPERIENCES } from '../constants';
import { cn } from '../lib/utils';

const categoryIcons: Record<string, keyof typeof Icons> = {
  Frontend: 'Code2',
  Backend: 'Server',
  Database: 'Database',
  'AI/ML': 'Brain',
  Mobile: 'Smartphone',
  Design: 'Palette',
  Other: 'Wrench'
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'skills' | 'experience'>('skills');
  const categories = ['Frontend', 'Backend', 'Database', 'AI/ML', 'Mobile', 'Design', 'Other'];
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const activeSkills = SKILLS.filter(s => s.category === activeCategory);
  const { scrollY } = useScroll();
  const gridParallax = useTransform(scrollY, [0, 2400], [0, -24]);

  // Handle hash navigation from Navbar (#skills and #experience)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#experience') {
        setActiveTab('experience');
      } else if (hash === '#skills') {
        setActiveTab('skills');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* Invisible anchor points for smooth scrolling */}
      <div id="skills" className="absolute -top-24" />
      <div id="experience" className="absolute -top-24" />

      {/* Background Glow Elements */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-gradient-to-r from-[#030712] via-[#030712]/95 to-transparent pointer-events-none z-0" />
      <div className="absolute top-1/2 right-[-120px] -translate-y-1/2 w-[650px] h-[800px] bg-[#073844]/75 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-1/4 right-[20px] w-[500px] h-[500px] bg-[#0a4d5b]/50 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-[-60px] w-[450px] h-[450px] bg-[#052e38]/60 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section matching reference design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-5 backdrop-blur-sm">
            EXPERTISE &amp; BACKGROUND
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            Skills &amp; <span className="text-[#38BDF8] bg-gradient-to-r from-cyan-400 to-sky-400 text-transparent bg-clip-text">Experience</span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Technical expertise, developer toolchains, and hands-on leadership &amp; academic experience.
          </p>

          {/* Segmented Toggle Control */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center p-1.5 rounded-full bg-[#0a0f18]/90 border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-md">
              {/* Skills Tab Button */}
              <button
                type="button"
                onClick={() => setActiveTab('skills')}
                className={cn(
                  "flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer",
                  activeTab === 'skills'
                    ? "bg-gradient-to-r from-[#00D2FF] to-[#38BDF8] text-slate-950 font-bold shadow-[0_0_25px_rgba(0,210,255,0.45)]"
                    : "text-gray-400 hover:text-white"
                )}
              >
                <span className={cn("font-mono text-sm font-bold tracking-tighter", activeTab === 'skills' ? "text-slate-950" : "text-gray-400")}>&lt;&gt;</span>
                <span>Skills</span>
              </button>

              {/* Experience Tab Button */}
              <button
                type="button"
                onClick={() => setActiveTab('experience')}
                className={cn(
                  "flex items-center gap-2.5 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer",
                  activeTab === 'experience'
                    ? "bg-gradient-to-r from-[#00D2FF] to-[#38BDF8] text-slate-950 font-bold shadow-[0_0_25px_rgba(0,210,255,0.45)]"
                    : "text-gray-400 hover:text-white"
                )}
              >
                <Briefcase className={cn("w-4 h-4", activeTab === 'experience' ? "text-slate-950" : "text-gray-400")} />
                <span>Experience</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Tab Content with Animation */}
        <AnimatePresence mode="wait">
          {activeTab === 'skills' ? (
            <motion.div
              key="skills-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid lg:grid-cols-[240px_1fr] gap-10 items-start">
                {/* Category Sidebar */}
                <div className="space-y-3.5">
                  {categories.map((cat) => {
                    const Icon = Icons[categoryIcons[cat] as keyof typeof Icons] as any;
                    const isActive = cat === activeCategory;

                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setActiveCategory(cat)}
                        className={
                          `w-full flex items-center justify-between gap-3 rounded-2xl px-5 py-4 border transition-all cursor-pointer ` +
                          (isActive
                            ? 'bg-gradient-to-r from-cyan-500/25 to-blue-600/25 text-white border-cyan-400/40 shadow-[0_0_25px_rgba(0,210,255,0.2)]'
                            : 'glass text-gray-300 hover:border-white/20')
                        }
                      >
                        <span className="flex items-center gap-3 text-sm font-semibold">
                          {Icon ? <Icon size={18} className={isActive ? 'text-cyan-400' : 'text-gray-400'} /> : null}
                          {cat}
                        </span>
                        <ChevronRight
                          size={16}
                          className={`transition-transform ${isActive ? 'translate-x-0 text-cyan-400' : '-translate-x-1 text-gray-500'}`}
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Skills Cards Grid */}
                <motion.div
                  key={activeCategory}
                  style={{ y: gridParallax }}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {activeSkills.map((skill, idx) => {
                    const SkillIcon = Icons[skill.icon as keyof typeof Icons] as any;
                    const isCanva = skill.name === 'Canva';
                    const isPhotoshop = skill.name === 'Photoshop';
                    const isDjango = skill.name === 'Django';
                    const isMySQL = skill.name === 'MySQL';
                    const logoSizeClass = isCanva ? 'w-14 h-14' : isDjango ? 'w-8 h-8' : isMySQL ? 'w-10 h-10' : 'w-9 h-9';
                    const logoBoxClass = isCanva ? 'w-14 h-14' : 'w-10 h-10';
                    const logoTileClass = isCanva ? 'w-16 h-16' : 'w-14 h-14';
                    const logoBlendClass = isPhotoshop ? 'mix-blend-multiply brightness-110 saturate-110' : '';

                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ y: -4, scale: 1.02 }}
                        transition={{ duration: 0.25 }}
                        className="group relative overflow-hidden rounded-[28px] bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 px-6 py-5 flex items-center gap-5 shadow-[0_18px_45px_rgba(0,0,0,0.45)] hover:border-cyan-500/30"
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(255,255,255,0.18),transparent_55%)] opacity-70 pointer-events-none" />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.15 }}
                          className={`relative z-10 ${logoTileClass} rounded-2xl bg-gradient-to-br from-white/12 via-white/6 to-transparent border border-white/12 flex items-center justify-center overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.4)]`}
                        >
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_60%)]" />
                          <div className={`relative z-10 ${logoBoxClass} flex items-center justify-center`}>
                            {skill.logo ? (
                              <img
                                src={skill.logo}
                                alt={`${skill.name} logo`}
                                loading="lazy"
                                className={`${logoSizeClass} object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)] ${logoBlendClass}`}
                              />
                            ) : SkillIcon ? (
                              <SkillIcon size={22} className="text-cyan-400" />
                            ) : null}
                          </div>
                        </motion.div>
                        <div className="relative z-10 flex-1">
                          <div className="text-xs uppercase tracking-widest text-gray-500">{activeCategory}</div>
                          <div className="text-lg font-semibold text-white/90">{skill.name}</div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="experience-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              {EXPERIENCES.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-[28px] bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 p-8 md:p-10 shadow-[0_18px_45px_rgba(0,0,0,0.45)] hover:border-cyan-500/30 transition-all"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(0,210,255,0.08),transparent_60%)] opacity-70 pointer-events-none" />

                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,210,255,0.15)]">
                        <Briefcase className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-sm md:text-base text-gray-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="self-start md:self-auto px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-xs font-mono text-cyan-300 font-semibold shadow-inner">
                      {exp.period}
                    </div>
                  </div>

                  <ul className="relative z-10 space-y-3.5 pl-2">
                    {exp.description.map((item, j) => (
                      <li key={j} className="flex items-start gap-3.5 text-sm md:text-base text-gray-300 leading-relaxed">
                        <div className="mt-2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,210,255,0.8)] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
