'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function BookingConfirmationPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans antialiased">
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
        {/* Navigation */}
        <header className="flex items-center justify-between border-b border-primary/20 px-6 md:px-20 py-4 bg-background-light dark:bg-background-dark sticky top-0 z-50">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">storm</span>
            <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-widest uppercase">Luxe</h2>
          </div>
          <div className="flex items-center gap-6">
            <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
              <span className="material-symbols-outlined text-slate-700 dark:text-slate-300">notifications</span>
            </button>
            <div className="relative h-10 w-10 rounded-full border border-primary/30 overflow-hidden">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcb1_DR7rU0EORcfab_t8DXVYTFa-kmiNjnt2iXP_dJxk9jT_hm0zsF8dZN6nFuCa9gcbtv4UEW7l1K4K6OzFC1e5Gp6h8gmSy8dnzDm4UHUn74Zip-SIwxqTZ20A_IttsySh8J_KJyt9fEPXecDa-ApmJvP5VgiL18BZEludhgYREMYrXOvZmBJ5-7SIuZSUNu5PFH0NVl9ATRyBBNBR079dBSambEvC0TZxFfhMLiECOLqOtVyeeBqSmiVgtgHMnQ9yv8FaGDxOF" 
                alt="User Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </header>

        <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12">
          {/* Hero Section */}
          <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden mb-12 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent z-10"></div>
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB9uz7i3j8bUWjf57Ts52qKjcZMYo0A2SLcRDf75T8m1OM-1h6yCMuWXj2f2XwyXRnJEEG3T8PI1U72Du-WYxYMYZG8gi6LEhn9tg0PeuSkBq2EOHHWzL6tj6NCs12ZFyY9ntfUeWl6A0hIETfKWr9ckxT8SLx7lXFvHJnhrvLpmQ3FMWtTdy5Q0vp_bgxblld4fx9Ra39UmN9VO8mHfwhIiSNKjdD8iiN1DBsu_s_J4vYYM_2BZFu4PmL7fGkD8k7k55K_f6edlT4" 
              alt="Luxury Lobby"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-background-dark text-xs font-bold rounded-full mb-2 uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm">check_circle</span> Confirmed
              </span>
            </div>
          </div>

          {/* Confirmation Header */}
          <div className="text-center mb-16">
            <h1 className="font-heading text-6xl md:text-8xl text-slate-900 dark:text-white mb-4 uppercase tracking-tight">Thank You</h1>
            <h2 className="text-2xl font-light text-primary tracking-wide mb-2 uppercase">Your stay is confirmed</h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium tracking-widest text-sm">BOOKING REFERENCE: #LXO-882910</p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 border-y border-primary/10 py-12">
            <div className="space-y-6">
              <h3 className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Stay Details</h3>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase">Room</span>
                  <span className="text-lg font-medium">Grand Horizon Suite, King Bed</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 uppercase">Check-in</span>
                    <span className="text-lg font-medium">Oct 14, 2024</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 uppercase">Check-out</span>
                    <span className="text-lg font-medium">Oct 19, 2024</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase">Guests</span>
                  <span className="text-lg font-medium">2 Adults</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Check-in Instructions</h3>
              <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
                <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-primary">schedule</span>
                    Check-in begins at 3:00 PM. Early check-in subject to availability.
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-primary">directions_car</span>
                    Valet parking is available at the main entrance on 5th Avenue.
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-primary">contactless</span>
                    Use the Luxe App for a seamless contactless check-in experience.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-4 bg-primary text-background-dark font-bold rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm">
              <span className="material-symbols-outlined">calendar_add_on</span>
              Add to Calendar
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-background-dark transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm">
              <span className="material-symbols-outlined">settings</span>
              Manage Booking
            </button>
          </div>

          {/* Location Section */}
          <div className="mt-20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Location</h3>
              <span className="text-sm text-slate-500">1224 Avenue of the Arts, Paris, FR</span>
            </div>
            <div className="relative w-full h-64 bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden grayscale opacity-80">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCijtXTfzc0_2J6vXIETBGLw5NsbPrBprF8DhB1EYrze04XstQiUcnDqh7fVQ_PbEZVfUraPRUZVCIAiTqstrIqFY485wu-Rfg03Jmg2rYwRjjbsZwHLHIC4GkLmByYIU_iXgDKmMst1TCaBxmBmRTOkULzSwcpjDh_mCHIBs1lCvtmEUjax6Kgramu3Cku4U-DgJakcYNQCKKkdCj05OqABl6bI5WK3Dqk_xTWfZqOarhUbcw12l3w5Ih33X81QXuXsI-1T8meUNsp" 
                alt="Map Location"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-auto border-t border-primary/10 py-12 px-6 bg-background-light dark:bg-background-dark">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2 opacity-50">
              <span className="material-symbols-outlined text-primary">storm</span>
              <span className="text-sm font-bold uppercase tracking-widest">Luxe Hotels</span>
            </div>
            <div className="flex gap-8">
              <Link className="text-slate-500 hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined">public</span>
              </Link>
              <Link className="text-slate-500 hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined">alternate_email</span>
              </Link>
              <Link className="text-slate-500 hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined">photo_camera</span>
              </Link>
            </div>
            <p className="text-xs text-slate-500 tracking-wider">© 2024 LUXE HOTEL GROUP. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
