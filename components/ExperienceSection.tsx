'use client';

import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';
import { EXPERIENCES } from '../constants';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex items-center gap-6 mb-20"
        >
          <div className="p-4 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10">
            <Briefcase className="text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900 dark:text-white">Professional <span className="accent-gradient italic font-serif">Journal.</span></h2>
        </motion.div>

        <div className="space-y-8">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative glass p-8 md:p-12 border-slate-200 dark:border-white/5 hover:border-primary/20 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                  <p className="text-slate-600 dark:text-gray-400 font-medium">{exp.company}</p>
                </div>
                <div className="px-4 py-2 rounded-full glass border-slate-200 dark:border-white/10 text-xs font-mono text-slate-800 dark:text-gray-400">
                  {exp.period}
                </div>
              </div>
              
              <ul className="space-y-4 max-w-3xl">
                {exp.description.map((item, j) => (
                  <li key={j} className="flex items-start gap-4 text-slate-800 dark:text-gray-300">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* Subtle timeline connector dot */}
              <div className="absolute left-0 top-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary/20 border border-primary/40 shrink-0 hidden lg:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
