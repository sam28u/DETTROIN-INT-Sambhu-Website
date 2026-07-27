"use client";

import React from "react";
import { Rocket, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="relative w-full bg-transparent py-20 px-6 lg:px-12 font-sans overflow-hidden">
      
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">

        <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#35E58D] rounded-full mix-blend-screen filter blur-[100px] sm:blur-[150px] opacity-10 sm:opacity-15"></div>

        <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#4ac1e0] rounded-full mix-blend-screen filter blur-[120px] sm:blur-[180px] opacity-10 sm:opacity-15"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">

        <div className="flex flex-col items-center text-center mb-16">

          <div className="inline-block border border-gray-600 bg-[#15151c]/50 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <span className="text-gray-300 text-xs font-semibold tracking-widest uppercase">
              About Our Institution
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Our <span className="text-[#35E58D]">Mission</span> & <span className="text-[#4ac1e0]">Vision</span>
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
            Forging the next generation of global leaders through innovative education, unwavering integrity, and a commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          <div className="bg-[#15151c]/80 backdrop-blur-md border border-[#2a2a35] rounded-[2rem] p-8 md:p-10 flex flex-col transition-all duration-300 hover:border-[#35E58D]/40 hover:shadow-[0_10px_40px_rgba(53,229,141,0.1)] group">
            <div className="bg-[#1e2a24] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Rocket className="text-[#35E58D]" size={28} />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Mission
            </h3>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              To provide a transformative learning environment that empowers students to achieve academic mastery while fostering the creative and critical thinking skills necessary to thrive in a rapidly evolving digital world.
            </p>
          </div>

          <div className="bg-[#15151c]/80 backdrop-blur-md border border-[#2a2a35] rounded-[2rem] p-8 md:p-10 flex flex-col transition-all duration-300 hover:border-[#4ac1e0]/40 hover:shadow-[0_10px_40px_rgba(74,193,224,0.1)] group">
            <div className="bg-[#1a2530] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Eye className="text-[#4ac1e0]" size={28} />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Vision
            </h3>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              To be a globally recognized center of educational excellence where technology and humanity meet, inspiring every student to become a compassionate, innovative, and ethically grounded leader of the future.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MissionVision;