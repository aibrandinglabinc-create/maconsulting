import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", onMove);
    document.body.style.cursor = "none";

    // Hide cursor on all interactive elements too
    const style = document.createElement("style");
    style.textContent = "*, *::before, *::after { cursor: none !important; }";
    document.head.appendChild(style);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.body.style.cursor = "";
      style.remove();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 top-0 left-0"
    >
      {/* Outer circle */}
      <div
        className="w-10 h-10 rounded-full border-2"
        style={{ borderColor: "hsl(var(--primary))" }}
      />
      {/* Center dot */}
      <div
        className="absolute top-1/2 left-1/2 w-[5px] h-[5px] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ backgroundColor: "hsl(var(--primary))" }}
      />
    </div>
  );
};

export default CursorGlow;
