import SectionHeader from "./SectionHeader";

const channels = [
  {
    icon: "✉️",
    name: "Warm Email First",
    rate: "25% to 40% response rate",
    body: "Use Apollo.io or Cognism to extract direct emails for all 50 leads. Highly personalized emails referencing a shared connection or a specific public activity. Warm outreach yields 25% to 40% response rates versus 1% to 3% for cold emails.",
    steps: [
      "Export direct emails and phones for all 50 leads via Apollo.io",
      "Write four email templates tailored to each ICA heat level",
      "Reference shared connections or specific events in every email",
      "One personalized paragraph before the ask. Never template energy.",
    ],
  },
  {
    icon: "🤝",
    name: "Referral Engine",
    rate: "Highest close rate of any channel",
    body: "Direct, contextual asks to 10 to 15 specific people in your existing network. One introduction from GreenLight Fund, Per Scholas, or Aspen is worth 50 cold emails. This is the most critical step in the entire 30-day plan.",
    steps: [
      "Identify your top 10 network connectors across GreenLight, Per Scholas, Aspen, Kresge",
      'Send a direct, specific ask: "I am taking on two advisory clients this quarter"',
      "Give them one sentence on who you are looking for so they refer precisely",
      "Follow up within 48 hours on every introduction they make",
    ],
  },
  {
    icon: "📞",
    name: "Commission-Only SDR",
    rate: "Zero upfront cost. Pay per meeting booked.",
    body: "Hire a revenue-share appointment setter via Upwork for cold leads only. $75 to $150 per qualified meeting booked. No meeting, no pay. This outsources the one part of business development you said makes your stomach turn.",
    steps: [
      "Post on Upwork for a commission-only SDR in nonprofit or healthcare outreach",
      "Provide ICA 3 lead list with talking points and qualification criteria",
      "Set up a shared calendar with 30-minute discovery call slots",
      "Pay $75 to $150 per qualified meeting. No meeting, no pay.",
    ],
  },
];

const OutreachStrategy = () => (
  <section>
    <SectionHeader
      eyebrow="Outreach Strategy"
      title={<>You do not need cold outreach.<br />Here is what <em className="italic text-primary">actually works</em> in your market.</>}
      subtitle="In the nonprofit and mission-driven workforce sector, cold LinkedIn DM outreach damages reputation. Senior leaders receive 50+ automated messages per day. Here is the stack that actually converts."
    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
      {channels.map((ch, i) => (
        <div key={i} className="bg-card border border-border p-7 shadow-sm card-lift hover:border-primary/25">
          <span className="text-[28px] mb-[14px] block">{ch.icon}</span>
          <div className="font-serif text-xl font-bold text-ink mb-[6px]">{ch.name}</div>
          <span className="inline-block text-[10px] font-bold py-[3px] px-[10px] bg-primary/[0.08] text-primary mb-[14px] tracking-[0.06em]">{ch.rate}</span>
          <p className="text-xs text-ash leading-[1.75] mb-[14px]">{ch.body}</p>
          <ul>
            {ch.steps.map((step, j) => (
              <li key={j} className="text-xs text-charcoal py-[5px] border-b border-border last:border-b-0 flex gap-[7px]">
                <span className="text-primary text-[10px] font-bold flex-shrink-0 mt-[2px]">→</span>{step}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default OutreachStrategy;
