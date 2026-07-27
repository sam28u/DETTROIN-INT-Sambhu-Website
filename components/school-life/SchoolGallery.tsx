"use client";

import React, { useState } from "react";
import { Play, Globe, Monitor, MessageSquare } from "lucide-react";


const Hero = () => (
  <header className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
    <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#00e38a]/10 blur-[120px] rounded-full pointer-events-none"></div>
    <div className="absolute top-1/2 -right-24 w-80 h-80 bg-[#6ad3ff]/10 blur-[100px] rounded-full pointer-events-none"></div>
    <div className="relative z-10 text-center space-y-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl mx-auto tracking-tight">
        Capturing the <span className="text-[#00e38a]">Pulse</span> of Modern Education
      </h1>
      <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
        Step inside our vibrant ecosystem. From high-tech laboratories to state-of-the-art arenas, explore how we are shaping the future leaders of tomorrow through every frame.
      </p>
    </div>
  </header>
);

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const filters = ["ALL", "EVENTS", "SPORTS", "CAMPUS", "ACADEMICS"];

  const galleryItems = [
    {
      id: 1,
      category: "ACADEMICS",
      title: "Future Scientists",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFH6FKXrw_mas_KNAzwdReowAsi08G1cbwR1tdHFaMNkdpdyN8ZI2is37M1HHmwaLQQAhEvfZOPx33qH92c68j6F3xggFJsIErk8ubgtu9AXG56Cf14Hq4I9VBoWp6ujq0V7nv4CXzEdFLoVF7UV_hBIwPZpbaUbicEYoiR3AfBCDxqrf0UTM4SL5SWP8SdJ-nS155mpAtJ8-2wBvczYo_sulI-KMpkZQjMIj-G8M1dXzzvnPBiZGEIhnmoGCzk2CVxpnky_NBIH-9",
      color: "text-[#00e38a]",
      span: "md:row-span-2",
    },
    {
      id: 2,
      category: "SPORTS",
      title: "Athletic Excellence",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGhD4r9Zz0I-mgnRpAz4fIWnVyoFh_otT9RG2YXy_SPGAxkDqLCZzqgEAa0vHNwppjEMIbePmlnLDQ-u_r63rCqxjcvbCljY9IKbhBUK6wq7iaOweZKrNyu-MiNrXLOITgao_pfreaYkrP_lJsmakmGR7bFMA3ItKiT9zcLnmT5RIta3X7qnT1r-FAf5nG9hH3WZRaX452lPNJf-ih-qhzYFRnWhn3siWc6NZlPVLpzJ_DiTZVuYxX3nWpnlDlu-SJcH8X3WOrlxXJ",
      color: "text-[#6ad3ff]",
      span: "md:col-span-2",
    },
    {
      id: 3,
      category: "CAMPUS",
      title: "Modern Architecture",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXw7iK5ZKgRZ3bgVxVwfTxwObP1DEcDte_KwihjEG0hWckosYYvoX6vyP3iWJm6RBtLNHEZELBW5NABZmd9aMJxCxTonjOKxYe8oE2CFC1FIKETKbev4ZEaHsQmezjA2zHVw9dgiQjXRgaQpuehaV6sdhaTFjQ5sjt1w4doACanIjpTfqAyne6U46cLtoXczcKh5HCD0niBWqozDD3wudrU8eJKPZaVO16cFHKnae612B-7t6qeUn7_9taT1bWEfpiiIa0FEOqoDwU",
      color: "text-[#00e38a]",
      span: "",
    },
    {
      id: 4,
      category: "EVENTS",
      title: "Performing Arts",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfn3iUykugEU-hH-KOD3xMfV_FWkgH8idezKTlSrPgGTxmQRYn-eyyp6zUDMJgyhElN6Erv5TAa3d6NdSJ22eAtdsANyLGv_RBbWvDgGKR7t5SsYzK9ds-ZZmMxp-BGaErUEtu_9zK_4TrlkLFKN7O3E3PMB19hKakfETBL32QL5pIlVQS34BcRQ3lYgmbPHTg8l2ZLt2Zk6lRQoYOd-Ty1K3wYzbxctlo900l6IcmdzpiMx4zqWFsZs9zKSwx2cyEHiX0GH9RJz5Z",
      color: "text-[#d0ffdc]",
      span: "",
    },
    {
      id: 5,
      category: "STUDENT LIFE",
      title: "Collaborative Spirit",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAgT22J75IVuQdfI5kC4qmOlJvLioEhmZQNwpvHrpBRYmwa5y5RDezlFCeBivApLd35wuUpRfUfh_p1sWnCxRg-G8wgD38Aby65NlUpI7QyE_FTX7wZbnGRp1JanNs0k1sTuRi6HHv7-xxU93ry0xRx-ML_5ZNM9XgpINEkmzl0tiQhLwp4wymf5jocLkPoMwptka3dPeTNGP5TOzxtRLZZO5Ikeo6RUq9balvHlWnYQiUJrGb5hM3xeeu8qv4ELomIqNzxy3KuJWQ",
      color: "text-[#6ad3ff]",
      span: "md:row-span-2",
    },
    {
      id: 6,
      category: "ACADEMICS",
      title: "Digital Innovation",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCObeue8bK41olM_e0QYuO9MV-D_5nQY5SeQICayKI9ahxGmC1MHG6lEE1W5AWJa_ZW19HPGhqkBSqbvw-TZztcWwRM1kDM-cyHk-BsdWOc80eV7Lrbo019YMVFGFxmZ7ZfyzLMCSDDyR5uUiotQZoI6O-UatVfWqeMRKBHsp2aIPw86rl1NJi66UTZ-x9dHQ6jkO5HCX-Mxp_M4hXCP8nWpWZ33_2u1oHYvuRlljYAgYibgiER9ke40I9iH1neGLxek10hd6OoGnSa",
      color: "text-[#00e38a]",
      span: "md:col-span-2",
    }
  ];

  const filteredItems = activeFilter === "ALL" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="px-6 max-w-7xl mx-auto mb-16">
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeFilter === filter
                ? "bg-[#00e38a] text-[#002110] shadow-[0_0_20px_rgba(0,227,138,0.5)]"
                : "bg-white/5 backdrop-blur-xl border border-white/10 text-gray-200 hover:border-[#00e38a]/50"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] gap-6">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className={`relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 group cursor-pointer ${item.span}`}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#121414]/95 via-[#121414]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className={`${item.color} text-xs font-semibold tracking-wider mb-2`}>
                {item.category}
              </span>
              <h3 className="text-white text-xl md:text-2xl font-bold">
                {item.title}
              </h3>
            </div>

            
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00e38a]/40 rounded-xl pointer-events-none transition-colors"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

