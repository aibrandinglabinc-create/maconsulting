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
  <section
    className="w-full relative overflow-hidden"
    style={{ background: 'linear-gradient(180deg, #f9f9f7 0%, #ffffff 50%, #f4f4f2 100%)' }}
  >
    <style>{`
      @keyframes float-orb-a {
        0%, 100% { transform: translateY(0px) scale(1); }
        50%       { transform: translateY(-32px) scale(1.05); }
      }
      @keyframes float-orb-b {
        0%, 100% { transform: translateY(0px) scale(1); }
        50%       { transform: translateY(-22px) scale(1.03); }
      }
      @keyframes float-orb-c {
        0%, 100% { transform: translateY(0px) scale(1); }
        50%       { transform: translateY(-18px) scale(1.02); }
      }
      @keyframes outreach-card-in {
        from { opacity: 0; transform: translateY(50px); }
        to   { opacity: 1; transform: translateY(0); }
      }
    `}</style>

    {/* Floating 3D depth orbs */}
    <div style={{ position: 'absolute', left: '-6%', top: '8%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%, rgba(18,196,176,0.22), transparent 70%)', animation: 'float-orb-a 6s ease-in-out infinite', pointerEvents: 'none', zIndex: 0 }} />
    <div style={{ position: 'absolute', right: '-4%', top: '15%', width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle at 60% 40%, rgba(18,196,176,0.14), transparent 70%)', animation: 'float-orb-b 8s ease-in-out infinite 1.5s', pointerEvents: 'none', zIndex: 0 }} />
    <div style={{ position: 'absolute', left: '38%', bottom: '10%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle at 50% 50%, rgba(18,196,176,0.10), transparent 70%)', animation: 'float-orb-c 7s ease-in-out infinite 3s', pointerEvents: 'none', zIndex: 0 }} />

    {/* Subtle grid */}
    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(18,196,176,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(18,196,176,0.035) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none', zIndex: 0 }} />

    <div className="max-w-[1160px] mx-auto px-6 md:px-[60px] py-28 relative" style={{ zIndex: 1 }}>

      {/* Section Header */}
      <div className="mb-20">
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
          <span style={{ width: 28, height: 1, background: '#12C4B0', display: 'inline-block' }} />
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#12C4B0', margin: 0 }}>
            Outreach Strategy
          </p>
        </div>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(40px, 5.2vw, 68px)',
            fontWeight: 300,
            lineHeight: 1.06,
            letterSpacing: '-0.01em',
            color: '#0a0a0a',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}
        >
          You do not need<br />
          cold outreach.<br />
          <strong style={{ fontWeight: 700 }}>Here is what works.</strong>
        </h2>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, color: '#666', lineHeight: 1.9, maxWidth: 620 }}>
          In the nonprofit and mission-driven workforce sector, cold LinkedIn DM outreach damages reputation. Senior leaders receive 50+ automated messages per day. Here is the stack that actually converts.
        </p>
      </div>

      {/* 3D-style elevated cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        {channels.map((ch, i) => (
          <div
            key={i}
            style={{
              background: '#ffffff',
              borderRadius: 20,
              padding: 'clamp(32px, 4vw, 52px) clamp(28px, 4vw, 52px)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.03), 0 16px 48px rgba(0,0,0,0.07), 0 0 0 1px rgba(18,196,176,0.10)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '32px 56px',
              alignItems: 'start',
              position: 'relative',
              overflow: 'hidden',
              animation: `outreach-card-in 0.7s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.15}s both`,
            }}
          >
            {/* Left teal accent bar */}
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: 'linear-gradient(180deg, #12C4B0 0%, rgba(18,196,176,0.15) 100%)', borderRadius: '20px 0 0 20px' }} />

            {/* Subtle top-right corner glow */}
            <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(18,196,176,0.06), transparent 70%)', pointerEvents: 'none' }} />

            {/* Left column */}
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 80, fontWeight: 300, lineHeight: 1, color: 'rgba(18,196,176,0.13)', marginBottom: 6, letterSpacing: '-0.02em' }}>
                {ch.num}
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 30, fontWeight: 600, color: '#0a0a0a', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: 10 }}>
                {ch.name}
              </h3>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#12C4B0', marginBottom: 16 }}>
                {ch.rate}
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: '#666', lineHeight: 1.9 }}>
                {ch.body}
              </p>
            </div>

            {/* Right column: steps */}
            <div style={{ paddingTop: 8 }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#bbb', marginBottom: 18 }}>
                Action Steps
              </p>
              {ch.steps.map((step, j) => (
                <div
                  key={j}
                  style={{
                    display: 'flex',
                    gap: 14,
                    alignItems: 'flex-start',
                    paddingTop: j > 0 ? 14 : 0,
                    borderTop: j > 0 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#12C4B0', flexShrink: 0, marginTop: 7 }} />
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: '#555', lineHeight: 1.75, margin: 0 }}>
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OutreachStrategy;
