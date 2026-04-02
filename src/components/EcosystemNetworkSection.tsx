import { useEffect, useRef } from 'react';

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

export default function EcosystemNetworkSection() {
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef   = useRef<HTMLDivElement>(null);
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
    const section   = sectionRef.current;
    if (!canvas || !container || !section) return;
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
    obs.observe(section!);

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
    <section ref={sectionRef} style={{ width:'100%', minHeight:'100vh', background:'#ffffff', display:'grid', gridTemplateColumns:'1fr 1fr', alignItems:'center', position:'relative', overflow:'hidden', padding:'100px 0' }}>
      <div style={{ padding:'0 60px 0 80px', position:'relative', zIndex:2 }}>
        <p style={{ fontSize:9, fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:'#12C4B0', marginBottom:14, display:'flex', alignItems:'center', gap:10 }}>
          <span style={{ width:20, height:2, background:'#12C4B0', display:'inline-block' }} />
          THE C.A.T.A.L.Y.S.T.™ ECOSYSTEM
        </p>
        <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'clamp(36px, 4.5vw, 58px)', fontWeight:300, color:'#0A0A0C', lineHeight:1.05, marginBottom:14, letterSpacing:'-0.01em' }}>
          THE DIGITAL<br />
          <strong style={{ fontWeight:700 }}>ARCHITECTURE</strong><br />
          <em style={{ fontStyle:'italic', color:'#12C4B0' }}>behind your business.</em>
        </h2>
        <p style={{ fontSize:14, color:'#8C8882', lineHeight:1.88, maxWidth:440, marginBottom:40 }}>
          We are moving beyond a simple strategy document into a fully operational high-conversion ecosystem. Every layer of your digital presence is engineered to attract, qualify, and convert the right clients without you touching a single cold lead.
        </p>
        <a href="#" style={{ display:'inline-block', fontSize:10, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', padding:'14px 34px', background:'#12C4B0', color:'#fff', textDecoration:'none', boxShadow:'0 8px 32px rgba(18,196,176,.25)' }}>
          SCHEDULE STRATEGY CALL
        </a>
      </div>

      <div ref={containerRef} style={{ position:'relative', height:580, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <canvas ref={canvasRef} style={{ width:'100%', height:'100%', display:'block' }} />
        <div style={{ position:'absolute', inset:0, pointerEvents:'none' }}>
          {NODE_DEFS.map((n, i) => (
            <div key={i} style={{ position:'absolute', left:`${n.xp * 100}%`, top:`${n.yp * 100}%`, transform:'translate(-50%, -50%)', textAlign:'center', marginTop: n.yp < 0.5 ? -56 : 56, pointerEvents:'none' }}>
              <div style={{ fontSize:8, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'#12C4B0', marginBottom:3 }}>{n.num}</div>
              <div style={{ fontFamily:'Inter, sans-serif', fontSize:9, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'#0A0A0C', lineHeight:1.3, maxWidth:80 }}>
                {n.label.split('\n').map((line, j) => <span key={j} style={{ display:'block' }}>{line}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
