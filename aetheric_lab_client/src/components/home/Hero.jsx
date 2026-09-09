import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import Button from "../Button";

const HERO_IMAGE =
  "https://images.pexels.com/photos/34804001/pexels-photo-34804001.jpeg?cs=srgb&dl=pexels-dkomov-34804001.jpg&fm=jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#07111F] pt-20">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(22,119,255,0.12),transparent_35%)]" />

      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl lg:grid-cols-2">

        {/* LEFT */}
        <div className="relative z-20 flex items-center px-6 py-20 lg:px-8">

          <div className="max-w-2xl">

            <div className="mb-6 flex flex-wrap items-center gap-3 text-[10px] font-bold tracking-[0.3em] text-[#62A9FF] sm:text-xs">
              <span>TECHNOLOGY</span>
              <span className="text-slate-600">+</span>
              <span>INNOVATION</span>
              <span className="text-slate-600">+</span>
              <span>IMPACT</span>
            </div>

            <h1 className="text-5xl font-bold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              FROM IDEAS TO

              <span className="mt-2 block bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                DIGITAL REALITY.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Aetheric Labs builds digital solutions for businesses
              while creating innovative technology products that
              shape tomorrow.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Button to="/contact">
                Start a Project
              </Button>

              <Button
                to="/products"
                variant="secondary"
              >
                Explore Our Products
              </Button>

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-full">

          <img
            src={HERO_IMAGE}
            alt="Modern technology workspace"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark brand overlay */}
          <div className="absolute inset-0 bg-[#07111F]/30" />

          <div className="absolute inset-y-0 left-0 z-10 w-1/2 bg-gradient-to-r from-[#07111F] via-[#07111F]/70 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-[#07111F] to-transparent" />

          <div className="absolute right-8 top-16 z-20 hidden border-l border-[#1677FF] pl-5 lg:block">
            <p className="text-sm font-medium leading-6 text-white">
              Better Solutions.
              <br />
              Brighter Futures.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;