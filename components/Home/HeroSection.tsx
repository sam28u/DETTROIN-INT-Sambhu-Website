"use client";

import React from "react";
import { Eye, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4 sm:p-6 lg:p-12 font-sans overflow-hidden">
      
      
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#35E58D] rounded-full mix-blend-screen filter blur-[100px] sm:blur-[150px] opacity-15 sm:opacity-20"></div>
        
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#4ac1e0] rounded-full mix-blend-screen filter blur-[120px] sm:blur-[180px] opacity-10 sm:opacity-15"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-10 pb-24 lg:py-0">
        
        
        <div className="flex flex-col justify-center max-w-xl mx-auto lg:mx-0">
          
          <div className="inline-flex items-center gap-2 border border-[#2a2a35] bg-[#15151c]/80 backdrop-blur-sm rounded-full px-4 py-1.5 w-max mb-6 lg:mb-8">
            <span className="w-2 h-2 rounded-full bg-[#35E58D] animate-pulse"></span>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#35E58D] uppercase">
              Best School in Aligarh
            </span>
          </div>

          
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.2] lg:leading-[1.1] mb-10 tracking-tight">
            Let's <span className="text-[#35E58D]">explore</span> the limitless
            possibilities of{" "}
            <span className="italic relative whitespace-nowrap inline-block mt-2 sm:mt-0">
              knowledge
              
              <svg className="absolute w-full h-2 sm:h-3 -bottom-1 sm:-bottom-2 left-0 text-[#3a4f59]" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            
            <div className="flex-1 bg-[#15151c]/80 backdrop-blur-md border border-[#2a2a35] p-5 sm:p-6 rounded-2xl hover:border-[#35E58D]/50 transition-colors">
              <div className="flex items-center gap-2 mb-4 text-[#35E58D]">
                <Eye size={20} strokeWidth={2.5} />
                <h3 className="font-semibold text-sm">Our Vision</h3>
              </div>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#35E58D] text-lg leading-none mt-[-2px]">•</span>
                  Foster global leaders.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#35E58D] text-lg leading-none mt-[-2px]">•</span>
                  Instill critical thinking.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#35E58D] text-lg leading-none mt-[-2px]">•</span>
                  Nurture creativity.
                </li>
              </ul>
            </div>

            
            <div className="flex-1 bg-[#15151c]/80 backdrop-blur-md border border-[#2a2a35] p-5 sm:p-6 rounded-2xl hover:border-[#4ac1e0]/50 transition-colors">
              <div className="flex items-center gap-2 mb-4 text-[#4ac1e0]">
                <Star size={20} strokeWidth={2.5} />
                <h3 className="font-semibold text-sm">Our Mission</h3>
              </div>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#4ac1e0] text-lg leading-none mt-[-2px]">•</span>
                  Develop ethical values.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4ac1e0] text-lg leading-none mt-[-2px]">•</span>
                  Promote lifelong learning.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4ac1e0] text-lg leading-none mt-[-2px]">•</span>
                  Excellence in education.
                </li>
              </ul>
            </div>
          </div>
        </div>

        
        <div className="relative mt-12 lg:mt-0 lg:ml-auto w-full max-w-lg mx-auto pb-16 sm:pb-24 lg:pb-0">
          
          
          <div className="relative h-[450px] sm:h-[550px] lg:h-[650px] w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5">
            
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop"
              alt="Students smiling"
              className="w-full h-full object-cover"
            />
          </div>
          
          
          <div className="absolute -left-2 sm:-left-8 lg:-left-12 bottom-[140px] sm:bottom-20 lg:bottom-12 bg-[#35E58D] p-4 sm:p-5 rounded-2xl sm:rounded-3xl w-40 sm:w-48 shadow-xl z-10 flex flex-col justify-between h-[120px] sm:h-[150px]">
            <p className="font-bold text-[#111] text-sm sm:text-[1.1rem] leading-tight pr-2 sm:pr-4">
              Admissions Open for 2024-25
            </p>
            <button className="bg-[#111] text-white text-[9px] sm:text-[10px] font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full w-max tracking-wide uppercase hover:bg-gray-800 transition-colors">
              Click On Now
            </button>
          </div>

          
          <div className="absolute -bottom-12 sm:-bottom-16 lg:-bottom-8 right-2 sm:-right-4 lg:-right-12 bg-[#22222a]/80 backdrop-blur-xl border border-white/10 p-5 sm:p-6 rounded-2xl sm:rounded-3xl w-[calc(100%-1rem)] max-w-[300px] sm:max-w-[320px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-5 tracking-wide">Quick Enquiry</h3>
            
            <form className="flex flex-col gap-2.5 sm:gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm bg-white text-black outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-[#35E58D]" 
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm bg-white text-black outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-[#35E58D]" 
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm bg-white text-black outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-[#35E58D]" 
              />
              
              <select 
                defaultValue="" 
                className="w-full rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm bg-white text-black outline-none focus:ring-2 focus:ring-[#35E58D] cursor-pointer appearance-none"
              >
                <option value="" disabled>Select Class</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
              </select>
              
              <button 
                type="submit"
                className="w-full mt-1 sm:mt-2 rounded-lg sm:rounded-xl px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#35E58D] to-[#4ac1e0] hover:opacity-90 transition-opacity"
              >
                Submit Application
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;