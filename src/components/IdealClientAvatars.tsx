import { useState } from "react";
import { Building2, Target, Rocket } from "lucide-react";
import SectionHeader from "./SectionHeader";

const avatars = [
  {
    icon: Building2,
    title: "ICA 1 — Healthcare & Workforce Systems",
    subtitle: "Trinity-type orgs, FQHCs, state workforce boards",
    snap: [
      "VP/Director of Workforce Development",
      "Budget: $50K–$500K programs",
      "Pain: unfilled grants, compliance risk",
      "Trigger: new federal funding cycle",
    ],
    cards: [
      {
        title: "Emotional State",
        items: ["Overwhelmed by grant complexity", "Fear of audit findings", "Frustrated by turnover in workforce roles", "Desperate for someone who has done this before"],
      },
      {
        title: "What They Need",
        items: ["Grant landscape mapping across all 26 states", "Fair Chance Hiring policy implementation", "Apprenticeship program design", "Compliance framework that survives audits"],
      },
      {
        title: "Pain Points",
        items: ["Sitting on unclaimed apprenticeship funding", "No internal grant writing capacity", "Previous consultants lacked practitioner depth", "Board pressure to show workforce ROI"],
      },
      {
        title: "Why Only You",
        items: ["100× Michigan Works grant experience", "Rewrote Fair Chance policy for 27-state system", "National Director credibility opens every door", "They cannot hire this expertise full-time"],
      },
    ],
    conversion: [
      "Open with a specific funding source they are missing",
      "Reference a parallel client result (anonymized)",
      "Offer VIP Day as a low-risk entry point",
      "Close with: 'I have done this 100 times. Literally.'",
    ],
    revenue: [
      { num: "$11,500", label: "Monthly Retainer" },
      { num: "$5,000", label: "VIP Day Entry" },
      { num: "$92K", label: "8-Month Value" },
      { num: "High", label: "VIP→Retainer Rate" },
    ],
  },
  {
    icon: Target,
    title: "ICA 2 — Mission-Driven Nonprofits",
    subtitle: "Reentry orgs, workforce nonprofits, community foundations",
    snap: [
      "Executive Director / Program Director",
      "Budget: $25K–$200K annually",
      "Pain: grant rejection, scaling programs",
      "Trigger: board mandate to grow revenue",
    ],
    cards: [
      {
        title: "Emotional State",
        items: ["Burned by consultants who didn't understand the work", "Exhausted from wearing every hat", "Hopeful but skeptical about outside help", "Personally invested in the mission"],
      },
      {
        title: "What They Need",
        items: ["Grant readiness assessment and strategy", "Program design that funders actually fund", "Board-ready metrics and reporting framework", "A trusted advisor, not another vendor"],
      },
      {
        title: "Pain Points",
        items: ["Writing the same failed grant applications", "Cannot articulate impact in funder language", "Staff too stretched to pursue new funding", "Losing competitive bids to larger orgs"],
      },
      {
        title: "Why Only You",
        items: ["You founded CEO Detroit — you ARE the mission", "Aspen Fellow credibility signals trust instantly", "You speak nonprofit AND corporate fluently", "Your network opens doors they cannot reach alone"],
      },
    ],
    conversion: [
      "Lead with mission alignment, not credentials",
      "Share a specific grant they should be pursuing",
      "Offer Grant Readiness Sprint as first engagement",
      "Close with: 'I built this from the ground in Detroit.'",
    ],
    revenue: [
      { num: "$7,500", label: "Sprint Package" },
      { num: "$5,000", label: "VIP Day" },
      { num: "$11,500", label: "Retainer Upsell" },
      { num: "3–6mo", label: "Avg Engagement" },
    ],
  },
  {
    icon: "💻",
    title: "ICA 3 — Workforce Venture Partners",
    subtitle: "Workforce startups, advisory engagements, equity plays",
    snap: [
      "CEO/Founder at seed or Series A",
      "Budget: $5K–$10K/mo + equity",
      "Pain: no practitioner on the team",
      "Trigger: investor pressure for domain expert",
    ],
    cards: [
      {
        title: "Emotional State",
        items: ["Excited but out of depth on policy", "Investors asking for domain credibility", "Building product without practitioner input", "Willing to give equity for the right advisor"],
      },
      {
        title: "What They Need",
        items: ["Practitioner validation of their product thesis", "Introductions to healthcare and nonprofit buyers", "Grant intelligence for their go-to-market", "Advisory board credibility for investor decks"],
      },
      {
        title: "Pain Points",
        items: ["Product built without end-user input", "Cannot get meetings with healthcare systems", "Competitors have domain advisors, they don't", "Burning runway on wrong market assumptions"],
      },
      {
        title: "Why Only You",
        items: ["You ARE the end user they're building for", "Your network IS their sales pipeline", "Founders already see you as 'core to the product'", "Your IP is literally their product foundation"],
      },
    ],
    conversion: [
      "Ask about their product roadmap, then show gaps",
      "Offer to make one warm introduction as proof",
      "Structure as advisory + equity, not hourly",
      "Close with: 'Your investors need my name on the deck.'",
    ],
    revenue: [
      { num: "$5–10K", label: "Monthly Advisory" },
      { num: "2–5%", label: "Equity Stake" },
      { num: "∞", label: "Compounding Value" },
      { num: "Long", label: "Engagement Term" },
    ],
  },
];

