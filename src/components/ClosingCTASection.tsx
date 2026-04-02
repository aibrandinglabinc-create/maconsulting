import { motion } from 'framer-motion';

export default function ClosingCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#070709] py-32 md:py-40">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,196,176,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(18,196,176,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Horizontal accent */}
      <div className="absolute top-[35%] left-0 right-0 pointer-events-none">
        <div className="h-px bg-gradient-to-r from-transparent via-[#12C4B0]/20 to-transparent" />
      </div>

      {/* Central orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(18,196,176,0.06)_0%,transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">

        {/* Eyebrow + Hero number */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
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
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-[700px] mx-auto mb-10"
        >
          <span className="absolute -top-6 -left-4 text-[60px] font-serif text-[#12C4B0]/20 leading-none">
            &ldquo;
          </span>
          <p className="font-serif text-[clamp(20px,2.5vw,28px)] text-white/90 leading-[1.6] italic">
            You have more intellectual capital alone than most consulting firms hold in their entire practice. The only question is whether you will deploy it.
          </p>
          <span className="absolute -bottom-8 -right-4 text-[60px] font-serif text-[#12C4B0]/20 leading-none">
            &rdquo;
          </span>
        </motion.div>

      </div>

      {/* Footer strip */}
      <div className="relative z-10 mt-24 border-t border-white/[0.06]">
        <div className="max-w-[1160px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-[10px] tracking-[0.1em] uppercase text-white/30">
            <span>CONFIDENTIAL</span>
            <span className="w-px h-3 bg-white/10" />
            <span>PREPARED BY AI BRANDING LAB, INC.</span>
            <span className="w-px h-3 bg-white/10" />
            <span>MARCH 2026</span>
          </div>
          <div className="text-[10px] text-white/20">
            © 2026 AI Branding Lab, Inc. All Rights Reserved.
          </div>
        </div>
      </div>
    </section>
  );
}
