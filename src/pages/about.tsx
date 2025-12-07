import Header from "@/component/header"; 
import Footerend from "@/component/footerend"; 
import Introsection from '@/component/introsection';
import Footer from "@/component/footer";

export default function AboutPage() {
  return (
    <>
      <Header />

     <div className="w-full">

      {/* ==================== HERO SECTION ==================== */}
      <section className="bg-black text-white w-full flex flex-col md:flex-row items-stretch">
        
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 mt-15 ">
            About Ovrizon
          </h1>

          
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 h-[350px] md:h-auto mt-40 mb-30 mr-10">
          <p className="text-lg leading-relaxed opacity-90">
            Ovrizon Asset Management is an India-origin global thesis capital
            house managing institutional-grade multi asset strategies for UHNI 
            Investors, Family Offices, and Ultra Growth Mandates.
          </p>

          <p className="text-lg mt-4 leading-relaxed opacity-90">
            We do not chase noise. We study cycles. Our proprietary Multi-Cycle
            Allocation Matrix enables disciplined capital rotation across themes,
            asset classes and macro regimes — capturing asymmetric return
            potential with controlled downside risk.
          </p>
        </div>
      </section>


      {/* ==================== NAV STRIP LIKE BLACKROCK ==================== */}
      <div className="bg-[#CCFF00] text-black font-medium flex flex-wrap justify-center gap-10 py-4">
        <button className="hover:opacity-70">Identity</button>
        <button className="hover:opacity-70">Philosophy</button>
        <button className="hover:opacity-70">Our Principles</button>
        <button className="hover:opacity-70">Why Ovrizon</button>
      </div>


      {/* ==================== PRINCIPLES SECTION ==================== */}
      <section className="bg-white text-black px-8 md:px-20 py-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">
          Operating Principles
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <PrincipleCard
            title="Research Before Allocation"
            text="Every decision begins with fundamental, cycle-based research."
          />

          <PrincipleCard
            title="Risk Discipline Over Narrative Euphoria"
            text="Noise never drives our allocation. Risk frameworks do."
          />

          <PrincipleCard
            title="Multi-Horizon Thinking"
            text="We operate across timeframes to capture structural opportunities."
          />

          <PrincipleCard
            title="Anti-Consensus Early Detection"
            text="We position early—before cycles turn—where exponential wealth is built."
          />

          <PrincipleCard
            title="Trust, Transparency & Alignment"
            text="Our alignment with LP capital builds long-term conviction."
            fullWidth
          />
        </div>

      </section>
    </div>
      <Introsection/>
      <Footer/>
      <Footerend />
    </>
  );
}

interface PrincipleCardProps {
  title: string;
  text: string;
  fullWidth?: boolean;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({ title, text, fullWidth }) => {
  return (
    <div
      className={`p-6 border-l-4 border-[#CCFF00] bg-gray-50 rounded-md ${
        fullWidth ? "md:col-span-2" : ""
      }`}
    >
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="opacity-80">{text}</p>
    </div>
  );
};
