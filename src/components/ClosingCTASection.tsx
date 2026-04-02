import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export default function ClosingCTASection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.05, 0.9]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#070709] py-32 md:py-40">
      {/* BACKGROUND LAYERS */}

      {/* Perspective grid floor */}
      <motion.div style={{ y: gridY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,196,176,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(18,196,176,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </motion.div>

      {/* Central teal orb */}
      <motion.div style={{ scale: orbScale }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(18,196,176,0.08)_0%,transparent_70%)]" />
      </motion.div>

      {/* Horizontal teal line accents */}
      <div className="absolute top-[30%] left-0 right-0 pointer-events-none">
        <div className="h-px bg-gradient-to-r from-transparent via-[#12C4B0]/20 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <span className="w-8 h-px bg-[#12C4B0]/40" />
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#12C4B0]">
            The Next Step
          </span>
          <span className="w-8 h-px bg-[#12C4B0]/40" />
        </motion.div>

        {/* $276K hero number */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-10 h-px bg-[#12C4B0]/30" />
            <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-white/40">
              Year One Conservative Floor
            </span>
            <span className="w-10 h-px bg-[#12C4B0]/30" />
          </div>

          <div className="font-serif text-[clamp(64px,10vw,120px)] font-bold text-white leading-[1] tracking-[-0.02em]">
            $276,000
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-16 h-px bg-[#12C4B0]/30 mx-auto my-10" />

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative max-w-[700px] mx-auto mb-8"
        >
          <span className="absolute -top-6 -left-4 text-[60px] font-serif text-[#12C4B0]/20 leading-none">
            &ldquo;
          </span>
          <p className="font-serif text-[clamp(20px,2.5vw,28px)] text-white/90 leading-[1.6] italic">
            I don&apos;t want to go back and work for no white man when I got
            all this money in my brain.
          </p>
          <span className="absolute -bottom-8 -right-4 text-[60px] font-serif text-[#12C4B0]/20 leading-none">
            &rdquo;
          </span>
        </motion.div>

        {/* Sub copy */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[15px] text-white/50 max-w-[600px] mx-auto leading-[1.9] mb-16"
        >
          The knowledge is already inside you. The gap has never been expertise.
          It has never been access. It is infrastructure. That is what we build together.
        </motion.p>

        {/* Revenue milestone strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4"
        >
          {[
            { period: "Day 30", value: "$30K", label: "Month One Target" },
            { period: "Month 3", value: "$69K", label: "Quarterly Run Rate" },
            { period: "Month 6", value: "$185K", label: "Six-Month Cumulative" },
            { period: "Year 1", value: "$434K+", label: "Annual Conservative" },
          ].map((m, i) => (
            <div key={i} className="text-center py-6 border border-white/[0.06] rounded-sm bg-white/[0.02]">
              <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#12C4B0]/70 mb-2">
                {m.period}
              </div>
              <div className="text-[28px] font-serif font-bold text-white mb-1">
                {m.value}
              </div>
              <div className="text-[10px] tracking-[0.1em] uppercase text-white/30">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* FOOTER STRIP */}
      <div className="relative z-10 mt-24 border-t border-white/[0.06]">
        <div className="max-w-[1160px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-[10px] tracking-[0.1em] uppercase text-white/30">
            <span>Confidential</span>
            <span className="w-px h-3 bg-white/10" />
            <span>Prepared By AI Branding Lab, Inc.</span>
            <span className="w-px h-3 bg-white/10" />
            <span>March 2026</span>
          </div>
          <div className="text-[10px] text-white/20">
            © 2026 AI Branding Lab, Inc. · info@aibrandinglabinc.com
          </div>
        </div>
      </div>
    </section>
  );
}
