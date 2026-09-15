import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import BusinessHero from "../components/services/business/BusinessHero";
import BusinessBuild from "../components/services/business/BusinessBuild";
import BusinessConnection from "../components/services/business/BusinessConnection";
import BusinessFeatures from "../components/services/business/BusinessFeatures";
import BusinessIndustries from "../components/services/business/BusinessIndustries";
import BusinessProcess from "../components/services/business/BusinessProcess";
import BusinessResults from "../components/services/business/BusinessResults";
import BusinessCTA from "../components/services/business/BusinessCTA";

const BusinessSystems = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#0B1B34]">
      <Navbar />

      <main>
        <BusinessHero />
        <BusinessBuild />
        <BusinessConnection />
        <BusinessFeatures />
        <BusinessIndustries />
        <BusinessProcess />
        <BusinessResults />
        <BusinessCTA />
      </main>

      <Footer />
    </div>
  );
};

export default BusinessSystems;