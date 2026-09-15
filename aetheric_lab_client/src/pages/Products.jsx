import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ProductsHero from "../components/products/ProductsHero";
import TheLab from "../components/products/TheLab";
import ShuleniShowcase from "../components/products/ShuleniShowcase";
import SpectrumShowcase from "../components/products/SpectrumShowcase";
import HomeSmartShowcase from "../components/products/HomeSmartShowcase";
import FutureExperiments from "../components/products/FutureExperiments";
import ProductPhilosophy from "../components/products/ProductPhilosophy";
import ProductsCTA from "../components/products/ProductsCTA";


const Products = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#0B1B34]">
      <Navbar />

      <main>
        <ProductsHero />
        <TheLab />

        <ShuleniShowcase />
        <SpectrumShowcase />
        <HomeSmartShowcase />

        <FutureExperiments />
        <ProductPhilosophy />
        <ProductsCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Products;