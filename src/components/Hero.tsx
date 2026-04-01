const stats = [
  { num: "$276K", label: "Conservative Annual Floor" },
  { num: "26", label: "States of Policy Depth" },
  { num: "100×", label: "Michigan Grants Secured", teal: true },
  { num: "3", label: "Parallel Revenue Streams" },
  { num: "$0", label: "Cold Outreach Required" },
];

const Hero = () => (
  <section className="bg-dark px-6 md:px-[60px] pt-[72px] pb-[60px] border-b-[3px] border-primary relative overflow-hidden">
    <div className="absolute inset-0 hero-grid-pattern" />
    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,_hsla(173,85%,33%,0.1)_0%,_transparent_65%)] pointer-events-none" />
    <div className="max-w-[1100px] mx-auto relative z-10">
      <p className="text-xs font-bold tracking-[0.22em] uppercase text-primary mb-[18px] flex items-center gap-3">
        <span className="w-7 h-px bg-primary inline-block" />
        Strategic Growth Blueprint · AI Branding Lab, Inc.
      </p>
      <h1 className="font-serif text-[clamp(44px,6vw,82px)] font-bold text-white leading-[1.02] mb-5 max-w-[820px]">
        Everything you need<br />is already <em className="italic text-primary">inside you.</em>
      </h1>
      <p className="text-base text-white/[0.42] max-w-[580px] leading-[1.88] mb-[52px]">
        You have more intellectual capital than most consulting firms hold in their entire practice. This blueprint shows you exactly who to call, what to charge, and how to build <strong className="text-white/70 font-semibold">$30,000 in month one</strong> and a seven-figure business by year two. No cold outreach. No chasing. No corporate systems to answer to.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-5 border border-white/[0.06]">
        {stats.map((s, i) => (
          <div key={i} className="text-center py-6 px-3 border-r border-white/[0.06] last:border-r-0 transition-colors hover:bg-primary/[0.06]">
            <div className={`font-serif font-bold leading-none mb-[7px] ${s.teal ? 'text-primary text-[46px]' : 'text-white text-[40px]'}`}>
              {s.num}
            </div>
            <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/[0.28]">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
