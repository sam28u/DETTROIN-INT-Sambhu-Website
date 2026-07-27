"use client";

import React from "react";
import Link from "next/link";
import { Trophy, Bot, Medal, Palette } from "lucide-react";

const Awards = () => {
  const achievements = [
    {
      icon: <Trophy size={28} className="text-[#35E58D]" />,
      title: "Top Academic Excellence 2023",
      description: "Ranked #1 in the region for STEM achievement and innovation.",
    },
    {
      icon: <Bot size={28} className="text-[#4ac1e0]" />,
      title: "National Robotics Winners",
      description: "Gold medalists at the National AI & Robotics Innovation Fair.",
    },
    {
      icon: <Medal size={28} className="text-[#35E58D]" />,
      title: "Regional Sports Champions",
      description: "Dominating the inter-school sports circuit for three consecutive years.",
    },
    {
      icon: <Palette size={28} className="text-[#4ac1e0]" />,
      title: "Global Art Laureates",
      description: "Showcasing creativity at the International Student Art Biennale.",
    }
  ];

  return (
    <section className="relative w-full bg-[#0a0a0a] py-16 px-6 lg:px-12 font-sans overflow-hidden">
      
      
      
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>
      
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4ac1e0] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.12] pointer-events-none z-0 transform -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-[#35E58D] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.08] pointer-events-none z-0 transform translate-y-1/3"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
              Awards & Achievements
            </h2>
            <p className="text-[#4ac1e0] text-xs md:text-sm font-bold tracking-widest uppercase">
              A Legacy of Excellence
            </p>
          </div>
          
          <Link 
            href="/hall-of-fame"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-[#4ac1e0]/50 text-[#4ac1e0] text-sm font-medium hover:bg-[#4ac1e0]/10 transition-colors w-max backdrop-blur-sm"
          >
            View Hall of Fame
          </Link>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          
          <div className="relative w-full h-[400px] lg:h-auto rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            
            <div className="absolute inset-0 rounded-[2rem] border-2 border-[#35E58D]/30 shadow-[inset_0_0_40px_rgba(53,229,141,0.15)] z-10 pointer-events-none"></div>
            
            
            <img 
              src="https://images.unsplash.com/photo-1561489422-45de3d015e3e?q=80&w=1000&auto=format&fit=crop" 
              alt="Trophy Cabinet" 
              className="w-full h-full object-cover rounded-[2rem]"
            />
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {achievements.map((item, index) => (
              <div 
                key={index}
                className="bg-[#15151c]/80 backdrop-blur-md border border-[#2a2a35] rounded-3xl p-6 md:p-8 flex flex-col items-center text-center justify-center hover:border-[#35E58D]/40 transition-all duration-300 h-full min-h-[220px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group z-10"
              >
                <div className="mb-4 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-white text-base md:text-lg font-bold mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Awards;