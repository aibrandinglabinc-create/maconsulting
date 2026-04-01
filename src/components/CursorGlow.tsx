import { useEffect } from "react";

const CursorGlow = () => {
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");
    if (!glow) return;
    const onMove = (e: MouseEvent) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      id="cursor-glow"
      className="fixed pointer-events-none z-[9999] w-[400px] h-[400px] bg-[radial-gradient(circle,_hsla(173,85%,33%,0.1)_0%,_transparent_65%)] rounded-full -translate-x-1/2 -translate-y-1/2 top-0 left-0"
    />
  );
};

export default CursorGlow;
