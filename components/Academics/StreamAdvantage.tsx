"use client";

import React from "react";
import { FlaskConical, Cpu, BookOpen, Cog, Palette, Sigma } from "lucide-react";

const StreamAdvantage = () => {
  const streamItems = [
    {
      title: "SCIENCE",
      icon: <FlaskConical size={28} className="text-[#35E58D]" />,
      theme: "green",
    },
    {
      title: "TECH",
      icon: <Cpu size={28} className="text-[#4ac1e0]" />,
      theme: "blue",
    },
    {
      title: "READING",
      icon: <BookOpen size={28} className="text-[#35E58D]" />,
      theme: "green",
    },
    {
      title: "ENGINE",
      icon: <Cog size={28} className="text-[#35E58D]" />,
      theme: "green",
    },
    {
      title: "ARTS",
      icon: <Palette size={28} className="text-[#4ac1e0]" />,
      theme: "blue",
    },
    {
      title: "MATH",
      icon: <Sigma size={28} className="text-[#35E58D]" />,
      theme: "green",
    }
  ];

  return (
    <section className="w-full bg-[#0a0a0a] py-20 px-6 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            The STREAM <span className="text-[#4ac1e0]">Advantage</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Integrating Science, Technology, Reading, Engineering, Arts, and Math to create well-rounded innovators for the 21st century.
          </p>
        </div>

        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {streamItems.map((item, index) => {
            const isGreen = item.theme === "green";
            
            return (
              <div 
                key={index}
                className="bg-[#121216] border border-[#22222a] rounded-2xl flex flex-col items-center justify-center gap-5 md:gap-6 h-[160px] md:h-[180px] w-full transition-all duration-300 hover:-translate-y-2 hover:border-[#33333d] group cursor-pointer"
              >
                
                <div 
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                    isGreen ? "bg-[#0d2116]" : "bg-[#0f212d]"
                  }`}
                >
                  {item.icon}
                </div>
                
                
                <span 
                  className={`text-xs md:text-sm font-bold tracking-widest uppercase ${
                    isGreen ? "text-[#35E58D]" : "text-[#4ac1e0]"
                  }`}
                >
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default StreamAdvantage;