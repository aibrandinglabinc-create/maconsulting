const line = "Blueprint for Margrit Allen · Founder, MA Consulting · Former National Director · Prepared by Erika Taylor · Chief AI Systems Architect · AI Branding Lab, Inc.";

const Ticker = () => (
  <div
    className="overflow-hidden relative w-full"
    style={{ height: 40, display: 'flex', alignItems: 'center' }}
  >
    <div
      style={{
        display: 'flex',
        whiteSpace: 'nowrap',
        animation: 'ticker-scroll 50s linear infinite',
        willChange: 'transform',
      }}
    >
      {[...Array(8)].map((_, i) => (
        <span
          key={i}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.45)',
            paddingRight: 80,
            display: 'inline-block',
            flexShrink: 0,
          }}
        >
          {line}
          <span style={{ color: 'rgba(18,196,176,0.4)', marginLeft: 40 }}>✦</span>
        </span>
      ))}
    </div>
    <style>{`
      @keyframes ticker-scroll {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
  </div>
);

export default Ticker;
