import { Globe, GitBranch, Gem, Settings, Users } from "lucide-react";

const pillars = [
  {
    num: "01",
    Icon: Globe,
    title: "The Authority Website",
    body: "A high-performance professional hub anchoring you as a fractional executive, not an hourly contractor. Interactive blueprint, tabbed navigation, Locomotive scroll effects.",
  },
  {
    num: "02",
    Icon: GitBranch,
    title: "Segmented Funnels",
    body: "Dedicated conversion paths for each of your three ICAs. Workforce Venture Partners, National Nonprofit Expanders, and Healthcare Reformers each enter through a tailored experience.",
  },
  {
    num: "03",
    Icon: Gem,
    title: "The $5,000 VIP Intensive",
    body: "A specialized landing page for the VIP Grant Strategy Day, framed as a high-leverage investment that replaces weeks of internal planning. Priced to filter. Built to convert.",
  },
  {
    num: "04",
    Icon: Settings,
    title: "Catalyst CRM & Outreach",
    body: "Data powering all 50 high-value leads loaded into the C.A.T.A.L.Y.S.T.™ system, tagged by heat level, and activated through automated warm email sequences. Zero cold outreach required.",
  },
  {
    num: "05",
    Icon: Users,
    title: "SDR Integration",
    body: "A portal for your commission-only appointment setter to book calls directly into your calendar. Removes every friction point from cold outreach. You show up to the call. That is all.",
  },
];

const tiers = [
  {
    name: "Strategic Implementation",
    cat: "Fractional Executive Placement",
    activation: "Embedded advisory positioned as a fractional Chief Workforce Officer. Long-term retainer with full C.A.T.A.L.Y.S.T.™ CRM and onboarding workflow behind every client.",
    revenue: "$11,500/mo",
    revSub: "Per Client · Up to 80 hrs",
  },
  {
    name: "VIP Grant Strategy",
    cat: "High-ROI Funding Roadmaps",
    activation: "Six-hour intensive delivering a complete funding landscape map. Positioned as a paid discovery process that converts to retainer at a high rate. $5,000 is not an expense. It is a 50× to 100× investment.",
    revenue: "$5,000+",
    revSub: "Per Engagement",
  },
  {
    name: "Venture Advisory",
    cat: "IP Protection & Equity Partnerships",
    activation: "Core product advisory for workforce venture founders. Equity stake demanded before sharing practitioner knowledge. This is not a consulting deal. This is a wealth-building position.",
    revenue: "Retainer",
    revSub: "+ 2–5% Equity Stake",
  },
  {
    name: "Fair Chance Blueprint",
    cat: "Corporate ROI & Compliance Strategy",
    activation: "The exact policy blueprint built for a 27-state health system, applied to corporate HR and healthcare systems. Enters as a workshop, converts to a retainer within 60 days.",
    revenue: "$5–8K",
    revSub: "Workshop → Retainer",
  },
];

