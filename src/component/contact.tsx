import React from 'react';
// import './contact.css'; // Don't forget to create and import your CSS file

const ContactPage: React.FC = () => {
  return (
    <div className="contact-section">
      <div className="contact-content-container">
        
        {/* Main Heading */}
        <h1 className="contact-heading text-xl font-bold">CONTACT & DEAL FLOW :</h1>
        
        {/* --- Section 1: For Investors --- */}
        <div className="contact-card investor-card">
          <h2 className="contact-card-title text-xl font-bold ">For Private Investors and Family Offices</h2>
          <p className="contact-card-text">
            Partner with Ovrizon to build **institutionally-architected wealth systems** designed for resilience and performance across diverse market cycles. Our approach focuses on long-term capital preservation and growth.
          </p>
          <p className="contact-next-step">
            <strong>Next Step:</strong> Submit your interest below, and our dedicated Investor Relations desk will connect with you to discuss your objectives confidentially.
          </p>
        </div>

        {/* --- Section 2: For Sponsors / Deal Creators --- */}
        <div className="contact-card sponsor-card">
          <h2 className="contact-card-title text-xl font-bold ">For Sponsors, Developers, and Deal Creators</h2>
          <p className="contact-card-text">
            We actively evaluate high-quality private market deal flow across **India, the Gulf (GCC), and wider Asia**. Our focus is on bespoke opportunities in real assets and structured credit.
          </p>
          <p className="contact-next-step">
            <strong>Next Step:</strong> Submit comprehensive project, credit, real estate, or thematic opportunity decks for immediate review by our Capital Partnerships Desk.
          </p>
        </div>

        {/* --- Contact Channels Table --- */}
        <div className="contact-channels">
          <h3 className="channels-heading">Contact Channels</h3>
          <table className="channels-table">
            <thead>
              <tr>
                <th>Audience</th>
                <th>Primary Point of Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Private Investors</td>
                <td>Investor Relations Team</td>
              </tr>
              <tr>
                <td>Sponsors & Developers</td>
                <td>Deal Flow Origination Desk</td>
              </tr>
              <tr>
                <td>Strategic Partners</td>
                <td>Capital Partnerships Desk</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* --- CTA Buttons --- */}
        <div className="contact-cta-buttons">
          <button className="cta-button investor-cta animate-underline-grow">Submit Investor Inquiry</button>
          <button className="cta-button dealflow-cta animate-underline-grow">Submit Deal Flow Opportunity</button>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;