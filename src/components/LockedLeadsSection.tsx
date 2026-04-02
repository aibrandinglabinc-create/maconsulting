import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Sparkles, ChevronRight } from 'lucide-react';

export default function LockedLeadsSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const leads = [
    {
      id: 1,
      org: "Detroit Regional Chamber",
      sub: "Sandy Baruah, CEO · Network hub for every ICA 3 target in Detroit",
      contact: "President & CEO",
      location: "Detroit, MI",
      ica: "ICA 3",
      heat: "Hot",
      angle: "One relationship here opens 50 doors. Every major Detroit employer runs through this network. Warm entry via your GreenLight connection.",
      locked: false
    },
    {
      id: 2,
      org: "Henry Ford Health",
      sub: "Detroit's largest health employer",
      contact: "Chief People Officer",
      location: "Detroit, MI",
      ica: "ICA 3",
      heat: "Hot",
      angle: "No Fair Chance blueprint in place. You built this exact playbook at Trinity Health across 27 states.",
      locked: false
    },
    { id: 3, org: "Per Scholas Detroit", locked: true },
    { id: 4, org: "GreenLight Fund Detroit", locked: true },
    { id: 5, org: "Corewell Health", locked: true },
    { id: 6, org: "Aspen Institute", locked: true },
    { id: 7, org: "Kresge Foundation", locked: true },
    { id: 8, org: "DTE Energy", locked: true },
  ];

  const filters = [
    { key: "ica1", label: "ICA 1 · Workforce Tech" },
    { key: "ica2", label: "ICA 2 · National Nonprofit" },
    { key: "ica3", label: "ICA 3 · Healthcare & Corporate" },
  ];

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: '#0A0A0C' }}>
      {/* Ambient glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-700"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(18,196,176,0.03), transparent 60%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      <div className="max-w-[1160px] mx-auto px-6 md:px-[60px] relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="w-8 h-px bg-primary mb-6" />
          <p className="text-[9px] font-bold tracking-[0.26em] uppercase text-primary mb-4">
            Priority Lead Intelligence
          </p>

          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 72, fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.01em' }}
            className="text-white uppercase mb-4"
          >
            50 high-value targets.{' '}
            <strong className="font-bold">
              Start with every Hot lead first.
            </strong>
          </h2>

          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: '#888', lineHeight: 1.9, maxWidth: 680 }}>
            Your Hot list alone closes $30,000 in 30 days. Warm leads need one introduction. Cold leads need LinkedIn content to warm them before direct contact.
          </p>
        </div>

        {/* ICA Filter Toggles */}
        <div className="flex flex-wrap gap-0 mb-8">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(activeFilter === f.key ? null : f.key)}
              className="px-5 py-3 text-[11px] font-semibold tracking-[0.08em] uppercase transition-colors duration-200"
              style={{
                border: '1px solid #1a1a1a',
                borderRadius: 0,
                background: 'transparent',
                color: activeFilter === f.key ? '#fff' : '#555',
                borderBottom: activeFilter === f.key ? '2px solid #12C4B0' : '1px solid #1a1a1a',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Leads Table */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Table Header */}
          <div className="grid grid-cols-[50px_1fr_140px_120px_80px_80px_1fr] gap-4 px-6 py-3" style={{ borderBottom: '1px solid #1a1a1a' }}>
            {['#', 'Organization', 'Contact', 'Location', 'Type', 'Heat', 'Outreach Angle'].map((h, i) => (
              <div key={i} className="text-[9px] font-bold tracking-[0.2em] uppercase" style={{ color: '#555' }}>
                {h}
              </div>
            ))}
          </div>

          {/* Table Body */}
          <div>
            {leads.map((lead, i) => (
              <motion.div
                key={lead.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className={`grid grid-cols-[50px_1fr_140px_120px_80px_80px_1fr] gap-4 px-6 items-center transition-all duration-300 ${
                  lead.locked
                    ? 'opacity-40 blur-[2px] select-none'
                    : 'hover:bg-white/[0.02]'
                }`}
                style={{ paddingTop: 24, paddingBottom: 24, borderBottom: '1px solid #1a1a1a' }}
              >
                <div className="text-[11px] font-mono" style={{ color: '#555' }}>0{lead.id}</div>

                {lead.locked ? (
                  <>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18 }} className="font-semibold text-white">{lead.org}</div>
                    <div className="col-span-5 flex items-center gap-2 text-[11px]" style={{ color: '#555' }}>
                      <Lock className="w-3 h-3" />
                      Locked
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18 }} className="font-semibold text-white">{lead.org}</div>
                      <div className="text-[11px] mt-0.5" style={{ color: '#666' }}>{lead.sub}</div>
                    </div>
                    <div className="text-[12px]" style={{ color: '#888' }}>{lead.contact}</div>
                    <div className="text-[12px]" style={{ color: '#888' }}>{lead.location}</div>
                    <div
                      className="text-[10px] font-bold tracking-[0.1em] uppercase px-2 py-1 text-center"
                      style={{ background: '#001a16', color: '#12C4B0', border: '1px solid #12C4B0', borderRadius: 0 }}
                    >
                      ICA 3
                    </div>
                    <div
                      className="text-[10px] font-bold tracking-[0.1em] uppercase px-2 py-1 text-center"
                      style={{ background: '#1a0000', color: '#E04040', border: '1px solid #E04040', borderRadius: 0 }}
                    >
                      Hot
                    </div>
                    <div className="text-[11px] leading-[1.6]" style={{ color: '#888' }}>{lead.angle}</div>
                  </>
                )}
              </motion.div>
            ))}

            {/* Locked CTA Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="relative py-16 flex flex-col items-center justify-center text-center"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(10,10,12,1))' }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,196,176,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(18,196,176,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center mb-6" style={{ background: '#12C4B0', border: 'none' }}>
                  <Lock className="w-7 h-7 text-[#0A0A0C]" />
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 300 }} className="text-white mb-1">
                  48 more leads
                </div>
                <p className="text-[13px] tracking-[0.06em] uppercase font-medium mb-4" style={{ color: '#555' }}>
                  Mapped and ready to activate
                </p>
                <p className="text-[14px] max-w-[520px] leading-[1.8] mb-8" style={{ color: '#888' }}>
                  The complete intelligence report includes contact emails, heat scores, outreach angles, and ICA classifications for all 50 leads. This activates inside C.A.T.A.L.Y.S.T.™ the moment we begin.
                </p>
                <a
                  href="mailto:erika@aibrandinglabinc.com"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 overflow-hidden"
                  style={{ background: 'linear-gradient(90deg, #042E28 0%, #0A6B5E 18%, #0D9B8B 32%, #12C4B0 48%, #C8FFF8 56%, #0D9B8B 70%, #042E28 100%)', backgroundSize: '200% auto', animation: 'sweep 3s linear infinite', color: '#080808' }}
                >
                  <span className="relative flex items-center gap-2 text-[12px] font-bold tracking-[0.16em] uppercase">
                    <Sparkles className="w-4 h-4" />
                    Activate The Full List
                  </span>
                  <ChevronRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Summary Footer Bar */}
          <div className="flex items-center justify-between px-6 py-4" style={{ background: '#0D0D0D', borderTop: '1px solid #1a1a1a' }}>
            <div className="flex items-center gap-6">
              {[
                { color: '#E04040', label: 'Hot', num: '16' },
                { color: '#12C4B0', label: 'Warm', num: '20' },
                { color: '#555', label: 'Cold', num: '14' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  {i > 0 && <span className="w-px h-4 bg-white/10 mr-2" />}
                  <span className="w-2 h-2" style={{ background: item.color }} />
                  <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-white/50">{item.label}</span>
                  <span className="text-[13px] font-bold text-white/90 font-mono">{item.num}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-white/50">Total Mapped</span>
              <span className="text-[18px] font-bold text-primary font-mono">50</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
