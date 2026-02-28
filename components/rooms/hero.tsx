'use client';

import { motion } from 'motion/react';

export default function RoomsHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjVW-9ahbEJIkZRjIvhQxVTyIgI84iGHvmt4LVO8VSKqfWTI0GQ6k0vwkSnQ5-7QMXkyfDIhh5FvQCIRtIlBlagC6EAj_SkSuCNJ8mQ9-62CVnRtavgqMVTCCdEquawDr5xXvnfvkkQOENQYdK-TErLi85DaS9eCz-M0piwG2JT6Fy7vIjsav7TP8rOMfDqiCMxpGkiimdPmZrSfSR9Y2eZZ6b8-firSazNlBYu_f5ZBBmXzek2-FEChT7frHTk4pHwe0c2YjFCGe0')" }}
      ></div>
      <div className="absolute inset-0 bg-background-dark/60"></div>
      
      <div className="relative z-10 text-center px-4">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block"
        >
          Accommodations
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-5xl md:text-7xl font-serif font-bold mb-6"
        >
          Suites & Sanctuaries
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-200 text-lg max-w-2xl mx-auto font-light"
        >
          Every room is a masterpiece of design, offering a perfect blend of historic charm and modern luxury.
        </motion.p>
      </div>
    </section>
  );
}
