import {
  ArrowRight,
  Users,
  Layers3,
  Gauge,
  MousePointer2,
  Smartphone,
  Palette,
  Component,
} from "lucide-react";

import { Link } from "react-router";

const UIUXHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#07111F] text-white">

      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-[-100px] h-[520px] w-[520px] rounded-full bg-[#1677FF]/10 blur-3xl" />

        <div className="absolute right-[10%] top-[-170px] h-[470px] w-[470px] rounded-full border border-[#1677FF]/10" />

        <div className="absolute bottom-[-250px] right-[22%] h-[500px] w-[500px] rounded-full border border-[#7657E8]/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-24 sm:px-8 lg:px-12 lg:pb-16 lg:pt-28">

        {/* Breadcrumb */}
        <div className="mb-7 text-xs text-slate-400">
          <Link to="/" className="transition hover:text-white">
            Home
          </Link>

          <span className="mx-2 text-slate-600">›</span>

          <Link to="/services" className="transition hover:text-white">
            Services
          </Link>

          <span className="mx-2 text-slate-600">›</span>

          <span className="text-slate-300">
            UI/UX Design
          </span>
        </div>


        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

          {/* LEFT */}
          <div>

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5EA2FF]">
                UI / UX Design
              </span>
            </div>


            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-[4.25rem]">
              Make complexity
              <br />
              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                feel simple.
              </span>
            </h1>


            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              We design intuitive digital experiences that turn complex
              ideas into products people understand, enjoy and remember.
            </p>


            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/contact"
                className="group inline-flex items-center rounded-full bg-[#1677FF] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0F63D4]"
              >
                Start a Project

                <ArrowRight
                  size={17}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Link>


              <Link
                to="/portfolio"
                className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#1677FF] hover:bg-white/5"
              >
                Explore Our Work
              </Link>

            </div>


            {/* Proof */}
            <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/10 pt-6">

              <ProofPoint
                icon={<Users size={19} />}
                title="User-Centered"
                text="Designed around real people"
              />

              <ProofPoint
                icon={<Layers3 size={19} />}
                title="Systematic"
                text="Built with consistency"
              />

              <ProofPoint
                icon={<Gauge size={19} />}
                title="Engineered"
                text="Ready for real products"
              />

            </div>

          </div>


          {/* RIGHT VISUAL */}
          <div className="relative mx-auto h-[430px] w-full max-w-[600px]">

            {/* Design flow labels */}
            <div className="absolute left-[8%] top-4 rounded-lg border border-white/10 bg-[#102137] px-4 py-2 text-[10px] text-slate-300">
              From ideas
            </div>

            <div className="absolute left-[35%] top-0 rounded-lg border border-white/10 bg-[#102137] px-4 py-2 text-[10px] text-slate-300">
              Design
            </div>

            <div className="absolute right-[8%] top-3 rounded-lg border border-white/10 bg-[#102137] px-4 py-2 text-[10px] text-slate-300">
              To real experiences
            </div>


            {/* Wireframe */}
            <div className="absolute left-[5%] top-[80px] w-[130px] rotate-[-7deg] rounded-xl border border-white/10 bg-[#0D1B2E] p-3 shadow-2xl">

              <div className="flex items-center gap-2">
                <MousePointer2 size={12} className="text-[#5EA2FF]" />
                <div className="h-2 w-12 rounded bg-white/10" />
              </div>

              <div className="mt-4 space-y-2">
                <div className="h-7 rounded border border-white/10" />
                <div className="h-3 w-3/4 rounded bg-white/5" />
                <div className="h-3 w-1/2 rounded bg-white/5" />
                <div className="h-16 rounded border border-dashed border-[#1677FF]/30" />
              </div>

            </div>


            {/* Main design board */}
            <div className="absolute left-[27%] top-[35px] z-20 w-[250px] overflow-hidden rounded-2xl border border-white/15 bg-[#F8FBFF] shadow-2xl shadow-black/50">

              {/* Toolbar */}
              <div className="flex h-8 items-center gap-2 border-b border-slate-200 px-3">

                <span className="h-2 w-2 rounded-full bg-slate-300" />
                <span className="h-2 w-2 rounded-full bg-slate-300" />
                <span className="h-2 w-2 rounded-full bg-slate-300" />

                <div className="ml-4 flex gap-3 text-slate-400">
                  <MousePointer2 size={10} />
                  <Palette size={10} />
                  <Component size={10} />
                </div>

              </div>


              <div className="grid grid-cols-[38px_1fr]">

                {/* Side toolbar */}
                <div className="border-r border-slate-200 bg-slate-50 p-2">

                  <div className="space-y-4 text-slate-400">
                    <MousePointer2 size={11} />
                    <div className="h-3 w-3 rounded border border-slate-300" />
                    <div className="h-3 w-3 rounded border border-slate-300" />
                    <div className="h-3 w-3 rounded-full border border-slate-300" />
                  </div>

                </div>


                {/* Canvas */}
                <div className="p-4">

                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-bold text-[#0B1B34]">
                      AETHERIC
                    </span>

                    <div className="flex gap-1">
                      <span className="h-3 w-3 rounded-full bg-[#1677FF]" />
                      <span className="h-3 w-3 rounded-full bg-[#7657E8]" />
                    </div>
                  </div>


                  <div className="mt-6">

                    <p className="text-[7px] uppercase tracking-[0.2em] text-[#1677FF]">
                      Digital Experience
                    </p>

                    <p className="mt-2 text-xl font-semibold leading-tight text-[#0B1B34]">
                      Discover a
                      <br />
                      better tomorrow.
                    </p>

                    <div className="mt-4 h-5 w-16 rounded-full bg-[#1677FF]" />

                  </div>


                  <div className="mt-6 grid grid-cols-2 gap-2">

                    <div className="h-14 rounded-lg bg-[#E7F0FA]" />
                    <div className="h-14 rounded-lg bg-[#EEE9FA]" />

                  </div>

                </div>

              </div>
            </div>


            {/* Mobile interface */}
            <div className="absolute right-[12%] top-[75px] z-30 w-[145px] rotate-[5deg] overflow-hidden rounded-[1.8rem] border-4 border-[#17283D] bg-[#F8FBFF] shadow-2xl shadow-black/60">

              <div className="flex h-5 justify-center bg-[#17283D]">
                <div className="h-1.5 w-12 rounded-full bg-black/30" />
              </div>

              <div className="p-3">

                <div className="flex items-center justify-between">
                  <span className="text-[7px] font-bold text-[#0B1B34]">
                    AETHERIC
                  </span>

                  <Smartphone size={11} className="text-[#1677FF]" />
                </div>

                <p className="mt-7 text-[9px] uppercase tracking-[0.18em] text-[#1677FF]">
                  Discover
                </p>

                <p className="mt-2 text-base font-semibold leading-tight text-[#0B1B34]">
                  A smarter
                  <br />
                  experience.
                </p>

                <div className="mt-4 h-20 rounded-xl bg-gradient-to-br from-[#DCEBFA] to-[#E8E2FA]" />

                <div className="mt-3 h-6 rounded-full bg-[#1677FF]" />

              </div>
            </div>


            {/* Design system */}
            <div className="absolute bottom-[15px] right-[2%] z-40 w-[150px] rounded-xl border border-white/10 bg-[#102137]/95 p-4 shadow-2xl backdrop-blur-xl">

              <div className="flex items-center justify-between">
                <p className="text-[9px] font-semibold text-white">
                  Design System
                </p>

                <Component size={12} className="text-[#5EA2FF]" />
              </div>

              <div className="mt-4 flex gap-2">
                <span className="h-5 w-5 rounded-full bg-[#1677FF]" />
                <span className="h-5 w-5 rounded-full bg-[#7657E8]" />
                <span className="h-5 w-5 rounded-full bg-white" />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="h-5 rounded border border-white/10" />
                <div className="h-5 rounded border border-white/10" />
                <div className="h-5 rounded border border-white/10" />
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};


const ProofPoint = ({ icon, title, text }) => {
  return (
    <div className="flex items-start gap-3 border-r border-white/10 px-4 first:pl-0 last:border-0">

      <div className="mt-0.5 text-[#1677FF]">
        {icon}
      </div>

      <div>
        <p className="text-[11px] font-semibold text-white">
          {title}
        </p>

        <p className="mt-1 text-[9px] leading-4 text-slate-500">
          {text}
        </p>
      </div>

    </div>
  );
};

export default UIUXHero;