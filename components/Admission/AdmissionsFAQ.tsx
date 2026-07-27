"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, Mail } from "lucide-react";
import Link from "next/link";

const AdmissionsFAQ = () => {
  
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the last date to apply for 2024–25?",
      answer: "Standard applications close on July 31st. Late applications are considered based on seat availability and may incur a late registration fee."
    },
    {
      question: "Does the school provide transport?",
      answer: "Yes, we offer comprehensive transport services with a fleet of air-conditioned, GPS-enabled buses covering all major routes across the city."
    },
    {
      question: "Are there boarding facilities available?",
      answer: "We offer both weekly and full boarding facilities with state-of-the-art amenities, dedicated wardens, and supervised evening study sessions."
    },
    {
      question: "What curriculum do you follow?",
      answer: "We follow a progressive, globally recognized curriculum that focuses on experiential learning, critical thinking, and holistic development."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#0a0a0a] py-20 px-6 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col gap-24">
        
        
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Common Questions
            </h2>
            <p className="text-[#35E58D] text-sm md:text-base font-medium">
              Everything you need to know about joining our academy.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div 
                  key={index}
                  className={`bg-[#15151c]/80 backdrop-blur-md border transition-colors duration-300 rounded-xl overflow-hidden ${
                    isOpen ? "border-[#35E58D]/30" : "border-[#2a2a35] hover:border-gray-500"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                  >
                    <span className="text-white font-bold text-sm md:text-base pr-4">
                      {faq.question}
                    </span>
                    
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="shrink-0"
                    >
                      <ChevronDown size={20} className="text-[#cbf5d7]" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-5 md:px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                          <div className="w-full h-px bg-[#2a2a35] mb-5"></div>
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        
        <div className="relative w-full bg-gradient-to-b from-[#1a1a24] to-[#12121a] border border-[#2a2a35] rounded-[2rem] p-10 md:p-16 flex flex-col items-center text-center shadow-2xl overflow-hidden">
          
          
          <div className="absolute top-[-50%] left-[50%] -translate-x-1/2 w-[60%] h-[100%] bg-[#35E58D]/15 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Need Personal Guidance?
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10">
              Our admissions counselors are available Monday to Saturday (9 AM - 4 PM) to walk you through the campus and discuss your child's future.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              
              <a 
                href="tel:9972550000"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#2a2a35] hover:bg-[#353545] text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300"
              >
                <Phone size={18} className="text-[#35E58D]" />
                (99) 725-50000
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AdmissionsFAQ;