// src/components/NewsFeatureSection.tsx

import React from 'react';
import Link from 'next/link';
// Assuming your Hero Section uses bg-gray-950 or bg-black. We'll use white for contrast.

const NewsFeatureSection: React.FC = () => {
  return (
    // Outer section wrapper: White background for contrast against the dark Hero Section
    <section className="w-full bg-white py-20">
      
      {/* Content wrapper: Max width and centering */}
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        {/* Two-Column Grid: Stacks on mobile, splits on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* === COLUMN 1: MAIN NEWS ANNOUNCEMENT (Takes 2/3 width on desktop) === */}
          <div className="lg:col-span-2 text-gray-900 pr-0 lg:pr-10 border-b lg:border-b-0 lg:border-r border-gray-200 pb-8 lg:pb-0">
            
            <p className="text-xl font-bold text-gray-800 uppercase mb-2">
              WHY OVRIZON:
            </p>
            
            {/* Main Title: Big, bold text */}
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
             Most capital allocators react after the trend forms.<br/>
             We position before cycles turn-where  exponential wealth is actually built.
            </h2>
            
            {/* Subtitle/Description */}
            <p className="text-lg text-gray-700 mb-8 max-w-2xl">
              Trust | Transparency | Alignment.
            </p>
            
           
            
          </div>
          
          {/* === COLUMN 2: PROMOTIONAL/SUBSCRIBE BLOCK (Takes 1/3 width on desktop) === */}
          <div className="bg-black text-white p-8 md:p-10 lg:p-12 self-start border-b-4 border-[#DDFF00] ">
            
            {/* Promotional Headline */}
            <h3 className="text-sm md:text-lg font-bold leading-snug mb-6 ">
              As capital becomes data-driven and borders become irrelevant - India will be one of the wealth creation capitals of the future. We originate from India, operate with global perspective, and allocate capital across public markets, private markets and alternative opportunity sets.
            </h3>
            
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsFeatureSection;