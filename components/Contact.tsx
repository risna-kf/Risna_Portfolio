'use client';

import { motion } from 'motion/react';
import { Send, MapPin, Mail, Phone, Github, Linkedin, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-bold text-primary uppercase tracking-widest mb-4 block">Get in touch</span>
            <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight mb-8 text-slate-900 dark:text-white">Let's build <br /><span className="text-primary italic">something iconic.</span></h2>
            
            <p className="text-slate-800 dark:text-gray-300 text-lg mb-12 max-w-xl leading-relaxed">
              Have an internship opportunity, a project in mind, or just want to connect?
              <br />
              <span className="text-slate-900 dark:text-white font-medium">Let's talk.</span>
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <Mail size={20} />,
                  label: 'Email',
                  value: 'risnakf14@gmail.com',
                  href: 'mailto:risnakf14@gmail.com'
                },
                {
                  icon: <MessageSquare size={20} />,
                  label: 'LinkedIn',
                  value: 'Fathima Risna',
                  href: 'https://www.linkedin.com/in/fathima-risna-1040b7263/'
                }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <span className="text-slate-700 dark:text-gray-400 group-hover:text-cyan-400 transition-colors">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-gray-500 uppercase tracking-widest font-bold">{item.label}</p>
                    <p className="text-lg font-medium text-slate-800 dark:text-gray-200 group-hover:text-cyan-400 transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3.5 mt-10">
              {/* GitHub Tile */}
              <motion.a
                href="https://github.com/risna-kf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
                className="w-12 h-12 rounded-2xl bg-[#161821] hover:bg-[#202430] border border-white/10 hover:border-white/25 flex items-center justify-center transition-all shadow-md group cursor-pointer"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="white" />
                  <path
                    d="M12 4.5c-4.14 0-7.5 3.36-7.5 7.5 0 3.32 2.15 6.13 5.14 7.13.38.07.51-.16.51-.36v-1.28c-2.09.45-2.53-1.01-2.53-1.01-.34-.87-.83-1.1-.83-1.1-.68-.47.05-.46.05-.46.75.05 1.15.77 1.15.77.67 1.15 1.76.82 2.18.63.07-.49.26-.82.48-1.01-1.67-.19-3.42-.84-3.42-3.72 0-.82.29-1.49.77-2.02-.08-.19-.33-.96.07-2 0 0 .63-.2 2.07.77.6-.17 1.25-.25 1.89-.25.64 0 1.29.08 1.89.25 1.44-.97 2.07-.77 2.07-.77.4 1.04.15 1.81.07 2 .48.53.77 1.2.77 2.02 0 2.89-1.76 3.53-3.43 3.71.27.23.51.69.51 1.39v2.07c0 .2.13.44.52.36 2.98-1 5.13-3.81 5.13-7.13 0-4.14-3.36-7.5-7.5-7.5z"
                    fill="#161821"
                  />
                </svg>
              </motion.a>

              {/* LinkedIn Tile */}
              <motion.a
                href="https://www.linkedin.com/in/fathima-risna-1040b7263/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
                className="w-12 h-12 rounded-2xl bg-[#161821] hover:bg-[#202430] border border-white/10 hover:border-white/25 flex items-center justify-center transition-all shadow-md group cursor-pointer"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="4" fill="white" />
                  <circle cx="7" cy="8.2" r="1.3" fill="#161821" />
                  <rect x="5.7" y="10.8" width="2.6" height="7.2" fill="#161821" />
                  <path
                    d="M12.3 10.8h-2.5v7.2h2.5v-3.8c0-1 .4-1.9 1.6-1.9 1.1 0 1.4.8 1.4 1.9v3.8h2.5v-4.3c0-2.3-1.2-3.2-2.7-3.2-1.3 0-2 .7-2.3 1.3h-.1v-1z"
                    fill="#161821"
                  />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[3rem] border-slate-200 dark:border-white/5 relative"
          >
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-xs font-bold text-slate-700 dark:text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                   <input 
                     type="text" 
                     placeholder="John Doe"
                     className="w-full px-6 py-4 rounded-2xl glass border-slate-200 dark:border-white/5 text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                   />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs font-bold text-slate-700 dark:text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                   <input 
                     type="email" 
                     placeholder="john@example.com"
                     className="w-full px-6 py-4 rounded-2xl glass border-slate-200 dark:border-white/5 text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                   />
                 </div>
               </div>
               
               <div className="space-y-2">
                 <label className="text-xs font-bold text-slate-700 dark:text-gray-500 uppercase tracking-widest ml-1">Project Subject</label>
                 <input 
                   type="text" 
                   placeholder="AI Dashboard Implementation"
                   className="w-full px-6 py-4 rounded-2xl glass border-slate-200 dark:border-white/5 text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                 />
               </div>

               <div className="space-y-2">
                 <label className="text-xs font-bold text-slate-700 dark:text-gray-500 uppercase tracking-widest ml-1">Message</label>
                 <textarea 
                   rows={4}
                   placeholder="Tell me about your amazing project..."
                   className="w-full px-6 py-4 rounded-2xl glass border-slate-200 dark:border-white/5 text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                 />
               </div>

               <motion.button
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 className="w-full py-5 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-bold flex items-center justify-center gap-3 shadow-xl"
               >
                 Send Message <Send size={20} />
               </motion.button>
            </form>
            
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
