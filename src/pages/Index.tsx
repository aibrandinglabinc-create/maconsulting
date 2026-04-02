import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";

import Ticker from "@/components/Ticker";
import EcosystemNetworkSection from "@/components/EcosystemNetworkSection";
import CatalystSection from "@/components/CatalystSection";
import DetroitDivider from "@/components/DetroitDivider";
import MarketReality from "@/components/MarketReality";
import RevenueProjection from "@/components/RevenueProjection";
import MonthOneScenarios from "@/components/MonthOneScenarios";
import IdealClientAvatars from "@/components/IdealClientAvatars";
import MarketValidation from "@/components/MarketValidation";
import OfferArchitecture from "@/components/OfferArchitecture";
import OutreachStrategy from "@/components/OutreachStrategy";
import LockedLeadsSection from "@/components/LockedLeadsSection";
import TotalBand from "@/components/TotalBand";
import ClosingCTASection from "@/components/ClosingCTASection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const Index = () => (
  <div className="min-h-screen bg-fog">
    <CursorGlow />
    <NavBar />
    <Hero />
    
    <EcosystemNetworkSection />
    <CatalystSection />
    <DetroitDivider />
    <div className="w-full h-[40px] overflow-hidden flex items-center" style={{ background: '#0A0A0C', borderTop: '1px solid rgba(18,196,176,0.2)', borderBottom: '1px solid rgba(18,196,176,0.2)' }}>
      <Ticker />
    </div>
    <div className="max-w-[1160px] mx-auto px-6 py-10 space-y-16">
      <MarketReality />
      <RevenueProjection />
      <MonthOneScenarios />
      <IdealClientAvatars />
      <MarketValidation />
      <OfferArchitecture />
    </div>
    <OutreachStrategy />
    <LockedLeadsSection />
    <TotalBand />
    <ClosingCTASection />
    <Footer />
  </div>
);

export default Index;
