import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import MobileHero from "../components/services/mobile/MobileHero";
import MobileBuild from "../components/services/mobile/MobileBuild";
import MobileConnection from "../components/services/mobile/MobileConnection";
import MobileFeatures from "../components/services/mobile/MobileFeatures";
import MobileArchitecture from "../components/services/mobile/MobileArchitecture";
import MobileProducts from "../components/services/mobile/MobileProducts";
import MobileProcess from "../components/services/mobile/MobileProcess";
import MobileStatement from "../components/services/mobile/MobileStatement";
import MobileCTA from "../components/services/mobile/MobileCTA";

const MobileApplications = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#0B1B34]">
      <Navbar />

      <main>
        <MobileHero />
        <MobileBuild />
        <MobileConnection />
        <MobileFeatures />
        <MobileArchitecture />
        <MobileProducts />
        <MobileProcess />
        <MobileStatement />
        <MobileCTA />
      </main>

      <Footer />
    </div>
  );
};

export default MobileApplications;