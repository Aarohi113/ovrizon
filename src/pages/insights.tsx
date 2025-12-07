import Header from "@/component/header";
import React, { useState } from "react";
import Footerend from "@/component/footerend";
import Footer from "@/component/footer";

// Next.js + React + Tailwind CSS + TypeScript single-file page component
// Default export: ResearchInsightsPage
// Notes: Tailwind should be configured in your Next project. This component
// is self-contained and uses mock data. Replace mock data with real fetch calls
// to your CMS/API as needed.

type Article = {
  id: string;
  title: string;
  excerpt: string;
  type: "Weekly" | "Sector" | "Quarterly" | "Real Estate" | "Alternative" | "India";
  date: string; // ISO
  author?: string;
  readTime?: string;
  tags?: string[];
};

const MOCK_ARTICLES: Article[] = [
  {
    id: "w-1",
    title: "Global Macro Weekly: Inflation Signals to Watch",
    excerpt:
      "A quick rundown of the economic indicators and policy moves shaping markets this week.",
    type: "Weekly",
    date: "2025-11-10",
    author: "Research Desk",
    readTime: "4 min",
    tags: ["macro", "inflation"],
  },
  {
    id: "s-1",
    title: "Sector Deep Dive: Indian Financials — Where Value Hides",
    excerpt: "Valuation, credit cycles and secular drivers for banks and NBFCs in India.",
    type: "Sector",
    date: "2025-10-23",
    author: "Sector Team",
    readTime: "9 min",
    tags: ["financials", "india"],
  },
  {
    id: "q-1",
    title: "Capital Cycle Letter — Q3 2025",
    excerpt: "How capital is rotating across growth and value this quarter.",
    type: "Quarterly",
    date: "2025-09-30",
    author: "Strategy Group",
    readTime: "12 min",
    tags: ["capital cycle"],
  },
  {
    id: "re-1",
    title: "Real Estate Intelligence: Office Demand in Tier-2 Cities",
    excerpt: "Demand drivers, supply timelines and investment implications.",
    type: "Real Estate",
    date: "2025-08-14",
    author: "REPM",
    readTime: "7 min",
    tags: ["real estate", "india"],
  },
  {
    id: "a-1",
    title: "Alternative Opportunity Paper: Digitally Native Brands Fund",
    excerpt: "A framework to evaluate direct-to-consumer brand investments.",
    type: "Alternative",
    date: "2025-07-01",
    author: "Alternatives",
    readTime: "8 min",
    tags: ["alternatives", "consumer"],
  },
  {
    id: "in-1",
    title: "India Structural Growth Themes: Urban Consumption",
    excerpt: "Long-term thesis on consumption-led urban India growth.",
    type: "India",
    date: "2025-06-10",
    author: "Macro Team",
    readTime: "6 min",
    tags: ["india", "structural"],
  },
];

export default function ResearchInsightsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<string | "All">("All");
  const [selected, setSelected] = useState<Article | null>(null);

  const types = ["All", ...Array.from(new Set(MOCK_ARTICLES.map((a) => a.type)))];

  const filtered = MOCK_ARTICLES.filter((a) => {
    const matchesType = filter === "All" || a.type === filter;
    const matchesQuery =
      query.trim() === "" ||
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      (a.tags || []).some((t) => t.toLowerCase().includes(query.toLowerCase()));
    return matchesType && matchesQuery;
  }).sort((x, y) => (x.date < y.date ? 1 : -1));

  return (
   <>
   <Header/>
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl mt-30 mb-15">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Research & Insights
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300">
              Weekly notes, sector deep dives, capital cycle letters and private market
              intelligence — our open-source trust layer for investors.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#articles"
                className="inline-block rounded-lg bg-white/10 px-4 py-2 text-white ring-1 ring-white/10 animate-underline-grow"
              >
                Browse Research
              </a>
              
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section id="articles" className="container mx-auto px-6 md:px-12 lg:px-24 -mt-10">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          {/* <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <label htmlFor="search" className="sr-only">
                Search research
              </label>
              <div className="relative">
                <input
                  id="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search papers, themes or tags (e.g. inflation, India, RE)"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="rounded-xl border border-gray-200 px-3 py-2 shadow-sm"
              >
                {types.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>

              <div className="hidden md:block text-sm text-gray-500">Showing {filtered.length} results</div>
            </div>
          </div> */}

          {/* Grid of cards */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a) => (
              <article
                key={a.id}
                onClick={() => setSelected(a)}
                className="cursor-pointer rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                    {a.type}
                  </span>
                  
                </div>

                <h3 className="mt-4 text-lg font-semibold leading-snug">{a.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{a.excerpt}</p>

                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <div>{a.author}</div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs">{a.readTime}</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m2 4h-1v-4h-1m6-1a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {a.tags?.map((t) => (
                    <span key={t} className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="mt-8 rounded-lg border border-dashed border-gray-200 p-8 text-center text-gray-500">
              No results found. Try a different keyword or reset filters.
            </div>
          )}
        </div>
      </section>

      {/* Selected modal / reader */}
      {selected && (
        <aside className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSelected(null)} />

          <div className="relative z-10 w-full max-w-3xl rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold">{selected.title}</h2>
                <div className="mt-1 text-sm text-gray-500">
                  {selected.author} • {new Date(selected.date).toLocaleDateString()} • {selected.readTime}
                </div>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="ml-4 rounded-md border border-gray-200 px-3 py-2 text-sm"
              >
                Close
              </button>
            </div>

            <div className="mt-6 prose max-w-none text-gray-700">
              <p>
                {selected.excerpt} — replace this area with the full article content. In a real
                deployment you’d fetch the full body from your CMS and render markdown/html
                here. Consider using a rich text renderer for structured content.
              </p>

              <h4 className="mt-6">Key takeaways</h4>
              <ul>
                <li>High-level bullet one summarizing the note.</li>
                <li>Implication for asset allocation and risk management.</li>
                <li>Actionable idea or next-step research.</li>
              </ul>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex gap-2">
                  {selected.tags?.map((t) => (
                    <span key={t} className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* Subscribe CTA */}
      {/* <section id="subscribe" className="container mx-auto px-6 md:px-12 lg:px-24 mt-10 mb-20">
        <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 p-6 text-white shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold">Stay informed</h3>
              <p className="mt-1 text-sm text-white/90">Weekly highlights from our research desk.</p>
            </div>

            <form className="flex w-full max-w-md gap-2 md:w-auto">
              <input
                placeholder="Enter email"
                className="flex-1 rounded-xl border border-white/30 px-4 py-2 text-gray-900"
              />
              <button className="rounded-xl bg-white px-4 py-2 font-medium text-indigo-700">Subscribe</button>
            </form>
          </div>
        </div>
      </section> */}
    </main>
    <Footer/>
    <Footerend />
    </>
  );
}
