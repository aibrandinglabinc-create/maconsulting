import { useState, useEffect } from "react";

const navLinks = [
  { label: "Opportunity", href: "#opportunity" },
  { label: "Revenue", href: "#revenue" },
  { label: "Clients", href: "#clients" },
  { label: "Leads", href: "#leads" },
  { label: "Ventures", href: "#ventures" },
  { label: "Roadmap", href: "#roadmap" },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-[200] bg-ink/85 backdrop-blur-[28px] backdrop-saturate-[180%] border-b border-primary/15 px-6 md:px-[60px] transition-shadow ${scrolled ? "shadow-lg" : ""}`}>
      <div className="max-w-[1160px] mx-auto flex items-center justify-between h-[58px]">
        <div className="text-[13px] font-bold text-white tracking-[0.28em] uppercase cursor-pointer">
          MA · <span className="text-primary">CONSULTING</span>
        </div>
        <div className="flex gap-[30px] items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hidden md:inline text-[10px] font-semibold tracking-[0.14em] uppercase text-white/40 no-underline hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#start"
            className="text-[10px] font-bold tracking-[0.16em] uppercase py-[9px] px-[22px] bg-primary text-ink no-underline transition-all duration-300 hover:bg-white hover:-translate-y-px hover:shadow-[0_8px_32px_hsla(173,85%,33%,0.4)]"
          >
            Start Here
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
