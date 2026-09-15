import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import UIUXHero from "../components/services/uiux/UIUXHero";
import UIUXPhilosophy from "../components/services/uiux/UIUXPhilosophy";
import UIUXDesign from "../components/services/uiux/UIUXDesign";
import UIUXProcess from "../components/services/uiux/UIUXProcess";
import UIUXPrinciples from "../components/services/uiux/UIUXPrinciples";
import UIUXSystems from "../components/services/uiux/UIUXSystems";
import UIUXProducts from "../components/services/uiux/UIUXProducts";
import UIUXEngineering from "../components/services/uiux/UIUXEngineering";
import UIUXCTA from "../components/services/uiux/UIUXCTA";

const UIUXDesigns = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#0B1B34]">
      <Navbar />

      <main>
        <UIUXHero />
        <UIUXPhilosophy />
        <UIUXDesign/>
        <UIUXProcess />
        <UIUXPrinciples />
        <UIUXSystems />
        <UIUXProducts />
        <UIUXEngineering />
        <UIUXCTA />
      </main>

      <Footer />
    </div>
  );
};

export default UIUXDesigns;