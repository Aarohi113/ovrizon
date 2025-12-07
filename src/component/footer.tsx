import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Left Section */}
        <div>
          <img 
            src="/img/Ovrizon-logo-removebg-preview.png" 
            alt="Company Logo" 
            className="w-20 mb-4"
          />
          <p className="text-gray-300 leading-relaxed">
            Ovrizon Asset Management is an India-origin global thesis capital house managing institutional-grade multi asset strategies for UHNI Investors, Family Offices and Ultra Growth Mandates.
          </p>

          <p className="mt-4 text-gray-400">+91 8810939967</p>
          <p className="text-gray-400">contact@ovrizon.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 neon-text">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-neon">Home</a></li>
            <li><a href="/about" className="hover:text-neon">About Us</a></li>
           
            <li><a href="" className="hover:text-neon">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4 neon-text">More...</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/investment" className="hover:text-neon">Invester center</a></li>
            <li><a href="/insights" className="hover:text-neon">Research & Insights</a></li>
            <li><a href="/insights" className="hover:text-neon">Onboarding Process</a></li>
           
          </ul>
        </div>

      </div>

      <p className="text-center text-gray-500 mt-12 text-sm">
        © {new Date().getFullYear()} Ovrizon. All Rights Reserved.
      </p>
    </footer>
  );
}
