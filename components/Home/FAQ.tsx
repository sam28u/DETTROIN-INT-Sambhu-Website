"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the admission process for the new session?",
      answer: "Admissions start with an online enquiry followed by a campus visit. Students undergo a basic aptitude assessment, and parents meet with the academic coordinators to understand the curriculum and facilities."
    },
    {
      question: "What curriculum do you follow?",
      answer: "We follow a globally recognized curriculum that integrates modern pedagogical practices with core academic principles, ensuring holistic development and real-world readiness for every student."
    },
    {
      question: "Is school transport available for all areas in Aligarh?",
      answer: "Yes, we provide safe and secure school transport facilities with GPS-enabled buses covering all major routes and residential areas in and around Aligarh."
    },
    {
      question: "What are the extracurricular options available?",
      answer: "Students can choose from a wide variety of activities including robotics, field sports, music, dance, debate clubs, and fine arts to nurture their talents outside the traditional classroom."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-transparent py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-4xl mx-auto">
        
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
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
                  <span className="text-white font-bold text-base md:text-lg pr-4">
                    {faq.question}
                  </span>
                  
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="shrink-0"
                  >
                    <ChevronDown size={20} className="text-[#35E58D]" />
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
                      <div className="px-5 md:px-6 pb-6 text-gray-400 text-sm md:text-base leading-relaxed">
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
    </section>
  );
};

export default FAQ;