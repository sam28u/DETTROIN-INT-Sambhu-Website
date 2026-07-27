"use client";

import React from "react";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";

const UpcomingEvents = () => {
  const events = [
    {
      date: "24 OCT",
      title: "Annual Sports Meet",
      description: "A celebration of athleticism, teamwork, and spirit across all grades.",
      location: "Main Campus Stadium",
      theme: "green", 
    },
    {
      date: "12 NOV",
      title: "Science Fair 2024",
      description: "Showcasing innovative student projects in AI, Robotics, and Green Energy.",
      location: "Innovation Lab",
      theme: "blue", 
    },
    {
      date: "05 DEC",
      title: "Winter Gala Night",
      description: "An evening of music, dance, and theatrical performances by our students.",
      location: "Excellence Auditorium",
      theme: "green",
    },
    {
      date: "15 JAN",
      title: "Alumni Homecoming",
      description: "Welcoming back our graduates to share their success stories with current students.",
      location: "Grand Hall",
      theme: "blue",
    }
  ];

  return (
    <section className="w-full bg-transparent py-16 px-6 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        
        <div className="flex items-center gap-6 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight whitespace-nowrap">
            Upcoming Events
          </h2>
          
          
          <div className="flex-grow h-[1px] bg-gradient-to-r from-[#2a2a35] to-transparent hidden sm:block"></div>
          
          <Link 
            href="/events"
            className="flex items-center gap-2 text-[#35E58D] font-semibold text-sm hover:text-white transition-colors whitespace-nowrap"
          >
            All Events
            <CalendarDays size={18} />
          </Link>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {events.map((event, index) => {
            const isGreen = event.theme === "green";
            const colorClass = isGreen ? "text-[#35E58D]" : "text-[#4ac1e0]";
            const borderClass = isGreen 
              ? "border-[#35E58D]/30 hover:border-[#35E58D] hover:shadow-[0_0_25px_rgba(53,229,141,0.15)]" 
              : "border-[#4ac1e0]/30 hover:border-[#4ac1e0] hover:shadow-[0_0_25px_rgba(74,193,224,0.15)]";

            return (
              <div 
                key={index}
                className={`bg-[#15151c]/80 backdrop-blur-md border rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-300 group cursor-pointer ${borderClass}`}
              >
                
                <h3 className={`text-xl sm:text-2xl font-bold mb-3 tracking-wide ${colorClass}`}>
                  {event.date}
                </h3>
                
                
                <h4 className="text-white text-lg font-bold mb-3 group-hover:text-gray-200 transition-colors">
                  {event.title}
                </h4>
                
                
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
                  {event.description}
                </p>
                
                
                <div className="flex items-center gap-2 text-gray-500 text-xs mt-auto pt-4 border-t border-[#2a2a35]/50 group-hover:text-gray-400 transition-colors">
                  <MapPin size={14} />
                  <span>{event.location}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default UpcomingEvents;