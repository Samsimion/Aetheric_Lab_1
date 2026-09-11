import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const WebsitesCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#07111F] text-white">

      {/* Decorative circles */}
      <div className="pointer-events-none absolute right-[-100px] top-[-180px] h-[450px] w-[450px] rounded-full border border-[#1677FF]/15" />

      <div className="pointer-events-none absolute right-[-40px] top-[-100px] h-[300px] w-[300px] rounded-full border border-[#7657E8]/10" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-16">

        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5EA2FF]">
                Let's Build Together
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
              Ready for a website
              <br />
              that{" "}
              <span className="text-[#3D91FF]">
                works?
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
              Tell us what you're building. We'll help turn
              it into a digital experience.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">

            <Link
              to="/contact"
              className="group inline-flex items-center rounded-full bg-[#1677FF] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0F63D4]"
            >
              Start a Project

              <ArrowRight
                size={17}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#1677FF] hover:bg-white/5"
            >
              Talk to Our Team
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WebsitesCTA;