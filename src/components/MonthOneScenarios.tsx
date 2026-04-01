import SectionHeader from "./SectionHeader";

const MonthOneScenarios = () => (
  <section>
    <SectionHeader
      eyebrow="Month-One Scenarios"
      title={<>$30,000 in 30 days is<br /><em className="italic text-primary">the floor, not the ceiling.</em></>}
      subtitle="Three deal combinations get you there. The recommended path closes on two warm-network conversations."
    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
      {/* Scenario A */}
      <div className="bg-card border-2 border-primary p-7 shadow-md card-lift relative">
        <span className="absolute top-[18px] right-[18px] text-xs font-bold tracking-[0.1em] uppercase px-[10px] py-1 bg-primary text-white">Recommended</span>
        <div className="text-xs font-bold tracking-[0.15em] uppercase text-ash mb-3">Scenario A</div>
        <div className="font-serif text-[54px] font-bold text-ink leading-none mb-1 tracking-tight">$30,000</div>
        <div className="text-sm text-ash mb-5">Month one target</div>
        {[
          ["Retainer Client A (80 hrs)", "$11,500"],
          ["Retainer Client B (80 hrs)", "$11,500"],
          ["VIP Grant Strategy Day", "$5,000"],
          ["Hourly advisory block", "$2,000"],
        ].map(([label, amt], i) => (
          <div key={i} className="flex justify-between items-center py-[9px] border-b border-border text-sm text-charcoal last:border-b-0">
            {label}<span className="font-bold text-ink">{amt}</span>
          </div>
        ))}
      </div>

      {/* Scenario B */}
      <div className="bg-card border border-border p-7 shadow-sm card-lift">
        <div className="text-xs font-bold tracking-[0.15em] uppercase text-ash mb-3">Scenario B — High-Ticket Mix</div>
        <div className="font-serif text-[54px] font-bold text-ink leading-none mb-1 tracking-tight">$30,000</div>
        <div className="text-sm text-ash mb-5">Month one target</div>
        {[
          ["Retainer Client A", "$11,500"],
          ["Grant Readiness Sprint (50 hrs)", "$7,500"],
          ["Fair Chance Hiring Workshop", "$6,000"],
          ["Workforce advisory", "$5,000"],
        ].map(([label, amt], i) => (
          <div key={i} className="flex justify-between items-center py-[9px] border-b border-border text-sm text-charcoal last:border-b-0">
            {label}<span className="font-bold text-ink">{amt}</span>
          </div>
        ))}
      </div>

      {/* Scenario C */}
      <div className="bg-card border border-border p-7 shadow-sm card-lift">
        <div className="text-xs font-bold tracking-[0.15em] uppercase text-ash mb-3">Scenario C — Three Retainers</div>
        <div className="font-serif text-[54px] font-bold text-ink leading-none mb-1 tracking-tight">$34,500</div>
        <div className="text-sm text-ash mb-5">Month one target</div>
        {[
          ["Retainer Client A", "$11,500"],
          ["Retainer Client B", "$11,500"],
          ["Retainer Client C", "$11,500"],
        ].map(([label, amt], i) => (
          <div key={i} className="flex justify-between items-center py-[9px] border-b border-border text-sm text-charcoal last:border-b-0">
            {label}<span className="font-bold text-ink">{amt}</span>
          </div>
        ))}
        <p className="text-sm text-ash italic mt-3 leading-[1.6]">240 billable hours per month. Evaluate bandwidth before committing to all three simultaneously.</p>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
      {[
        { num: "$276K", label: "Conservative Annual", note: "Two retainers sustained 12 months. No workshops, no VIP days. This alone replaces your Trinity Health salary with full autonomy." },
        { num: "$434K", label: "Moderate Annual", note: "Three retainers plus eight VIP Grant Strategy Days plus four corporate workshops across the year. Your month-six target." },
        { num: "$500K+", label: "DPS Procurement", note: "Foundation-funded. No RFP required. Sole-source designation available. Howard's warehouse background plus Rachel's open door makes this executable within 90 days." },
        { num: "Equity", label: "Advisory Upside", note: "Two to five percent equity in a funded workforce company. Not a consulting deal. A wealth-building play that compounds on knowledge you already hold." },
      ].map((item, i) => (
        <div key={i} className="bg-card border border-border p-[22px] shadow-sm card-lift">
          <div className="font-serif text-[34px] font-bold text-primary mb-1 leading-none">{item.num}</div>
          <div className="text-xs font-bold tracking-[0.12em] uppercase text-ash mb-2">{item.label}</div>
          <p className="text-sm text-ash leading-[1.65]">{item.note}</p>
        </div>
      ))}
    </div>
  </section>
);

export default MonthOneScenarios;
