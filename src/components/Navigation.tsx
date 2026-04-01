const navItems = [
  { label: "Strategy", href: "#strategy" },
  { label: "Revenue", href: "#revenue" },
  { label: "Leads", href: "#leads" },
  { label: "Roadmap", href: "#roadmap" },
];

const Navigation = () => (
  <nav className="sticky top-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-border">
    <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-14">
      <span className="font-serif text-sm font-bold text-primary-foreground tracking-wide">MA Workforce</span>
      <div className="flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-[10px] font-semibold tracking-[0.18em] uppercase text-primary-foreground/40 hover:text-primary transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

export default Navigation;
