const items = [
  "MA CONSULTING",
  "FORMER NATIONAL DIRECTOR · TRINITY HEALTH",
  "26-STATE POLICY EXPERTISE",
  "DETROIT LEGACY · NATIONAL REACH",
  "FAIR CHANCE HIRING ARCHITECT",
  "GRANT INTELLIGENCE LEADER",
  "$11,500 MONTHLY RETAINER",
  "ASPEN INSTITUTE FELLOW",
  "DPS SOLE-SOURCE VENDOR IN PROGRESS",
  "APPRAISAL SCHOOL FOUNDER",
];

const Ticker = () => (
  <div className="bg-ink overflow-hidden h-[34px] flex items-center border-b border-primary/30 relative z-[300]">
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-[tglide_3s_ease-in-out_infinite]" />
    <div className="flex whitespace-nowrap ticker-animate">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="text-[9px] font-semibold tracking-[0.22em] uppercase px-[30px] text-white/30">
          <span className="text-primary mr-2 text-[6px] align-middle">◆</span>{item}
        </span>
      ))}
    </div>
  </div>
);

export default Ticker;
