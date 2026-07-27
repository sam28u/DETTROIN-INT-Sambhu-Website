"use client";

import React from "react";
import { 
  ArrowRight, 
  LayoutGrid, 
  List, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Search 
} from "lucide-react";

// --- Data ---

const newsPosts = [
  {
    id: 1,
    category: "Achievements",
    categoryColor: "text-[#4ac1e0]",
    date: "October 20, 2024",
    title: "National Robotics Champions: Excellence Titans",
    description: "Our senior robotics team secured first place at the National Innovation Challenge, showcasing their custom AI-driven drone fleet.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Academics",
    categoryColor: "text-[#4ac1e0]",
    date: "October 18, 2024",
    title: "Digital Literacy: New Curriculum Standards",
    description: "We are integrating advanced data science and algorithmic thinking into our middle school curriculum starting this spring.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Student Life",
    categoryColor: "text-[#4ac1e0]",
    date: "October 15, 2024",
    title: "Fusion Arts Festival: Night of Innovation",
    description: "Join us for an evening where classical performance meets digital artistry in our annual Fusion Arts gala.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Events",
    categoryColor: "text-[#4ac1e0]",
    date: "October 12, 2024",
    title: "Global Leadership Summit 2024 Highlights",
    description: "Distinguished guests from around the globe gathered to discuss the future of ethical AI and global leadership.",
    image: "https://images.unsplash.com/photo-1475721028070-07080fb9cbfa?q=80&w=1200&auto=format&fit=crop",
  }
];

const trendingPosts = [
  {
    id: 1,
    title: "Excellence ranks #1 in Global Digital Innovation index",
    views: "4.2k Views",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "The future of Biology: Synthetic DNA workshops",
    views: "3.8k Views",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "New Sports Arena: Redefining Athletic Performance",
    views: "2.1k Views",
    image: "https://images.unsplash.com/photo-1574629810360-7efbb6b2accd?q=80&w=800&auto=format&fit=crop",
  }
];

const categories = ["Innovation", "Athletics", "Campus Life", "Global Outreach", "Digital Arts", "STEM"];

// --- Sub-components ---

const FeaturedNews = () => (
  <section className="mb-16">
    <div className="flex flex-col lg:flex-row bg-[#15221b] rounded-[2rem] overflow-hidden border border-[#1f3326] shadow-2xl group">
      
      {/* Left Column: Image */}
      <div className="w-full lg:w-[55%] relative h-[350px] lg:h-[550px] overflow-hidden bg-[#0a0a0a]">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop" 
          alt="Tech Nexus Launch" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#15221b] via-[#15221b]/40 to-transparent pointer-events-none"></div>
      </div>

      {/* Right Column: Content */}
      <div className="w-full lg:w-[45%] p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10 lg:-ml-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-[#2a4536] text-[#35E58D] text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase border border-[#3b5e4a]/50">
            Featured
          </span>
          <span className="text-gray-400 text-sm font-medium">
            Oct 24, 2024
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.15] tracking-tight">
          <a href="/article" className="hover:text-[#35E58D] transition-colors">Revolutionizing STEM: The Excellence Tech Nexus Launch</a>
        </h1>

        <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-lg">
          We are proud to unveil our state-of-the-art Tech Nexus, a hub for robotics, AI research, and collaborative engineering designed to empower the next generation of digital pioneers.
        </p>

        <a href="/article" className="inline-flex items-center gap-2 text-[#35E58D] font-bold text-base transition-transform group-hover:translate-x-2 w-fit">
          Read Full Story 
          <ArrowRight size={20} />
        </a>
      </div>
    </div>
  </section>
);

