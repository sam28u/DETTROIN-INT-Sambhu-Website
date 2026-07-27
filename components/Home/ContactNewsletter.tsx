"use client";

import React from "react";
import { Phone, Mail, MapPin, Send, QrCode, Camera, Play } from "lucide-react";

const ContactNewsletter = () => {
  return (
    <section className="w-full bg-transparent py-16 px-6 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        
        <div className="relative w-full h-[350px] md:h-[400px] rounded-[2rem] overflow-hidden border border-[#2a2a35] shadow-2xl group">
          
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop&grayscale=true" 
            alt="Map Location" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
          />
          
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent"></div>

          
          <div className="absolute bottom-0 left-0 p-8 md:p-10 flex flex-col gap-5 z-10 w-full">
            
            <div className="flex items-center gap-4">
              <Phone size={20} className="text-[#35E58D]" />
              <span className="text-[#35E58D] text-lg md:text-xl font-bold tracking-wide">
                (89) 725-50000
              </span>
            </div>
            
            
            <div className="flex items-center gap-4">
              <Mail size={20} className="text-white" />
              <span className="text-white text-sm md:text-base font-medium">
                info@excellence.edu
              </span>
            </div>
            
            
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-white shrink-0 mt-1" />
              <span className="text-white text-sm md:text-base font-medium leading-relaxed">
                Excellence International School, (UP) - 202001
              </span>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col justify-center max-w-lg mx-auto lg:mx-0 w-full">
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Join our community
          </h2>
          
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
            Stay updated with our newsletter and never miss an event or achievement.
          </p>

          
          <form 
            onSubmit={(e) => e.preventDefault()} 
            className="flex items-center gap-3 w-full mb-10"
          >
            <input 
              type="email" 
              placeholder="Email Address" 
              required
              className="flex-grow bg-white text-[#121212] px-5 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#35E58D]/50 font-medium placeholder-gray-500 transition-shadow"
            />
            <button 
              type="submit"
              className="bg-[#35E58D] text-[#121212] p-3.5 rounded-xl hover:scale-105 hover:shadow-[0_0_20px_rgba(53,229,141,0.4)] transition-all duration-300 flex items-center justify-center shrink-0"
            >
              <Send size={22} className="transform translate-x-0.5" />
            </button>
          </form>

          
          <div className="flex items-center gap-4">
            <a href="#" className="p-3 rounded-full border border-[#2a2a35] text-gray-400 hover:text-white hover:border-white transition-colors duration-300">
              <QrCode size={18} />
            </a>
            <a href="#" className="p-3 rounded-full border border-[#2a2a35] text-gray-400 hover:text-white hover:border-white transition-colors duration-300">
              <Camera size={18} />
            </a>
            <a href="#" className="p-3 rounded-full border border-[#2a2a35] text-gray-400 hover:text-white hover:border-white transition-colors duration-300">
              <Play size={18} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactNewsletter;