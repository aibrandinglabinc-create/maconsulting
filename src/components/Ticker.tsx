const Ticker = () => (
  <div className="bg-ink overflow-hidden py-[10px] flex items-center justify-center border-b border-primary/30 relative z-[300]">
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-[tglide_3s_ease-in-out_infinite]" />
    <div className="text-center">
      <div className="text-[9px] font-bold tracking-[0.22em] uppercase text-white/50">
        Blueprint for <span className="text-white/80">Margrit Allen</span> · Founder, MA Consulting · Former National Director
      </div>
      <div className="text-[9px] font-bold tracking-[0.22em] uppercase text-white/50 mt-[3px]">
        Prepared by <span className="text-white/80">Erika Taylor</span> · Chief AI Systems Architect · AI Branding Lab, Inc.
      </div>
    </div>
  </div>
);

export default Ticker;
