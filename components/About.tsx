'use client';

import { motion } from 'motion/react';
import {
  Monitor,
  Smartphone,
  Layers,
  Code2,
  Terminal,
  Database,
  Zap
} from 'lucide-react';

export default function About() {
  const leftMilestones = [
    {
      dotColor: 'bg-cyan-400 ring-cyan-500/30',
      iconBoxBg: 'bg-[#0e1726] border-cyan-500/20 text-cyan-400',
      icon: <Monitor className="w-5 h-5 text-cyan-400" />,
      title: 'Web Development',
      titleColor: 'text-cyan-400',
      description: 'Creating responsive, modern, and high-performance web applications.'
    },
    {
      dotColor: 'bg-sky-400 ring-sky-500/30',
      iconBoxBg: 'bg-[#0c192c] border-sky-500/20 text-sky-400',
      icon: <Smartphone className="w-5 h-5 text-sky-400" />,
      title: 'Mobile App Development',
      titleColor: 'text-sky-400',
      description: 'Building cross-platform mobile solutions with React Native & Expo.'
    },
    {
      dotColor: 'bg-teal-400 ring-teal-500/30',
      iconBoxBg: 'bg-[#091f24] border-teal-500/20 text-teal-400',
      icon: <Layers className="w-5 h-5 text-teal-400" />,
      title: 'Full-Stack Architecture',
      titleColor: 'text-teal-400',
      description: 'Connecting frontend interfaces with robust APIs and cloud databases.'
    }
  ];

  const techBadges = [
    'React.js',
    'Next.js',
    'React Native',
    'Node.js',
    'Spring Boot',
    'Django',
    'PHP',
    'MySQL',
    'MongoDB',
    'Python',
    'Java',
    'Tailwind CSS'
  ];

  return (
    <section id="about" className="py-28 md:py-36 px-6 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-[-180px] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-[-150px] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-xs font-bold text-primary uppercase tracking-[0.4em] mb-4 block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Engineering Tomorrow's{' '}
            <span className="accent-gradient italic font-serif">Digital Experience.</span>
          </h2>
        </motion.div>

        {/* 2-Column Layout Matching User's Reference Screenshot */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Timeline with Connected Pillars & Floating Developer Icons */}
          <div className="lg:col-span-5 relative">
            {/* Background Floating Developer Doodle Icons */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10">
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-4 right-10 text-sky-400/20"
              >
                <Code2 size={24} />
              </motion.div>
              <motion.div
                animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/3 right-4 text-cyan-400/20"
              >
                <Zap size={22} />
              </motion.div>
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute bottom-1/4 right-16 text-cyan-400/20"
              >
                <Database size={22} />
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-6 right-8 text-teal-400/20"
              >
                <Terminal size={20} />
              </motion.div>
            </div>

            {/* Vertical Connecting Line with glowing gradient */}
            <div className="absolute left-[15px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-400 via-sky-400 to-teal-400 opacity-60" />

            {/* 3 Connected Timeline Milestones */}
            <div className="space-y-10 sm:space-y-12 relative z-10 pl-2">
              {leftMilestones.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="flex items-start gap-5 sm:gap-6 group"
                >
                  {/* Glowing Milestone Circle Dot on the line */}
                  <div className="relative flex items-center justify-center pt-2">
                    <span
                      className={`w-3.5 h-3.5 rounded-full ${item.dotColor} ring-4 transition-transform group-hover:scale-125 duration-300 shadow-md`}
                    />
                  </div>

                  {/* Icon Card & Content */}
                  <div className="flex items-start gap-4 flex-1">
                    <div
                      className={`w-12 h-12 rounded-2xl ${item.iconBoxBg} border flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className={`text-lg sm:text-xl font-bold ${item.titleColor} tracking-tight mb-1`}>
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Sleek High-End Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="glass rounded-[2rem] sm:rounded-[2.5rem] p-7 sm:p-10 border border-white/10 bg-[#090d16]/90 shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden backdrop-blur-2xl">
              {/* Subtle top-right ambient glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* 1. Header Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-6">
                <span className="px-3.5 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wide">
                  Full-Stack Developer (Web &amp; Mobile)
                </span>
                <span className="px-3.5 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wide">
                  B.Sc (Hons) CST
                </span>
              </div>

              {/* 2. Main Headline */}
              <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white tracking-tight leading-snug mb-5">
                Passionate about building scalable Web &amp; Mobile digital solutions
              </h3>

              {/* 3. Narrative Bio */}
              <div className="space-y-4 text-slate-300/90 text-sm sm:text-base leading-relaxed mb-7">
                <p>
                  I'm <strong className="text-white font-semibold">Kaldeen Fathima Risna</strong>, a Computer Science &amp; Technology undergraduate at{' '}
                  <strong className="text-white font-semibold">
                    Uva Wellassa University of Sri Lanka
                  </strong>
                  , passionate about engineering scalable, user-centric software solutions across <span className="text-cyan-400 font-medium">Full-Stack Web, Mobile, and AI-powered systems</span>.
                </p>
                <p>
                  I build end-to-end applications from responsive frontend interfaces to robust backend APIs and cross-platform mobile apps using <strong className="text-white font-medium">React, Next.js, Node.js, Spring Boot, Django, React Native, and modern databases</strong>. With a strong background in <strong className="text-white font-medium">UI/UX design</strong>, I prioritize clean architecture, performance, and intuitive user experiences — and I am currently <span className="text-cyan-400 font-medium">open to Software Engineering Internship opportunities</span>.
                </p>
              </div>

              {/* 4. Tech Badges Grid */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-3">
                  Core Technologies
                </span>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {techBadges.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl bg-[#131722] hover:bg-[#1c2333] border border-white/10 hover:border-cyan-500/40 text-xs font-medium text-slate-300 hover:text-white transition-all shadow-sm select-none cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
