import React from 'react';
// import './strategy.css'; // Remember to remove or comment this if using global.css

// --- Data Structure for a single Insight Card ---
interface IInsightCard {
  id: number;
  category: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

// --- Insight Card Data (Five Cards) ---
const insightCards: IInsightCard[] = [
  {
    id: 1,
    category: 'INVESTMENT STRATEGY 01',
    title: 'Global Equities Strategies',
    description: 'We allocate into developed markets and selective emerging innovation economies - focusing on exponential tech cycles, AI, energy transition, and global industry structural shifts.',
    linkText: 'Read our global equities strategy',
    linkUrl: '',
  },
  {
    id: 2,
    category: 'INVESTMENT STRATEGY 02',
    title: 'India Value + Growth Strategy',
    description: 'India is entering a long structural upcycle driven by infrastructure build-out, BFSI strength, manufacturing shift, consumption depth and formalisation. We invest in high quality businesses with scalable earings compounding.',
    linkText: 'Read our weekly market commentary',
    linkUrl: '/global-weekly-commentary',
  },
  {
    id: 3,
    category: 'INVESTMENT STRATEGY 03',
    title: 'Private Credit Strategy',
    description: 'Structured SME / mid-market lending with asset-backing, covenant strength and cashflow visibility. Strategic credit is one of the most powerful asymmetrical return engines available today with lower correlation.',
    linkText: 'Explore model portfolios',
    linkUrl: '/advisor-models',
  },
  {
    id: 4,
    category: 'INVESTMENT STRATEGY 04',
    title: 'Real Estate Private Markets Strategy',
    description: 'Capital allocation into development financing + income yielding commercial real estate - with institutional underwriting, risk controls and optionality - driven structuring.',
    linkText: 'Download the report',
    linkUrl: '/esg-report',
  },
  {
    id: 5,
    category: 'INVESTMENT STRATEGY 05',
    title: 'Alternative & Thematic Strategy',
    description: 'We selectively deploy into frontier opportunity sets - defense, space & aerospace, energy transition, precision agriculture, global agri biotech, and next-gen infrastructure.',
    linkText: 'View research brief',
    linkUrl: '/digital-assets-brief',
  },
];

// --- Insight Cards Component ---
const Strategy: React.FC = () => {
  return (
    <section className="insights-section">
      <div className="page-header-text">
        <p>Investment Strategies :</p> 
        
      </div>
      
      {/* The grid is divided into two rows/groups for layout control */}
      <div className="insights-grid">
        {/* Cards 1-4: The main 4-card layout */}
        {insightCards.slice(0, 4).map((card) => (
          <div key={card.id} className="insight-card-4-col"> {/* New class for 4-column items */}
            <p className="insight-card-category">{card.category}</p>
            <h2 className="insight-card-title">{card.title}</h2>
            <p className="insight-card-description">{card.description}</p>
            <a href={card.linkUrl} className="insight-card-link">
              <span className="arrow-icon">&gt;</span> {card.linkText}
            </a>
          </div>
        ))}
        
        {/* Card 5: The centered card on the next line */}
        {insightCards.slice(4, 5).map((card) => (
          <div key={card.id} className="insight-card-center"> {/* New class for the centered item */}
            <p className="insight-card-category">{card.category}</p>
            <h2 className="insight-card-title">{card.title}</h2>
            <p className="insight-card-description ">{card.description}</p>
           <a href={card.linkUrl} className="insight-card-link ">
    <span className="arrow-icon">&gt;</span> {card.linkText}
</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Strategy;

