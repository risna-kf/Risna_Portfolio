'use client';

import { motion, useScroll, useSpring } from 'motion/react';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import EducationSection from '@/components/EducationSection';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Background from '@/components/Background';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative min-h-screen selection:bg-primary/30">
      {/* Background with floating elements and gradients */}
      <Background />
      
      {/* Fixed progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-50 origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EducationSection />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
