"use client";

import React from "react";
import { 
  Calendar, 
  User, 
  Folder, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight,
  MessageSquare
} from "lucide-react";

const ArticlePage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans selection:bg-[#35E58D] selection:text-[#0a0a0a] pb-24">
      
      {/* Ambient Glow Background */}
      <div className="fixed top-[-10%] right-[-5%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#35E58D] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.06] pointer-events-none z-0"></div>

      {/* --- Hero Image Section --- */}
      <div className="relative w-full h-[50vh] min-h-[400px] lg:h-[60vh] bg-[#161616]">
        <img 
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2000&auto=format&fit=crop" 
          alt="Students learning in a modern environment" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        {/* Gradient overlay to blend with the background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
      </div>

      {/* --- Main Article Container --- */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 -mt-40 lg:-mt-56">
        
        {/* Article Card */}
        <article className="bg-[#161616] border border-[#222222] rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-2xl mb-12">
          
          {/* Article Header (Meta & Title) */}
          <header className="mb-12 border-b border-[#222222] pb-10">
            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-400 font-medium mb-6">
              <span className="flex items-center gap-1.5 bg-[#0a0a0a] border border-[#333333] px-3 py-1.5 rounded-full">
                <Folder size={14} className="text-[#4ac1e0]" />
                <span className="text-[#e2e2e2]">Admissions</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[#35E58D]" />
                April 12, 2024
              </span>
              <span className="flex items-center gap-1.5">
                <User size={14} className="text-[#35E58D]" />
                By Excellence Admin
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] tracking-tight">
              How to Choose the Best School in Aligarh for Your Child
            </h1>
          </header>

          {/* Article Body Content */}
          <div className="prose prose-invert prose-lg max-w-none text-gray-400 marker:text-[#35E58D]">
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8">
              Choosing the right educational institution is a monumental decision for any parent. The right school doesn't just offer academic excellence; it provides a nurturing environment, holistic development, and a foundation for lifelong learning. Here is a comprehensive guide to help you navigate this vital choice.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Importance of Choosing the Right School</h2>
            <p className="mb-6">
              A child's formative years are critical. The environment they grow up in heavily influences their cognitive, social, and emotional development. The right school ensures:
            </p>
            <ul className="flex flex-col gap-3 mb-10 pl-0">
              {[
                "Building a strong academic foundation",
                "Instilling confidence and communication skills",
                "Developing critical thinking and problem-solving abilities",
                "Nurturing individual creativity and talents",
                "Preparing students for higher education and future careers"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#35E58D] shrink-0 mt-1" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-8">Factors to Consider When Choosing a School</h2>

            <h3 className="text-xl font-bold text-[#cbf5d7] mt-8 mb-4">1. Academic Quality and Learning Approach</h3>
            <p className="mb-4">
              Look for a school that offers a robust, modern curriculum. It should move beyond rote memorization and focus on experiential learning, STEM education, and conceptual clarity.
            </p>
            <ul className="flex flex-col gap-3 mb-8 pl-0">
              {[
                "Integration of technology in classrooms",
                "Focus on experiential and project-based learning",
                "Regular assessments and personalized feedback"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4ac1e0] shrink-0 mt-2.5 ml-2"></div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-[#cbf5d7] mt-8 mb-4">2. Safe and Positive Learning Environment</h3>
            <p className="mb-4">
              Safety—both physical and emotional—is paramount. The campus should be secure, and the culture should promote inclusivity and anti-bullying policies.
            </p>
            <ul className="flex flex-col gap-3 mb-8 pl-0">
              {[
                "24/7 CCTV surveillance and verified staff",
                "Strict anti-bullying and student welfare policies",
                "Access to professional school counselors"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4ac1e0] shrink-0 mt-2.5 ml-2"></div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Excellence International School – A Trusted Choice</h2>
            <p className="mb-6">
              When evaluating schools in Aligarh, Excellence International School consistently emerges as a premier choice for parents. We offer an unparalleled blend of traditional values and modern pedagogical approaches, equipped with state-of-the-art infrastructure.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Conclusion</h2>
            <p className="mb-8">
              Choosing the best school in Aligarh for your child requires careful research, campus visits, and an understanding of your child's unique needs. We invite you to visit Excellence International School to experience our vibrant learning ecosystem firsthand.
            </p>
          </div>
          
          {/* Article Footer (Tags & Navigation) */}
          <footer className="mt-16 pt-8 border-t border-[#222222]">
            {/* Prev/Next Post Links */}
            <div className="flex flex-col sm:flex-row justify-between gap-6">
              <a href="#" className="flex-1 group flex flex-col gap-2 p-4 rounded-xl border border-transparent hover:border-[#333333] hover:bg-[#0a0a0a] transition-all">
                <span className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest font-bold">
                  <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Previous
                </span>
                <span className="text-white font-medium group-hover:text-[#35E58D] transition-colors line-clamp-2">
                  The Importance of STEM Education in Early Years
                </span>
              </a>
              
              <a href="#" className="flex-1 group flex flex-col items-end text-right gap-2 p-4 rounded-xl border border-transparent hover:border-[#333333] hover:bg-[#0a0a0a] transition-all">
                <span className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest font-bold">
                  Next <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-white font-medium group-hover:text-[#35E58D] transition-colors line-clamp-2">
                  Excellence Students Win National Robotics Championship
                </span>
              </a>
            </div>
          </footer>

        </article>

        {/* --- Comments Section --- */}
        <section className="bg-[#161616] border border-[#222222] rounded-[2rem] p-8 md:p-12 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare className="text-[#35E58D]" size={28} />
            <h3 className="text-2xl font-bold text-white">Leave a Comment</h3>
          </div>
          
          <p className="text-gray-400 text-sm mb-8">
            Your email address will not be published. Required fields are marked *
          </p>

          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <textarea 
              placeholder="Type your comment here... *" 
              rows={6}
              className="w-full bg-[#0a0a0a] border border-[#333333] rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#35E58D] focus:ring-1 focus:ring-[#35E58D] transition-all resize-none"
              required
            ></textarea>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <input 
                type="text" 
                placeholder="Name *" 
                className="w-full bg-[#0a0a0a] border border-[#333333] rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#35E58D] focus:ring-1 focus:ring-[#35E58D] transition-all"
                required
              />
              <input 
                type="email" 
                placeholder="Email *" 
                className="w-full bg-[#0a0a0a] border border-[#333333] rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#35E58D] focus:ring-1 focus:ring-[#35E58D] transition-all"
                required
              />
              <input 
                type="url" 
                placeholder="Website" 
                className="w-full bg-[#0a0a0a] border border-[#333333] rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#35E58D] focus:ring-1 focus:ring-[#35E58D] transition-all"
              />
            </div>

            <label className="flex items-start gap-3 cursor-pointer group mt-2">
              <div className="relative flex items-center justify-center">
                <input type="checkbox" className="peer sr-only" />
                <div className="w-5 h-5 rounded border border-[#333333] bg-[#0a0a0a] peer-checked:bg-[#35E58D] peer-checked:border-[#35E58D] transition-colors"></div>
                <CheckCircle2 size={14} className="absolute text-[#0a0a0a] opacity-0 peer-checked:opacity-100 transition-opacity" />
              </div>
              <span className="text-gray-400 text-sm select-none group-hover:text-gray-300 transition-colors">
                Save my name, email, and website in this browser for the next time I comment.
              </span>
            </label>

            <button 
              type="submit"
              className="mt-4 w-fit px-8 py-3.5 bg-[#35E58D] hover:bg-[#2db871] text-[#0a0a0a] font-bold rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(53,229,141,0.2)] hover:shadow-[0_0_25px_rgba(53,229,141,0.4)] hover:-translate-y-0.5"
            >
              Post Comment
            </button>
          </form>
        </section>

      </main>
    </div>
  );
};

export default ArticlePage;