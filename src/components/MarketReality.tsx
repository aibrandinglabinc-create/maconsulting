import { Award, Lightbulb, TrendingUp, Landmark, Target, Handshake, BookOpen, Scale, GraduationCap, Microscope, Gem, ShieldCheck } from "lucide-react";
import SectionHeader from "./SectionHeader";

const opportunities = [
  {
    icon: Award,
    num: "100×",
    label: "Your Repetition Edge",
    body: "You have secured certain state grants over 100 times. You sat with the Connecticut Department of Labor to help build one from scratch. You know the Michigan Works grant like your home address. That knowledge cannot be bought, Googled, or replicated.",
  },
  {
    icon: Lightbulb,
    num: "2",
    label: "Clients to Replace Your Salary",
    body: "Two retainer clients at $11,500 per month puts $276,000 per year in your hands. No performance reviews. No answering to a system. No commute. Just two aligned organizations who desperately need what only you have, on your schedule.",
  },
  {
    icon: TrendingUp,
    num: "$500K+",
    label: "Venture Portfolio Upside",
    body: "Beyond consulting, you have three parallel revenue vehicles already in motion: the DPS sole-source procurement with no RFP required, equity in workforce ventures you are already advising, and the appraisal school that will be your true legacy. None require you to learn anything new.",
  },
];

const credentials = [
  { icon: Landmark, text: "Former National Director, Workforce Programs" },
  { icon: Target, text: "Founding Detroit Director, Center for Employment Opportunities" },
  { icon: Handshake, text: "GreenLight Fund Detroit Selection Advisory Council" },
  { icon: BookOpen, text: "Aspen Institute Economic Opportunity Fellow" },
  { icon: Scale, text: "Rewrote Fair Chance Hiring Policy Across 27-State Health System" },
  { icon: GraduationCap, text: "PMP · Six Sigma Green Belt · Career Development Facilitator" },
  { icon: Microscope, text: "Per Scholas Detroit Advisory Board Member" },
  { icon: Gem, text: "Alpha Kappa Alpha Sorority, Inc." },
];

const MarketReality = () => (
  <section>
    <SectionHeader
      eyebrow="The Market Reality"
      title={<>Nobody else in the country<br />holds <em className="italic text-primary">this combination.</em></>}
      subtitle="You do not need to compete for clients. You need to position correctly so the right clients find you. Here is what makes you irreplaceable."
    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-9">
      {opportunities.map((opp, i) => (
        <div key={i} className="group relative bg-dark border border-white/[0.06] p-[34px_28px] overflow-hidden cursor-pointer transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_24px_80px_-16px_hsla(173,85%,33%,0.2)]">
          {/* Teal top border reveal */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
          {/* Teal bottom border reveal */}
          <div className="absolute bottom-0 right-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right" />
          {/* Left accent line */}
          <div className="absolute top-0 left-0 h-full w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-100 origin-top" />
          {/* Right accent line */}
          <div className="absolute top-0 right-0 h-full w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-100 origin-bottom" />

          <opp.icon className="w-7 h-7 mb-5 text-primary/40 group-hover:text-primary transition-colors duration-700" strokeWidth={1.5} />
          <div className="font-serif text-[54px] font-bold text-primary leading-none mb-2 tracking-tight">{opp.num}</div>
          <div className="text-xs font-bold tracking-[0.18em] uppercase text-white/30 group-hover:text-primary/80 mb-3 transition-colors duration-700">{opp.label}</div>
          <p className="text-sm text-white/35 group-hover:text-white/70 leading-[1.8] transition-colors duration-700">{opp.body}</p>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-12">
      {credentials.map((cred, i) => (
        <div key={i} className="group relative bg-dark border border-white/[0.06] py-6 px-5 flex flex-col items-center text-center text-sm font-medium text-white leading-[1.5] overflow-hidden cursor-pointer transition-all duration-700 hover:shadow-[0_12px_40px_-10px_hsla(173,85%,33%,0.15)] hover:scale-[1.02]">
          {/* Teal frame reveal on hover */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          <div className="absolute bottom-0 right-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
          <cred.icon className="w-6 h-6 mb-3 text-primary/30 group-hover:text-primary transition-colors duration-700" strokeWidth={1.5} />
          <span className="group-hover:text-primary/90 transition-colors duration-700">{cred.text}</span>
        </div>
      ))}
    </div>
  </section>
);

export default MarketReality;
