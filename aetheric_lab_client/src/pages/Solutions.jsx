import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import SolutionsHero from "../components/solutions/SolutionsHero";
import SolutionsApproach from "../components/solutions/SolutionsApproach";
import SolutionAreas from "../components/solutions/SolutionAreas";
import SolutionsProcess from "../components/solutions/SolutionsProcess";
import SolutionsNeeds from "../components/solutions/SolutionsNeeds";
import SolutionsTechnology from "../components/solutions/SolutionsTechnology";
import SolutionsCTA from "../components/solutions/SolutionsCTA";

const Solutions = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#0B1B34]">
      <Navbar />

      <main>
        <SolutionsHero />
        <SolutionsApproach />
        <SolutionAreas />
        <SolutionsProcess />
        <SolutionsNeeds />
        <SolutionsTechnology />
        <SolutionsCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Solutions; 
