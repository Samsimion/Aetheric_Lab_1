import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router";

const ServicesCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#07111F] text-white">

      <div className="pointer-events-none absolute right-[-100px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full border border-white/5" />

      <div className="pointer-events-none absolute right-[-20px] top-1/2 h-[260px] w-[260px] -translate-y-1/2 rounded-full border border-[#1677FF]/10" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#5EA2FF]">
                Let's Build Together
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
              Have a problem{" "}
              <span className="text-[#1677FF]">
                worth solving?
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-400">
              Tell us what you're trying to build, improve or transform.
              We'd love to hear about it.
            </p>
          </div>


          <div className="flex flex-col items-start lg:items-end">

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
              className="mt-5 inline-flex items-center text-sm text-slate-400 transition hover:text-white"
            >
              <MessageCircle size={16} className="mr-2 text-[#5EA2FF]" />
              Not sure what you need? Talk to us
              <ArrowRight size={14} className="ml-2" />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesCTA;