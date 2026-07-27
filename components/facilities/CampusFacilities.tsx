"use client";

import React from "react";
import Link from "next/link";
import { Building2, ArrowRight, Map } from "lucide-react";

const CampusFacilities = () => {
  return (
    <section className="relative w-full bg-[#0a0a0a] py-24 px-6 lg:px-12 font-sans overflow-hidden">
      
      
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[#35E58D] rounded-full mix-blend-screen filter blur-[120px] sm:blur-[150px] opacity-10"></div>
        
        <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[#35E58D] rounded-full mix-blend-screen filter blur-[120px] sm:blur-[150px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        
        <div className="flex flex-col items-start max-w-xl">
          
          
          <div className="inline-flex items-center gap-2 border border-[#1e3b2b] bg-[#0d2116] rounded-full px-4 py-1.5 mb-6">
            <Building2 size={14} className="text-[#35E58D]" />
            <span className="text-[#35E58D] text-[11px] sm:text-xs font-bold tracking-widest uppercase">
              Infrastructure
            </span>
          </div>
          
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Campus Facilities & <br />
            World-Class <br />
            Infrastructure
          </h2>
          
          
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10 max-w-md">
            Our campus is designed to be more than just a place of learning. It is a high-performance ecosystem equipped with the latest technology to foster innovation and curiosity.
          </p>

          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link 
              href="/virtual-tour"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#35E58D] hover:bg-[#2bc477] text-[#0a0a0a] px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(53,229,141,0.25)]"
            >
              Virtual Tour
              <ArrowRight size={18} />
            </Link>
            
            <Link 
              href="/brochure"
              className="w-full sm:w-auto text-center bg-transparent border border-[#3f3f4e] text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:bg-[#1a1a24] hover:border-gray-400"
            >
              Download Brochure
            </Link>
          </div>

        </div>

        
        <div className="relative w-full h-[450px] lg:h-[600px] rounded-[2rem] overflow-hidden group border border-[#2a2a35]">
          
          
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
            alt="World-Class Campus Infrastructure at Night" 
            className="w-full h-full object-cover object-center rounded-[2rem] transition-transform duration-700 group-hover:scale-105"
          />

          
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent pointer-events-none rounded-[2rem]"></div>

          
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-[#15151c]/70 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-colors duration-300 group-hover:bg-[#15151c]/85 group-hover:border-[#35E58D]/30">
            
            <div className="w-12 h-12 rounded-xl bg-[#2a2a35]/80 flex items-center justify-center shrink-0">
              <Map size={24} className="text-[#cbf5d7]" />
            </div>
            
            <div>
              <h4 className="text-white font-bold text-sm sm:text-base">
                25+ Acres Campus
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm">
                Expanding your horizons
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CampusFacilities;