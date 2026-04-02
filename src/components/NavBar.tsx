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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const heroEl = document.querySelector('.hero-section');
      if (heroEl) {
        setVisible(window.scrollY > heroEl.getBoundingClientRect().height - 60);
      } else {
        setVisible(window.scrollY > window.innerHeight - 60);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[200] bg-ink/85 backdrop-blur-[28px] backdrop-saturate-[180%] border-b border-primary/15 px-6 md:px-[60px] transition-all duration-500 ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
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
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
