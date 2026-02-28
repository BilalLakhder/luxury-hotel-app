'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

interface RoomDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  room: any; // Using any for flexibility with the grid data
}

export default function RoomDetailModal({ isOpen, onClose, room }: RoomDetailModalProps) {
  if (!room) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-7xl bg-white dark:bg-surface-dark rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh] z-10"
          >
            <div className="absolute top-6 right-6 z-50">
              <button 
                onClick={onClose}
                className="bg-black/20 hover:bg-black/40 backdrop-blur-md text-white p-2 rounded-full transition-colors"
              >
                <span className="material-symbols-outlined block">close</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left Content */}
                <div className="lg:col-span-8 p-6 lg:p-10">
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden group mb-8">
                    <Image 
                      src={room.image} 
                      alt={room.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
                      <button className="flex flex-col items-center gap-4 group">
                        <div className="w-20 h-20 rounded-full border-2 border-primary bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                          <span className="material-symbols-outlined text-white text-4xl">360</span>
                        </div>
                        <span className="text-white font-heading text-2xl tracking-widest uppercase font-light">360° Virtual Tour</span>
                      </button>
                    </div>
                    <div className="absolute bottom-6 left-6 flex gap-2">
                      <button className="px-4 py-2 bg-black/40 backdrop-blur-md text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-white/20 hover:bg-black/60 transition-colors">
                        <span className="material-symbols-outlined text-sm">photo_library</span> 12 Photos
                      </button>
                      <button className="px-4 py-2 bg-black/40 backdrop-blur-md text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-white/20 hover:bg-black/60 transition-colors">
                        <span className="material-symbols-outlined text-sm">videocam</span> Video
                      </button>
                    </div>
                  </div>

                  <div className="mb-10">
                    <h1 className="font-heading text-5xl lg:text-6xl text-slate-900 dark:text-white uppercase tracking-tight mb-4">{room.title}</h1>
                    <div className="flex flex-wrap gap-6 text-sm font-medium text-primary uppercase tracking-[0.2em]">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">square_foot</span>
                        150 SQ. M.
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">visibility</span>
                        {room.tag}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">king_bed</span>
                        KING BED
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <section>
                      <h3 className="font-heading text-2xl text-slate-900 dark:text-white uppercase mb-4 tracking-wider">Experience Unrivaled Luxury</h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-light">
                        {room.description || "Perched on the highest floor, our signature Presidential Ocean Suite offers a seamless blend of sophisticated design and breathtaking natural beauty. Featuring floor-to-ceiling windows that frame the azure horizon, a private wrap-around terrace, and bespoke gold-leaf finishes, this sanctuary is designed for those who demand the extraordinary."}
                      </p>
                    </section>

                    <section>
                      <h3 className="font-heading text-2xl text-slate-900 dark:text-white uppercase mb-6 tracking-wider">Suite Amenities</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                          <span className="material-symbols-outlined text-primary">wifi</span>
                          <span className="text-sm">High-speed Wi-Fi</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                          <span className="material-symbols-outlined text-primary">local_bar</span>
                          <span className="text-sm">Complimentary Mini-bar</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                          <span className="material-symbols-outlined text-primary">bathtub</span>
                          <span className="text-sm">Marble Soaking Tub</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                          <span className="material-symbols-outlined text-primary">coffee_maker</span>
                          <span className="text-sm">Nespresso Machine</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                          <span className="material-symbols-outlined text-primary">restaurant</span>
                          <span className="text-sm">24h In-suite Dining</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                          <span className="material-symbols-outlined text-primary">concierge</span>
                          <span className="text-sm">Personal Butler Service</span>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>

                {/* Right Sidebar */}
                <div className="lg:col-span-4 bg-slate-50 dark:bg-surface-dark/50 border-l border-slate-200 dark:border-white/10 p-6 lg:p-10">
                  <div className="sticky top-10 space-y-6">
                    <div className="bg-white dark:bg-background-dark p-8 rounded-xl border border-slate-200 dark:border-primary/20 shadow-xl">
                      <div className="mb-8">
                        <span className="text-slate-500 dark:text-slate-400 text-sm block uppercase tracking-widest mb-1">From</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-heading text-slate-900 dark:text-white font-bold">{room.price}</span>
                          <span className="text-slate-500 dark:text-slate-400">/ night</span>
                        </div>
                      </div>

                      <div className="space-y-4 mb-8">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase tracking-widest font-bold text-primary">Check In</label>
                            <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-surface-dark rounded border border-slate-200 dark:border-white/10">
                              <span className="material-symbols-outlined text-sm text-primary">calendar_today</span>
                              <span className="text-sm">Jun 12, 2024</span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase tracking-widest font-bold text-primary">Check Out</label>
                            <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-surface-dark rounded border border-slate-200 dark:border-white/10">
                              <span className="material-symbols-outlined text-sm text-primary">calendar_today</span>
                              <span className="text-sm">Jun 15, 2024</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] uppercase tracking-widest font-bold text-primary">Guests</label>
                          <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-surface-dark rounded border border-slate-200 dark:border-white/10">
                            <span className="text-sm">2 Adults, 0 Children</span>
                            <span className="material-symbols-outlined text-sm text-primary">expand_more</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-white/5 mb-8">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400">{room.price} x 3 Nights</span>
                          <span className="text-slate-900 dark:text-white">$3,750</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400">Resort Fee</span>
                          <span className="text-slate-900 dark:text-white">$150</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold pt-2">
                          <span className="text-slate-900 dark:text-white">Total</span>
                          <span className="text-primary">$3,900</span>
                        </div>
                      </div>

                      <Link href="/checkout" className="block w-full text-center bg-primary hover:bg-primary/90 text-background-dark py-4 rounded-lg font-heading text-xl uppercase tracking-widest font-bold transition-all shadow-lg active:scale-95">
                        Reserve Suite
                      </Link>
                      <p className="text-[10px] text-center text-slate-400 dark:text-slate-500 mt-4 uppercase tracking-tighter">
                        You won't be charged yet
                      </p>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 border border-primary/20">
                      <span className="material-symbols-outlined text-primary">verified_user</span>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-tight">
                        <strong className="text-slate-900 dark:text-white block mb-1">Best Price Guarantee</strong>
                        Direct bookings receive complimentary breakfast & early check-in.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