const LatestUpdates = () => (
  <div className="lg:col-span-8 flex flex-col gap-8">
    
    {/* Section Header */}
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-[#222222] pb-4 gap-4">
      <h2 className="text-3xl font-bold text-white tracking-tight">
        Latest <span className="text-[#35E58D]">Updates</span>
      </h2>
      <div className="flex gap-2">
        <button className="p-2 bg-[#161616] border border-[#222222] rounded-lg hover:border-[#35E58D]/50 transition-colors text-white">
          <LayoutGrid size={20} />
        </button>
        <button className="p-2 bg-[#161616] border border-[#222222] rounded-lg hover:border-[#35E58D]/50 transition-colors text-gray-500">
          <List size={20} />
        </button>
      </div>
    </div>

    {/* Grid of Posts */}
    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
      {newsPosts.map((post) => (
        <article key={post.id} className="bg-[#161616] border border-[#222222] rounded-2xl overflow-hidden group hover:border-[#333333] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
          {/* Image Container */}
          <div className="h-56 overflow-hidden relative">
            <a href="/article" className="block w-full h-full">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </a>
            {/* Category Badge */}
            <div className="absolute top-4 left-4 bg-[#0a0a0a]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#222222]">
              <span className={`${post.categoryColor} text-[10px] font-bold uppercase tracking-widest`}>
                {post.category}
              </span>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6 md:p-8">
            <span className="text-gray-400 text-sm font-medium mb-3 block">{post.date}</span>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#35E58D] transition-colors line-clamp-2">
              <a href="/article">{post.title}</a>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-2">
              {post.description}
            </p>
            <a href="/article" className="inline-flex items-center gap-1.5 text-[#35E58D] font-bold hover:underline decoration-[#35E58D]/30 transition-all text-sm uppercase tracking-wider">
              Read More <ExternalLink size={16} />
            </a>
          </div>
        </article>
      ))}
    </div>

    {/* Pagination */}
    <div className="flex justify-center items-center gap-2 pt-8">
      <button className="w-12 h-12 bg-[#161616] border border-[#222222] rounded-xl flex items-center justify-center text-gray-400 hover:text-[#35E58D] hover:border-[#35E58D]/40 transition-all">
        <ChevronLeft size={24} />
      </button>
      <button className="w-12 h-12 bg-[#35E58D] text-[#0a0a0a] rounded-xl font-bold shadow-[0_0_15px_rgba(53,229,141,0.3)]">
        1
      </button>
      <button className="w-12 h-12 bg-[#161616] border border-[#222222] rounded-xl font-bold text-gray-400 hover:text-white hover:border-[#35E58D]/40 transition-all">
        2
      </button>
      <button className="w-12 h-12 bg-[#161616] border border-[#222222] rounded-xl font-bold text-gray-400 hover:text-white hover:border-[#35E58D]/40 transition-all">
        3
      </button>
      <button className="w-12 h-12 bg-[#161616] border border-[#222222] rounded-xl flex items-center justify-center text-gray-400 hover:text-[#35E58D] hover:border-[#35E58D]/40 transition-all">
        <ChevronRight size={24} />
      </button>
    </div>

  </div>
);

const Sidebar = () => (
  <aside className="lg:col-span-4 flex flex-col gap-6 lg:gap-8">
    
    {/* Search Box */}
    <div className="bg-[#161616] border border-[#222222] p-6 lg:p-8 rounded-2xl">
      <h4 className="text-xl font-bold text-white mb-4">Search News</h4>
      <div className="relative">
        <input 
          type="text" 
          placeholder="Topics, events..." 
          className="w-full bg-[#0a0a0a] border border-[#333333] rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#35E58D] focus:ring-1 focus:ring-[#35E58D] transition-all"
        />
        <Search size={20} className="absolute right-4 top-4 text-gray-500 pointer-events-none" />
      </div>
    </div>

    {/* Newsletter Widget */}
    <div className="bg-[#161616] border border-[#35E58D]/30 p-6 lg:p-8 rounded-2xl relative overflow-hidden group">
      {/* Ambient Glow */}
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#35E58D]/10 blur-[50px] rounded-full pointer-events-none transition-all duration-500 group-hover:bg-[#35E58D]/20"></div>
      
      <h4 className="text-2xl font-bold text-[#35E58D] mb-4 relative z-10">Stay Informed</h4>
      <p className="text-gray-400 text-sm mb-8 leading-relaxed relative z-10">
        Get weekly insights into the cutting-edge developments at Excellence International directly in your inbox.
      </p>
      
      <form className="flex flex-col gap-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="Email Address" 
          className="w-full bg-[#0a0a0a] border border-[#333333] rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#35E58D] transition-colors"
          required
        />
        <button className="w-full py-3.5 bg-[#35E58D] hover:bg-[#2db871] text-[#0a0a0a] font-bold rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(53,229,141,0.2)]">
          Subscribe Now
        </button>
      </form>
    </div>

    {/* Trending Now */}
    <div className="bg-[#161616] border border-[#222222] p-6 lg:p-8 rounded-2xl">
      <h4 className="text-xl font-bold text-white mb-6">Trending Now</h4>
      <div className="flex flex-col gap-6">
        {trendingPosts.map((post) => (
          <a key={post.id} href="/article" className="flex gap-4 group items-center">
            <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-[#0a0a0a] border border-[#222222]">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h5 className="text-sm font-bold text-gray-300 group-hover:text-[#35E58D] transition-colors line-clamp-2 mb-1.5 leading-snug">
                {post.title}
              </h5>
              <span className="text-xs font-semibold text-gray-500">{post.views}</span>
            </div>
          </a>
        ))}
      </div>
    </div>

    {/* Categories */}
    <div className="bg-[#161616] border border-[#222222] p-6 lg:p-8 rounded-2xl">
      <h4 className="text-xl font-bold text-white mb-6">Categories</h4>
      <div className="flex flex-wrap gap-2.5">
        {categories.map((category) => (
          <a 
            key={category} 
            href="#" 
            className="px-4 py-2 rounded-lg bg-[#0a0a0a] border border-[#222222] hover:border-[#35E58D]/50 text-gray-400 hover:text-[#35E58D] transition-all text-xs font-bold uppercase tracking-widest"
          >
            {category}
          </a>
        ))}
      </div>
    </div>

  </aside>
);

// --- Main Page Assembly ---

const NewsAndEventsPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans selection:bg-[#35E58D] selection:text-[#0a0a0a]">
      
      {/* Background ambient gradient orb */}
      <div className="fixed top-[-10%] right-[-5%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#35E58D] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.06] pointer-events-none z-0"></div>

      <main className="relative z-10 pt-24 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <FeaturedNews />
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mt-8 lg:mt-16">
          <LatestUpdates />
          <Sidebar />
        </div>
      </main>
      
    </div>
  );
};

export default NewsAndEventsPage;