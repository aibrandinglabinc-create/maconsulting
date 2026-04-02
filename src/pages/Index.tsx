import Ticker from "@/components/Ticker";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";

import CatalystSection from "@/components/CatalystSection";
import DetroitDivider from "@/components/DetroitDivider";
import MarketReality from "@/components/MarketReality";
import RevenueProjection from "@/components/RevenueProjection";
import MonthOneScenarios from "@/components/MonthOneScenarios";
import IdealClientAvatars from "@/components/IdealClientAvatars";
import MarketValidation from "@/components/MarketValidation";
import OfferArchitecture from "@/components/OfferArchitecture";
import OutreachStrategy from "@/components/OutreachStrategy";
import TotalBand from "@/components/TotalBand";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const Index = () => (
  <div className="min-h-screen bg-fog">
    <CursorGlow />
    <Ticker />
    <NavBar />
    <Hero />
    
    <CatalystSection />
    <DetroitDivider />
    <div className="max-w-[1160px] mx-auto px-6 py-10 space-y-16">
      <MarketReality />
      <RevenueProjection />
      <MonthOneScenarios />
      <IdealClientAvatars />
      <MarketValidation />
      <OfferArchitecture />
      <OutreachStrategy />
    </div>
    <TotalBand />
    <Footer />
  </div>
);

export default Index;
