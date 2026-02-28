'use client';

import { motion } from 'motion/react';

export default function DiningHero() {
  return (
    <section className="relative">
      <div 
        className="relative h-[85vh] min-h-[600px] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center" 
        style={{ backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.8) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDG1oP9jupLX1KQP9SL2wymWCmTC0HsfHo7N4nzs1VJIYKW9rdEuES2BTEzgXfVU7l4FUUpULJR0UipI0p6geTWrhNEP91rXpRHfoxh3IxSC3YIXX6MUftLORVfx84C4Rd2bSHbe_8QoBLmNB5k5GLc2VVQztT3eWHxPJ25Gjyn5SA4nWVAc3X7ApXnwqUBbMbkMxCCOZ3LkViBJ2h7Do5VBP6_5FSP42qhnMkxZZCKMymQAJckuDry-q67ViYSagPhw29E28Kx9KXv')" }}
      >
        <div className="flex flex-col gap-6 text-center max-w-4xl px-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary text-sm font-medium tracking-[0.2em] uppercase font-display"
          >
            Taste & Tranquility
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-5xl md:text-7xl font-bold leading-none tracking-tight font-display uppercase"
          >
            Culinary Excellence <br/> <span className="text-white/60">& Serenity</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto font-sans"
          >
            Immerse yourself in Michelin-starred gastronomy and our world-class spa sanctuary. A retreat for the senses.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
          >
            <button className="cursor-pointer items-center justify-center rounded-sm h-12 px-8 bg-primary hover:bg-primary-dark transition-colors text-background-dark text-base font-bold tracking-widest uppercase font-display">
              View Menus
            </button>
            <button className="cursor-pointer items-center justify-center rounded-sm h-12 px-8 border border-white text-white hover:bg-white hover:text-background-dark transition-colors text-base font-bold tracking-widest uppercase font-display">
              Explore Spa
            </button>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <span className="material-symbols-outlined text-4xl">keyboard_arrow_down</span>
        </div>
      </div>
    </section>
  );
}
