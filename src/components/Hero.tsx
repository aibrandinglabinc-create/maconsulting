const Hero = () => (
  <section className="relative bg-dark min-h-[70vh] flex items-center justify-center overflow-hidden border-b-[3px] border-primary">
    <div className="absolute inset-0 hero-grid-pattern" />
    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,_hsla(173,85%,33%,0.1)_0%,_transparent_65%)] pointer-events-none" />
    <div className="relative z-10 text-center max-w-[780px] px-6 py-24">
      <span className="inline-block text-[9px] font-bold tracking-[0.22em] uppercase text-primary border border-primary/30 px-4 py-[6px] mb-8">
        Confidential Proposal
      </span>
      <h1 className="font-serif text-[clamp(44px,6vw,82px)] font-bold text-primary-foreground leading-[1.02] mb-6">
        Everything you need<br />is already <em className="italic text-primary">inside you.</em>
      </h1>
      <p className="text-sm text-primary-foreground/40 max-w-[560px] mx-auto leading-[1.88]">
        The intellectual property you hold is the most valuable "Digital Real Estate" in the sector.{" "}
        <strong className="text-primary-foreground/70 font-semibold">
          We aren't building a business; we're activating a powerhouse.
        </strong>
      </p>
    </div>
  </section>
);

export default Hero;
