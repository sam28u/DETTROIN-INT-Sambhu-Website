"use client";

import React from "react";
import { Dumbbell, VenetianMask, Baby, Brain } from "lucide-react";

const AcademicFramework = () => {
  const frameworks = [
    {
      title: "Sports",
      icon: <Dumbbell size={24} className="text-[#35E58D]" />,
      items: ["Yoga & Wellness", "Fitness activities", "Team sports", "Individual coaching"],
      hoverBorder: "hover:border-[#35E58D]/50",
    },
    {
      title: "Cultural",
      icon: <VenetianMask size={24} className="text-[#4ac1e0]" />,
      items: ["Drama & Debate", "Music & Dance", "Art exhibitions", "Creative Writing"],
      hoverBorder: "hover:border-[#4ac1e0]/50",
    },
    {
      title: "Daycare",
      icon: <Baby size={24} className="text-[#35E58D]" />,
      items: ["Safe environment", "Structured activities", "Healthy meals", "Rest & play time"],
      hoverBorder: "hover:border-[#35E58D]/50",
    },
    {
      title: "Personality",
      icon: <Brain size={24} className="text-[#4ac1e0]" />,
      items: ["Public speaking", "Leadership skills", "Social etiquette", "Emotional intelligence"],
      hoverBorder: "hover:border-[#4ac1e0]/50",
    }
  ];

  return (
    <section className="w-full bg-transparent py-16 px-6 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 tracking-tight">
          Academic Framework
        </h2>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {frameworks.map((category, index) => (
            <div 
              key={index}
              className={`bg-[#15151c]/80 backdrop-blur-md border border-[#2a2a35] rounded-3xl p-6 md:p-8 flex flex-col transition-all duration-300 group ${category.hoverBorder}`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white text-xl font-bold">
                  {category.title}
                </h3>
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
              </div>
              
              <ul className="space-y-3 flex-grow">
                {category.items.map((item, i) => (
                  <li key={i} className="text-gray-400 text-sm font-medium hover:text-gray-200 transition-colors cursor-default">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AcademicFramework;