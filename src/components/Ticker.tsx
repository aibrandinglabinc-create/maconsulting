const line = "Blueprint for Margrit Allen · Founder, MA Consulting · Former National Director  ·  Prepared by Erika Taylor · Chief AI Systems Architect · AI Branding Lab, Inc.";

const Ticker = () => (
  <div className="bg-ink overflow-hidden py-[10px] border-b border-primary/30 relative z-[300]">
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-[tglide_3s_ease-in-out_infinite]" />
    <div className="ticker-animate whitespace-nowrap">
      <span className="text-[9px] font-bold tracking-[0.22em] uppercase text-white/50 inline-block px-8">
        {line} <span className="text-white/30 mx-6">✦</span> {line} <span className="text-white/30 mx-6">✦</span> {line} <span className="text-white/30 mx-6">✦</span> {line} <span className="text-white/30 mx-6">✦</span> {line} <span className="text-white/30 mx-6">✦</span> {line}
      </span>
    </div>
  </div>
);

export default Ticker;
