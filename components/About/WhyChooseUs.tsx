"use client";

import React from "react";
import { 
  Target, 
  Building2, 
  Users, 
  ShieldCheck, 
  HeartHandshake, 
  Award,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Holistic Development",
      description: "Education goes beyond the classroom. We focus on sports, cultural programs, creative arts, and leadership to help students become confident and capable individuals.",
      icon: <Target size={28} className="text-[#35E58D]" />,
      hoverBorder: "hover:border-[#35E58D]/50 hover:shadow-[0_0_20px_rgba(53,229,141,0.1)]",
    },
    {
      title: "Modern Infrastructure",
      description: "Our campus includes smart interactive classrooms, advanced science and computer labs, and a resource-rich library designed to keep students engaged and motivated.",
      icon: <Building2 size={28} className="text-[#4ac1e0]" />,
      hoverBorder: "hover:border-[#4ac1e0]/50 hover:shadow-[0_0_20px_rgba(74,193,224,0.1)]",
    },
    {
      title: "Dedicated Faculty",
      description: "Our experienced, professionally trained teachers are committed to student success, mentoring them to think creatively, ask questions, and achieve their full potential.",
      icon: <Users size={28} className="text-[#35E58D]" />,
      hoverBorder: "hover:border-[#35E58D]/50 hover:shadow-[0_0_20px_rgba(53,229,141,0.1)]",
    },
    {
      title: "Safe & Disciplined",
      description: "We ensure a secure environment through CCTV monitoring, strict discipline policies, and supervised activities so students can focus on personal growth with confidence.",
      icon: <ShieldCheck size={28} className="text-[#4ac1e0]" />,
      hoverBorder: "hover:border-[#4ac1e0]/50 hover:shadow-[0_0_20px_rgba(74,193,224,0.1)]",
    },
    {
      title: "Values and Ethics",
      description: "We strongly believe in value-based education. Character development is just as important as academics, focusing on honesty, respect, responsibility, and integrity.",
      icon: <HeartHandshake size={28} className="text-[#35E58D]" />,
      hoverBorder: "hover:border-[#35E58D]/50 hover:shadow-[0_0_20px_rgba(53,229,141,0.1)]",
    },
    {
      title: "Our Commitment",
      description: "We are committed to delivering high-quality education, maintaining strong academic standards, and supporting every student’s journey to becoming a responsible future citizen.",
      icon: <Award size={28} className="text-[#4ac1e0]" />,
      hoverBorder: "hover:border-[#4ac1e0]/50 hover:shadow-[0_0_20px_rgba(74,193,224,0.1)]",
    }
  ];

  return (
    <section className="w-full bg-[#0a0a0a] py-20 px-6 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            The <span className="text-[#35E58D]">Excellence</span> Experience
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Discover how we provide the perfect balance of academics, values, discipline, and personal development for every child.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-[#15151c]/80 backdrop-blur-md border border-[#2a2a35] rounded-2xl p-8 flex flex-col transition-all duration-300 group hover:-translate-y-1 ${feature.hoverBorder}`}
            >
              <div className="mb-6 bg-[#0a0a0a] w-14 h-14 rounded-xl flex items-center justify-center border border-[#2a2a35] group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-white text-xl font-bold mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative w-full rounded-[2rem] overflow-hidden border border-[#2a2a35] bg-gradient-to-br from-[#112318] to-[#111a22] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute top-[-50%] left-[-10%] w-[50%] h-[150%] bg-[#35E58D] rounded-full mix-blend-screen filter blur-[120px] opacity-10"></div>
          </div>

          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Excellence International School
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-2">
              Choosing the right school plays an important role in shaping a child’s future. Excellence International School in Aligarh offers the perfect environment for learning, growth, and success.
            </p>
            <p className="text-[#35E58D] font-semibold text-sm tracking-wide">
              Admissions are currently open for multiple classes.
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <Link 
              href="/admissions" 
              className="flex items-center justify-center gap-2 bg-[#35E58D] text-[#0f0f0f] px-8 py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(53,229,141,0.3)] w-full md:w-auto"
            >
              Begin Your Journey
              <ArrowRight size={20} />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;