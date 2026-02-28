'use client';

import { motion } from 'motion/react';

const timelineEvents = [
  {
    year: '1920',
    title: 'The Foundation',
    description: 'Established by Archibald Sterling as a sanctuary for the elite, introducing Art Deco elegance to the city skyline.',
    active: true
  },
  {
    year: '1955',
    title: 'Royal Visit',
    description: 'Hosted Queen Elizabeth II during her first commonwealth tour, cementing the hotel\'s status as a royal preference.',
    active: false
  },
  {
    year: '1990',
    title: 'Architectural Restoration',
    description: 'A meticulous 5-year project restored the Grand Ballroom to its original gold-leaf glory, winning the Heritage Award.',
    active: false
  },
  {
    year: '2023',
    title: 'Modern Luxury Redefined',
    description: 'Awarded the prestigious 5-Star Diamond Award after unveiling the new rooftop infinity pool and wellness center.',
    active: true
  }
];

export default function History() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 py-20 md:py-32">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="sticky top-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6 font-serif">A Century of Stories</h2>
            <p className="text-[#c3b998] text-lg leading-relaxed mb-8">
              From its foundations in the roaring twenties to its modern-day renaissance, The Grand Heritage has stood as a silent witness to history, hosting royalty, celebrities, and discerning travelers from around the globe.
            </p>
            <div className="h-64 w-full rounded-xl overflow-hidden shadow-2xl relative group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJctRbVI24pQ46FN5riAzSVWGDOSdXUkKUQcJXoKTbIYTtzD6xp7K-d7pR9-5MBZqAq3B89WjAIjow3fQ-VpPkdLmPA2b1jvDD4IK92jKHJuk4nX0GhSIADJ7jGKJHPQpjcJT2IfAVe7OIau-tNY2AfPSZQpfJhTD62MqjD55AZtAuPw7dZhUmW2YOYEGO4ReFEj_LslUUnUoa_3QlTGpJteoEA6HDxvJJvWCydrN57T-pU9Zpw1F0gcd2gDCixW1IBtONsmfyz1l2')" }}
              ></div>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-4 left-4 bg-background-dark/80 backdrop-blur px-3 py-1 rounded text-xs text-primary border border-primary/20">Archive: 1924</div>
            </div>
          </motion.div>
        </div>

        <div className="relative pl-8 md:pl-0 border-l border-[#433d28] md:border-none">
          {timelineEvents.map((event, index) => (
            <motion.div 
              key={event.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="grid grid-cols-[1fr_auto_1fr] gap-x-8 mb-12 relative group last:mb-0"
            >
              {/* Desktop Node */}
              <div className="hidden md:flex flex-col items-center">
                <div className={`w-px h-full bg-[#433d28] ${index === 0 ? 'mt-4' : ''} ${index === timelineEvents.length - 1 ? 'h-4' : ''}`}></div>
              </div>
              <div className="hidden md:flex flex-col items-center relative pt-2">
                <div className={`size-4 rounded-full z-10 ${event.active ? 'bg-primary ring-4 ring-background-dark' : 'border-2 border-primary bg-background-dark'}`}></div>
                {index !== timelineEvents.length - 1 && (
                  <div className="w-px h-full bg-[#433d28] absolute top-6"></div>
                )}
              </div>
              
              {/* Content */}
              <div className="col-span-3 md:col-span-1 pb-12 last:pb-0">
                <div className="flex flex-col gap-2">
                  <span className="text-primary font-bold text-lg font-display">{event.year}</span>
                  <h3 className="text-white text-xl font-bold font-serif">{event.title}</h3>
                  <p className="text-[#c3b998] text-base">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
