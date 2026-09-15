import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import IntegrationsHero from "../components/integrations/IntegrationsHero";
import IntegrationBenefits from "../components/integrations/IntegrationBenefits";
import CommonIntegrations from "../components/integrations/CommonIntegrations";
import IntegrationProcess from "../components/integrations/IntegrationProcess";
import IntegrationUseCases from "../components/integrations/IntegrationUseCases";
import IntegrationSecurity from "../components/integrations/IntegrationSecurity";
import IntegrationsCTA from "../components/integrations/IntegrationsCTA";

const APIsIntegrations = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#0B1B34]">
      <Navbar />

      <main>
        <IntegrationsHero />
        <IntegrationBenefits />
        <CommonIntegrations />
        <IntegrationProcess />
        <IntegrationUseCases />
        <IntegrationSecurity />
        <IntegrationsCTA />
      </main>

      <Footer />
    </div>
  );
};

export default APIsIntegrations;