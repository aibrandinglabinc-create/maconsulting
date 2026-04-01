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

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-9">
      {opportunities.map((opp, i) => (
        <div key={i} className="group bg-dark border border-white/[0.08] p-[30px_26px] relative overflow-hidden card-bar-reveal shadow-sm hover:bg-card hover:border-primary/30 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_hsla(173,85%,33%,0.25)] transition-all duration-700 ease-out cursor-pointer">
          <opp.icon className="w-7 h-7 mb-4 text-primary/60 group-hover:text-primary transition-colors duration-700" strokeWidth={1.5} />
          <div className="font-serif text-[58px] font-bold text-primary leading-none mb-[6px] tracking-tight">{opp.num}</div>
          <div className="text-sm font-bold tracking-[0.16em] uppercase text-white/50 group-hover:text-ink mb-[10px] transition-colors duration-700">{opp.label}</div>
          <p className="text-base text-white/40 group-hover:text-foreground leading-[1.75] transition-colors duration-700">{opp.body}</p>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mb-12">
      {credentials.map((cred, i) => (
        <div key={i} className="group bg-dark border border-white/[0.08] py-3 px-[14px] flex items-start gap-3 text-base font-medium text-white/50 leading-[1.45] shadow-sm transition-all duration-400 hover:bg-card hover:border-primary/30 hover:text-ink hover:shadow-[0_4px_20px_hsla(173,85%,33%,0.1)]">
          <cred.icon className="w-5 h-5 flex-shrink-0 mt-px text-primary/50 group-hover:text-primary transition-colors duration-400" strokeWidth={1.5} />
          {cred.text}
        </div>
      ))}
    </div>
  </section>
);

export default MarketReality;
