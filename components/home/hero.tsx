'use client';

import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="w-full relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCHQdcR4tapmgwUZBsEBGzl1d6OYksZQTr6ZtG9QcUdKulirVxeKAUy9uBWvDwVgTed9-q5mIeptxDsmcSWz-U3LPuaW8sLOwDTS4VorDH6ds-7pXwGBjDzHEh-G8nNd53I5_03e4EYpXpl9dhfA_mbgl2At8RAmb4tZ2JOmxSpSSpZUgaZ5Z1L6sFfvFnQWpgeJiz9SDup0pEWR41QjqTKKSp-tUJqkj9uh4-RXPTrSfYdo02kqBAid6EbWKxHG-0DhuisD1v9u7nl')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-black/30"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-4 mt-[-5vh]">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-6 block"
        >
          Established 1920
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white text-6xl md:text-8xl font-serif font-black leading-tight tracking-tight mb-8"
        >
          Our Legacy of <span className="text-primary italic font-serif">Luxury</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-slate-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Discover the rich history, the architectural marvels, and the dedicated team that have made The Grand Heritage a beacon of hospitality for over a century.
        </motion.p>

        {/* Booking Widget (Pinnacle Style) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full max-w-4xl mx-auto bg-surface-dark/80 backdrop-blur-xl border border-white/10 p-3 rounded-xl shadow-2xl"
        >
          <form className="flex flex-col md:flex-row gap-2">
            <div className="flex-1 bg-background-dark/50 rounded-lg p-3 px-4 border border-white/5 hover:border-primary/30 transition-colors group cursor-pointer relative text-left">
              <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1 group-hover:text-primary">Check In</label>
              <div className="flex items-center gap-2 text-white">
                <span className="material-symbols-outlined text-primary text-xl">calendar_month</span>
                <input className="bg-transparent border-none p-0 text-sm font-medium placeholder-slate-300 focus:ring-0 w-full cursor-pointer" type="date" />
              </div>
            </div>
            <div className="flex-1 bg-background-dark/50 rounded-lg p-3 px-4 border border-white/5 hover:border-primary/30 transition-colors group cursor-pointer text-left">
              <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1 group-hover:text-primary">Check Out</label>
              <div className="flex items-center gap-2 text-white">
                <span className="material-symbols-outlined text-primary text-xl">calendar_today</span>
                <input className="bg-transparent border-none p-0 text-sm font-medium placeholder-slate-300 focus:ring-0 w-full cursor-pointer" type="date" />
              </div>
            </div>
            <div className="flex-1 bg-background-dark/50 rounded-lg p-3 px-4 border border-white/5 hover:border-primary/30 transition-colors group cursor-pointer text-left">
              <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1 group-hover:text-primary">Guests</label>
              <div className="flex items-center gap-2 text-white">
                <span className="material-symbols-outlined text-primary text-xl">person</span>
                <select className="bg-transparent border-none p-0 text-sm font-medium text-white focus:ring-0 w-full cursor-pointer appearance-none">
                  <option className="bg-background-dark text-white">2 Adults</option>
                  <option className="bg-background-dark text-white">1 Adult</option>
                  <option className="bg-background-dark text-white">Family (2A, 2C)</option>
                </select>
              </div>
            </div>
            <button type="button" className="bg-primary hover:bg-primary-dark text-background-dark font-bold uppercase tracking-wider text-sm px-8 py-4 md:py-0 rounded-lg transition-all flex items-center justify-center gap-2 md:w-auto w-full">
              <span>Search</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </form>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-70"
      >
        <span className="text-xs uppercase tracking-widest text-white/50">Scroll</span>
        <span className="material-symbols-outlined text-white/50">keyboard_arrow_down</span>
      </motion.div>
    </section>
  );
}
