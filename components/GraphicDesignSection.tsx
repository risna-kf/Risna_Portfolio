'use client';

import { motion } from 'motion/react';
import { GRAPHIC_DESIGNS } from '../constants';

export default function GraphicDesignSection() {
  return (
    <section id="designs" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4 block">Creative Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">Visual Storytelling through <span className="italic">Design.</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Beyond engineering, I create stunning visuals that capture attention and build brand identity.
            From minimalist branding to futuristic posters.
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GRAPHIC_DESIGNS.map((design, i) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="relative group rounded-3xl overflow-hidden glass border-white/5"
            >
              <img 
                src={design.image} 
                alt={design.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">
                  {design.category}
                </span>
                <h4 className="text-xl font-bold text-white">{design.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
           <a 
             href="https://fiverr.com" 
             className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-white transition-colors group"
           >
             View full design portfolio on Fiverr 
             <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
               →
             </motion.span>
           </a>
        </motion.div>
      </div>
    </section>
  );
}
