"use client";

import React from "react";

const Milestones = () => {
  const milestones = [
    {
      year: "1998",
      title: "The Foundation",
      description: "Excellence International was born with a vision of holistic learning.",
      theme: "green",
    },
    {
      year: "2005",
      title: "Global Accreditation",
      description: "Received the International Excellence Award for curriculum design.",
      theme: "blue", 
    },
    {
      year: "2012",
      title: "Smart Campus",
      description: "First school in the region to implement 1:1 iPad learning.",
      theme: "green",
    },
    {
      year: "2020",
      title: "Innovation Hub",
      description: "Inauguration of the state-of-the-art Robotics and AI lab.",
      theme: "blue",
    },
    {
      year: "2024",
      title: "Future Ready",
      description: "Expanding to a new carbon-neutral sustainability campus.",
      theme: "green",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#0a1a12] to-[#0a0a0a] py-24 px-6 lg:px-12 font-sans overflow-hidden border-t border-[#1e3026]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Our <span className="bg-gradient-to-r from-[#35E58D] to-[#4ac1e0] bg-clip-text text-transparent">Milestones</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            A journey of innovation and academic triumph.
          </p>
        </div>

        <div className="relative">
          

          <div className="hidden md:block absolute top-[19px] left-[10%] right-[10%] h-[2px] bg-[#2a2a35] z-0"></div>
          

          <div className="md:hidden absolute top-[20px] bottom-[20px] left-[19px] w-[2px] bg-[#2a2a35] z-0"></div>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-6">
            {milestones.map((item, index) => {
              const isGreen = item.theme === "green";
              
              const dotBorder = isGreen ? "border-[#35E58D]" : "border-[#4ac1e0]";
              const dotShadow = isGreen ? "shadow-[0_0_15px_rgba(53,229,141,0.4)]" : "shadow-[0_0_15px_rgba(74,193,224,0.4)]";
              const yearColor = isGreen ? "text-[#35E58D]" : "text-[#4ac1e0]";
              const cardHover = isGreen ? "hover:border-[#35E58D]/50" : "hover:border-[#4ac1e0]/50";

              return (
                <div key={index} className="relative z-10 flex flex-row md:flex-col items-start md:items-center flex-1 gap-6 md:gap-0 group">
                  
                  <div className="w-10 md:w-full flex justify-center shrink-0 md:mb-8">
                    <div 
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center bg-[#05100a] transition-all duration-300 group-hover:scale-110 ${dotBorder} ${dotShadow}`}
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-300 group-hover:bg-white transition-colors"></div>
                    </div>
                  </div>

                  <div 
                    className={`bg-[#15151c]/60 backdrop-blur-md border border-[#2a2a35] rounded-2xl p-6 md:p-8 text-center flex-1 w-full transition-all duration-300 ${cardHover}`}
                  >
                    <h3 className={`text-2xl font-black mb-3 ${yearColor}`}>
                      {item.year}
                    </h3>
                    <h4 className="text-white font-bold text-base mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Milestones;