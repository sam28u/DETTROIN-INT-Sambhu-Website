"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Send, Globe, MessageSquare, Share2, Users, Video } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-[#2a2a35] pt-16 pb-8 px-6 lg:px-12 font-sans mt-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Grid Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Description & Socials */}
          <div className="flex flex-col max-w-sm">
            <Link href="/" className="mb-4">
              <h2 className="text-[#35E58D] text-3xl font-bold leading-tight tracking-tight">
                Excellence <br />
                International
              </h2>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering future leaders through innovation, precision, and global vision. Dedicated to holistic academic excellence.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-[#161616] border border-[#2a2a35] flex items-center justify-center text-[#35E58D] hover:bg-[#35E58D] hover:text-[#0a0a0a] transition-all">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-[#161616] border border-[#2a2a35] flex items-center justify-center text-[#4ac1e0] hover:bg-[#4ac1e0] hover:text-[#0a0a0a] transition-all">
                <MessageSquare size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-[#161616] border border-[#2a2a35] flex items-center justify-center text-[#35E58D] hover:bg-[#35E58D] hover:text-[#0a0a0a] transition-all">
                <Share2 size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links & Academics */}
          <div className="flex flex-col">
            <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-6">
              Explore
            </h3>
            <ul className="flex flex-col gap-3.5">
              <li>
                <Link href="/about" className="text-gray-400 text-sm hover:text-[#35E58D] transition-colors duration-300">
                  Overview & About Us
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-gray-400 text-sm hover:text-[#35E58D] transition-colors duration-300">
                  Admissions Portal
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-gray-400 text-sm hover:text-[#35E58D] transition-colors duration-300">
                  Academics Overview
                </Link>
              </li>
              <li>
                <Link href="/school-facilities" className="text-gray-400 text-sm hover:text-[#35E58D] transition-colors duration-300">
                  Campus Map & Facilities
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-400 text-sm hover:text-[#35E58D] transition-colors duration-300">
                  News & Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Policies */}
          <div className="flex flex-col">
            <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-6">
              Legal & Policy
            </h3>
            <ul className="flex flex-col gap-3.5">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 text-sm hover:text-[#35E58D] transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 text-sm hover:text-[#35E58D] transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-400 text-sm hover:text-[#35E58D] transition-colors duration-300">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-gray-400 text-sm hover:text-[#35E58D] transition-colors duration-300">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href="/staff-portal" className="text-gray-400 text-sm hover:text-[#35E58D] transition-colors duration-300">
                  Staff & Student Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us & Newsletter */}
          <div className="flex flex-col">
            <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-6">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3.5 mb-6 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#35E58D] shrink-0 mt-1" />
                <span>123 Innovation Drive, Tech District, Educational City, ED 20400</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#4ac1e0] shrink-0" />
                <span>+91 70555-82117</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#35E58D] shrink-0" />
                <span>admissions@excellence.edu</span>
              </li>
            </ul>

            {/* Newsletter Subscription input */}
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-[#161616] border border-[#2a2a35] rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#35E58D] transition-all pr-12"
                required
              />
              <button 
                type="submit" 
                aria-label="Subscribe"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-[#35E58D] hover:bg-[#2db871] text-[#0a0a0a] rounded-lg flex items-center justify-center transition-colors"
              >
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-[#2a2a35] pt-8 flex flex-col sm:flex-row items-center justify-between text-center gap-4">
          <p className="text-gray-500 text-xs md:text-sm">
            © 2026 Excellence International School. Empowering Future Leaders.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-gray-300 transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">Support</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;