import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const SolutionsCTA = () => {
  return (
    // <section className="relative overflow-hidden bg-[#07111F] text-white">
    <section className="relative overflow-hidden bg-[#EEF6FF] text-[#0B1B34]">
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-40">
        <div className="absolute right-[-180px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#1677FF]/30" />

        <div className="absolute right-[-80px] top-1/2 h-[330px] w-[330px] -translate-y-1/2 rounded-full border border-[#7657E8]/25" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#3B91FF]">
              Ready To Solve Together?
            </span>

            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
              Have a problem{" "}
              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                worth solving?
              </span>
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-base leading-7 text-slate-400">
              Tell us what you're trying to achieve. We'll help you explore
              what technology can make possible.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#1677FF] to-[#7657E8] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Start a Conversation
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#1677FF] hover:bg-white/5"
              >
                View Our Work
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionsCTA;