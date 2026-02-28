'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Top Navigation */}
          <header className="flex items-center justify-between border-b border-primary/20 px-6 py-4 lg:px-20 bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
            <div className="flex items-center gap-4 text-primary">
              <div className="size-8">
                <span className="material-symbols-outlined text-4xl">travel_explore</span>
              </div>
              <h2 className="text-white text-2xl font-bold leading-tight tracking-widest font-heading">LUXE BEYOND</h2>
            </div>
            <div className="hidden md:flex flex-1 justify-end gap-10">
              <div className="flex items-center gap-10">
                <Link className="text-slate-300 hover:text-primary text-sm font-medium transition-colors" href="#">Hotels</Link>
                <Link className="text-slate-300 hover:text-primary text-sm font-medium transition-colors" href="#">Suites</Link>
                <Link className="text-slate-300 hover:text-primary text-sm font-medium transition-colors" href="#">Experience</Link>
                <Link className="text-slate-300 hover:text-primary text-sm font-medium transition-colors" href="#">Concierge</Link>
              </div>
              <div className="relative h-10 w-10 rounded-full border border-primary/50 overflow-hidden">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfE15Bs4g5k_FyFfktcd-VZ7h4gwSFu20HS6FQ687ObuL7Mn5uvvmWxRvSrN2PiWCDrR7YKdfzTxQmWmhqJH1VhhWrQRv8IBMfM87Dq9DhS3PNj_j6hIWfs7NM33Wsf-rkDQTU35ptEwXmK9VBGThRHfLabUrUShYgm2C7PbYPI-MdVlqFe24fbXw-QETC8vbwjL8Lid30HQRbHHK6QqPUeGBBEGMR8cvEJsXF-AihdcUqrBMfoieySHjodtGTt5iqEpd2RVVPKyQC" 
                  alt="User Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </header>

          <main className="flex-1 px-6 py-10 lg:px-20">
            <div className="max-w-7xl mx-auto">
              {/* Breadcrumbs */}
              <nav className="flex items-center gap-3 text-sm mb-8 text-primary/70">
                <Link className="hover:text-primary" href="#">Reservation</Link>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <Link className="hover:text-primary" href="#">Guest Details</Link>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="text-primary font-bold">Checkout</span>
              </nav>

              <div className="grid grid-cols-12 gap-12">
                {/* Left Column: Checkout Form (8 columns) */}
                <div className="col-span-12 lg:col-span-8 space-y-12">
                  <section>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">Complete Your Booking</h1>
                    <p className="text-slate-400 text-lg">Indulge in unparalleled luxury. Please provide your final details below.</p>
                  </section>

                  {/* Guest Information */}
                  <section className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-primary/20 pb-4">
                      <span className="material-symbols-outlined text-primary">person</span>
                      <h2 className="text-2xl font-bold text-white font-heading">Guest Information</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-primary text-xs font-bold uppercase tracking-wider">First Name</label>
                        <input className="w-full rounded-lg border border-primary/20 bg-surface-navy/50 px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-500" placeholder="e.g. Julian"/>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-primary text-xs font-bold uppercase tracking-wider">Last Name</label>
                        <input className="w-full rounded-lg border border-primary/20 bg-surface-navy/50 px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-500" placeholder="e.g. Sterling"/>
                      </div>
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-primary text-xs font-bold uppercase tracking-wider">Email Address</label>
                        <input className="w-full rounded-lg border border-primary/20 bg-surface-navy/50 px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-500" placeholder="j.sterling@luxury.com"/>
                      </div>
                    </div>
                  </section>

                  {/* Payment Details */}
                  <section className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-primary/20 pb-4">
                      <span className="material-symbols-outlined text-primary">lock</span>
                      <h2 className="text-2xl font-bold text-white font-heading">Secure Payment</h2>
                    </div>
                    <div className="bg-surface-navy/30 p-8 rounded-xl border border-primary/10 space-y-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-primary text-xs font-bold uppercase tracking-wider">Cardholder Name</label>
                        <input className="w-full rounded-lg border border-primary/20 bg-surface-navy/50 px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-500" placeholder="Name as it appears on card"/>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-primary text-xs font-bold uppercase tracking-wider">Card Number</label>
                        <div className="relative">
                          <input className="w-full rounded-lg border border-primary/20 bg-surface-navy/50 px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-500" placeholder="0000 0000 0000 0000"/>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                            <span className="material-symbols-outlined text-slate-400">credit_card</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="text-primary text-xs font-bold uppercase tracking-wider">Expiry Date</label>
                          <input className="w-full rounded-lg border border-primary/20 bg-surface-navy/50 px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-500" placeholder="MM / YY"/>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-primary text-xs font-bold uppercase tracking-wider">CVV</label>
                          <input className="w-full rounded-lg border border-primary/20 bg-surface-navy/50 px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-500" placeholder="123"/>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Special Requests */}
                  <section className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-primary/20 pb-4">
                      <span className="material-symbols-outlined text-primary">auto_awesome</span>
                      <h2 className="text-2xl font-bold text-white font-heading">Special Requests</h2>
                    </div>
                    <div className="flex flex-col gap-2">
                      <textarea className="w-full rounded-lg border border-primary/20 bg-surface-navy/50 px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-500 resize-none" placeholder="Allergies, preferred floor, celebration notes..." rows={4}></textarea>
                    </div>
                  </section>
                </div>

                {/* Right Column: Sidebar (4 columns) */}
                <div className="col-span-12 lg:col-span-4">
                  <div className="sticky top-28 space-y-6">
                    <div className="bg-surface-navy/40 rounded-xl overflow-hidden border border-primary/20 shadow-2xl">
                      {/* Room Image */}
                      <div className="relative h-56 w-full">
                        <Image 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfp1wtR-2eR-OZs2T52V-vn0F3n6ZVu5v02NFOWK4obDGEtio0AsHxrFIagFhjq1UuGwBzaZCHxJFVCb3c3srIVrvuwojNDhdQy5UchMVn_JyfERLuNdxgd6zDS9BHeqPBDxUxUh9ub-oEABMi9Sf1QnsY1JrOqt4mzQOOXr_tSYiPmVIVj8PXVXO1JR5CN-B97hL97bnKeGqIAkQ5lbb0Z2ZN_s9xQkniZJw32HoOtmjMTWoWK5EowGNTwjYVZ6c6DEQX86sj3iK1"
                          alt="Presidential Ocean Suite"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6 space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white font-heading">Presidential Ocean Suite</h3>
                          <p className="text-primary text-sm font-medium">Luxe Beyond Resort, Maldives</p>
                        </div>
                        {/* Dates & Guests */}
                        <div className="grid grid-cols-2 gap-4 py-4 border-y border-primary/10">
                          <div>
                            <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Check-In</p>
                            <p className="text-white font-medium">Oct 12, 2024</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Check-Out</p>
                            <p className="text-white font-medium">Oct 17, 2024</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Guests</p>
                            <p className="text-white font-medium">2 Adults</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Duration</p>
                            <p className="text-white font-medium">5 Nights</p>
                          </div>
                        </div>
                        {/* Price Breakdown */}
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-400">5 Nights x $1,850.00</span>
                            <span className="text-white">$9,250.00</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-400">Luxury Tax (12%)</span>
                            <span className="text-white">$1,110.00</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-400">Resort Fee</span>
                            <span className="text-white">$250.00</span>
                          </div>
                          <div className="pt-4 flex justify-between items-end">
                            <span className="text-lg font-heading text-white font-bold">Total Amount</span>
                            <span className="text-3xl font-heading text-primary font-bold tracking-tight">$10,610.00</span>
                          </div>
                        </div>
                        {/* CTA Button */}
                        <Link href="/booking-confirmation" className="w-full bg-primary hover:bg-primary/90 text-background-dark py-4 px-6 rounded-lg font-heading font-bold text-xl transition-all active:scale-95 flex items-center justify-center gap-2 group">
                          COMPLETE BOOKING
                          <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </Link>
                        <p className="text-center text-[10px] text-slate-500 uppercase tracking-widest">
                          Free cancellation until Oct 10, 2024
                        </p>
                      </div>
                    </div>
                    {/* Trust Badge */}
                    <div className="flex items-center justify-center gap-4 p-4 rounded-lg bg-surface-navy/20 border border-primary/5">
                      <span className="material-symbols-outlined text-primary">verified_user</span>
                      <p className="text-xs text-slate-400">Encrypted 256-bit SSL Secure Checkout</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          {/* Footer */}
          <footer className="border-t border-primary/10 mt-20 px-6 py-10 lg:px-20 bg-background-dark/50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2 text-primary/50 grayscale">
                <span className="material-symbols-outlined">travel_explore</span>
                <span className="font-heading font-bold tracking-widest">LUXE BEYOND</span>
              </div>
              <div className="flex gap-8 text-xs text-slate-500 font-medium uppercase tracking-widest">
                <Link className="hover:text-primary transition-colors" href="#">Privacy Policy</Link>
                <Link className="hover:text-primary transition-colors" href="#">Terms of Service</Link>
                <Link className="hover:text-primary transition-colors" href="#">Contact Concierge</Link>
              </div>
              <p className="text-xs text-slate-600">© 2024 Luxe Beyond Resorts & Spas. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
