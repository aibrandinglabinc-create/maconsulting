import { useEffect, useRef } from "react";
import { Globe, GitBranch, Gem, Settings, Users } from "lucide-react";

/* ── Network canvas constants ── */
const NODE_DEFS = [
  { id: 0, xp: 0.50, yp: 0.18, label: 'AUTHORITY\nWEBSITE',   num: '01', primary: true  },
  { id: 1, xp: 0.18, yp: 0.42, label: 'SEGMENTED\nFUNNELS',   num: '02', primary: false },
  { id: 2, xp: 0.82, yp: 0.42, label: 'VIP\nINTENSIVE',       num: '03', primary: false },
  { id: 3, xp: 0.28, yp: 0.78, label: 'CATALYST\nCRM',        num: '04', primary: false },
  { id: 4, xp: 0.72, yp: 0.78, label: 'SDR\nINTEGRATION',     num: '05', primary: false },
];
const EDGES: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4],
  [1, 3], [2, 4], [1, 2], [3, 4],
];
const EDGE_DELAYS = [0.05, 0.08, 0.12, 0.18, 0.22, 0.28, 0.35, 0.45];
const NODE_DELAYS = [0, 0.15, 0.25, 0.42, 0.58];
const REVEAL_DUR  = 2800;
const PARTICLE_COUNT = 28;

function easeOutCubic(t: number) { return 1 - Math.pow(1 - t, 3); }
function easeInOutSine(t: number) { return -(Math.cos(Math.PI * t) - 1) / 2; }

/* ── Pillar & tier data ── */
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

