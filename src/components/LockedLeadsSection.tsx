import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Sparkles, ChevronRight, ShieldCheck, Database, Target } from 'lucide-react';

export default function LockedLeadsSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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

  return (
    <section className="relative bg-[#FAFAF8] py-24 overflow-hidden">
      {/* Ambient glow that follows mouse */}
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
          <p className="text-[9px] font-bold tracking-[0.26em] uppercase text-[#12C4B0] mb-4 flex items-center gap-[14px]">
            <Sparkles className="w-4 h-4" />
            Priority Lead Intelligence
            <span className="w-7 h-px bg-[#12C4B0] inline-block" />
          </p>

          <h2 className="font-serif text-[clamp(32px,4vw,56px)] font-light text-[#070709] leading-[1.1] tracking-[-0.01em] uppercase mb-4">
            50 high-value targets.{' '}
            <strong className="font-bold">
              Start with every Hot lead first.
            </strong>
          </h2>

          <p className="text-[15px] text-[#6B6B6B] max-w-[680px] leading-[1.9]">
            Your Hot list alone closes $30,000 in 30 days. Warm leads need one introduction. Cold leads need LinkedIn content to warm them before direct contact.
          </p>
        </div>

        {/* ICA Filter Tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          {[
            { icon: Target, label: "ICA 1 · Workforce Tech", color: "text-[#0A9B8B]", bg: "bg-[#12C4B0]/5", border: "border-[#12C4B0]/20" },
            { icon: ShieldCheck, label: "ICA 2 · National Nonprofit", color: "text-blue-700", bg: "bg-blue-600/5", border: "border-blue-600/20" },
            { icon: Database, label: "ICA 3 · Healthcare & Corporate", color: "text-purple-700", bg: "bg-purple-600/5", border: "border-purple-600/20" }
          ].map((tag, i) => (
            <div key={i} className={`flex items-center gap-2 px-4 py-2 rounded-full border ${tag.border} ${tag.bg} ${tag.color} text-[11px] font-semibold tracking-[0.08em] uppercase`}>
              <tag.icon className="w-3.5 h-3.5" />
              {tag.label}
            </div>
          ))}
        </div>

        {/* Leads Table */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Table Header */}
          <div className="grid grid-cols-[50px_1fr_140px_120px_80px_80px_1fr] gap-4 px-6 py-3 border-b border-[#E5E5E0]">
            {['#', 'Organization', 'Contact', 'Location', 'Type', 'Heat', 'Outreach Angle'].map((h, i) => (
              <div key={i} className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#999]">
                {h}
              </div>
            ))}
          </div>

          {/* Table Body */}
          <div className="divide-y divide-[#F0F0EC]">
            {leads.map((lead, i) => (
              <motion.div
                key={lead.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className={`grid grid-cols-[50px_1fr_140px_120px_80px_80px_1fr] gap-4 px-6 py-5 items-center transition-all duration-300 ${
                  lead.locked
                    ? 'opacity-40 blur-[2px] select-none'
                    : 'hover:bg-[#12C4B0]/[0.03]'
                }`}
              >
                <div className="text-[11px] font-mono text-[#BBB]">0{lead.id}</div>

                {lead.locked ? (
                  <>
                    <div className="text-[14px] font-serif font-semibold text-[#070709]">{lead.org}</div>
                    <div className="col-span-5 flex items-center gap-2 text-[11px] text-[#AAA]">
                      <Lock className="w-3 h-3" />
                      Locked
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div className="text-[14px] font-serif font-semibold text-[#070709]">{lead.org}</div>
                      <div className="text-[11px] text-[#999] mt-0.5">{lead.sub}</div>
                    </div>
                    <div className="text-[12px] text-[#555]">{lead.contact}</div>
                    <div className="text-[12px] text-[#555]">{lead.location}</div>
                    <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-purple-700 bg-purple-50 px-2 py-1 rounded text-center">
                      ICA 3
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C05A15] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C05A15] shadow-[0_0_10px_rgba(192,90,21,0.5)]" />
                      </span>
                      <span className="text-[11px] font-bold text-[#C05A15] uppercase tracking-[0.06em]">Hot</span>
                    </div>
                    <div className="text-[11px] text-[#777] leading-[1.6]">{lead.angle}</div>
                  </>
                )}
              </motion.div>
            ))}

            {/* Locked CTA Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="relative py-16 flex flex-col items-center justify-center text-center bg-gradient-to-b from-transparent via-[#FAFAF8] to-[#F5F5F0]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,196,176,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(18,196,176,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#070709] flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(18,196,176,0.15)]">
                  <Lock className="w-7 h-7 text-[#12C4B0]" />
                </div>
                <div className="font-serif text-[28px] font-bold text-[#070709] mb-1">
                  48 more leads
                </div>
                <p className="text-[13px] text-[#999] tracking-[0.06em] uppercase font-medium mb-4">
                  Mapped and ready to activate
                </p>
                <p className="text-[14px] text-[#777] max-w-[520px] leading-[1.8] mb-8">
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
          <div className="flex items-center justify-between px-6 py-4 bg-[#070709] mt-0">
            <div className="flex items-center gap-6">
              {[
                { color: 'bg-[#C05A15]', shadow: 'shadow-[0_0_10px_rgba(192,90,21,0.5)]', label: 'Hot', num: '16' },
                { color: 'bg-[#B45309]', shadow: '', label: 'Warm', num: '20' },
                { color: 'bg-[#8C8882]', shadow: '', label: 'Cold', num: '14' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  {i > 0 && <span className="w-px h-4 bg-white/10 mr-2" />}
                  <span className={`w-2 h-2 rounded-full ${item.color} ${item.shadow}`} />
                  <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-white/50">{item.label}</span>
                  <span className="text-[13px] font-bold text-white/90 font-mono">{item.num}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-white/50">Total Mapped</span>
              <span className="text-[18px] font-bold text-[#12C4B0] font-mono">50</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
