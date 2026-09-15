import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import WebApplicationsHero from "../components/services/web-applications/WebApplicationsHero";
import ApplicationTypes from "../components/services/web-applications/ApplicationTypes";
import ComplexitySection from "../components/services/web-applications/ComplexitySection";
import ApplicationCapabilities from "../components/services/web-applications/ApplicationCapabilities";
import ApplicationArchitecture from "../components/services/web-applications/ApplicationArchitecture";
import ApplicationWork from "../components/services/web-applications/ApplicationWork";
import ApplicationProcess from "../components/services/web-applications/ApplicationProcess";
import WebApplicationsCTA from "../components/services/web-applications/WebApplicationsCTA";

const WebApplications = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#0B1B34]">
      <Navbar />

      <main>
        <WebApplicationsHero />
        <ApplicationTypes />
        <ComplexitySection />
        <ApplicationCapabilities />
        <ApplicationArchitecture />
        <ApplicationWork />
        <ApplicationProcess />
        <WebApplicationsCTA />
      </main>

      <Footer />
    </div>
  );
};

export default WebApplications;