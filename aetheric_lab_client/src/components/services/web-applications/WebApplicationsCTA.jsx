import { ArrowRight, Layers3 } from "lucide-react";
import { Link } from "react-router";

const WebApplicationsCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#EAF4FF] text-[#0B1B34]">

      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-24 bottom-[-140px] h-[320px] w-[320px] rounded-full border border-[#BFD9F7]" />

        <div className="absolute -left-8 bottom-[-90px] h-[220px] w-[220px] rounded-full border border-[#CFE3F8]" />

        <div className="absolute right-[-100px] top-[-160px] h-[400px] w-[400px] rounded-full border border-[#BFD9F7]" />

        <div className="absolute right-[40px] top-[-90px] h-[250px] w-[250px] rounded-full border border-[#D6E8FA]" />

        <div className="absolute bottom-0 left-1/3 h-32 w-64 rounded-full bg-[#1677FF]/5 blur-3xl" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">

          {/* Text */}
          <div>

            <div className="mb-4 flex items-center gap-3">

              <span className="h-px w-9 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1677FF]">
                Complexity Should Exist Behind The Interface
              </span>

            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-6xl">

              Powerful underneath.
              <br />

              <span className="text-[#1677FF]">
                Simple on the surface.
              </span>

            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#526784]">
              Your users shouldn't have to understand how the
              system works. They should simply know how to use it.
            </p>

          </div>

          {/* Actions */}
          <div className="flex flex-col items-start gap-4 sm:flex-row lg:flex-col">

            <Link
              to="/contact"
              className="group inline-flex items-center rounded-full bg-[#1677FF] px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(22,119,255,0.18)] transition hover:-translate-y-0.5 hover:bg-[#0F63D4]"
            >
              Let's Build Your Application

              <ArrowRight
                size={17}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-[#9DBFE5] bg-white/60 px-7 py-4 text-sm font-semibold text-[#0B1B34] transition hover:border-[#1677FF] hover:bg-white"
            >
              Talk to Our Team
            </Link>

          </div>

        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex items-center gap-3 border-t border-[#CFE0F2] pt-6">

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#1677FF] shadow-sm">
            <Layers3 size={18} />
          </div>

          <p className="text-xs text-[#637691]">
            From business logic to user experience — engineered as one system.
          </p>

        </div>

      </div>
    </section>
  );
};

export default WebApplicationsCTA;