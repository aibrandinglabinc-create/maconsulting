const items = [
  "MA WORKFORCE SOLUTIONS",
  "FORMER NATIONAL DIRECTOR · TRINITY HEALTH",
  "26-STATE POLICY EXPERTISE",
  "DETROIT LEGACY. NATIONAL REACH.",
  "FAIR CHANCE HIRING ARCHITECT",
  "GRANT INTELLIGENCE LEADER",
  "$11,500 MONTHLY RETAINER",
  "APPRAISAL SCHOOL VISIONARY",
  "ASPEN INSTITUTE ECONOMIC OPPORTUNITY FELLOW",
];

const Ticker = () => (
  <div className="bg-dark overflow-hidden h-9 flex items-center border-b-2 border-primary">
    <div className="flex whitespace-nowrap ticker-animate">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="text-[9px] font-semibold tracking-[0.18em] uppercase px-7 text-white/35">
          <span className="text-primary mr-2">✦</span>{item}
        </span>
      ))}
    </div>
  </div>
);

export default Ticker;
