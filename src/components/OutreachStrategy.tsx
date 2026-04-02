const channels = [
  {
    num: "01",
    name: "Warm Email First",
    rate: "25% TO 40% RESPONSE RATE",
    body: "Highly personalized emails referencing a shared connection or a specific public activity. Warm outreach yields 25% to 40% response rates versus 1% to 3% for cold emails.",
    steps: [
      "Build a curated lead list with direct emails for your top 50 prospects",
      "Write four email templates tailored to each ICA heat level",
      "Reference shared connections or specific events in every email",
      "One personalized paragraph before the ask. Never template energy.",
    ],
  },
  {
    num: "02",
    name: "Referral Engine",
    rate: "HIGHEST CLOSE RATE OF ANY CHANNEL",
    body: "Direct, contextual asks to 10 to 15 specific people in your existing network. One introduction from GreenLight Fund, Per Scholas, or Aspen is worth 50 cold emails. This is the most critical step in the entire 30-day plan.",
    steps: [
      "Identify your top 10 network connectors across GreenLight, Per Scholas, Aspen, Kresge",
      'Send a direct, specific ask: "I am taking on two advisory clients this quarter"',
      "Give them one sentence on who you are looking for so they refer precisely",
      "Follow up within 48 hours on every introduction they make",
    ],
  },
  {
    num: "03",
    name: "Commission-Only SDR",
    rate: "ZERO UPFRONT COST — PAY PER MEETING BOOKED",
    body: "Hire a revenue-share appointment setter for cold leads only. $75 to $150 per qualified meeting booked. No meeting, no pay. This outsources the one part of business development you said makes your stomach turn.",
    steps: [
      "Find a commission-only appointment setter experienced in nonprofit or healthcare outreach",
      "Provide ICA 3 lead list with talking points and qualification criteria",
      "Set up a shared calendar with 30-minute discovery call slots",
      "Pay $75 to $150 per qualified meeting. No meeting, no pay.",
    ],
  },
];

const OutreachStrategy = () => (
  <section className="w-full" style={{ background: '#0D0D0D' }}>
    <div className="max-w-[1160px] mx-auto px-6 md:px-[60px] py-24">
      {/* Section Header */}
      <div className="mb-16">
        <div className="w-8 h-px bg-primary mb-6" />
        <p className="text-[9px] font-bold tracking-[0.26em] uppercase text-primary mb-4">
          Outreach Strategy
        </p>
        <h2
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 64, fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.01em' }}
          className="text-white uppercase mb-4"
        >
          You do not need cold outreach.
          <br />
          Here is what{' '}
          <em className="italic text-primary">actually works</em>{' '}
          in your market.
        </h2>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: '#888', lineHeight: 1.9, maxWidth: 640 }}>
          In the nonprofit and mission-driven workforce sector, cold LinkedIn DM outreach damages reputation. Senior leaders receive 50+ automated messages per day. Here is the stack that actually converts.
        </p>
      </div>
    </div>

    {/* Full-bleed panels */}
    <div>
      {channels.map((ch, i) => (
        <div key={i}>
          {i > 0 && <div className="w-full h-px" style={{ background: '#1a1a1a' }} />}
          <div style={{ background: '#0D0D0D' }} className="w-full">
            <div className="max-w-[1160px] mx-auto px-6 md:px-[60px] py-16">
              <div
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 80, fontWeight: 300, lineHeight: 1 }}
                className="text-primary mb-6"
              >
                {ch.num}
              </div>
              <h3
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 400 }}
                className="text-white uppercase mb-3"
              >
                {ch.name}
              </h3>
              <p
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, letterSpacing: '0.2em' }}
                className="text-primary mb-6"
              >
                {ch.rate}
              </p>
              <p
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: '#888', lineHeight: 1.9, maxWidth: 640 }}
                className="mb-8"
              >
                {ch.body}
              </p>
              <div>
                {ch.steps.map((step, j) => (
                  <div key={j}>
                    {j > 0 && <div className="w-full h-px" style={{ background: '#1a1a1a' }} />}
                    <p
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: '#888', lineHeight: 1.7 }}
                      className="py-4"
                    >
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default OutreachStrategy;
