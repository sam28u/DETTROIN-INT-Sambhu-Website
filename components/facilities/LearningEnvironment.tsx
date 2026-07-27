"use client";

import React from "react";

const LearningEnvironment = () => {
  return (
    <section className="w-full bg-[#121416] py-24 px-6 lg:px-12 font-sans overflow-hidden border-t border-[#1f2226]">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            The Learning <span className="text-[#cbf5d7]">Environment</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
            Explore our state-of-the-art labs, expansive sports complexes, and collaborative learning spaces designed for the 21st-century student.
          </p>
        </div>

        {/* --- Bento Grid Container --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          
          {/* Card 1: Science & Research Labs (Wider) */}
          <div className="md:col-span-7 lg:col-span-8 relative w-full h-[350px] md:h-[420px] rounded-[2rem] overflow-hidden group cursor-pointer border border-[#23262b]">
            <img 
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop" 
              alt="Science & Research Labs" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0e]/95 via-[#0a0c0e]/40 to-transparent transition-opacity duration-300"></div>
            
            {/* Text Content */}
            <div className="absolute bottom-0 left-0 p-6 md:p-8 flex flex-col justify-end w-full lg:w-4/5">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                Science & Research Labs
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                Equipped with professional-grade instruments for Physics, Chemistry, and Biology.
              </p>
            </div>
          </div>

          {/* Card 2: Sports Arena (Narrower) */}
          <div className="md:col-span-5 lg:col-span-4 relative w-full h-[350px] md:h-[420px] rounded-[2rem] overflow-hidden group cursor-pointer border border-[#23262b]">
            <img 
              src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1000&auto=format&fit=crop" 
              alt="Sports Arena" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0e]/95 via-[#0a0c0e]/40 to-transparent transition-opacity duration-300"></div>
            
            <div className="absolute bottom-0 left-0 p-6 md:p-8 flex flex-col justify-end w-full">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                Sports Arena
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                Multi-sport complex with international standards.
              </p>
            </div>
          </div>

          {/* Card 3: Digital Library (Narrower) */}
          <div className="md:col-span-5 lg:col-span-4 relative w-full h-[350px] md:h-[420px] rounded-[2rem] overflow-hidden group cursor-pointer border border-[#23262b]">
            <img 
              src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop" 
              alt="Digital Library" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0e]/95 via-[#0a0c0e]/40 to-transparent transition-opacity duration-300"></div>
            
            <div className="absolute bottom-0 left-0 p-6 md:p-8 flex flex-col justify-end w-full">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                Digital Library
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                Over 50,000 titles and global e-resource access.
              </p>
            </div>
          </div>

          {/* Card 4: Dining & Cafeteria (Wider) */}
          <div className="md:col-span-7 lg:col-span-8 relative w-full h-[350px] md:h-[420px] rounded-[2rem] overflow-hidden group cursor-pointer border border-[#23262b]">
            <img 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop" 
              alt="Dining & Cafeteria" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0e]/95 via-[#0a0c0e]/40 to-transparent transition-opacity duration-300"></div>
            
            <div className="absolute bottom-0 left-0 p-6 md:p-8 flex flex-col justify-end w-full lg:w-4/5">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                Dining & Cafeteria
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                Nutrition-focused meals prepared by certified chefs in a hygienic, modern environment.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LearningEnvironment;