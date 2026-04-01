const items = [
  { num: "$276K", label: "Annual Conservative Floor" },
  { num: "26", label: "States of Policy Depth" },
  { num: "100+", label: "Michigan Grants Secured" },
  { num: "15+", label: "Years of Field Experience" },
];

const TealBand = () => (
  <div className="bg-primary-deep px-6 md:px-[60px] py-8 grid grid-cols-2 md:grid-cols-4">
    {items.map((item, i) => (
      <div key={i} className="px-6 py-2 border-r border-white/15 last:border-r-0 text-center">
        <div className="font-serif text-[46px] font-bold text-white mb-1 leading-none">{item.num}</div>
        <div className="text-[9px] font-semibold tracking-[0.15em] uppercase text-white/50">{item.label}</div>
      </div>
    ))}
  </div>
);

export default TealBand;
