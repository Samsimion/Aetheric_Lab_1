import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const BusinessCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#EAF4FF] py-20 lg:py-24">

      {/* Decorative shapes */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -left-20 bottom-[-180px] h-[400px] w-[400px] rounded-full border border-[#C5DCF5]" />

        <div className="absolute left-[-60px] bottom-[-120px] h-[280px] w-[280px] rounded-full border border-[#D2E4F7]" />

        <div className="absolute right-[-80px] top-[-180px] h-[400px] w-[400px] rounded-full border border-[#C5DCF5]" />

        <div className="absolute right-[10%] bottom-[-100px] h-[220px] w-[220px] rounded-full bg-[#1677FF]/5 blur-3xl" />

      </div>


      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">

          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
                Ready To Transform Your Business?
              </span>

            </div>


            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#0B1B34] sm:text-5xl">

              Let's build a system
              <br />

              that works{" "}

              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                for you.
              </span>

            </h2>

          </div>


          <div className="border-l border-[#C7DCEF] pl-8">

            <p className="max-w-xl text-base leading-7 text-[#526784]">
              From automation to insights, we'll help you build
              a business system that simplifies your operations
              and drives growth.
            </p>


            <div className="mt-7 flex flex-wrap gap-3">

              <Link
                to="/contact"
                className="group inline-flex items-center rounded-full bg-[#1677FF] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(22,119,255,0.18)] transition hover:-translate-y-0.5 hover:bg-[#0F63D4]"
              >
                Start a Project

                <ArrowRight
                  size={16}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Link>


              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-[#AFC8E2] px-6 py-3.5 text-sm font-semibold text-[#0B1B34] transition hover:border-[#1677FF] hover:bg-white/50"
              >
                Talk to Our Team
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default BusinessCTA;