import SectionHeader from "./SectionHeader";

const opportunities = [
  {
    icon: "🏆",
    num: "100×",
    label: "Your Repetition Edge",
    body: "You have secured certain state grants over 100 times. You sat with the Connecticut Department of Labor to help build one from scratch. You know the Michigan Works grant like your home address. That knowledge cannot be bought, Googled, or replicated by a tech founder who just raised a seed round.",
  },
  {
    icon: "💡",
    num: "2",
    label: "Clients to Replace Your Salary",
    body: "Two retainer clients at $11,500 per month puts $276,000 per year in your hands. No performance reviews. No answering to a system. No commute. Just two aligned organizations who desperately need what only you have, on your schedule.",
  },
  {
    icon: "🚀",
    num: "$500K+",
    label: "Venture Portfolio Upside",
    body: "Beyond consulting, you have three parallel revenue vehicles already in motion: the DPS sole-source procurement with no RFP required, equity in Granted-type tech you are already advising, and the appraisal school that will be your true legacy. None require you to learn anything new.",
  },
];

const credentials = [
  { icon: "🏛️", text: "Former National Director, Workforce Programs, Trinity Health" },
  { icon: "🎯", text: "Founding Detroit Director, Center for Employment Opportunities" },
  { icon: "🤝", text: "GreenLight Fund Detroit Selection Advisory Council" },
  { icon: "📚", text: "Aspen Institute Economic Opportunity Fellow" },
  { icon: "⚖️", text: "Rewrote Fair Chance Hiring Policy Across 27-State Health System" },
  { icon: "🎓", text: "PMP · Six Sigma Green Belt · Career Development Facilitator" },
  { icon: "🔬", text: "Per Scholas Detroit Advisory Board Member" },
  { icon: "💎", text: "Alpha Kappa Alpha Sorority, Inc." },
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
        <div key={i} className="bg-card border border-border p-[30px_26px] relative overflow-hidden card-lift card-bar-reveal shadow-sm">
          <span className="text-[22px] mb-[14px] block">{opp.icon}</span>
          <div className="font-serif text-[58px] font-bold text-primary leading-none mb-[6px] tracking-tight">{opp.num}</div>
          <div className="text-[9px] font-bold tracking-[0.16em] uppercase text-ash mb-[10px]">{opp.label}</div>
          <p className="text-[13px] text-ash leading-[1.75]">{opp.body}</p>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mb-12">
      {credentials.map((cred, i) => (
        <div key={i} className="bg-card border border-border py-3 px-[14px] flex items-start gap-2 text-xs font-medium text-charcoal leading-[1.45] shadow-sm transition-all hover:border-primary hover:shadow-[0_4px_20px_hsla(173,85%,33%,0.1)]">
          <span className="text-[15px] flex-shrink-0 mt-px">{cred.icon}</span>
          {cred.text}
        </div>
      ))}
    </div>
  </section>
);

export default MarketReality;
