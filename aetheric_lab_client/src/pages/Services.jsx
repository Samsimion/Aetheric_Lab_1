import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



import ServicesHero from "../components/services/ServicesHero";
import ServicesIntro from "../components/services/ServicesIntro";
import ServicesGrid from "../components/services/ServicesGrid";
import ServicesSolutions from "../components/services/ServicesSolutions";
import WhyAetheric from "../components/services/WhyAetheric";
import ServicesProcess from "../components/services/ServicesProcess";
import TechnologyStack from "../components/services/TechnologyStack";
import ServicesCTA from "../components/services/ServicesCTA";

const Services = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#0B1B34]">
      <Navbar />

      <main>
        <ServicesHero />
        <ServicesIntro />
        <ServicesGrid />
        <ServicesSolutions />
        <WhyAetheric />
        <ServicesProcess />
        <TechnologyStack />
        <ServicesCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Services;


// import React from "react";


// export default function Services(){
//   return(
//     <></>
//   )
// }