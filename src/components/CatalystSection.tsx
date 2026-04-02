import { Globe, GitBranch, Gem, Settings, Users } from "lucide-react";

const pillars = [
  {
    num: "01",
    Icon: Globe,
    title: "Authority Website",
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
    title: "$5,000 VIP Intensive",
    body: "A specialized landing page for the VIP Grant Strategy Day, framed as a high-leverage investment that replaces weeks of internal planning. Priced to filter. Built to convert.",
  },
  {
    num: "04",
    Icon: Settings,
    title: <>{`Catalyst™ CRM`}<br />{`& Outreach`}</>,
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
    num: "01",
    name: "Strategic Implementation",
    cat: "Fractional Executive Placement",
    activation: "Embedded advisory positioned as a fractional Chief Workforce Officer. Long-term retainer with full C.A.T.A.L.Y.S.T.™ CRM and onboarding workflow behind every client.",
    revenue: "$11,500/mo",
    revSub: "Per Client · Up to 80 hrs",
    featured: true,
  },
  {
    num: "02",
    name: "VIP Grant Strategy",
    cat: "High-ROI Funding Roadmaps",
    activation: "Six-hour intensive delivering a complete funding landscape map. Positioned as a paid discovery process that converts to retainer at a high rate. $5,000 is not an expense. It is a 50× to 100× investment.",
    revenue: "$5,000+",
    revSub: "Per Engagement",
    featured: false,
  },
  {
    num: "03",
    name: "Venture Advisory",
    cat: "IP Protection & Equity Partnerships",
    activation: "Core product advisory for workforce venture founders. Equity stake demanded before sharing practitioner knowledge. This is not a consulting deal. This is a wealth-building position.",
    revenue: "Retainer",
    revSub: "+ 2–5% Equity Stake",
    featured: false,
  },
  {
    num: "04",
    name: "Fair Chance Blueprint",
    cat: "Corporate ROI & Compliance Strategy",
    activation: "The exact policy blueprint built for a 27-state health system, applied to corporate HR and healthcare systems. Enters as a workshop, converts to a retainer within 60 days.",
    revenue: "$5–8K",
    revSub: "Workshop → Retainer",
    featured: false,
  },
];