/* ── Network Canvas sub-component ── */
function NetworkCanvas() {
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef   = useRef<HTMLDivElement>(null);
  const stateRef     = useRef({
    W: 0, H: 0, dpr: 1, t: 0,
    revealed: false,
    startTime: null as number | null,
    revealProgress: 0,
    edgeProgress: EDGES.map(() => 0),
    nodes: NODE_DEFS.map(n => ({ ...n, x: 0, y: 0, r: n.primary ? 28 : 20, revealed: 0, hovered: false })),
    particles: [] as any[],
    animId: 0,
  });

  useEffect(() => {
    const canvas    = canvasRef.current;
    const container = containerRef.current;
    const wrapper   = wrapperRef.current;
    if (!canvas || !container || !wrapper) return;
    const ctx = canvas.getContext('2d')!;
    const s   = stateRef.current;

    s.particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      s.particles.push({ edge: i % EDGES.length, t: Math.random(), speed: 0.0025 + Math.random() * 0.003, reverse: Math.random() > 0.5, alpha: 0, size: 1.5 + Math.random() * 1.5 });
    }

    function resize() {
      const rect = container!.getBoundingClientRect();
      s.W = rect.width; s.H = rect.height; s.dpr = window.devicePixelRatio || 1;
      canvas!.width = s.W * s.dpr; canvas!.height = s.H * s.dpr;
      canvas!.style.width = `${s.W}px`; canvas!.style.height = `${s.H}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(s.dpr, s.dpr);
      s.nodes.forEach(n => { n.x = n.xp * s.W; n.y = n.yp * s.H; });
      if (!s.revealed) { s.revealed = true; s.startTime = performance.now(); }
    }

    resize();
    window.addEventListener('resize', resize);

    function startReveal() { if (s.revealed) return; s.revealed = true; s.startTime = performance.now(); }

    const obs = new IntersectionObserver(entries => { if (entries[0].isIntersecting) startReveal(); }, { threshold: 0.3 });
    obs.observe(wrapper!);

    const autoTimer = setTimeout(startReveal, 600);

    function onMouseMove(e: MouseEvent) {
      if (!s.revealed) return;
      const rect = canvas!.getBoundingClientRect();
      s.nodes.forEach(n => { n.hovered = Math.hypot(e.clientX - rect.left - n.x, e.clientY - rect.top - n.y) < n.r + 20; });
    }
    canvas.addEventListener('mousemove', onMouseMove);

    function drawEdge(n1: any, n2: any, progress: number, pulseT: number) {
      if (progress <= 0) return;
      const tx = n1.x + (n2.x - n1.x) * progress, ty = n1.y + (n2.y - n1.y) * progress;
      ctx.beginPath(); ctx.moveTo(n1.x, n1.y); ctx.lineTo(tx, ty);
      ctx.strokeStyle = `rgba(18,196,176,${0.12 * progress})`; ctx.lineWidth = 1; ctx.stroke();
      ctx.beginPath(); ctx.moveTo(n1.x, n1.y); ctx.lineTo(tx, ty);
      ctx.strokeStyle = `rgba(18,196,176,${(0.3 + Math.sin(pulseT) * 0.2) * progress})`; ctx.lineWidth = 0.8; ctx.stroke();
    }

    function drawNode(n: any, pulseT: number) {
      if (n.revealed <= 0) return;
      const a = n.revealed;
      const glowR = n.r + 18 + Math.sin(pulseT * 0.5 + n.id * 1.2) * 4;
      const g1 = ctx.createRadialGradient(n.x, n.y, n.r * 0.5, n.x, n.y, glowR);
      g1.addColorStop(0, `rgba(18,196,176,${0.15 * a})`); g1.addColorStop(1, 'rgba(18,196,176,0)');
      ctx.beginPath(); ctx.arc(n.x, n.y, glowR, 0, Math.PI * 2); ctx.fillStyle = g1; ctx.fill();

      ctx.beginPath(); ctx.arc(n.x, n.y, n.r + 6, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(18,196,176,${0.25 * a})`; ctx.lineWidth = 0.8;
      ctx.setLineDash([4, 8]); ctx.lineDashOffset = -pulseT * 12; ctx.stroke(); ctx.setLineDash([]);

      const gf = ctx.createRadialGradient(n.x - n.r * 0.3, n.y - n.r * 0.3, 0, n.x, n.y, n.r);
      gf.addColorStop(0, `rgba(22,22,28,${a})`); gf.addColorStop(1, `rgba(10,10,14,${a})`);
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fillStyle = gf; ctx.fill();

      ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(18,196,176,${0.7 * a})`; ctx.lineWidth = n.primary ? 1.5 : 1; ctx.stroke();

      ctx.beginPath(); ctx.arc(n.x, n.y, n.primary ? 4 : 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(18,196,176,${0.9 * a})`; ctx.fill();

      if (n.primary) {
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r - 6, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(18,196,176,${0.2 * a})`; ctx.lineWidth = 0.6; ctx.stroke();
      }
    }

    function drawParticle(p: any) {
      if (!s.revealed) return;
      const [aIdx, bIdx] = EDGES[p.edge];
      const a = s.nodes[aIdx], b = s.nodes[bIdx];
      if (a.revealed < 0.5 || b.revealed < 0.5 || s.edgeProgress[p.edge] < 0.8) return;
      const src = p.reverse ? b : a, dst = p.reverse ? a : b;
      const px = src.x + (dst.x - src.x) * p.t, py = src.y + (dst.y - src.y) * p.t;
      const trailT = Math.max(0, p.t - 0.06);
      ctx.beginPath(); ctx.moveTo(px, py);
      ctx.lineTo(src.x + (dst.x - src.x) * trailT, src.y + (dst.y - src.y) * trailT);
      ctx.strokeStyle = `rgba(18,196,176,${p.alpha * 0.4})`; ctx.lineWidth = p.size * 0.6; ctx.stroke();
      ctx.beginPath(); ctx.arc(px, py, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(18,196,176,${p.alpha})`; ctx.fill();
    }

    function draw(ts: number) {
      s.animId = requestAnimationFrame(draw);
      s.t += 0.016;
      ctx.clearRect(0, 0, s.W, s.H);

      if (s.revealed) {
        ctx.fillStyle = 'rgba(18,196,176,0.04)';
        for (let gx = 40; gx < s.W; gx += 52)
          for (let gy = 30; gy < s.H; gy += 52) { ctx.beginPath(); ctx.arc(gx, gy, 1, 0, Math.PI * 2); ctx.fill(); }
      }

      if (s.revealed && s.startTime) {
        const elapsed = ts - s.startTime;
        s.revealProgress = Math.min(1, elapsed / REVEAL_DUR);
        EDGES.forEach((_, i) => { const d = EDGE_DELAYS[i] || 0; s.edgeProgress[i] = easeOutCubic(Math.min(1, Math.max(0, (s.revealProgress - d) / (1 - d)) * 1.4)); });
        s.nodes.forEach((n, i) => { const d = NODE_DELAYS[i] || 0; n.revealed = easeOutCubic(Math.min(1, Math.max(0, (s.revealProgress - d) / (1 - d)) * 1.6)); });
      }

      EDGES.forEach(([ai, bi], i) => drawEdge(s.nodes[ai], s.nodes[bi], s.edgeProgress[i], s.t));

      s.particles.forEach(p => {
        if (!s.revealed) return;
        p.t += p.speed * (p.reverse ? -1 : 1);
        if (p.t > 1) { p.t = 0; p.speed = 0.002 + Math.random() * 0.003; }
        if (p.t < 0) { p.t = 1; }
        if ((!p.reverse && p.t > s.edgeProgress[p.edge]) || (p.reverse && p.t < 1 - s.edgeProgress[p.edge])) p.t = p.reverse ? 1 : 0;
        p.alpha = Math.min(0.85, s.revealProgress * 2) * easeInOutSine(Math.sin(p.t * Math.PI));
        drawParticle(p);
      });

      s.nodes.forEach(n => drawNode(n, s.t));

      if (s.revealed && s.nodes[0].revealed > 0.8) {
        const alpha = (s.nodes[0].revealed - 0.8) / 0.2;
        ctx.font = '700 7px Inter, sans-serif'; ctx.fillStyle = `rgba(18,196,176,${alpha * 0.6})`;
        ctx.textAlign = 'center'; ctx.fillText('C.A.T.A.L.Y.S.T.™', s.nodes[0].x, s.nodes[0].y + s.nodes[0].r + 16);
      }
    }

    s.animId = requestAnimationFrame(draw);

    return () => { cancelAnimationFrame(s.animId); window.removeEventListener('resize', resize); canvas.removeEventListener('mousemove', onMouseMove); obs.disconnect(); clearTimeout(autoTimer); };
  }, []);

  return (
    <div ref={wrapperRef} style={{ position: 'relative', width: '100%', height: '100%', minHeight: 480 }}>
      <div ref={containerRef} style={{ position: 'relative', width: '100%', height: '100%', minHeight: 480, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {NODE_DEFS.map((n, i) => (
            <div key={i} style={{ position: 'absolute', left: `${n.xp * 100}%`, top: `${n.yp * 100}%`, transform: 'translate(-50%, -50%)', textAlign: 'center', marginTop: n.yp < 0.5 ? -56 : 56, pointerEvents: 'none' }}>
              <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#12C4B0', marginBottom: 3 }}>{n.num}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ffffff', lineHeight: 1.3, maxWidth: 80 }}>
                {n.label.split('\n').map((line, j) => <span key={j} style={{ display: 'block' }}>{line}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Main section ── */
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

        {/* Two-column: text left, network canvas right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-[72px]">
          {/* Left: text content */}
          <div>
            <p className="text-[9px] font-bold tracking-[0.26em] uppercase text-primary mb-4 flex items-center gap-[14px]">
              <span className="w-7 h-px bg-primary inline-block" />
              The C.A.T.A.L.Y.S.T.™ Ecosystem
            </p>
            <h2 className="font-serif text-[clamp(36px,5vw,68px)] font-light text-white leading-[1.05] tracking-[-0.01em] uppercase mb-4">
              The Digital<br />
              <strong className="font-bold">Architecture</strong><br />
              <em className="italic text-primary normal-case">behind your business.</em>
            </h2>
            <p className="text-[17px] text-white/70 max-w-[580px] leading-[1.9]">
              We have built a fully operational high-conversion ecosystem. Every layer of your digital presence is engineered to attract, qualify, and convert the right clients without you touching a single cold lead.
            </p>
          </div>

          {/* Right: network canvas */}
          <NetworkCanvas />
        </div>

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

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  </>
);

export default CatalystSection;
