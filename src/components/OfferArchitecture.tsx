import SectionHeader from "./SectionHeader";

const tiers = [
  {
    num: "Tier 01",
    name: "VIP Grant Strategy Intensive",
    price: "$5,000 to $8,000 per engagement",
    who: "Best For",
    items: [
      "Organizations needing immediate funding clarity before committing to a retainer",
      "Healthcare systems exploring Fair Chance hiring strategy",
      "Nonprofits unsure of their grant eligibility landscape",
      "Leaders needing a practitioner gut-check on their workforce programs",
    ],
    exec: "Your highest-margin, lowest-time offer. Six hours. One deliverable: a complete Funding and Implementation Roadmap. This is your paid discovery process that converts to retainers at a high rate.",
    featured: false,
  },
  {
    num: "Tier 02",
    name: "Strategic Implementation Retainer",
    price: "$11,500 per month · up to 80 hours · overages at $150/hr",
    who: "Best For",
    items: [
      "Healthcare systems and national nonprofits executing complex workforce initiatives",
      "Organizations in active grant pursuit needing embedded expertise",
      "Companies implementing Fair Chance hiring policy at scale",
      "National orgs entering the Detroit market",
    ],
    exec: "Your stable recurring revenue. Two of these locked equals $276,000 per year. All travel and in-person expenses billed separately. This positions you as a fractional executive, not a contractor.",
    featured: true,
  },
  {
    num: "Tier 03",
    name: "Venture Advisory and Equity",
    price: "$5,000–$10,000/month plus 2% to 5% equity stake",
    who: "Best For",
    items: [
      "Workforce venture founders building products reliant on your practitioner knowledge",
      "Startups where your IP is foundational to their entire product direction",
      "Founders who have said you are 'core to finalizing the product'",
      "Any engagement where a W-2 offer is on the table (convert it to this)",
    ],
    exec: "This moves beyond consulting fees entirely. Your intellectual property is the foundation of their product. You must own a piece of the outcome.",
    featured: false,
  },
];

const OfferArchitecture = () => (
  <section>
    <SectionHeader
      eyebrow="Your Offer Architecture"
      title={<>Three tiers. Every buyer<br />has an <em className="italic text-primary">entry point.</em></>}
      subtitle="Not every organization is ready for a retainer on day one. This structure gives every buyer a clear path in, and a natural path to the next level."
    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
      {tiers.map((tier, i) => (
        <div
          key={i}
          className={`bg-card border p-8 relative card-lift shadow-sm ${
            tier.featured ? 'border-primary shadow-[0_0_0_1px_hsl(var(--primary)),var(--shadow-md)]' : 'border-border'
          }`}
        >
          {tier.featured && (
            <span className="absolute top-[18px] right-[18px] text-xs font-bold tracking-[0.1em] uppercase px-[10px] py-1 bg-primary text-white">Primary</span>
          )}
          <div className="text-xs font-bold tracking-[0.16em] uppercase text-primary mb-[10px]">{tier.num}</div>
          <div className="font-serif text-[22px] font-bold text-ink mb-[6px]">{tier.name}</div>
          <div className="text-sm font-semibold text-primary mb-[18px] pb-[18px] border-b border-border">{tier.price}</div>
          <div className="text-xs font-bold tracking-[0.14em] uppercase text-ash mb-[10px]">{tier.who}</div>
          <ul className="mb-[18px]">
            {tier.items.map((item, j) => (
              <li key={j} className="text-sm text-charcoal py-[5px] border-b border-border last:border-b-0 flex gap-2 leading-[1.5]">
                <span className="text-primary text-sm font-bold flex-shrink-0 mt-px">✓</span>{item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-ash italic leading-[1.65] pt-3 border-t border-border">{tier.exec}</p>
        </div>
      ))}
    </div>
  </section>
);

export default OfferArchitecture;
