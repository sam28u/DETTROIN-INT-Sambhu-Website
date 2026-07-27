"use client";

import React from "react";

const LearningJourney = () => {
  const journeys = [
    {
      title: "Pre-Primary",
      description: "Building strong foundations through play-based learning and joyful discovery.",
      image: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?q=80&w=800&auto=format&fit=crop", // Glowing light table play, fitting the modern aesthetic
    },
    {
      title: "Primary",
      description: "Fostering curiosity, creativity, and fundamental academic skills in a supportive environment.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", // Engaged students in a modern classroom
    },
    {
      title: "Middle School",
      description: "Encouraging critical thinking, technological literacy, and collaborative exploration.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop", // Collaborative robotics/tech focus
    },
    {
      title: "High School",
      description: "Preparing students for global leadership and university success with advanced academics.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop", // High-tech advanced science lab
    }
  ];

  return (
    <section className="w-full bg-[#151c18] py-24 px-6 lg:px-12 font-sans overflow-hidden border-t border-[#1f2922]">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Our Learning Journey
          </h2>
          {/* Subtle Green Underline */}
          <div className="w-12 h-[2px] bg-[#35E58D] rounded-full"></div>
        </div>

        {/* --- Journey Cards Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {journeys.map((item, index) => (
            <div 
              key={index} 
              className="relative w-full h-[400px] md:h-[480px] rounded-2xl overflow-hidden group cursor-pointer border border-[#1f2922]"
            >
              
              {/* Background Image with Hover Zoom */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              
              {/* Dark Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0c]/95 via-[#0a0f0c]/40 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-90"></div>

              {/* Floating Glassmorphic Label Box */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#121613]/70 backdrop-blur-xl border border-white/5 rounded-xl p-5 flex flex-col justify-start transition-all duration-300 group-hover:border-[#35E58D]/30 group-hover:bg-[#121613]/85">
                <h3 className="text-[#35E58D] text-lg font-bold tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LearningJourney;