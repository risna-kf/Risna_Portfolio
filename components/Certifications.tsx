'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { X, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '../constants';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-5 backdrop-blur-sm">
            VALIDATION
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Certifications &amp; <span className="text-[#38BDF8] bg-gradient-to-r from-cyan-400 to-sky-400 text-transparent bg-clip-text">Awards</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Honors, technical specializations, and verified achievements.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, i) => {
            const IconComponent = (Icons as any)[cert.icon] || Icons.Award;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative overflow-hidden rounded-[28px] bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 p-7 shadow-[0_18px_45px_rgba(0,0,0,0.45)] hover:border-cyan-500/30 transition-all flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(0,210,255,0.06),transparent_60%)] opacity-70 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,210,255,0.15)] group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/20 text-xs font-mono text-cyan-300 font-semibold shadow-inner">
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="font-bold text-lg mb-2 text-white group-hover:text-cyan-400 transition-colors leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {cert.issuer}
                  </p>
                </div>

                {cert.image && (
                  <div className="relative z-10 mt-2 pt-3 border-t border-white/5">
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert.image || null)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Certificate Lightbox Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full bg-[#0c1420] border border-white/15 rounded-3xl p-3 shadow-2xl overflow-hidden cursor-default"
              >
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <img
                  src={selectedCert}
                  alt="Certificate Preview"
                  className="w-full h-auto rounded-2xl object-contain max-h-[80vh]"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
