"use client";

import React from "react";
import { Bus, MonitorSmartphone, ShieldCheck, CheckCircle2 } from "lucide-react";

const SmartCampusInfrastructure = () => {
  const infrastructureData = [
    {
      title: "Modern Transport",
      description: "GPS-tracked AC buses with real-time route monitoring and verified staff for student safety during transit.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
      icon: <Bus size={22} className="text-[#35E58D]" />,
      iconBg: "bg-[#0d2116]",
      textColor: "text-[#35E58D]",
      bullets: ["100% CCTV Coverage", "Mobile App Tracking"],
    },
    {
      title: "Digital Classrooms",
      description: "Interactive smart boards, 1:1 iPad programs, and high-speed campus-wide fiber connectivity for seamless learning.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
      icon: <MonitorSmartphone size={22} className="text-[#4ac1e0]" />,
      iconBg: "bg-[#0f212d]",
      textColor: "text-[#4ac1e0]",
      bullets: ["4K Smart Displays", "Hybrid Learning Ready"],
    },
    {
      title: "Safety & CCTV",
      description: "Advanced surveillance system with 24/7 security personnel and biometric entry points for restricted access.",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop",
      icon: <ShieldCheck size={22} className="text-[#e87c71]" />,
      iconBg: "bg-[#2d1616]",
      textColor: "text-[#e87c71]",
      bullets: ["Zero Blind-spot Monitoring", "Emergency Response Unit"],
    },
  ];

  return (
    <section className="w-full bg-[#0a0a0a] py-24 px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Smart Campus Infrastructure
          </h2>
          {/* Green Underline */}
          <div className="w-12 h-[3px] bg-[#35E58D] rounded-full"></div>
        </div>

        {/* --- Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {infrastructureData.map((item, index) => (
            <div 
              key={index}
              className="bg-[#161616] border border-[#222222] rounded-[1.5rem] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-[#333333] hover:shadow-2xl group"
            >
              {/* Card Image */}
              <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent"></div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow relative">
                
                {/* Overlapping Icon Box */}
                <div className={`absolute -top-6 left-8 w-12 h-12 rounded-xl flex items-center justify-center border border-[#161616] shadow-lg transition-transform duration-300 group-hover:scale-110 ${item.iconBg}`}>
                  {item.icon}
                </div>

                {/* Title & Description (Added top margin to clear the overlapping icon) */}
                <h3 className="text-white text-xl font-bold mb-3 mt-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>

                {/* Bullet Points */}
                <div className="flex flex-col gap-3 pt-6 border-t border-[#2a2a2a]">
                  {item.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className={item.textColor} />
                      <span className={`text-xs font-semibold ${item.textColor}`}>
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SmartCampusInfrastructure;