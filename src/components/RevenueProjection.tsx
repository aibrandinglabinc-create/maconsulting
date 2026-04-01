import { useState } from "react";
import SectionHeader from "./SectionHeader";

const scenarios = {
  conservative: {
    data: [30, 30, 34, 40, 45, 52, 60, 68, 78, 92, 110, 138],
    kpis: { runRate: "$138K/mo", annual: "$1.66M", target: "ON TRACK" },
  },
  moderate: {
    data: [30, 38, 48, 58, 72, 85, 100, 118, 140, 165, 195, 230],
    kpis: { runRate: "$230K/mo", annual: "$2.76M", target: "ON TRACK" },
  },
  aggressive: {
    data: [30, 45, 65, 88, 115, 150, 190, 240, 300, 360, 420, 500],
    kpis: { runRate: "$500K/mo", annual: "$6.0M", target: "ON TRACK" },
  },
};

const months = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];

type Scenario = keyof typeof scenarios;

const RevenueProjection = () => {
  const [active, setActive] = useState<Scenario>("moderate");
  const data = scenarios[active].data;
  const kpis = scenarios[active].kpis;
  const max = Math.max(...data);

  return (
    <section>
      <SectionHeader
        eyebrow="12-Month Revenue Projection"
        title={<>Three paths to $30,000 <em className="italic text-primary">in month one.</em></>}
        subtitle="Toggle between scenarios to see your projected monthly revenue trajectory. The moderate path is the recommendation. Your Hot lead list alone closes it."
      />

      <div className="bg-card border border-border p-9 mb-5 shadow-md">
        <div className="flex justify-between items-start flex-wrap gap-[14px] mb-7">
          <div>
            <div className="font-serif text-[26px] font-bold text-ink">Revenue Trajectory</div>
            <div className="text-[11px] text-ash mt-[3px]">Monthly gross revenue by scenario · April 2026 to March 2027</div>
          </div>
          <div className="flex gap-[3px]">
            {(["conservative", "moderate", "aggressive"] as Scenario[]).map((s) => (
              <button
                key={s}
                onClick={() => setActive(s)}
                className={`font-sans text-[9px] font-semibold tracking-[0.12em] uppercase px-4 py-2 border transition-all ${
                  active === s
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-transparent text-ash hover:border-primary hover:text-primary"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-end h-[200px] gap-1 px-[2px]">
          {data.map((val, i) => {
            const isPeak = i === data.length - 1;
            const height = `${(val / max) * 100}%`;
            return (
              <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                <span className={`text-[8px] mb-1 whitespace-nowrap font-medium ${isPeak ? 'text-primary font-bold' : 'text-ash'}`}>
                  ${val}K
                </span>
                <div
                  className={`w-full max-w-[44px] rounded-t-sm chart-bar-transition min-h-[2px] ${
                    isPeak
                      ? "bg-gradient-to-b from-primary to-primary-deep"
                      : "bg-gradient-to-b from-charcoal to-dark-surface"
                  }`}
                  style={{ height }}
                />
              </div>
            );
          })}
        </div>
        <div className="flex gap-1 pt-2 px-[2px]">
          {months.map((m) => (
            <div key={m} className="flex-1 text-center text-[8px] text-ash">{m}</div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6 pt-5 border-t border-border">
          <div>
            <div className="text-[9px] text-ash tracking-[0.18em] uppercase mb-[3px]">Month 12 Run Rate</div>
            <div className="font-serif text-[30px] font-bold text-ink">{kpis.runRate}</div>
          </div>
          <div>
            <div className="text-[9px] text-ash tracking-[0.18em] uppercase mb-[3px]">Annualized from Month 12</div>
            <div className="font-serif text-[30px] font-bold text-primary">{kpis.annual}</div>
          </div>
          <div>
            <div className="text-[9px] text-ash tracking-[0.18em] uppercase mb-[3px]">$30K Month-One Target</div>
            <div className="font-serif text-[30px] font-bold text-[#2d8a4e]">{kpis.target}</div>
          </div>
        </div>
      </div>

      <div className="bg-dark p-7 md:p-[28px_36px] mb-7 grid grid-cols-1 md:grid-cols-3 gap-7 border-l-[3px] border-primary">
        <div>
          <div className="text-[9px] tracking-[0.18em] uppercase font-bold text-primary mb-[10px]">Conservative Scenario</div>
          <p className="text-xs text-white/[0.38] leading-[1.8]">One retainer + VIP Grant Strategy Day + hourly advisory block. Warm-network only. Assumes 30-day close cycle. $30,000 month one. $138,000 by month 12 run rate. Zero cold outreach required.</p>
        </div>
        <div>
          <div className="text-[9px] tracking-[0.18em] uppercase font-bold text-primary mb-[10px]">Moderate Scenario (Recommended)</div>
          <p className="text-xs text-white/[0.38] leading-[1.8]">Two retainers locked by day 30 plus ongoing VIP days and corporate workshops. Commission-only SDR activating cold ICA 3 leads. LinkedIn content warming the pipeline. $276K recurring plus project revenue by Q3.</p>
        </div>
        <div>
          <div className="text-[9px] tracking-[0.18em] uppercase font-bold text-primary mb-[10px]">Aggressive Scenario</div>
          <p className="text-xs text-white/[0.38] leading-[1.8]">Three retainers plus Granted equity advisory plus DPS procurement contract activated. Full venture portfolio running. Requires 15 to 20 hours per week across all streams. $500K+ run rate by month nine.</p>
        </div>
      </div>
    </section>
  );
};

export default RevenueProjection;
