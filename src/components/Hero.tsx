import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = () => {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(180 * 3);
    for (let i = 0; i < 180; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.03;
      ref.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#12C4B0" size={0.028} transparent opacity={0.55} />
    </points>
  );
};

const OrbGroup = () => {
  const groupRef = useRef<THREE.Group>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const torus2Ref = useRef<THREE.Mesh>(null);
  const icoRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (icoRef.current) {
      icoRef.current.rotation.x += delta * 0.25;
      icoRef.current.rotation.y += delta * 0.35;
    }
    if (torusRef.current) torusRef.current.rotation.z += delta * 0.3;
    if (torus2Ref.current) {
      torus2Ref.current.rotation.x += delta * 0.22;
      torus2Ref.current.rotation.z += delta * 0.18;
    }
  });

  return (
    <group ref={groupRef} position={[2.2, 0, 0]}>
      <mesh ref={icoRef}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshBasicMaterial color="#12C4B0" wireframe transparent opacity={0.18} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.1, 64, 64]} />
        <meshPhongMaterial
          color="#0A9B8B"
          transparent
          opacity={0.12}
          shininess={120}
          specular={new THREE.Color("#12C4B0")}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={torusRef} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[1.55, 0.018, 16, 100]} />
        <meshBasicMaterial color="#12C4B0" transparent opacity={0.55} />
      </mesh>
      <mesh ref={torus2Ref} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[1.35, 0.012, 16, 100]} />
        <meshBasicMaterial color="#12C4B0" transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

const HeroScene = () => (
  <Canvas
    camera={{ position: [0, 0, 5], fov: 60 }}
    style={{ position: "absolute", inset: 0, zIndex: 0 }}
    gl={{ antialias: true, alpha: true }}
  >
    <ambientLight intensity={0.15} />
    <directionalLight position={[3, 4, 3]} color="#12C4B0" intensity={1.2} />
    <directionalLight position={[-3, -2, -2]} intensity={0.4} />
    <pointLight position={[2, 1, 3]} color="#12C4B0" intensity={1.5} distance={12} />
    <OrbGroup />
    <Particles />
  </Canvas>
);

const stats = [
  { num: "$276K", label: "Annual Conservative Floor" },
  { num: "26", label: "States of Policy Depth" },
  { num: "100×", label: "Michigan Grants Secured", accent: true },
  { num: "3", label: "Parallel Revenue Streams" },
  { num: "$0", label: "Cold Outreach Required" },
];

const Hero = () => (
  <section className="hero-section min-h-screen relative overflow-hidden flex items-center bg-ink">
    <HeroScene />

    {/* Sweep overlays */}
    <div className="absolute inset-0 z-[1] pointer-events-none">
      <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[140%] bg-gradient-to-br from-primary/[0.08] via-primary/[0.02] to-transparent [clip-path:polygon(0_0,78%_0,100%_100%,0_100%)]" />
      <div className="absolute -top-[20%] -right-[10%] w-[55%] h-[140%] bg-gradient-to-bl from-white/[0.04] via-primary/[0.02] to-transparent [clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)]" />
      <div className="absolute inset-0 hero-grid" />
    </div>

    {/* Orb glow */}
    <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[520px] h-[520px] bg-[radial-gradient(circle,_hsla(173,85%,33%,0.14)_0%,_hsla(173,85%,33%,0.04)_40%,_transparent_70%)] animate-[orbpulse_7s_ease-in-out_infinite] pointer-events-none z-[1]" />

    {/* Content */}
    <div className="relative z-[3] max-w-[1160px] mx-auto px-6 md:px-[60px] w-full">
      <p className="text-[9px] font-bold tracking-[0.26em] uppercase text-primary mb-[22px] flex items-center gap-[14px] opacity-0 animate-[fadeup_0.8s_0.3s_ease_forwards]">
        <span className="w-9 h-px bg-primary inline-block" />
        Strategic Growth Blueprint · March 2026
      </p>
      <p className="text-[9px] font-bold tracking-[0.26em] uppercase text-primary/60 mb-[22px] opacity-0 animate-[fadeup_0.8s_0.4s_ease_forwards] pl-[23px]">
        AI Branding Lab, Inc. · Prepared for Margrit Allen, Chief Workforce Officer
      </p>
      <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-white/20 mb-[22px] opacity-0 animate-[fadeup_0.8s_0.45s_ease_forwards] pl-[23px]">
        Not for Distribution
      </p>

      <div className="overflow-hidden mb-7">
        <span className="font-serif text-[clamp(43px,6.4vw,86px)] font-light text-white leading-[0.96] tracking-[-0.02em] block uppercase opacity-0 translate-y-[60px] animate-[slideup_0.9s_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          Everything you need
        </span>
        <span className="font-serif text-[clamp(43px,6.4vw,86px)] font-light text-white leading-[0.96] tracking-[-0.02em] block opacity-0 translate-y-[60px] animate-[slideup_0.9s_0.65s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          is already <em className="italic text-primary not-italic-reset">inside you.</em>
        </span>
        <span className="font-serif text-[clamp(43px,6.4vw,86px)] font-bold text-white leading-[0.96] tracking-[-0.02em] block uppercase opacity-0 translate-y-[60px] animate-[slideup_0.9s_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          Now let's build it.
        </span>
      </div>

      <p className="text-[15px] text-white/[0.75] max-w-[520px] leading-[1.95] mb-[72px] opacity-0 animate-[fadeup_0.8s_1s_ease_forwards]">
        You hold more intellectual capital than most consulting firms carry in their entire practice. This blueprint maps{" "}
        <strong className="text-white font-medium">$30,000 in month one</strong>, $276,000 by year end, and a seven-figure portfolio by year two. No cold outreach. No chasing. No corporate systems to answer to.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 border border-white/[0.07] opacity-0 animate-[fadeup_0.8s_1.2s_ease_forwards]">
        {stats.map((s, i) => (
          <div key={i} className="py-6 px-[18px] text-center bg-white/[0.018] backdrop-blur-[10px] border-r border-white/[0.07] last:border-r-0 transition-colors hover:bg-primary/[0.07]">
            <div className={`font-serif font-bold leading-none mb-[7px] ${s.accent ? "text-primary text-[46px]" : "text-white text-[40px]"}`}>
              {s.num}
            </div>
            <div className="text-[9px] font-semibold tracking-[0.15em] uppercase text-white/[0.26]">{s.label}</div>
          </div>
        ))}
      </div>
    </div>

  </section>
);

export default Hero;
