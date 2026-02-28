'use client';

import { motion } from 'motion/react';

const wellnessFeatures = [
  {
    title: 'Hydrotherapy Circuit',
    description: 'Experience the healing power of water in our state-of-the-art thermal suite.',
    icon: 'water_drop'
  },
  {
    title: 'Holistic Massage',
    description: 'Personalized treatments blending ancient techniques with modern therapeutic practices.',
    icon: 'spa'
  },
  {
    title: 'Yoga Pavilion',
    description: 'Find your center in our open-air pavilion overlooking the serene meditation gardens.',
    icon: 'self_improvement'
  }
];

export default function WellnessSection() {
  return (
    <section className="py-24 bg-background-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-navy/30 skew-x-12 translate-x-1/4"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block font-display">The Azure Spa</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display leading-tight">
              Rejuvenate Your <br/> Body & Spirit
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 font-sans">
              Step into a sanctuary of calm where time stands still. Our award-winning spa offers a comprehensive menu of treatments designed to restore balance and enhance vitality.
            </p>
            
            <div className="grid gap-8">
              {wellnessFeatures.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="size-12 rounded-full bg-surface-navy flex items-center justify-center text-primary shrink-0 border border-white/5">
                    <span className="material-symbols-outlined">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-display">{feature.title}</h3>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <button className="mt-10 bg-transparent border border-primary text-primary hover:bg-primary hover:text-background-navy font-bold py-3 px-8 rounded-sm transition-all uppercase tracking-widest font-display">
              View Spa Menu
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCYsaZcKVdZ63Kij9yL1BreWSkfPfSPxudUIL_8aijCYmGDtWN0LllqJL-Vj2680tJEKoKz0pD5FwegktBNLiq-ivKV4aZCQGD_oD8pi7_kg4AeyneTCM-obPq-r01YtogjbjqxcqBwQ-4Yp91XTcJF0-Li9FEERm8MuLZldZ-TS_ijgTdwY9BpJgBaZAuZWxfqJYnmAwGhWsDiiYXebPtmkdWSk7OhshNbKjPaOFzkS-50Tx63iv08OieVlloFFCOb3Kl3pF4t8Q7O')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background-navy/80 to-transparent"></div>
            
            <div className="absolute bottom-8 left-8 right-8 bg-surface-navy/90 backdrop-blur p-6 rounded-xl border border-white/10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white font-bold font-display text-xl">Signature Treatment</h3>
                <span className="text-primary font-bold">$250 / 90 min</span>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                The &quot;Royal Gold Ritual&quot; combines a full-body exfoliation with gold-infused oil massage, leaving your skin radiant and your mind at peace.
              </p>
              <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wide cursor-pointer hover:text-white transition-colors">
                <span>Book Treatment</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
