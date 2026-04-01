import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + "px";
        glowRef.current.style.top = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", onMove);

    let raf: number;
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.08;
      pos.current.y += (target.current.y - pos.current.y) * 0.08;
      if (trailRef.current) {
        trailRef.current.style.left = pos.current.x + "px";
        trailRef.current.style.top = pos.current.y + "px";
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Outer trailing glow */}
      <div
        ref={trailRef}
        className="fixed pointer-events-none z-[9998] w-[600px] h-[600px] rounded-full -translate-x-1/2 -translate-y-1/2 top-0 left-0"
        style={{
          background: "radial-gradient(circle, hsla(173,85%,33%,0.07) 0%, hsla(173,85%,33%,0.03) 35%, transparent 65%)",
        }}
      />
      {/* Inner bright glow */}
      <div
        ref={glowRef}
        className="fixed pointer-events-none z-[9999] w-[350px] h-[350px] rounded-full -translate-x-1/2 -translate-y-1/2 top-0 left-0"
        style={{
          background: "radial-gradient(circle, hsla(173,85%,33%,0.15) 0%, hsla(173,85%,33%,0.06) 30%, transparent 60%)",
        }}
      />
    </>
  );
};

export default CursorGlow;
