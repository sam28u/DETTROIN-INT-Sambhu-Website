"use client";

import React from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sameer Khan",
      role: "PARENT",
      quote: "Excellence International has transformed my son's approach to learning. The blend of technology and traditional values is truly unique.",
      avatar: "https://i.pravatar.cc/150?u=sameer",
      theme: "green", // #35E58D
    },
    {
      id: 2,
      name: "Ayesha Fatima",
      role: "GRADE 11 STUDENT",
      quote: "Being part of the Robotics club helped me realize my passion for AI. The teachers here don't just teach; they mentor.",
      avatar: "https://i.pravatar.cc/150?u=ayesha",
      theme: "blue", // #4ac1e0
    },
    {
      id: 3,
      name: "Mr. Rahul Sharma",
      role: "PARENT",
      quote: "The focus on holistic development and personality grooming has given our daughter immense confidence in public speaking.",
      avatar: "https://i.pravatar.cc/150?u=rahul",
      theme: "green",
    },
    {
      id: 4,
      name: "Priya Patel",
      role: "ALUMNI",
      quote: "The foundational skills I built here gave me a massive head start in college. I'll always be grateful for the supportive environment.",
      avatar: "https://i.pravatar.cc/150?u=priya",
      theme: "blue",
    },
    {
      id: 5,
      name: "Mrs. Kavita Singh",
      role: "PARENT",
      quote: "The daycare facilities are phenomenal. I can work with complete peace of mind knowing my child is in safe, nurturing hands.",
      avatar: "https://i.pravatar.cc/150?u=kavita",
      theme: "green",
    },
    {
      id: 6,
      name: "Rohan Verma",
      role: "GRADE 9 STUDENT",
      quote: "Sports and academics are balanced so well here. I never feel overwhelmed, and I look forward to coming to school every day.",
      avatar: "https://i.pravatar.cc/150?u=rohan",
      theme: "blue",
    },
    {
      id: 7,
      name: "Dr. Anil Desai",
      role: "PARENT",
      quote: "A truly visionary institution. The value-based education system ensures our kids are not just smart, but also good human beings.",
      avatar: "https://i.pravatar.cc/150?u=anil",
      theme: "green",
    }
  ];

  // We duplicate the array to create a seamless infinite loop
  const infiniteTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="w-full bg-transparent py-20 overflow-hidden font-sans">
      
      {/* Inline Styles for Infinite Marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          What Our Community Says
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Voices from our students and parents reflecting our commitment to excellence.
        </p>
      </div>

      {/* Infinite Carousel Container */}
      <div className="flex overflow-hidden group">
        <div className="flex animate-scroll gap-8 w-max px-4">
          {infiniteTestimonials.map((testimonial, index) => {
            const isGreen = testimonial.theme === "green";
            const themeColor = isGreen ? "#35E58D" : "#4ac1e0";
            const shadowColor = isGreen ? "rgba(53,229,141,0.4)" : "rgba(74,193,224,0.4)";
            const borderColor = isGreen ? "border-[#35E58D]/30" : "border-[#4ac1e0]/30";
            
            return (
              <div 
                key={`${testimonial.id}-${index}`}
                className={`relative w-[320px] sm:w-[380px] bg-[#15151c]/80 backdrop-blur-md border border-[#2a2a35] rounded-3xl p-8 pt-10 flex flex-col transition-colors duration-300 hover:${borderColor} shrink-0 mt-6`}
              >
                {/* Floating Quote Icon */}
                <div 
                  className="absolute -top-6 left-6 w-12 h-12 rounded-full flex items-center justify-center z-10"
                  style={{ 
                    backgroundColor: themeColor,
                    boxShadow: `0 8px 20px ${shadowColor}`
                  }}
                >
                  <Quote size={20} className="text-[#111] fill-current" />
                </div>

                {/* Quote Text */}
                <p className="text-gray-300 italic text-sm leading-relaxed flex-grow mb-8 mt-2">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover border border-[#2a2a35]"
                  />
                  <div>
                    <h4 
                      className="font-bold text-base"
                      style={{ color: themeColor }}
                    >
                      {testimonial.name}
                    </h4>
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-widest block mt-0.5">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;