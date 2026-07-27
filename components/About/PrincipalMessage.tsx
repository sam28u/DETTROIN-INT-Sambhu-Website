"use client";

import React from "react";

const PrincipalMessage = () => {
  return (
    <section className="w-full bg-transparent py-20 px-6 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:mx-0 pb-8 lg:pb-0">

          <div className="relative h-[450px] md:h-[550px] w-full rounded-[2rem] overflow-hidden shadow-2xl">

            <div className="absolute inset-0 rounded-[2rem] border-2 border-[#35E58D]/40 shadow-[inset_0_0_40px_rgba(53,229,141,0.2),0_0_30px_rgba(53,229,141,0.15)] z-10 pointer-events-none"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
              alt="Dr. Julian Sterling" 
              className="w-full h-full object-cover rounded-[2rem] object-top"
            />
          </div>

          <div className="absolute -bottom-4 right-4 sm:-bottom-6 sm:right-8 bg-[#15151c]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 min-w-[200px] hover:scale-110 duration-175 hover:border-[#2AF598] hover:bg-transparent ease-out">
            <h4 className="text-white font-bold text-lg mb-1">
              Dr. Julian Sterling
            </h4>
            <p className="text-gray-400 text-sm font-medium">
              Principal & CEO
            </p>
          </div>

        </div>

        <div className="flex flex-col justify-center max-w-xl mx-auto lg:mx-0">
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            The <span className="text-[#35E58D]/90">Principal's</span> Message
          </h2>
          
          <div className="space-y-6 text-gray-400 text-sm md:text-base leading-relaxed">
            <p className="italic text-gray-300 text-base md:text-lg">
              "Education is not the learning of facts, but the training of the mind to think beyond the horizon."
            </p>
            
            <p>
              At Excellence International, we believe that every student possesses a unique spark of genius. Our role is to provide the high-performance fuel—through advanced technology, expert pedagogy, and a supportive community—to help that spark ignite into a brilliant flame of lifelong learning.
            </p>
            
            <p>
              We are more than just a school; we are an incubator for future-ready minds. Our curriculum is designed to bridge the gap between traditional wisdom and modern innovation, ensuring our graduates are not only prepared for college but for the global challenges of the 21st century.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="w-12 h-[2px] bg-[#35E58D]"></div>
            <span className="text-gray-300 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
              Empowering Excellence Since 1998
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PrincipalMessage;