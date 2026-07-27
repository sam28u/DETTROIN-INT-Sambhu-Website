"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const EnrollmentCTA = () => {
  return (
    <section className="relative w-full bg-transparent py-20 px-6 lg:px-12 font-sans overflow-hidden">
      
      {/* --- Ambient Glowing Background --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[0%] left-[-10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[#35E58D] rounded-full mix-blend-screen filter blur-[120px] sm:blur-[150px] opacity-10"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] bg-[#4ac1e0] rounded-full mix-blend-screen filter blur-[120px] sm:blur-[150px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* --- Left Column: Text Content --- */}
        <div className="flex flex-col items-start max-w-xl">
          
          <div className="inline-block border border-[#1e3b2b] bg-[#0d2116] rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#35E58D] text-[11px] sm:text-xs font-bold tracking-widest uppercase">
              Enrolling Now
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Shape Your <span className="italic text-[#cbf5d7] font-serif">Global Future</span><br />
            Starting Today
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10 max-w-md">
            Admissions for the 2024–25 academic session are now open. Join a community of innovators, thinkers, and leaders at Excellence International School.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link 
              href="/apply"
              className="w-full sm:w-auto text-center bg-gradient-to-r from-[#38f2d5] to-[#35E58D] text-[#0a0a0a] px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(53,229,141,0.25)]"
            >
              Apply Online Now
            </Link>
            
            <Link 
              href="/prospectus"
              className="w-full sm:w-auto text-center bg-transparent border border-[#3f3f4e] text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:bg-[#1a1a24] hover:border-gray-400"
            >
              Download Prospectus
            </Link>
          </div>

        </div>

        {/* --- Right Column: Floating Image & Overlay Card --- */}
        {/* We use motion.div here for the floating animation */}
        <motion.div 
          className="relative w-full h-[450px] lg:h-[550px] rounded-[2rem] overflow-hidden group shadow-2xl"
          animate={{ y: [0, -20, 0] }} // Moves up 20px, then back down to 0
          transition={{ 
            duration: 5, // Takes 5 seconds for one complete up/down cycle
            repeat: Infinity, // Loops forever
            ease: "easeInOut" // Smooth acceleration and deceleration
          }}
        >
          
          {/* Main Image */}
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" 
            alt="Students at Excellence International" 
            className="w-full hover:scale-110 duration-750 ease-out h-full object-cover rounded-[2rem]"
          />

          {/* Inner Shadow / Vignette for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-[2rem]"></div>

          {/* Glassmorphic Overlay Card */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 bg-[#15151c]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
            <h4 className="text-[#cbf5d7] font-bold text-lg mb-2">
              2024–25 Intake
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Final call for applications. Limited seats available in Grades 9–12.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default EnrollmentCTA;