const CatalystSection = () => (
  <>
    <section className="relative overflow-hidden py-[120px]" style={{ background: '#1A1A1A' }}>
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05),_transparent_70%)] pointer-events-none" />
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(hsla(173,85%,33%,0.06)_1px,transparent_1px),linear-gradient(90deg,hsla(173,85%,33%,0.06)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="max-w-[1160px] mx-auto px-6 md:px-[60px] relative z-[2]">
        {/* Detroit & Beyond tag */}
        <p className="text-[12px] font-bold tracking-[0.5em] uppercase text-white/50 mb-8 border-b border-white/10 pb-4 inline-block">
          Detroit &amp; Beyond
        </p>
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
        <p className="text-[17px] text-white/70 max-w-[580px] leading-[1.9] mb-[72px]">
          We have built a fully operational high-conversion ecosystem. Every layer of your digital presence is engineered to attract, qualify, and convert the right clients without you touching a single cold lead.
        </p>

        {/* Five Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px">
          {pillars.map((p) => (
            <div key={p.num} className="pillar group relative overflow-hidden p-9 bg-black/70 backdrop-blur-[12px] border-2 border-[rgba(18,196,176,0.18)] hover:bg-[rgba(18,196,176,0.07)] hover:border-[rgba(18,196,176,0.5)] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(18,196,176,0.15)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-primary/50 mb-5">{p.num}</div>
              <div className="pillar-icon"><p.Icon className="w-9 h-9 mb-[18px] text-primary" strokeWidth={1.2} /></div>
              <div className="font-serif text-lg font-bold text-white mb-3 leading-[1.2] uppercase tracking-[0.04em]">{p.title}</div>
              <p className="text-xs text-white/60 leading-[1.78]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Service Tiers — Luxury Card Grid */}
    <section style={{ background: '#0A0A0A' }} className="py-[100px] relative overflow-hidden">
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(18,196,176,0.4), transparent)' }} />

      <div className="max-w-[1160px] mx-auto px-6 md:px-[60px]">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="w-7 h-px" style={{ background: '#12C4B0' }} />
          <p className="text-[9px] font-bold tracking-[0.26em] uppercase" style={{ color: '#12C4B0' }}>
            Service Tiers &amp; Catalyst Activation
          </p>
        </div>

        {/* Section heading */}
        <h2
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px,4vw,56px)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.01em', color: '#ffffff' }}
          className="uppercase mb-4"
        >
          Four ways to engage.<br />
          <strong style={{ fontWeight: 700 }}>One standard of excellence.</strong>
        </h2>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.9, maxWidth: 560 }} className="mb-16">
          Every engagement is structured to deliver measurable ROI. Choose the entry point that fits your organization's urgency and budget.
        </p>

        {/* 2×2 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.num}
              style={{
                background: tier.featured
                  ? 'linear-gradient(135deg, rgba(18,196,176,0.12) 0%, rgba(18,196,176,0.04) 100%)'
                  : 'rgba(255,255,255,0.03)',
                border: tier.featured
                  ? '1px solid rgba(18,196,176,0.5)'
                  : '1px solid rgba(255,255,255,0.08)',
                borderRadius: 16,
                padding: '40px 40px 36px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
              }}
              className="group hover:border-[rgba(18,196,176,0.5)] hover:bg-[rgba(18,196,176,0.06)] hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(18,196,176,0.12)]"
            >
              {/* Featured badge */}
              {tier.featured && (
                <div
                  style={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    background: '#12C4B0',
                    color: '#000',
                    fontSize: 8,
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    padding: '4px 10px',
                    borderRadius: 4,
                    fontFamily: "'Montserrat', sans-serif",
                    textTransform: 'uppercase',
                  }}
                >
                  Recommended
                </div>
              )}

              {/* Card number */}
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  color: 'rgba(18,196,176,0.5)',
                  marginBottom: 20,
                }}
              >
                {tier.num}
              </div>

              {/* Category tag */}
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#12C4B0',
                  marginBottom: 10,
                }}
              >
                {tier.cat}
              </p>

              {/* Service name */}
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 28,
                  fontWeight: 600,
                  color: '#ffffff',
                  lineHeight: 1.15,
                  letterSpacing: '0.02em',
                  marginBottom: 16,
                }}
              >
                {tier.name}
              </h3>

              {/* Divider */}
              <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: 16 }} />

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.85,
                  marginBottom: 28,
                }}
              >
                {tier.activation}
              </p>

              {/* Price block */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  borderTop: '1px solid rgba(18,196,176,0.15)',
                  paddingTop: 20,
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 'clamp(28px,3vw,40px)',
                      fontWeight: 700,
                      color: '#12C4B0',
                      lineHeight: 1,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {tier.revenue}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 9,
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'rgba(18,196,176,0.45)',
                      marginTop: 6,
                    }}
                  >
                    {tier.revSub}
                  </div>
                </div>
                {/* Arrow indicator */}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    border: '1px solid rgba(18,196,176,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(18,196,176,0.5)',
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                >
                  →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: 64,
            padding: '40px 48px',
            background: 'rgba(18,196,176,0.05)',
            border: '1px solid rgba(18,196,176,0.2)',
            borderRadius: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 24,
          }}
        >
          <div>
            <h4
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 26,
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: 8,
              }}
            >
              Ready to <em style={{ color: '#12C4B0', fontStyle: 'italic' }}>Activate</em> the Ecosystem?
            </h4>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 480 }}>
              The C.A.T.A.L.Y.S.T.™ infrastructure is built. The 50 leads are mapped. The sequences are ready to run.
            </p>
          </div>
          <a
            href="#opportunity"
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              background: '#12C4B0',
              color: '#000',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              borderRadius: 6,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'all 0.3s ease',
            }}
          >
            Schedule Strategy Call
          </a>
        </div>
      </div>
    </section>
  </>
);

export default CatalystSection;
