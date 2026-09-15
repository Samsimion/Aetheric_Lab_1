import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router";

const MobileCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#EAF4FF] py-16 lg:py-20">

      {/* Decorative curves */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute right-[-100px] top-[-120px] h-[420px] w-[420px] rounded-full border border-[#BBD7F5]" />

        <div className="absolute right-[-30px] top-[-50px] h-[300px] w-[300px] rounded-full border border-[#CDE2F8]" />

        <div className="absolute bottom-[-180px] left-[-100px] h-[400px] w-[400px] rounded-full border border-[#C9DDF7]" />

      </div>


      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT */}
          <div>

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
                Have An App Idea?
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B1B34] sm:text-5xl">
              Let's bring it
              <br />
              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                to life.
              </span>
            </h2>

          </div>


          {/* RIGHT */}
          <div className="border-l border-[#BFD7F4] pl-7 lg:pl-10">

            <p className="max-w-xl text-base leading-7 text-[#526784]">
              From your first concept to a production-ready
              application, let's build something people will want to
              use.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">

              <Link
                to="/contact"
                className="group inline-flex items-center rounded-full bg-gradient-to-r from-[#1677FF] to-[#7657E8] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(22,119,255,0.18)] transition hover:-translate-y-0.5"
              >
                Start a Project

                <ArrowRight
                  size={17}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Link>


              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-[#B8CEE6] bg-white/50 px-6 py-3.5 text-sm font-semibold text-[#0B1B34] transition hover:border-[#1677FF] hover:bg-white"
              >
                <MessageCircle
                  size={16}
                  className="mr-2 text-[#1677FF]"
                />

                Talk to Our Team
              </Link>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default MobileCTA;