import SectionHeader from "./SectionHeader";

const cards = [
  {
    icon: "🏆",
    title: "The 100x Edge",
    body: "You've secured state grants over 100 times. This practitioner repetition is your primary wealth vehicle.",
  },
  {
    icon: "🏥",
    title: "The Trinity Blueprint",
    body: "Scaling Fair Chance policy across 26 states. This is the blueprint national health systems are starving for.",
  },
  {
    icon: "💎",
    title: "Venture Upside",
    body: "From DPS procurement to equity in Granted, we are building assets, not just hourly blocks.",
  },
];

const MarketReality = () => (
  <section id="strategy">
    <SectionHeader
      eyebrow="Market Positioning"
      title={<>The Competitive <em className="italic text-primary">Advantage</em></>}
    />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-card border border-border p-8 relative overflow-hidden card-lift card-bar-reveal shadow-sm"
        >
          <span className="text-[28px] mb-4 block">{card.icon}</span>
          <h3 className="font-serif text-xl font-bold text-ink mb-2">{card.title}</h3>
          <p className="text-[13px] text-ash leading-[1.75]">{card.body}</p>
        </div>
      ))}
    </div>
  </section>
);

export default MarketReality;
