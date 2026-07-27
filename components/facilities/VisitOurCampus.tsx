"use client";

import React from "react";
import { MapPin, Smartphone, Mail } from "lucide-react";

const VisitOurCampus = () => {
  const contactInfo = [
    {
      icon: <MapPin size={20} className="text-[#cbf5d7]" />,
      text: (
        <>
          Excellence International School Campus, <br />
          Academic Hub North, (UP) - 20200
        </>
      ),
    },
    {
      icon: <Smartphone size={20} className="text-[#cbf5d7]" />,
      text: "+91725-50000",
    },
    {
      icon: <Mail size={20} className="text-[#cbf5d7]" />,
      text: "admissions@excellenceinternational.edu",
    }
  ];

  const socialLinks = [
    { 
      name: "Instagram",
      href: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
        </svg>
      ) 
    },
    { 
      name: "Twitter",
      href: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      ) 
    },
    { 
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect width="4" height="12" x="2" y="9"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ) 
    },
  ];

  return (
    <section className="w-full bg-[#0a0a0a] py-20 px-6 lg:px-12 font-sans flex justify-center">
      
      {/* Main Card Container */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row bg-[#1e2022] rounded-[2rem] overflow-hidden shadow-2xl border border-[#2a2c30]">
        
        {/* --- Left Column: Digital Map Image --- */}
        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[400px] bg-[#0a0a0a]">
          {/* High-quality dark architectural/satellite top-down map view */}
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" 
            alt="Digital Campus Map" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale mix-blend-lighten"
          />
          {/* Overlay to ensure it stays dark and blends seamlessly */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1e2022]/80 md:to-[#1e2022]"></div>
        </div>

        {/* --- Right Column: Contact Details --- */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
          
          <h2 className="text-3xl lg:text-4xl font-bold text-[#cbf5d7] mb-8 tracking-tight">
            Visit Our Campus
          </h2>
          
          {/* Contact List */}
          <div className="flex flex-col gap-6 mb-10">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <p className="text-white text-sm md:text-base leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full bg-[#303236] text-white flex items-center justify-center transition-all duration-300 hover:bg-[#cbf5d7] hover:text-[#1e2022] hover:-translate-y-1"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>

      </div>
      
    </section>
  );
};

export default VisitOurCampus;