const DetroitDivider = () => (
  <section
    className="w-full relative overflow-hidden"
    style={{ height: 420, background: "#070709" }}
  >
    <svg
      viewBox="0 0 1400 420"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.85,
        zIndex: 0,
        animation: 'skyline-pulse 4s ease-in-out infinite',
      }}
      preserveAspectRatio="xMidYMax meet"
      shapeRendering="crispEdges"
    >
      {/* Ground line — sharp */}
      <line x1="0" y1="400" x2="1400" y2="400" stroke="#12C4B0" strokeWidth="1.5" opacity="0.6" />
      <rect x="0" y="395" width="1400" height="25" fill="#12C4B0" opacity="0.04" />

      {/* === CENTER CLUSTER (tallest) === */}
      {/* Foreground — brightest, thickest */}
      <rect x="650" y="55" width="20" height="345" fill="none" stroke="rgba(18,196,176,0.95)" strokeWidth="3.5" />
      <rect x="622" y="95" width="18" height="305" fill="none" stroke="rgba(13,155,139,0.88)" strokeWidth="3" />
      <rect x="682" y="95" width="18" height="305" fill="none" stroke="rgba(13,155,139,0.88)" strokeWidth="3" />
      {/* Mid-ground */}
      <rect x="598" y="135" width="16" height="265" fill="none" stroke="rgba(10,107,94,0.75)" strokeWidth="2.5" />
      <rect x="706" y="135" width="16" height="265" fill="none" stroke="rgba(10,107,94,0.75)" strokeWidth="2.5" />
      {/* Background */}
      <rect x="576" y="168" width="14" height="232" fill="none" stroke="rgba(10,107,94,0.55)" strokeWidth="2" />
      <rect x="730" y="168" width="14" height="232" fill="none" stroke="rgba(10,107,94,0.55)" strokeWidth="2" />

      {/* Center spire */}
      <line x1="660" y1="55" x2="660" y2="20" stroke="rgba(18,196,176,0.9)" strokeWidth="2" />
      <circle cx="660" cy="18" r="4" fill="none" stroke="rgba(18,196,176,0.85)" strokeWidth="1.5" />

      {/* Center horizontal cross-beams */}
      <line x1="622" y1="150" x2="700" y2="150" stroke="rgba(13,155,139,0.5)" strokeWidth="1.2" />
      <line x1="622" y1="210" x2="700" y2="210" stroke="rgba(13,155,139,0.5)" strokeWidth="1.2" />
      <line x1="622" y1="270" x2="700" y2="270" stroke="rgba(13,155,139,0.5)" strokeWidth="1.2" />
      <line x1="622" y1="330" x2="700" y2="330" stroke="rgba(13,155,139,0.5)" strokeWidth="1.2" />

      {/* === LEFT CLUSTER === */}
      <rect x="466" y="135" width="20" height="265" fill="none" stroke="rgba(13,155,139,0.85)" strokeWidth="3" />
      <rect x="494" y="160" width="18" height="240" fill="none" stroke="rgba(10,107,94,0.72)" strokeWidth="2.5" />
      <rect x="438" y="180" width="16" height="220" fill="none" stroke="rgba(10,107,94,0.65)" strokeWidth="2.2" />
      <rect x="520" y="200" width="14" height="200" fill="none" stroke="rgba(10,107,94,0.52)" strokeWidth="2" />
      <rect x="412" y="218" width="14" height="182" fill="none" stroke="rgba(10,107,94,0.45)" strokeWidth="1.8" />
      {/* Receding left buildings */}
      <rect x="386" y="242" width="12" height="158" fill="none" stroke="rgba(4,46,40,0.65)" strokeWidth="1.5" />
      <rect x="358" y="262" width="10" height="138" fill="none" stroke="rgba(4,46,40,0.55)" strokeWidth="1.3" />
      <rect x="330" y="282" width="9" height="118" fill="none" stroke="rgba(4,46,40,0.45)" strokeWidth="1.1" />
      <rect x="302" y="298" width="8" height="102" fill="none" stroke="rgba(4,46,40,0.35)" strokeWidth="1" />
      <rect x="272" y="312" width="7" height="88" fill="none" stroke="rgba(4,46,40,0.25)" strokeWidth="0.9" />
      {/* Left spire */}
      <line x1="476" y1="135" x2="476" y2="104" stroke="rgba(13,155,139,0.8)" strokeWidth="1.8" />
      <circle cx="476" cy="102" r="3" fill="none" stroke="rgba(18,196,176,0.75)" strokeWidth="1.2" />

      {/* === RIGHT CLUSTER === */}
      <rect x="894" y="135" width="20" height="265" fill="none" stroke="rgba(13,155,139,0.85)" strokeWidth="3" />
      <rect x="866" y="160" width="18" height="240" fill="none" stroke="rgba(10,107,94,0.72)" strokeWidth="2.5" />
      <rect x="922" y="180" width="16" height="220" fill="none" stroke="rgba(10,107,94,0.65)" strokeWidth="2.2" />
      <rect x="840" y="200" width="14" height="200" fill="none" stroke="rgba(10,107,94,0.52)" strokeWidth="2" />
      <rect x="948" y="218" width="14" height="182" fill="none" stroke="rgba(10,107,94,0.45)" strokeWidth="1.8" />
      {/* Receding right buildings */}
      <rect x="974" y="242" width="12" height="158" fill="none" stroke="rgba(4,46,40,0.65)" strokeWidth="1.5" />
      <rect x="1002" y="262" width="10" height="138" fill="none" stroke="rgba(4,46,40,0.55)" strokeWidth="1.3" />
      <rect x="1032" y="282" width="9" height="118" fill="none" stroke="rgba(4,46,40,0.45)" strokeWidth="1.1" />
      <rect x="1062" y="298" width="8" height="102" fill="none" stroke="rgba(4,46,40,0.35)" strokeWidth="1" />
      <rect x="1093" y="312" width="7" height="88" fill="none" stroke="rgba(4,46,40,0.25)" strokeWidth="0.9" />
      <rect x="1124" y="322" width="7" height="78" fill="none" stroke="rgba(4,46,40,0.18)" strokeWidth="0.9" />
      {/* Right spire */}
      <line x1="904" y1="135" x2="904" y2="104" stroke="rgba(13,155,139,0.8)" strokeWidth="1.8" />
      <circle cx="904" cy="102" r="3" fill="none" stroke="rgba(18,196,176,0.75)" strokeWidth="1.2" />

      {/* === PERSPECTIVE VANISHING LINES === */}
      <line x1="0" y1="400" x2="700" y2="342" stroke="rgba(18,196,176,0.15)" strokeWidth="0.5" />
      <line x1="1400" y1="400" x2="700" y2="342" stroke="rgba(18,196,176,0.15)" strokeWidth="0.5" />
      <line x1="250" y1="400" x2="700" y2="348" stroke="rgba(18,196,176,0.1)" strokeWidth="0.4" />
      <line x1="1150" y1="400" x2="700" y2="348" stroke="rgba(18,196,176,0.1)" strokeWidth="0.4" />
      <line x1="500" y1="400" x2="700" y2="355" stroke="rgba(18,196,176,0.07)" strokeWidth="0.3" />
      <line x1="900" y1="400" x2="700" y2="355" stroke="rgba(18,196,176,0.07)" strokeWidth="0.3" />
    </svg>

    {/* Centered text — large, non-italic, wide tracking */}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
      }}
    >
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'normal',
          fontWeight: 300,
          fontSize: 'clamp(28px, 4vw, 52px)',
          letterSpacing: '0.55em',
          textTransform: 'uppercase',
          color: '#ffffff',
          textAlign: 'center',
          margin: 0,
          textShadow: '0 2px 40px rgba(0,0,0,0.9), 0 0 80px rgba(0,0,0,0.7)',
        }}
      >
        Detroit &amp; Beyond
      </p>
    </div>
  </section>
);

export default DetroitDivider;
