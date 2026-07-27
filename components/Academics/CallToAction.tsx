"use client";

import React from "react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="w-full bg-[#121614] py-20 px-6 lg:px-12 font-sans flex justify-center">
      <div className="w-full max-w-5xl bg-[#181d1a] border border-[#232e27] rounded-[2.5rem] py-16 px-6 md:px-16 text-center shadow-2xl">
        
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready to <span className="text-[#4ac1e0]">Join Us?</span>
        </h2>
        
        
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10">
          Admissions for the 2024–25 academic year are now open. Start your journey
          toward excellence today.
        </p>
        
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6">
          
          
          <Link 
            href="/apply" 
            className="w-full sm:w-auto bg-[#35E58D] hover:bg-[#2bc477] text-[#0a0a0a] px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(53,229,141,0.25)] hover:shadow-[0_0_30px_rgba(53,229,141,0.4)] hover:-translate-y-0.5"
          >
            Apply Now
          </Link>
          
          
          <Link 
            href="/tour" 
            className="w-full sm:w-auto bg-transparent border border-[#3f3f4e] hover:border-[#6b6b80] hover:bg-[#1f2622] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-0.5"
          >
            Book a Campus Tour
          </Link>

        </div>

      </div>
    </section>
  );
};

export default CallToAction;