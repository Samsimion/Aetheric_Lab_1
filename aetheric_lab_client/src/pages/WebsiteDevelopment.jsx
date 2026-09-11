import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import WebsitesHero from "../components/services/websites/WebsitesHero";
import WebsiteTypes from "../components/services/websites/WebsiteTypes";
import WebsiteBenefits from "../components/services/websites/WebsiteBenefits";
import WebsiteWork from "../components/services/websites/WebsiteWork";
import WebsiteProcess from "../components/services/websites/WebsiteProcess";
import WebsitesCTA from "../components/services/websites/WebsitesCTA";

const WebsiteDevelopment = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#0B1B34]">
      <Navbar />

      <main>
        <WebsitesHero />
        <WebsiteTypes />
        <WebsiteBenefits />
        <WebsiteWork />
        <WebsiteProcess />
        <WebsitesCTA />
      </main>

      <Footer />
    </div>
  );
};

export default WebsiteDevelopment;