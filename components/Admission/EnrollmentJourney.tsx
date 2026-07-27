"use client";

import React from "react";
import { FileEdit, FileUp, BrainCog, BadgeCheck } from "lucide-react";

const EnrollmentJourney = () => {
  const steps = [
    {
      num: "01",
      title: "Online Application",
      description: "Fill out the detailed registration form and pay the application fee.",
      icon: <FileEdit size={32} className="text-[#35E58D]" />,
    },
    {
      num: "02",
      title: "Documentation",
      description: "Upload previous academic transcripts and identification records.",
      icon: <FileUp size={32} className="text-[#35E58D]" />,
    },
    {
      num: "03",
      title: "Assessment",
      description: "Entrance aptitude test and a collaborative parent-student interview.",
      icon: <BrainCog size={32} className="text-[#35E58D]" />,
    },
    {
      num: "04",
      title: "Enrollment",
      description: "Receive admission offer and complete fee payment to secure seat.",
      icon: <BadgeCheck size={32} className="text-[#35E58D]" />,
    }
  ];

  return (
    <section className="w-full bg-[#0a0a0a] py-24 px-6 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            The Enrollment Journey
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Our streamlined 4-step process is designed to find the best fit for your child's academic and personal growth.
          </p>
        </div>

        
        <div className="relative">
          
          
          <div className="hidden md:block absolute top-[48px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#0d2116] via-[#35E58D]/40 to-[#0d2116] z-0"></div>
          
          
          <div className="md:hidden absolute top-[24px] bottom-[24px] left-[48px] w-[2px] bg-gradient-to-b from-[#0d2116] via-[#35E58D]/40 to-[#0d2116] z-0"></div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-6 justify-between">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative z-10 flex flex-row md:flex-col items-center flex-1 gap-6 md:gap-8 group"
              >
                
                
                <div className="shrink-0 w-24 h-24 rounded-2xl bg-[#0a150f] border border-[#193322] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_0_25px_rgba(53,229,141,0.15)]">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>
                </div>

                
                <div className="text-left md:text-center w-full">
                  <h3 className="text-white text-base md:text-lg font-bold mb-2 md:mb-3">
                    {step.num}. {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[260px] mx-auto md:mx-0 md:max-w-none">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default EnrollmentJourney;