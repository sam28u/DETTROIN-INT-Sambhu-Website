"use client";

import React from "react";
import { Handshake, BadgeCheck, HeartHandshake, Users, Scale, UserCheck } from "lucide-react";

const ValueBasedEducation = () => {
  const values = [
    {
      title: "Honesty",
      icon: <Handshake size={28} className="text-[#35E58D]" />,
      hoverBorder: "hover:border-[#35E58D]/50 hover:shadow-[0_0_20px_rgba(53,229,141,0.15)]",
    },
    {
      title: "Integrity",
      icon: <BadgeCheck size={28} className="text-[#4ac1e0]" />,
      hoverBorder: "hover:border-[#4ac1e0]/50 hover:shadow-[0_0_20px_rgba(74,193,224,0.15)]",
    },
    {
      title: "Respect",
      icon: <HeartHandshake size={28} className="text-[#35E58D]" />,
      hoverBorder: "hover:border-[#35E58D]/50 hover:shadow-[0_0_20px_rgba(53,229,141,0.15)]",
    },
    {
      title: "Empathy",
      icon: <Users size={28} className="text-[#4ac1e0]" />,
      hoverBorder: "hover:border-[#4ac1e0]/50 hover:shadow-[0_0_20px_rgba(74,193,224,0.15)]",
    },
    {
      title: "Fairness",
      icon: <Scale size={28} className="text-[#35E58D]" />,
      hoverBorder: "hover:border-[#35E58D]/50 hover:shadow-[0_0_20px_rgba(53,229,141,0.15)]",
    },
    {
      title: "Self-Discipline",
      icon: <UserCheck size={28} className="text-[#4ac1e0]" />,
      hoverBorder: "hover:border-[#4ac1e0]/50 hover:shadow-[0_0_20px_rgba(74,193,224,0.15)]",
    }
  ];

  return (
    <section className="w-full bg-transparent py-16 px-6 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 tracking-tight">
          Value-Based Education
        </h2>

        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className={`bg-[#15151c]/80 backdrop-blur-md border border-[#2a2a35] rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 group cursor-default h-36 sm:h-40 ${value.hoverBorder}`}
            >
              <div className="mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-white text-sm sm:text-base font-bold">
                {value.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ValueBasedEducation;