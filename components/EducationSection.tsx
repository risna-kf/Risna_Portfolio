'use client';

import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '../constants';

export default function EducationSection() {
  return (
    <section id="education" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-20"
        >
          <div className="p-4 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10">
            <GraduationCap className="text-secondary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900 dark:text-white">
            Academic <span className="accent-gradient italic font-serif">Story.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[28px] bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 p-8 md:p-10 shadow-[0_18px_45px_rgba(0,0,0,0.45)] hover:border-cyan-500/30 transition-all"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(0,210,255,0.06),transparent_60%)] opacity-70 pointer-events-none" />

              <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2 leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 font-medium">{edu.institution}</p>
                </div>
                <div className="self-start sm:self-auto px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-xs font-mono text-cyan-300 font-semibold shrink-0 shadow-inner">
                  {edu.period}
                </div>
              </div>

              <ul className="relative z-10 space-y-3.5 pl-2">
                {edu.details.map((item, j) => (
                  <li key={j} className="flex items-start gap-3.5 text-sm md:text-base text-gray-300 leading-relaxed">
                    <div className="mt-2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,210,255,0.8)] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
