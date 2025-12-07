import Header from "@/component/header";
import React from "react";
import Footer from "@/component/footer";

// Next.js + React + TSX page for "Investor Centre"
// Clean, professional asset‑management style with Tailwind

export default function InvestorCentrePage() {
  return (
    <>
   <Header/>
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="bg-white text-black py-16 mt-25">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h1 className="text-4xl md:text-5xl font-extrabold">Investor Centre</h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl">
            A structured, transparent and disciplined onboarding process for qualified investors.
          </p>
        </div>
      </section>

      {/* ONBOARDING PROCESS */}
      <section className="container mx-auto px-6 md:px-12 lg:px-24 mt-12">
        <h2 className="text-2xl font-bold">Onboarding Process</h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              step: "1. Preliminary Qualification",
              desc: "Basic investor profiling and minimum capital alignment.",
            },
            {
              step: "2. Strategy Fit Discussion",
              desc: "Understanding objectives, constraints and growth mandates.",
            },
            {
              step: "3. Risk Profiling",
              desc: "Mapping investor risk appetite with portfolio structures.",
            },
            {
              step: "4. Structure Selection",
              desc: "Choosing the right mandate model and regulatory format.",
            },
            {
              step: "5. Capital Mandate Activation",
              desc: "Final execution, documentation and onboarding activation.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-2xl bg-black p-6 shadow-sm border border-[#ddff00]/40 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-lg">{item.step}</h3>
              <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CAPITAL REQUIREMENT + RISK DISCLOSURE */}
      <section className="container mx-auto px-6 md:px-12 lg:px-24 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold">Minimum Capital Requirements</h2>
            <p className="mt-4 text-gray-400 text-sm">
              Minimum capital thresholds are shared during the qualification stage based on
              investor type, strategy, risk structure and regulatory framework.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Risk Disclosure</h2>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              All investments carry risk. Past performance is not indicative of future returns.
              Our objective is not to eliminate risk — but to engineer superior risk‑adjusted
              outcomes through disciplined capital allocation across cycles.
            </p>
          </div>
        </div>
      </section>

      {/* MANDATE TYPES */}
      <section className="container mx-auto px-6 md:px-12 lg:px-24 mt-16">
        <h2 className="text-2xl font-bold">Mandate Types</h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Multi‑Asset Mandate", "Public Market Mandate", "Private Market Mandate", "Hybrid Mandate (Blended Model)"].map(
            (item) => (
              <div
                key={item}
                className="rounded-2xl bg-black p-6 shadow-sm border border-[#ddff00]/40 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-lg">{item}</h3>
              </div>
            )
          )}
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="container mx-auto px-6 md:px-12 lg:px-24 mt-16">
        <h2 className="text-2xl font-bold">Documents Available On Request</h2>

        <ul className="mt-6 space-y-3 text-gray-700 text-sm">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-600" /> Firm Overview Deck
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-600" /> Capital Framework Note
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-600" /> Regulatory Due Diligence Kit
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 md:px-12 lg:px-24 mt-20 mb-20">
        <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 p-8 text-white shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Request Investor Onboarding Call</h3>
              <p className="mt-1 text-white/90 text-sm max-w-md">
                Our team will connect with you to understand your profile and investment
                objectives.
              </p>
            </div>

            <a
              href="#footer"
              className="rounded-xl bg-white px-6 py-3 font-medium text-indigo-700 shadow-md hover:bg-gray-100"
            >
              Schedule Call
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer/>

     </>
  );
}