const VideoTour = () => (
  <section className="bg-[#0c0f0f] py-20 relative overflow-hidden border-y border-white/5">
    <div className="px-6 max-w-7xl mx-auto relative z-10 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight">
        Experience the <span className="text-[#6ad3ff]">Tour</span>
      </h2>
      
      <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 group cursor-pointer">
        <div className="aspect-video relative">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwtq6JEyaoS4nG0Hh9cXGhJ1dHU4_JPb65VPFxL9yFVQ7hzISeX-oVBLunea2GtEK_CB-kiSyua4C348dO3pJehgmd17aM8JlZcCmPYYDOEgglinz37NIBUjqBO2ey6Zbspn13xsBKRQ7FvFQL662hXgOpvuXJjuitA_5MXbP0ACFVzLyrby7g7HiNvSBFT8k6Tlf7a-krdiEpstO-AkMwikfAdJXBdaYbLkTWAxcikM3PPe-gvdDSGAUIOGsrMvPMbPdDEvmbcsQV" 
            alt="Campus Tour Video Thumbnail" 
            className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-1000"
          />
          
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#d0ffdc] rounded-full flex items-center justify-center text-[#006c3f] shadow-[0_0_40px_rgba(0,227,138,0.6)] transition-transform duration-300 group-hover:scale-110">
              <Play size={40} className="ml-2 fill-current" />
            </div>
          </button>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-left bg-gradient-to-t from-black/90 to-transparent pointer-events-none">
            <p className="text-xs text-[#00e38a] font-semibold tracking-widest uppercase mb-2">
              Guided Experience
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              The Virtual Campus Journey 2024
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="px-6 py-20 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl text-center space-y-4 hover:border-[#00e38a]/40 transition-all duration-300 group">
        <div className="text-[#00e38a] text-4xl md:text-5xl font-extrabold group-hover:drop-shadow-[0_0_15px_rgba(0,227,138,0.5)] transition-all">2.5k+</div>
        <div className="text-sm font-semibold text-[#bacbbc] uppercase tracking-widest">Active Students</div>
      </div>
      
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl text-center space-y-4 hover:border-[#6ad3ff]/40 transition-all duration-300 group">
        <div className="text-[#6ad3ff] text-4xl md:text-5xl font-extrabold group-hover:drop-shadow-[0_0_15px_rgba(106,211,255,0.5)] transition-all">45</div>
        <div className="text-sm font-semibold text-[#bacbbc] uppercase tracking-widest">Nationalities</div>
      </div>
      
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl text-center space-y-4 hover:border-[#00e38a]/40 transition-all duration-300 group">
        <div className="text-[#00e38a] text-4xl md:text-5xl font-extrabold group-hover:drop-shadow-[0_0_15px_rgba(0,227,138,0.5)] transition-all">98%</div>
        <div className="text-sm font-semibold text-[#bacbbc] uppercase tracking-widest">Ivy League Placement</div>
      </div>
      
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl text-center space-y-4 hover:border-[#6ad3ff]/40 transition-all duration-300 group">
        <div className="text-[#6ad3ff] text-4xl md:text-5xl font-extrabold group-hover:drop-shadow-[0_0_15px_rgba(106,211,255,0.5)] transition-all">12</div>
        <div className="text-sm font-semibold text-[#bacbbc] uppercase tracking-widest">Innovation Labs</div>
      </div>

    </div>
  </section>
);




const SchoolGallery = () => {
  return (
    <div className="min-h-screen py-5 bg-[#121414] font-sans selection:bg-[#00e38a] selection:text-[#002110]">
      <main>
        <Gallery />
        <VideoTour />
        <Stats />
      </main>
    </div>
  );
};

export default SchoolGallery;