'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Eleanor Vance',
    role: 'General Manager',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsKsk2_zH2IVqeWCfnreFYCrOzO_dBeNTrhngae7AuASiBMO90Tno8JYRdxpLaenhSWkV-DgEqu2yrIZtZoQgvffZ6af88lUKKJIDOf23FY7s71oT4ejBfxseB7yVPVKNxT7YS3IHvATdw9bcqE1SlEOA0glxHHvA5bmrIjwiagB6KtoaYWIwIP-yR-2NOjthafE4GkWxtiUNjm_9aCSxAhkbroJmAdK9ihjBbsX05zev8Y0GICUAZcSjQ0Npexkwesp35JCM25g84'
  },
  {
    name: 'Julian Thorne',
    role: 'Executive Chef',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGVyo3ZJjeSxakpHC9AB4COgPh_r01-de79iBD1IRMn2-aPKLExHm7JshHv8WXOimzTy-_hbChABxyIiShZIcD-PtQDT5oUta_vB6qFCyi5QDuRDSIWkPz1rEHNvXQyXXiOyXqb6kxUTz-4Uw9_M8mRMKsElnU6GYldhXuMFnb4NUWo0RCN9V8UBY3cgayi8UufodOZR9CeqM4H_MQ4BygCX2brScJyHP9lIFKn0g0xdGygXo22CIoU5P8U349t_9p2yNi5eU29_SF'
  },
  {
    name: 'Sophia Rossi',
    role: 'Head Concierge',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvhJsIeJwte4iJwvTliJtmvK3T7PasI4M6WoQprlDeCPUIxeOS4CX3FEbXB_68LAkYr6h-6SFbuHzCtvhRnX7gX9sehVWiyAFSEVwVLXSbzQIfDYSkIn9rbwN7cfH79xltLBAXNLm_naLVWbqPq5KWGl5ZVoj3GJIIbkdeXhDJNYomDipYJblvexxS71TSS4Fz7PsDhzAo13MvOvIaR29WPRIIrWhHS8Pn2XxUcsYK-sXgExYrgFDny8qI_pVbI6j0-sx8WWX247az'
  },
  {
    name: 'Marcus Wei',
    role: 'Wellness Director',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYsaZcKVdZ63Kij9yL1BreWSkfPfSPxudUIL_8aijCYmGDtWN0LllqJL-Vj2680tJEKoKz0pD5FwegktBNLiq-ivKV4aZCQGD_oD8pi7_kg4AeyneTCM-obPq-r01YtogjbjqxcqBwQ-4Yp91XTcJF0-Li9FEERm8MuLZldZ-TS_ijgTdwY9BpJgBaZAuZWxfqJYnmAwGhWsDiiYXebPtmkdWSk7OhshNbKjPaOFzkS-50Tx63iv08OieVlloFFCOb3Kl3pF4t8Q7O'
  }
];

export default function Team() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">Our People</span>
        <h2 className="text-4xl font-bold text-white mb-6 font-serif">Curators of Excellence</h2>
        <div className="w-24 h-1 bg-primary mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div 
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            <div className="w-full aspect-[3/4] overflow-hidden rounded-xl mb-6 relative">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                style={{ backgroundImage: `url('${member.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <div className="flex gap-4">
                  <Link href="#" className="text-white hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">mail</span>
                  </Link>
                  <Link href="#" className="text-white hover:text-primary transition-colors">
                    <span className="font-bold text-lg">in</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-1 font-serif">{member.name}</h3>
              <p className="text-primary text-sm font-medium uppercase tracking-wide">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
