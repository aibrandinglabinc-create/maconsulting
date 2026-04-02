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
      <rect x="656" y="55" width="8" height="345" fill="none" stroke="rgba(18,196,176,0.9)" strokeWidth="2" />
      <rect x="634" y="95" width="8" height="305" fill="none" stroke="rgba(13,155,139,0.8)" strokeWidth="1.8" />
      <rect x="678" y="95" width="8" height="305" fill="none" stroke="rgba(13,155,139,0.8)" strokeWidth="1.8" />
      {/* Mid-ground */}
      <rect x="614" y="135" width="7" height="265" fill="none" stroke="rgba(10,107,94,0.7)" strokeWidth="1.5" />
      <rect x="699" y="135" width="7" height="265" fill="none" stroke="rgba(10,107,94,0.7)" strokeWidth="1.5" />
      {/* Background */}
      <rect x="596" y="168" width="6" height="232" fill="none" stroke="rgba(10,107,94,0.45)" strokeWidth="1.2" />
      <rect x="717" y="168" width="6" height="232" fill="none" stroke="rgba(10,107,94,0.45)" strokeWidth="1.2" />

      {/* Center spire */}
      <line x1="660" y1="55" x2="660" y2="24" stroke="rgba(18,196,176,0.85)" strokeWidth="1.5" />
      <circle cx="660" cy="22" r="2.5" fill="none" stroke="rgba(18,196,176,0.8)" strokeWidth="1" />

      {/* Center horizontal cross-beams */}
      <line x1="634" y1="150" x2="686" y2="150" stroke="rgba(13,155,139,0.4)" strokeWidth="0.8" />
      <line x1="634" y1="210" x2="686" y2="210" stroke="rgba(13,155,139,0.4)" strokeWidth="0.8" />
      <line x1="634" y1="270" x2="686" y2="270" stroke="rgba(13,155,139,0.4)" strokeWidth="0.8" />
      <line x1="634" y1="330" x2="686" y2="330" stroke="rgba(13,155,139,0.4)" strokeWidth="0.8" />

      {/* === LEFT CLUSTER === */}
      <rect x="474" y="135" width="8" height="265" fill="none" stroke="rgba(13,155,139,0.8)" strokeWidth="1.8" />
      <rect x="500" y="160" width="7" height="240" fill="none" stroke="rgba(10,107,94,0.65)" strokeWidth="1.5" />
      <rect x="448" y="180" width="7" height="220" fill="none" stroke="rgba(10,107,94,0.6)" strokeWidth="1.5" />
      <rect x="526" y="200" width="6" height="200" fill="none" stroke="rgba(10,107,94,0.45)" strokeWidth="1.2" />
      <rect x="422" y="218" width="6" height="182" fill="none" stroke="rgba(10,107,94,0.4)" strokeWidth="1.2" />
      {/* Receding left buildings */}
      <rect x="396" y="242" width="5" height="158" fill="none" stroke="rgba(4,46,40,0.55)" strokeWidth="1" />
      <rect x="368" y="262" width="5" height="138" fill="none" stroke="rgba(4,46,40,0.45)" strokeWidth="1" />
      <rect x="340" y="282" width="4" height="118" fill="none" stroke="rgba(4,46,40,0.35)" strokeWidth="0.8" />
      <rect x="312" y="298" width="4" height="102" fill="none" stroke="rgba(4,46,40,0.28)" strokeWidth="0.8" />
      <rect x="282" y="312" width="4" height="88" fill="none" stroke="rgba(4,46,40,0.2)" strokeWidth="0.7" />
      {/* Left spire */}
      <line x1="478" y1="135" x2="478" y2="108" stroke="rgba(13,155,139,0.7)" strokeWidth="1.2" />
      <circle cx="478" cy="106" r="2" fill="none" stroke="rgba(18,196,176,0.7)" strokeWidth="0.8" />

      {/* === RIGHT CLUSTER === */}
      <rect x="898" y="135" width="8" height="265" fill="none" stroke="rgba(13,155,139,0.8)" strokeWidth="1.8" />
      <rect x="872" y="160" width="7" height="240" fill="none" stroke="rgba(10,107,94,0.65)" strokeWidth="1.5" />
      <rect x="924" y="180" width="7" height="220" fill="none" stroke="rgba(10,107,94,0.6)" strokeWidth="1.5" />
      <rect x="846" y="200" width="6" height="200" fill="none" stroke="rgba(10,107,94,0.45)" strokeWidth="1.2" />
      <rect x="950" y="218" width="6" height="182" fill="none" stroke="rgba(10,107,94,0.4)" strokeWidth="1.2" />
      {/* Receding right buildings */}
      <rect x="978" y="242" width="5" height="158" fill="none" stroke="rgba(4,46,40,0.55)" strokeWidth="1" />
      <rect x="1006" y="262" width="5" height="138" fill="none" stroke="rgba(4,46,40,0.45)" strokeWidth="1" />
      <rect x="1036" y="282" width="4" height="118" fill="none" stroke="rgba(4,46,40,0.35)" strokeWidth="0.8" />
      <rect x="1066" y="298" width="4" height="102" fill="none" stroke="rgba(4,46,40,0.28)" strokeWidth="0.8" />
      <rect x="1097" y="312" width="4" height="88" fill="none" stroke="rgba(4,46,40,0.2)" strokeWidth="0.7" />
      <rect x="1128" y="322" width="4" height="78" fill="none" stroke="rgba(4,46,40,0.15)" strokeWidth="0.7" />
      {/* Right spire */}
      <line x1="902" y1="135" x2="902" y2="108" stroke="rgba(13,155,139,0.7)" strokeWidth="1.2" />
      <circle cx="902" cy="106" r="2" fill="none" stroke="rgba(18,196,176,0.7)" strokeWidth="0.8" />

      {/* === PERSPECTIVE VANISHING LINES === */}
      <line x1="0" y1="400" x2="700" y2="342" stroke="rgba(18,196,176,0.15)" strokeWidth="0.5" />
      <line x1="1400" y1="400" x2="700" y2="342" stroke="rgba(18,196,176,0.15)" strokeWidth="0.5" />
      <line x1="250" y1="400" x2="700" y2="348" stroke="rgba(18,196,176,0.1)" strokeWidth="0.4" />
      <line x1="1150" y1="400" x2="700" y2="348" stroke="rgba(18,196,176,0.1)" strokeWidth="0.4" />
      <line x1="500" y1="400" x2="700" y2="355" stroke="rgba(18,196,176,0.07)" strokeWidth="0.3" />
      <line x1="900" y1="400" x2="700" y2="355" stroke="rgba(18,196,176,0.07)" strokeWidth="0.3" />
    </svg>

    {/* Centered text */}
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{ zIndex: 10 }}
    >
      <p
        className="font-serif italic uppercase text-center"
        style={{
          fontSize: 13,
          letterSpacing: "0.35em",
          color: "#ffffff",
          textShadow:
            "0 0 20px rgba(8,8,8,0.9), 0 0 40px rgba(8,8,8,0.9)",
        }}
      >
        Detroit &amp; Beyond
      </p>
    </div>

    <div className="absolute bottom-8 right-8 z-[25] text-right">
      <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-primary/40">
        Detroit &amp; Beyond
      </p>
      <div className="w-8 h-px bg-primary/20 mt-2 ml-auto"></div>
    </div>
  </section>
);

export default DetroitDivider;