const CatalystSection = () => (
  <section className="bg-ink py-[120px] relative overflow-hidden">
    {/* Background grid */}
    <div className="absolute inset-0 bg-[linear-gradient(hsla(173,85%,33%,0.03)_1px,transparent_1px),linear-gradient(90deg,hsla(173,85%,33%,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
    {/* Center glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,_hsla(173,85%,33%,0.07)_0%,_transparent_65%)] pointer-events-none" />

    <div className="max-w-[1160px] mx-auto px-6 md:px-[60px] relative z-[2]">
      {/* Header */}
      <p className="text-[9px] font-bold tracking-[0.26em] uppercase text-primary mb-4 flex items-center gap-[14px]">
        <span className="w-7 h-px bg-primary inline-block" />
        The C.A.T.A.L.Y.S.T.™ Ecosystem
      </p>
      <h2 className="font-serif text-[clamp(36px,5vw,68px)] font-light text-white leading-[1.05] tracking-[-0.01em] uppercase mb-4">
        The Digital<br />
        <strong className="font-bold">Architecture</strong><br />
        <em className="italic text-primary normal-case">behind your business.</em>
      </h2>
      <p className="text-[15px] text-white/[0.36] max-w-[580px] leading-[1.9] mb-[72px]">
        We are moving beyond a simple strategy document into a fully operational high-conversion ecosystem. Every layer of your digital presence is engineered to attract, qualify, and convert the right clients without you touching a single cold lead.
      </p>

      {/* Five Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-primary/10 mb-20">
        {pillars.map((p) => (
          <div key={p.num} className="group bg-dark p-9 relative overflow-hidden transition-colors duration-400 hover:bg-primary/[0.05]">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-primary/50 mb-5">{p.num}</div>
            <p.Icon className="w-9 h-9 mb-[18px] text-primary opacity-80" strokeWidth={1.2} />
            <div className="font-serif text-lg font-bold text-white mb-3 leading-[1.2] uppercase tracking-[0.04em]">{p.title}</div>
            <p className="text-xs text-white/[0.35] leading-[1.78]">{p.body}</p>
          </div>
        ))}
      </div>

      {/* Service Tiers Table */}
      <div className="mb-20">
        <p className="text-[9px] font-bold tracking-[0.26em] uppercase text-primary mb-6 flex items-center gap-[14px]">
          <span className="w-7 h-px bg-primary inline-block" />
          Service Tiers & Catalyst Activation
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-primary/25">
                <th className="text-[9px] font-bold tracking-[0.2em] uppercase text-primary/60 pb-4 text-left">Service Category</th>
                <th className="text-[9px] font-bold tracking-[0.2em] uppercase text-primary/60 pb-4 text-left hidden md:table-cell">High-Level Activation</th>
                <th className="text-[9px] font-bold tracking-[0.2em] uppercase text-primary/60 pb-4 text-right">Target Revenue</th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((tier, i) => (
                <tr key={i} className="border-b border-white/[0.04] transition-colors hover:bg-primary/[0.04]">
                  <td className="py-[22px] align-top">
                    <div className="font-serif text-[22px] font-bold text-white mb-[3px] tracking-[0.02em]">{tier.name}</div>
                    <div className="text-[9px] font-bold tracking-[0.16em] uppercase text-primary/[0.55]">{tier.cat}</div>
                  </td>
                  <td className="py-[22px] align-top pr-10 hidden md:table-cell">
                    <p className="text-[13px] text-white/[0.35]">{tier.activation}</p>
                  </td>
                  <td className="py-[22px] align-top text-right">
                    <div className="font-serif text-[28px] font-bold text-primary tracking-[-0.01em] whitespace-nowrap">{tier.revenue}</div>
                    <div className="text-[9px] font-semibold tracking-[0.12em] uppercase text-primary/40 mt-[3px]">{tier.revSub}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA Row */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-10 pt-12 border-t border-primary/[0.12]">
        <div>
          <h3 className="font-serif text-4xl font-light text-white leading-[1.15] uppercase tracking-[0.02em] mb-[10px]">
            Ready to <strong className="font-bold">Activate</strong><br />
            the Ecosystem?
          </h3>
          <p className="text-[13px] text-white/30 leading-[1.8] max-w-[500px]">
            The C.A.T.A.L.Y.S.T.™ infrastructure is built. The 50 leads are mapped. The sequences are ready to run. What is missing is the conversation that starts all of it.
          </p>
        </div>
        <div className="flex flex-col md:items-end gap-3">
          <a href="#start" className="text-[11px] font-bold tracking-[0.18em] uppercase py-4 px-9 bg-primary text-ink no-underline transition-all duration-300 shadow-[0_0_40px_hsla(173,85%,33%,0.25)] hover:bg-white hover:-translate-y-[2px] hover:shadow-[0_16px_60px_hsla(173,85%,33%,0.45)] whitespace-nowrap text-center">
            Schedule Strategy Call
          </a>
          <a href="#revenue" className="text-[11px] font-semibold tracking-[0.14em] uppercase py-[15px] px-7 border border-white/[0.14] text-white/[0.45] no-underline transition-all duration-300 hover:border-primary hover:text-primary whitespace-nowrap text-center">
            View Revenue Model
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CatalystSection;
