"use client";

import React from "react";

const AcademicStages = () => {
  const stages = [
    {
      title: "Pre-Primary School",
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=800&auto=format&fit=crop",
      description: "Early childhood education focuses on nurturing curiosity, creativity, and basic learning abilities in a joyful environment.",
      focusAreas: [
        "Play-based learning",
        "Language development",
        "Basic numeracy skills",
        "Social interaction",
        "Creative exploration"
      ],
      conclusion: "Children learn through activities, storytelling, games, and interactive sessions that make learning enjoyable and engaging."
    },
    {
      title: "Primary School",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
      description: "Primary education is designed to strengthen core academic skills while encouraging curiosity and independent learning.",
      focusAreas: [
        "Reading and writing skills",
        "Fundamental mathematics",
        "Basic science concepts",
        "Moral values and good habits",
        "Classroom discipline and responsibility"
      ],
      conclusion: "Students gradually develop critical thinking, problem-solving abilities, and better understanding of academic subjects."
    },
    {
      title: "Middle School",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop",
      description: "Middle school prepares students for advanced academic learning while developing analytical thinking and responsibility.",
      focusAreas: [
        "Advanced reading and writing skills",
        "Concept-based mathematics",
        "Science exploration and practical understanding",
        "Social studies and general awareness",
        "Communication and presentation skills"
      ],
      conclusion: "Students are encouraged to ask questions, explore ideas, and participate actively in classroom discussions."
    },
    {
      title: "Daycare",
      image: "https://images.unsplash.com/photo-1544606771-4822a106df53?q=80&w=800&auto=format&fit=crop",
      description: "The Daycare facility at Excellence International School provides a safe, caring, and supportive environment for young children while their parents are at work.",
      focusAreas: [
        "Safe and supervised environment",
        "Play and activity-based engagement",
        "Rest and relaxation time",
        "Interactive learning activities",
        "Social interaction with peers"
      ],
      conclusion: "Children receive proper care, attention, and engaging activities that support their emotional, social, and cognitive development throughout the day."
    }
  ];

  return (
    <section className="w-full bg-[#0a0a0a] py-16 px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Academic Stages
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            At Excellence International School, the academic journey is structured to support students at every stage of their development. Each stage focuses on age-appropriate learning methods that help children build strong academic skills, confidence, and personal growth.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stages.map((stage, index) => (
            <div 
              key={index} 
              className="bg-[#15151c] border border-[#2a2a35] rounded-3xl overflow-hidden flex flex-col h-full hover:border-[#35E58D]/50 transition-colors duration-300 shadow-lg"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={stage.image} 
                  alt={stage.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-[#35E58D] text-xl font-bold mb-4">
                  {stage.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {stage.description}
                </p>
                
                <div className="flex-grow mb-4">
                  <span className="text-white text-sm font-semibold mb-2 block">Key focus areas:</span>
                  <ul className="space-y-1.5">
                    {stage.focusAreas.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="text-[#35E58D] text-lg leading-none mt-[-2px]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-gray-500 text-xs italic leading-relaxed border-t border-[#2a2a35] pt-4 mt-auto">
                  {stage.conclusion}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AcademicStages;