"use client";

import React from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

// --- Inline SVGs for Socials to avoid icon library conflicts ---
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

// --- Sub-components ---

const Hero = () => (
  <header className="relative pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto text-center overflow-hidden">
    <div className="absolute top-[-50%] left-[50%] translate-x-[-50%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-[#35E58D] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.07] pointer-events-none z-0"></div>
    
    <div className="relative z-10 flex flex-col items-center">
      <div className="inline-block border border-[#1e3b2b] bg-[#0d2116]/60 backdrop-blur-sm rounded-full px-5 py-1.5 mb-6 shadow-[0_0_15px_rgba(53,229,141,0.1)]">
        <span className="text-[#35E58D] text-xs font-bold tracking-widest uppercase">
          Contact Us
        </span>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
        Let's Start a <span className="text-[#35E58D] drop-shadow-[0_0_25px_rgba(53,229,141,0.4)]">Conversation</span>
      </h1>
      <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        Whether you have questions about admissions, our curriculum, or campus facilities, our team is here to provide the answers you need.
      </p>
    </div>
  </header>
);

const ContactInfo = () => (
  <div className="flex flex-col gap-6 w-full lg:w-[45%]">
    <h2 className="text-2xl font-bold text-white mb-2">Reach Us</h2>
    
    <div className="bg-[#161616] border border-[#222222] p-6 rounded-2xl flex items-start gap-5 group transition-all hover:border-[#333333] hover:shadow-xl">
      <div className="w-12 h-12 shrink-0 bg-[#0a0a0a] border border-[#333333] rounded-xl flex items-center justify-center text-[#35E58D] group-hover:bg-[#35E58D]/10 transition-colors">
        <MapPin size={24} />
      </div>
      <div>
        <h4 className="text-white font-bold mb-2">Address</h4>
        <p className="text-gray-400 text-sm leading-relaxed">
          Excellence International School,<br />
          Ramghat Road Aligarh 202001<br />
          Uttar Pradesh, India
        </p>
      </div>
    </div>

    <div className="bg-[#161616] border border-[#222222] p-6 rounded-2xl flex items-start gap-5 group transition-all hover:border-[#333333] hover:shadow-xl">
      <div className="w-12 h-12 shrink-0 bg-[#0a0a0a] border border-[#333333] rounded-xl flex items-center justify-center text-[#4ac1e0] group-hover:bg-[#4ac1e0]/10 transition-colors">
        <Phone size={24} />
      </div>
      <div>
        <h4 className="text-white font-bold mb-2">Phone no.</h4>
        <a href="tel:+917055582117" className="text-gray-400 text-sm hover:text-[#4ac1e0] transition-colors block">
          +91 7055582117
        </a>
      </div>
    </div>

    <div className="bg-[#161616] border border-[#222222] p-6 rounded-2xl flex items-start gap-5 group transition-all hover:border-[#333333] hover:shadow-xl">
      <div className="w-12 h-12 shrink-0 bg-[#0a0a0a] border border-[#333333] rounded-xl flex items-center justify-center text-[#35E58D] group-hover:bg-[#35E58D]/10 transition-colors">
        <Mail size={24} />
      </div>
      <div>
        <h4 className="text-white font-bold mb-2">Email</h4>
        <div className="flex flex-col gap-1">
          <a href="mailto:rahulexcellence85@gmail.com" className="text-gray-400 text-sm hover:text-[#35E58D] transition-colors">
            rahulexcellence85@gmail.com
          </a>
          <a href="mailto:info@excellenceinternationalschool.com" className="text-gray-400 text-sm hover:text-[#35E58D] transition-colors">
            info@excellenceinternationalschool.com
          </a>
        </div>
      </div>
    </div>

  </div>
);

