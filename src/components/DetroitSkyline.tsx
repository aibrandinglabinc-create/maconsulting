const DetroitSkyline = () => (
  <svg id="detroit-svg" viewBox="0 0 900 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMax meet">
    <defs>
      <linearGradient id="tg1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
      </linearGradient>
      <linearGradient id="tg2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
      </linearGradient>
      <linearGradient id="tg3" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.02" />
      </linearGradient>
    </defs>

    {/* Main skyline fill */}
    <path className="sf" d="M0,400 L0,320 L80,320 L80,280 L100,280 L100,240 L120,240 L120,200 L140,200 L140,180 L160,180 L160,160 L180,160 L180,140 L200,140 L200,120 L220,120 L220,100 L240,100 L240,80 L260,80 L260,60 L280,60 L280,40 L300,40 L300,60 L320,60 L320,80 L340,80 L340,120 L360,120 L360,140 L380,140 L380,100 L400,100 L400,60 L420,60 L420,40 L430,40 L430,20 L440,20 L440,40 L450,40 L450,60 L460,60 L460,100 L480,100 L480,140 L500,140 L500,160 L520,160 L520,180 L540,180 L540,120 L560,120 L560,80 L580,80 L580,60 L600,60 L600,40 L610,40 L610,20 L620,20 L620,40 L630,40 L630,60 L640,60 L640,100 L660,100 L660,140 L680,140 L680,180 L700,180 L700,200 L720,200 L720,220 L740,220 L740,260 L760,260 L760,280 L780,280 L780,300 L800,300 L800,320 L840,320 L840,340 L880,340 L880,360 L900,360 L900,400 Z" />

    {/* Skyline outline strokes */}
    <path className="sp dp d1" d="M0,320 L80,320 L80,280 L100,280 L100,240 L120,240 L120,200 L140,200 L140,180 L160,180 L160,160 L180,160 L180,140 L200,140 L200,120 L220,120 L220,100 L240,100 L240,80 L260,80 L260,60 L280,60 L280,40 L300,40" />
    <path className="sp dp d2" d="M300,40 L300,60 L320,60 L320,80 L340,80 L340,120 L360,120 L360,140 L380,140 L380,100 L400,100 L400,60 L420,60 L420,40 L430,40 L430,20 L440,20 L440,40 L450,40 L450,60 L460,60 L460,100 L480,100 L480,140 L500,140" />
    <path className="sp dp d3" d="M500,140 L500,160 L520,160 L520,180 L540,180 L540,120 L560,120 L560,80 L580,80 L580,60 L600,60 L600,40 L610,40 L610,20 L620,20 L620,40 L630,40 L630,60 L640,60 L640,100 L660,100 L660,140" />
    <path className="sp dp d4" d="M660,140 L680,140 L680,180 L700,180 L700,200 L720,200 L720,220 L740,220 L740,260 L760,260 L760,280 L780,280 L780,300 L800,300 L800,320 L840,320" />
    <path className="sp dp d5" d="M840,320 L840,340 L880,340 L880,360 L900,360" />

    {/* Antenna details */}
    <path className="sa" d="M435,20 L435,5" />
    <path className="sa" d="M615,20 L615,2" />
    <path className="sa" d="M285,40 L285,25" />

    {/* Building window glows */}
    <rect className="wg" x="130" y="210" width="4" height="6" rx="0.5" />
    <rect className="wg" x="138" y="210" width="4" height="6" rx="0.5" />
    <rect className="wg" x="130" y="222" width="4" height="6" rx="0.5" />
    <rect className="wg" x="138" y="222" width="4" height="6" rx="0.5" />
    <rect className="wg" x="170" y="170" width="4" height="6" rx="0.5" />
    <rect className="wg" x="178" y="170" width="4" height="6" rx="0.5" />
    <rect className="wg" x="170" y="182" width="4" height="6" rx="0.5" />
    <rect className="wg" x="210" y="130" width="4" height="6" rx="0.5" />
    <rect className="wg" x="218" y="130" width="4" height="6" rx="0.5" />
    <rect className="wg" x="210" y="142" width="4" height="6" rx="0.5" />
    <rect className="wg" x="250" y="90" width="4" height="6" rx="0.5" />
    <rect className="wg" x="258" y="90" width="4" height="6" rx="0.5" />
    <rect className="wg" x="270" y="70" width="4" height="6" rx="0.5" />
    <rect className="wg" x="290" y="50" width="4" height="6" rx="0.5" />
    <rect className="wg" x="310" y="70" width="4" height="6" rx="0.5" />
    <rect className="wg" x="350" y="130" width="4" height="6" rx="0.5" />
    <rect className="wg" x="390" y="110" width="4" height="6" rx="0.5" />
    <rect className="wg" x="410" y="70" width="4" height="6" rx="0.5" />
    <rect className="wg" x="435" y="50" width="4" height="6" rx="0.5" />
    <rect className="wg" x="443" y="50" width="4" height="6" rx="0.5" />
    <rect className="wg" x="470" y="110" width="4" height="6" rx="0.5" />
    <rect className="wg" x="510" y="170" width="4" height="6" rx="0.5" />
    <rect className="wg" x="550" y="130" width="4" height="6" rx="0.5" />
    <rect className="wg" x="570" y="90" width="4" height="6" rx="0.5" />
    <rect className="wg" x="590" y="70" width="4" height="6" rx="0.5" />
    <rect className="wg" x="610" y="30" width="4" height="6" rx="0.5" />
    <rect className="wg" x="618" y="30" width="4" height="6" rx="0.5" />
    <rect className="wg" x="650" y="110" width="4" height="6" rx="0.5" />
    <rect className="wg" x="670" y="150" width="4" height="6" rx="0.5" />
    <rect className="wg" x="690" y="190" width="4" height="6" rx="0.5" />
    <rect className="wg" x="730" y="230" width="4" height="6" rx="0.5" />
    <rect className="wg" x="770" y="290" width="4" height="6" rx="0.5" />

    {/* Blinking lights on towers */}
    <circle className="bl" cx="435" cy="5" r="1.5" fill="hsl(var(--primary))" style={{ animationDelay: '3s' }} />
    <circle className="bl" cx="615" cy="2" r="1.5" fill="hsl(var(--primary))" style={{ animationDelay: '3.5s' }} />
    <circle className="bl" cx="285" cy="25" r="1.2" fill="hsl(var(--primary))" style={{ animationDelay: '4s' }} />

    {/* Horizon gradient overlays */}
    <rect x="0" y="350" width="900" height="50" fill="url(#tg3)" />
    <rect x="0" y="370" width="900" height="30" fill="url(#tg2)" />
  </svg>
);

export default DetroitSkyline;