const IdealClientAvatars = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section>
      <SectionHeader
        eyebrow="Ideal Client Avatars"
        title={<>Three buyer types. Every one<br />of them <em className="italic text-primary">needs you urgently.</em></>}
        subtitle="Expand each profile to see their emotional state, pain points, what they need from you, and exactly how to convert them."
      />

      <div className="space-y-3">
        {avatars.map((ica, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="bg-card border border-border border-l-[3px] border-l-primary shadow-sm overflow-hidden transition-shadow hover:shadow-lg">
              <div
                className="p-5 md:px-7 grid grid-cols-[56px_1fr_auto] items-center gap-[18px] cursor-pointer select-none"
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <div className="w-11 h-11 bg-primary/[0.12] border border-primary/20 flex items-center justify-center text-xl flex-shrink-0">
                  {ica.icon}
                </div>
                <div>
                  <div className="font-serif text-[22px] font-bold text-ink">{ica.title}</div>
                  <div className="text-sm text-ash mt-[2px] italic">{ica.subtitle}</div>
                </div>
                <span className={`text-lg text-primary transition-transform duration-300 font-light ${isOpen ? 'rotate-45' : ''}`}>+</span>
              </div>

              {isOpen && (
                <div className="px-5 md:px-7 pb-7">
                  <div className="bg-gradient-to-br from-primary-deep to-primary p-4 md:p-[16px_20px] grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                    {ica.snap.map((s, j) => (
                      <div key={j} className="flex items-start gap-[7px] text-white/80 text-sm leading-[1.5]">
                        <span className="text-white/45 text-[13px] font-bold flex-shrink-0 mt-[2px]">→</span>{s}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-[14px]">
                    {ica.cards.map((card, j) => (
                      <div key={j} className="bg-cream border border-border p-5 transition-all hover:border-primary/30 hover:shadow-md">
                        <div className="text-xs font-bold tracking-[0.16em] uppercase text-primary mb-3">{card.title}</div>
                        <ul>
                          {card.items.map((item, k) => (
                            <li key={k} className="text-sm text-charcoal py-[5px] border-b border-border last:border-b-0 flex gap-2 leading-[1.5]">
                              <span className="text-primary text-[13px] font-bold flex-shrink-0">·</span>{item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="bg-dark p-5 md:p-[20px_22px] border-l-[3px] border-primary mb-[14px]">
                    <div className="text-xs font-bold tracking-[0.16em] uppercase text-primary mb-[10px]">Conversion Playbook</div>
                    <ul>
                      {ica.conversion.map((step, j) => (
                        <li key={j} className="text-sm text-white/60 py-[5px] border-b border-white/5 last:border-b-0 flex gap-2 leading-[1.5]">
                          <span className="text-primary text-[13px] font-bold flex-shrink-0">·</span>{step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-[10px]">
                    {ica.revenue.map((rev, j) => (
                      <div key={j} className="bg-primary/[0.06] border border-primary/15 p-4 text-center">
                        <div className="font-serif text-[26px] font-bold text-primary mb-1">{rev.num}</div>
                        <div className="text-xs font-semibold tracking-[0.12em] uppercase text-ash">{rev.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default IdealClientAvatars;