const ContactForm = () => (
  <div className="w-full lg:w-[55%] bg-[#161616] border border-[#222222] p-8 md:p-10 rounded-[2rem] relative overflow-hidden group">
    <div className="absolute top-0 right-0 w-64 h-64 bg-[#35E58D]/5 blur-[80px] rounded-full pointer-events-none transition-all duration-500 group-hover:bg-[#35E58D]/10"></div>
    
    <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Connect With Us</h3>
    
    <form className="flex flex-col gap-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full bg-[#0a0a0a] border border-[#333333] rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#35E58D] focus:ring-1 focus:ring-[#35E58D] transition-all"
          required
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full bg-[#0a0a0a] border border-[#333333] rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#35E58D] focus:ring-1 focus:ring-[#35E58D] transition-all"
          required
        />
      </div>
      
      <input 
        type="tel" 
        placeholder="Phone Number" 
        className="w-full bg-[#0a0a0a] border border-[#333333] rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#35E58D] focus:ring-1 focus:ring-[#35E58D] transition-all"
      />
      
      <textarea 
        placeholder="Message Type here..." 
        rows={5}
        className="w-full bg-[#0a0a0a] border border-[#333333] rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#35E58D] focus:ring-1 focus:ring-[#35E58D] transition-all resize-none"
        required
      ></textarea>
      
      <button 
        type="submit"
        className="mt-2 w-full flex items-center justify-center gap-2 py-4 bg-[#35E58D] hover:bg-[#2db871] text-[#0a0a0a] font-bold rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(53,229,141,0.2)] hover:shadow-[0_0_25px_rgba(53,229,141,0.4)] hover:-translate-y-0.5"
      >
        Send Message
        <Send size={18} />
      </button>
    </form>
  </div>
);

const LocationAndSocials = () => (
  <section className="mt-20">
    <div className="flex flex-col items-center mb-12">
      <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
      <div className="flex gap-4">
        <a href="#" className="flex items-center justify-center w-14 h-14 bg-[#161616] border border-[#222222] rounded-full text-gray-400 hover:text-[#35E58D] hover:border-[#35E58D]/50 hover:bg-[#0a0a0a] transition-all duration-300 hover:-translate-y-1">
          <FacebookIcon />
        </a>
        <a href="#" className="flex items-center justify-center w-14 h-14 bg-[#161616] border border-[#222222] rounded-full text-gray-400 hover:text-[#35E58D] hover:border-[#35E58D]/50 hover:bg-[#0a0a0a] transition-all duration-300 hover:-translate-y-1">
          <InstagramIcon />
        </a>
        <a href="#" className="flex items-center justify-center w-14 h-14 bg-[#161616] border border-[#222222] rounded-full text-gray-400 hover:text-[#e87c71] hover:border-[#e87c71]/50 hover:bg-[#0a0a0a] transition-all duration-300 hover:-translate-y-1">
          <YoutubeIcon />
        </a>
      </div>
    </div>

    {/* Map Container - Replaced with high-tech, futuristic dark map image */}
    <div className="w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden border border-[#222222] relative group">
      <img 
        src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1600&auto=format&fit=crop" 
        alt="Map Location" 
        className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-80 transition-opacity duration-700"
      />
      <div className="absolute inset-0 bg-[#0a0a0a]/40 pointer-events-none"></div>
      
      {/* Mock Map Pin */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="w-12 h-12 bg-[#35E58D] rounded-full flex items-center justify-center text-[#0a0a0a] shadow-[0_0_30px_rgba(53,229,141,0.6)] animate-pulse">
          <MapPin size={24} className="fill-current" />
        </div>
        <div className="mt-3 bg-[#161616] border border-[#333333] px-4 py-2 rounded-xl backdrop-blur-md shadow-xl">
          <p className="text-white text-sm font-bold">Excellence International School</p>
        </div>
      </div>
    </div>
  </section>
);

// --- Main Page Assembly ---

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans selection:bg-[#35E58D] selection:text-[#0a0a0a]">
      <Hero />
      
      <main className="relative z-10 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
        <LocationAndSocials />
      </main>
    </div>
  );
};

export default ContactUsPage;