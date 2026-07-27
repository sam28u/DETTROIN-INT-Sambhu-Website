"use client";

import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full bg-[#0a0a0a] pt-32 pb-24 px-6 lg:px-12 font-sans overflow-hidden border-b border-[#1f2226]">
      
      
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#35E58D] rounded-full mix-blend-screen filter blur-[120px] sm:blur-[150px] opacity-10"></div>
        
        <div className="absolute top-[10%] right-[-10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#4ac1e0] rounded-full mix-blend-screen filter blur-[120px] sm:blur-[150px] opacity-10"></div>
      </div>

      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        
        
        <div className="inline-block border border-[#1e3b2b] bg-[#0d2116]/60 backdrop-blur-sm rounded-full px-5 py-1.5 mb-8 shadow-[0_0_15px_rgba(53,229,141,0.1)]">
          <span className="text-[#35E58D] text-xs font-bold tracking-widest uppercase">
            Campus Life
          </span>
        </div>

        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
          Capturing the <span className="text-[#35E58D] drop-shadow-[0_0_25px_rgba(53,229,141,0.4)]">Pulse</span> of Modern Education
        </h1>

        
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Step inside our vibrant ecosystem. From high-tech laboratories to state-of-the-art arenas, explore how we are shaping the future leaders of tomorrow through every frame.
        </p>
        
      </div>
    </section>
  );
};

export default Hero;