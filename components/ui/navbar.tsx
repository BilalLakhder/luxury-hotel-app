'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Suites', href: '/rooms' },
    { name: 'Dining & Wellness', href: '/dining' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-background-dark/95 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-white group">
            <div className="size-8 text-primary transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined !text-[32px]">castle</span>
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-wide font-serif uppercase">
              The Grand Heritage
            </h2>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-primary ${
                  pathname === link.href ? 'text-primary' : 'text-white/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/rooms"
              className="bg-primary hover:bg-primary-dark text-background-dark font-bold text-xs px-6 py-3 rounded-sm transition-all uppercase tracking-widest"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="material-symbols-outlined !text-3xl">menu</span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-background-dark flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3 text-white">
                <span className="material-symbols-outlined !text-[32px] text-primary">castle</span>
                <span className="font-serif font-bold text-xl uppercase">Grand Heritage</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                <span className="material-symbols-outlined !text-3xl">close</span>
              </button>
            </div>
            
            <nav className="flex flex-col gap-8 items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-serif font-medium transition-colors hover:text-primary ${
                    pathname === link.href ? 'text-primary' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/rooms"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 bg-primary text-background-dark font-bold text-sm px-10 py-4 rounded-sm uppercase tracking-widest"
              >
                Book Your Stay
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
