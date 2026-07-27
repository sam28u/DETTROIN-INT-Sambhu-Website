"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AcademicExcellence = () => {
  return (
    <section className="relative w-full bg-transparent py-32 px-6 lg:px-12 font-sans overflow-hidden">
      
      
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#35E58D] rounded-full mix-blend-screen filter blur-[120px] sm:blur-[150px] opacity-10"></div>
        
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#4ac1e0] rounded-full mix-blend-screen filter blur-[120px] sm:blur-[150px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        
        
        <div className="inline-block border border-[#1e3b2b] bg-[#0d2116]/60 backdrop-blur-sm rounded-full px-5 py-1.5 mb-8">
          <span className="text-[#35E58D] text-xs font-bold tracking-widest uppercase">
            Nurturing Future Leaders
          </span>
        </div>

        
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Academic <span className="text-[#35E58D] drop-shadow-[0_0_25px_rgba(53,229,141,0.4)]">Excellence</span>
        </h2>

        
        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
          Our rigorous curriculum is designed to spark curiosity, foster critical thinking, and prepare students for the complexities of a globalized digital world through immersive learning experiences.
        </p>

        
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          
          <Link 
            href="/curriculum"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#35E58D] text-[#0a0a0a] px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(53,229,141,0.3)] hover:shadow-[0_0_30px_rgba(53,229,141,0.5)]"
          >
            View Curriculum
            <ArrowRight size={18} />
          </Link>
          
          
          <Link 
            href="/prospectus"
            className="w-full sm:w-auto flex items-center justify-center bg-[#15151c]/60 backdrop-blur-md border border-[#2a2a35] text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:bg-[#1a1a24] hover:border-gray-400"
          >
            Download Prospectus
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AcademicExcellence;