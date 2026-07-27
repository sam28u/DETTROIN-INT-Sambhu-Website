"use client";

import React from "react";
import { Lightbulb, Brain, Cloud, Network, Quote } from "lucide-react";

const FutureProofPedagogy = () => {
  const pedagogyItems = [
    {
      title: "Concept-Based Learning",
      description: "Moving beyond rote memorization to deep conceptual understanding that can be applied across various domains and real-world scenarios.",
      icon: <Brain size={18} className="text-[#84b99e]" />,
    },
    {
      title: "Experiential Learning",
      description: "Learning by doing through lab work, field trips, internships, and community service projects that provide tangible context to theoretical knowledge.",
      icon: <Cloud size={18} className="text-[#84b99e]" />,
    },
    {
      title: "Adaptive Digital Integration",
      description: "Utilizing AI-driven personalized learning paths and immersive VR/AR experiences to cater to individual student needs and learning speeds.",
      icon: <Network size={18} className="text-[#35E58D]" />,
    }
  ];

  return (
    <section className="w-full bg-[#121614] py-20 px-6 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        
        
        <div className="relative w-full max-w-xl mx-auto lg:max-w-none lg:mx-0">
          
          
          <div className="relative h-[350px] sm:h-[450px] lg:h-[500px] w-full lg:w-[90%] rounded-3xl overflow-hidden shadow-2xl border border-[#232e27]">
            <img 
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1000&auto=format&fit=crop" 
              alt="Future-Proof Learning" 
              className="w-full h-full object-cover object-center"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#121614]/80 via-transparent to-transparent pointer-events-none"></div>
          </div>

          
          <div className="absolute -bottom-6 right-0 lg:-right-4 w-[85%] sm:w-[70%] bg-[#181f1b]/85 backdrop-blur-xl border border-[#26332b] rounded-2xl p-6 sm:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-20">
            <div className="flex items-center gap-3 mb-3">
              <Lightbulb size={20} className="text-[#cbf5d7]" />
              <h4 className="text-white font-bold text-lg">
                Probing Inquiry
              </h4>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              We don't just provide answers; we teach students how to ask the right questions.
            </p>
          </div>

        </div>

        
        <div className="flex flex-col justify-center pt-8 lg:pt-0">
          
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">
            Future-Proof <span className="text-[#84b99e]">Pedagogy</span>
          </h2>

          
          <div className="flex flex-col gap-8 mb-10">
            {pedagogyItems.map((item, index) => (
              <div key={index} className="flex items-start gap-5 group">
                
                
                <div className="shrink-0 w-12 h-12 rounded-full border border-[#232e27] bg-[#151a17] flex items-center justify-center transition-colors duration-300 group-hover:border-[#84b99e]/50 group-hover:bg-[#1a231d]">
                  {item.icon}
                </div>
                
                
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>
                
              </div>
            ))}
          </div>

          
          <div className="relative bg-[#181f1b] border border-[#232e27] rounded-2xl p-8 overflow-hidden group">
            
            <Quote 
              size={120} 
              className="absolute -top-6 -right-6 text-[#232e27]/40 rotate-12 transition-transform duration-500 group-hover:scale-110" 
            />
            
            <div className="relative z-10">
              <p className="italic text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                "Our methodology isn't just about passing exams; it's about developing the intellectual curiosity and resilience required to navigate the unknown."
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-[2px] bg-[#35E58D]"></div>
                <span className="text-[#84b99e] text-xs font-bold uppercase tracking-widest">
                  Academic Director
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FutureProofPedagogy;