"use client";

import React from "react";
import { Medal, Trophy, Palette, Globe } from "lucide-react";

const FeesAndScholarships = () => {
  const scholarships = [
    {
      title: "Merit Excellence",
      description: "Up to 50% tuition waiver for students maintaining a GPA of 3.9 or above in previous institution.",
      icon: <Medal size={24} className="text-[#cbf5d7]" />,
    },
    {
      title: "Elite Athlete",
      description: "Designed for national level sports performers across swimming, track, and basketball.",
      icon: <Trophy size={24} className="text-[#cbf5d7]" />,
    },
    {
      title: "Creative Arts",
      description: "Special grants for exceptionally talented individuals in fine arts, music, and performance.",
      icon: <Palette size={24} className="text-[#cbf5d7]" />,
    },
    {
      title: "Global Citizen",
      description: "Need-based aid for promising students from diverse backgrounds to promote equity.",
      icon: <Globe size={24} className="text-[#cbf5d7]" />,
    }
  ];

  return (
    <section className="w-full bg-[#051108] py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-start">
        
        {/* --- Left Column: Fee Structure --- */}
        <div className="w-full">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1.5 h-8 bg-[#cbf5d7] rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Fee Structure
            </h2>
          </div>

          {/* Table Container */}
          <div className="bg-[#0a1a10] border border-[#17301e] rounded-2xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#17301e]">
                    <th className="py-5 px-6 text-[#98dfaa] font-semibold text-sm md:text-base">Grade Level</th>
                    <th className="py-5 px-6 text-[#98dfaa] font-semibold text-sm md:text-base">Tuition (Annual)</th>
                    <th className="py-5 px-6 text-[#98dfaa] font-semibold text-sm md:text-base">Activity Fee</th>
                  </tr>
                </thead>
                <tbody className="text-white text-sm md:text-base">
                  <tr className="border-b border-[#17301e]/50 hover:bg-[#0d2416] transition-colors">
                    <td className="py-5 px-6">Primary (1–5)</td>
                    <td className="py-5 px-6">$12,000</td>
                    <td className="py-5 px-6">$1,200</td>
                  </tr>
                  <tr className="border-b border-[#17301e]/50 hover:bg-[#0d2416] transition-colors">
                    <td className="py-5 px-6">Middle (6–8)</td>
                    <td className="py-5 px-6">$15,500</td>
                    <td className="py-5 px-6">$1,800</td>
                  </tr>
                  <tr className="border-b border-[#17301e]/50 hover:bg-[#0d2416] transition-colors">
                    <td className="py-5 px-6">Secondary (9–10)</td>
                    <td className="py-5 px-6">$18,000</td>
                    <td className="py-5 px-6">$2,500</td>
                  </tr>
                  <tr className="hover:bg-[#0d2416] transition-colors">
                    <td className="py-5 px-6">Senior (11–12)</td>
                    <td className="py-5 px-6">$22,000</td>
                    <td className="py-5 px-6">$3,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Footer Note */}
          <p className="text-[#a5b0a8] text-xs italic mt-4 px-2">
            * All fees are subject to annual review. Lab fees may apply for STEM subjects.
          </p>
        </div>

        {/* --- Right Column: Scholarships --- */}
        <div className="w-full">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1.5 h-8 bg-[#64b5f6] rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Scholarships
            </h2>
          </div>

          {/* Scholarships Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {scholarships.map((scholarship, index) => (
              <div 
                key={index}
                className="bg-[#0a1a10] border border-[#17301e] p-6 rounded-2xl flex flex-col hover:border-[#cbf5d7]/30 transition-colors duration-300 shadow-lg"
              >
                <div className="mb-5">
                  {scholarship.icon}
                </div>
                <h3 className="text-white text-lg font-bold mb-3">
                  {scholarship.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {scholarship.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeesAndScholarships;