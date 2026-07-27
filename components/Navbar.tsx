"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Academics', path: '/academics' },
    { name: 'School Facilities', path: '/school-facilities' },
    { name: 'Student Life', path: '/student-life' },
    { name: 'Blogs', path: '/blogs' },
  ];

  return (
    <nav className="sticky top-0 w-full bg-[#121212]/80 backdrop-blur-md border-b border-[#2a2a35] px-4 md:px-8 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)] font-sans z-50 transition-all">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        
        <Link 
          href="/" 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="bg-[#35E58D] p-1.5 rounded-lg shrink-0">
            <GraduationCap className="text-[#121212]" size={24} strokeWidth={2.5} />
          </div>
          <span className="text-[#35E58D] text-lg md:text-xl font-bold tracking-wide">
            Excellence International
          </span>
        </Link>

        
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.name}
                href={link.path}
                className={`relative pb-1 text-sm font-medium transition-colors duration-300 hover:text-[#35E58D] ${
                  isActive ? 'text-[#35E58D]' : 'text-gray-300'
                }`}
              >
                {link.name}
                
                
                {isActive && (
                  <motion.div
                    layoutId="active-underline"
                    className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-[#35E58D]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        
        <div className="hidden lg:block">
          <Link 
            href="/contact" 
            className="bg-[#35E58D] text-[#0f0f0f] px-6 py-2 rounded-full font-semibold text-sm transition-transform hover:scale-105 shadow-[0_0_15px_rgba(53,229,141,0.25)] inline-block"
          >
            Contact
          </Link>
        </div>

        
        <button 
          className="lg:hidden text-gray-300 hover:text-[#35E58D] transition-colors p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden flex flex-col mt-4 border-t border-[#2a2a35] pt-4 gap-2 max-w-7xl mx-auto"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-[#35E58D]/10 text-[#35E58D]' 
                      : 'text-gray-300 hover:bg-[#2a2a35]/50 hover:text-[#35E58D]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            
            <Link 
              href="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 bg-[#35E58D] text-[#0f0f0f] text-center px-6 py-3 rounded-xl font-bold text-sm shadow-[0_0_15px_rgba(53,229,141,0.25)]"
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;