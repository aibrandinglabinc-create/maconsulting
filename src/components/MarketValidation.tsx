import SectionHeader from "./SectionHeader";

const MarketValidation = () => (
  <section>
    <SectionHeader
      eyebrow="Market Validation"
      title={<>You had doubts about $5,000<br />for a VIP day. <em className="italic text-primary">The market disagrees.</em></>}
      subtitle="Independent market research confirmed this blueprint and added one critical piece: the VIP Grant Strategy Day is standard market rate. Here is the data."
    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
      {[
        {
          num: "$159–$186",
          label: "Senior Nonprofit Consultant Hourly",
          body: "Your six-hour VIP day at $5,000 is $833 per hour. Market data from The NonProfit Times confirms this. You are still undercharging relative to what your specific expertise commands.",
        },
        {
          num: "$3,500–$7,500",
          label: "Standard Grant Writing Flat Fee",
          body: "Professional grant writing firms charge this range for a single government RFP response. You are not writing one grant. You are delivering a complete funding landscape map, a stacking strategy, and a compliance framework.",
        },
        {
          num: "50×–100×",
          label: "Client ROI on a Single VIP Day",
          body: "A healthcare system sitting on $2M in untouched apprenticeship funding will leave it all on the table without you. Your $5,000 VIP day unlocks $250K to $500K in funding offsets. That is 50 to 100 times their investment.",
        },
      ].map((item, i) => (
        <div key={i} className="bg-card border border-border p-8 text-center shadow-sm card-lift">
          <div className="font-serif text-5xl font-bold text-primary mb-2 leading-none tracking-tight">{item.num}</div>
          <div className="text-xs font-bold tracking-[0.16em] uppercase text-ash mb-3">{item.label}</div>
          <p className="text-[15px] text-ash leading-[1.72]">{item.body}</p>
        </div>
      ))}
    </div>

    <div className="bg-dark p-10 grid grid-cols-1 md:grid-cols-2 gap-11 items-center mb-7">
      <div>
        <div className="text-xs font-bold tracking-[0.18em] uppercase text-primary mb-3">The Real Frame</div>
        <div className="font-serif text-[32px] font-bold text-white leading-[1.2] mb-4">
          They are not paying for six hours.<br />They are paying for your career.
        </div>
        <p className="text-[15px] text-white/[0.42] leading-[1.8]">
          When an organization hires you for a VIP Day, they are paying for four years as National Director at Trinity Health navigating complex funding streams across 26 states. They are paying for immediate identification of viable funding sources, structural alignment of their programs to meet grant requirements, and mitigation of compliance risks that could cost them their award. The $5,000 is not an expense. It is a highly leveraged investment in revenue generation. Frame it that way every time.
        </p>
      </div>
      <div>
        {[
          ["VIP Day Investment", "$5,000"],
          ["Average Funding Unlocked", "$250K–$500K"],
          ["Client ROI Multiple", "50× to 100×"],
          ["VIP to Retainer Conversion", "High"],
          ["Market Standard Rate", "Validated"],
        ].map(([label, val], i) => (
          <div key={i} className="flex justify-between items-center py-[13px] px-[18px] border-b border-white/5 last:border-b-0">
            <span className="text-sm text-white/40 font-medium">{label}</span>
            <span className="font-serif text-2xl font-bold text-primary">{val}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MarketValidation;
