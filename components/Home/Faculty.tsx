"use client";

import React from "react";
import { Brain, Users } from "lucide-react";

const Faculty = () => {
  return (
    <section className="w-full bg-transparent py-16 px-6 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* --- Left Column: Text & Features --- */}
        <div className="flex flex-col justify-center max-w-xl mx-auto lg:mx-0">
          
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.2] mb-6 tracking-tight">
            Visionary Educators <br className="hidden md:block" />
            Shaping <span className="text-[#35E58D]">Tomorrow</span>
          </h2>
          
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10">
            Our faculty comprises world-class academicians and industry veterans dedicated to nurturing the next generation. With a student-to-teacher ratio of 12:1, we ensure personalized mentorship and academic rigor.
          </p>

          <div className="flex flex-col gap-6">
            {/* Feature 1: Ph.D. Certified */}
            <div className="flex items-start gap-4 group">
              <div className="bg-[#12261a] p-3 md:p-4 rounded-2xl border border-[#35E58D]/20 group-hover:border-[#35E58D]/50 transition-colors shrink-0">
                <Brain className="text-[#35E58D]" size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-base md:text-lg mb-1">
                  Ph.D. Certified Experts
                </h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  70% of our lead faculty hold doctoral degrees in their respective fields.
                </p>
              </div>
            </div>

            {/* Feature 2: Mentorship */}
            <div className="flex items-start gap-4 group">
              <div className="bg-[#121c26] p-3 md:p-4 rounded-2xl border border-[#4ac1e0]/20 group-hover:border-[#4ac1e0]/50 transition-colors shrink-0">
                <Users className="text-[#4ac1e0]" size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-base md:text-lg mb-1">
                  Mentorship Program
                </h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  Each student is assigned a dedicated counselor for academic and emotional growth.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* --- Right Column: Image & Floating Badge --- */}
        <div className="relative w-full max-w-lg mx-auto lg:max-w-none lg:ml-auto mt-8 lg:mt-0 pb-8 sm:pb-0">
          
          {/* Main Image Container */}
          <div className="relative h-[400px] md:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
            {/* Glowing Border Wrapper */}
            <div className="absolute inset-0 rounded-[2rem] border-2 border-[#35E58D]/40 shadow-[inset_0_0_40px_rgba(53,229,141,0.2)] z-10 pointer-events-none"></div>
            
            {/* Image Placeholder */}
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop" 
              alt="Faculty Members" 
              className="w-full h-full object-cover rounded-[2rem]"
            />
          </div>

          {/* Floating Badge (Bottom Left) */}
          <div className="absolute -bottom-6 -left-2 sm:-left-8 bg-[#1a1a24]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 flex items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 transition-transform hover:-translate-y-1">
            <span className="text-4xl sm:text-5xl font-bold text-[#35E58D]">
              50+
            </span>
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs font-bold text-gray-300 uppercase tracking-widest leading-tight">
                Expert
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-gray-300 uppercase tracking-widest leading-tight">
                Faculty Members
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Faculty;