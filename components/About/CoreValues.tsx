"use client";

import React from "react";
import { ShieldCheck, Lightbulb, Users, Handshake } from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      title: "Integrity",
      description: "We believe in doing the right thing, even when no one is watching. Honesty and ethics are our foundation.",
      icon: <ShieldCheck size={28} className="text-[#d4f2d2]" />, 
    },
    {
      title: "Innovation",
      description: "Constant questioning and creative problem-solving drive us forward. We embrace change as opportunity.",
      icon: <Lightbulb size={28} className="text-[#64b5f6]" />, 
    },
    {
      title: "Community",
      description: "Our strength lies in our diversity and our ability to support one another. We are global citizens.",
      icon: <Users size={28} className="text-[#d4f2d2]" />, 
    },
    {
      title: "Respect",
      description: "Valuing every voice and perspective. We treat ourselves and others with dignity and kindness.",
      icon: <Handshake size={28} className="text-[#64b5f6]" />, 
    }
  ];

  return (
    <section className="w-full bg-[#0a0a0a] py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Our Core <span className="text-[#d4f2d2]">Values</span>
          </h2>
          <p className="text-[#cc8a5e] text-sm md:text-base">
            The pillars that define our community and character.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-[#18181b] border border-[#27272a] rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/5"
            >
              <div className="mb-6">
                {value.icon}
              </div>

              <h3 className="text-white text-xl font-semibold mb-4">
                {value.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreValues;