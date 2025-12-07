// src/components/HeroSection.tsx

import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    // 1. OUTER CONTAINER: Full screen height (min-h-screen) with dark background
    <section className="min-h-screen w-full bg-stone-900 pt-20 md:pt-0 flex items-center justify-center">
      
      {/* 2. INNER CONTENT WRAPPER: Limits width and controls layout/responsiveness */}
      <div 
        className="
          max-w-7xl mx-auto px-2 md:px-6 py-16 md:py-0 
          flex flex-col md:flex-row items-center justify-between gap-20 
        "
      >
        
        {/* === LEFT SIDE: HEADING AND TEXT (Your .heading) === */}
        <div className="heading w-full md:w-1/2 text-center md:text-left">
          
          {/* Main Heading: <span class="white">O</span><span class="yellow">VRIZON</span> */}
          {/* text-5xl (mobile) -> text-6xl (tablet) -> text-7xl (desktop) */}
          <h1 className="text-sm md:text-base text-[#DDFF00] mb-10 mt-12">
            MULTI-ASSET GLOBAL STRATEGIES | PRIVATE <br/>MARKETS | INDIA GROWTH THEMES |<br/> ALTERNATIVE ALPHA
          </h1>
          
          {/* Subheading: Empowering Businesses... */}
          <h3 className="text-2xl md:text-3xl font-bold-500 text-white-300 mb-10 ">
            Institutional-Grade Wealth Systems for Future Capital Cycles.
          </h3>
          
          {/* Paragraph Text */}
          <p className="text-lg text-gray-400 max-w-xl mx-auto md:mx-0">
            Ovrizon Asset Management is a global multi-strategy investment firm built with one principle--the world does not move in stright line. Capital cycles shift. Themes transform. Innovation compounds. We architect disciplined wealth systems that adapt, anticipate, and allocate into the next regime before it becomes consensus.
          </p>

          {/* Optional: Add a professional Call-to-Action button here */}
          <button className="mt-8 px-8 py-3 bg-white text-gray-900 font-bold rounded  transition duration-300 shadow-lg mr-2 animate-underline-grow">
            <a href="#footer">  Request Investor Deck</a>
           
          </button>
          <button  className="mt-8 px-8 py-3 bg-white text-gray-900 font-bold rounded  transition duration-300 shadow-lg animate-underline-grow">
            <a href="#footer"> Join Investor Waitlist</a>
           
          </button>
        </div>

        {/* === RIGHT SIDE: IMAGE (Your .image) === */}
        <div className="image w-full md:w-3/5 mt-10 md:mt-0">
          <Image 
            src="/img/ovrizon-homepage.jpg" 
            alt="Ovrizon digital solutions illustration" 
            width={900}
            height={600}
            priority 
        className="rounded-lg shadow-2xl w-full h-auto" 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;