'use client';

import { motion } from 'motion/react';
import { ExternalLink, Github, ChevronRight, Cpu, Database, Layout, Sparkles } from 'lucide-react';
import { PROJECTS } from '../constants';

export default function Projects() {
  const featured = PROJECTS.find(p => p.featured);
  const others = featured ? PROJECTS.filter(p => !p.featured) : PROJECTS;

  return (
    <section id="projects" className="py-28 md:py-32 px-6 sm:px-10 lg:px-16 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div>
            <span className="text-sm font-bold text-accent uppercase tracking-widest mb-3 block">Selection</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">Featured <br /> <span className="text-accent">Solutions.</span></h2>
          </div>
        </motion.div>

        {/* Featured Project */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative glass rounded-[3rem] overflow-hidden mb-12 border-accent/20"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img 
                  src={featured.image} 
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent lg:hidden" />
              </div>
              
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="flex gap-2 mb-6">
                  <span className="bg-primary text-[10px] font-bold uppercase px-2 py-0.5 rounded">Featured</span>
                  <span className="bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded backdrop-blur">AI Platform</span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-serif italic mb-6 group-hover:text-primary transition-colors">
                  {featured.title}
                </h3>
                
                <p className="text-slate-800 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                  {featured.description}
                </p>

                <div className="space-y-4 mb-10">
                  {featured.features?.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span className="text-slate-700 dark:text-gray-300 text-sm">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mb-10">
                  {featured.tech.map(t => (
                    <span key={t} className="px-3 py-1 glass rounded-lg text-xs font-mono text-slate-800 dark:text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {featured.link && featured.link !== '#' && (
                    <motion.a
                      href={featured.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-slate-900 dark:text-white font-bold hover:text-cyan-400 transition-colors"
                    >
                      Live Demo <ExternalLink size={18} className="text-accent" />
                    </motion.a>
                  )}
                  {featured.github && featured.github !== '#' && (
                    <motion.a
                      href={featured.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-slate-800 dark:text-gray-200 font-bold hover:text-cyan-400 transition-colors"
                    >
                      GitHub Repo <Github size={18} />
                    </motion.a>
                  )}
                  {featured.githubFrontend && (
                    <motion.a
                      href={featured.githubFrontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-slate-800 dark:text-gray-200 font-bold hover:text-cyan-400 transition-colors"
                    >
                      Frontend Code <Github size={18} />
                    </motion.a>
                  )}
                  {featured.githubBackend && (
                    <motion.a
                      href={featured.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-slate-800 dark:text-gray-200 font-bold hover:text-teal-400 transition-colors"
                    >
                      Backend Code <Github size={18} />
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
            
            {/* Background Accent Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] pointer-events-none" />
          </motion.div>
        )}

        {/* Projects Grid: 3 in a line on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-[2rem] overflow-hidden group border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 dark:hover:border-cyan-400/30 transition-all duration-300 flex flex-col shadow-md hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] bg-white/70 dark:bg-[#07111a]/70 backdrop-blur-xl"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3.5 right-3.5 flex gap-1.5">
                  {project.github && project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub Repository"
                      aria-label="GitHub Repository"
                      className="p-2 bg-black/60 hover:bg-black/80 backdrop-blur-md rounded-full text-white/70 hover:text-cyan-400 border border-white/10 transition-colors"
                    >
                      <Github size={15} />
                    </a>
                  )}
                  {project.link && project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={project.linkLabel || "Live Demo"}
                      aria-label={project.linkLabel || "Live Demo"}
                      className="p-2 bg-black/60 hover:bg-black/80 backdrop-blur-md rounded-full text-white/70 hover:text-cyan-400 border border-white/10 transition-colors"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                  {project.aiDemoLink && (
                    <a
                      href={project.aiDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="AI Features Demo"
                      aria-label="AI Features Demo"
                      className="p-2 bg-black/60 hover:bg-black/80 backdrop-blur-md rounded-full text-white/70 hover:text-cyan-400 border border-white/10 transition-colors"
                    >
                      <Sparkles size={15} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category Subtitle */}
                  <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 mb-2 block">
                    {project.category || 'Full-Stack Development'}
                  </span>

                  {/* Project Title */}
                  <h4 className="text-lg sm:text-xl font-bold mb-2.5 text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                    {project.description}
                  </p>

                  {/* Pill-shaped Tech Badges with Subtle Refined Border */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-full border border-slate-300 dark:border-white/10 bg-slate-100/80 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 font-mono text-[10px] sm:text-[11px] font-medium tracking-wide"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modern Professional Action Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-2 pt-3.5 border-t border-slate-200/60 dark:border-white/10">
                  {project.github && project.github !== '#' && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group/btn flex-1 min-w-[100px] py-2 px-3 rounded-full bg-cyan-50/80 hover:bg-cyan-100 dark:bg-[#071c29] dark:hover:bg-[#0b293d] border border-cyan-500 hover:border-cyan-400 text-cyan-700 dark:text-cyan-400 hover:text-cyan-900 dark:hover:text-cyan-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm hover:shadow-[0_0_16px_rgba(6,182,212,0.25)] cursor-pointer"
                    >
                      <Github size={15} className="text-cyan-600 dark:text-cyan-400 transition-transform group-hover/btn:scale-110" />
                      <span>GitHub</span>
                    </motion.a>
                  )}

                  {project.link && project.link !== '#' && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group/btn flex-1 min-w-[100px] py-2 px-3 rounded-full bg-cyan-50/80 hover:bg-cyan-100 dark:bg-[#071c29] dark:hover:bg-[#0b293d] border border-cyan-500 hover:border-cyan-400 text-cyan-700 dark:text-cyan-400 hover:text-cyan-900 dark:hover:text-cyan-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm hover:shadow-[0_0_16px_rgba(6,182,212,0.25)] cursor-pointer"
                    >
                      <ExternalLink size={15} className="text-cyan-600 dark:text-cyan-400 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      <span>{project.linkLabel || 'Live Demo'}</span>
                    </motion.a>
                  )}

                  {project.aiDemoLink && (
                    <motion.a
                      href={project.aiDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group/btn flex-1 min-w-[100px] py-2 px-3 rounded-full bg-cyan-50/80 hover:bg-cyan-100 dark:bg-[#071c29] dark:hover:bg-[#0b293d] border border-cyan-500 hover:border-cyan-400 text-cyan-700 dark:text-cyan-400 hover:text-cyan-900 dark:hover:text-cyan-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm hover:shadow-[0_0_16px_rgba(6,182,212,0.25)] cursor-pointer"
                    >
                      <Sparkles size={15} className="text-cyan-600 dark:text-cyan-400 transition-transform group-hover/btn:scale-110" />
                      <span>AI Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
