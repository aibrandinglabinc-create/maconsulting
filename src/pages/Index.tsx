import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import PrepBand from "@/components/PrepBand";
import TealBand from "@/components/TealBand";
import MarketReality from "@/components/MarketReality";
import RevenueProjection from "@/components/RevenueProjection";
import MonthOneScenarios from "@/components/MonthOneScenarios";
import IdealClientAvatars from "@/components/IdealClientAvatars";
import MarketValidation from "@/components/MarketValidation";
import OfferArchitecture from "@/components/OfferArchitecture";
import OutreachStrategy from "@/components/OutreachStrategy";
import TotalBand from "@/components/TotalBand";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-fog">
    <Ticker />
    <Hero />
    <PrepBand />
    <TealBand />
    <div className="max-w-[1100px] mx-auto px-6 py-10 space-y-16">
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
