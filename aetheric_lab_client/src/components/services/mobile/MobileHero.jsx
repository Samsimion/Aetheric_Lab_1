import {
  ArrowRight,
  Smartphone,
  Database,
  Zap,
} from "lucide-react";

import { Link } from "react-router";

const MobileHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#07111F] text-white">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-[-100px] h-[500px] w-[500px] rounded-full bg-[#1677FF]/10 blur-3xl" />

        <div className="absolute right-[12%] top-[-180px] h-[460px] w-[460px] rounded-full border border-[#1677FF]/10" />

        <div className="absolute bottom-[-220px] right-[25%] h-[420px] w-[420px] rounded-full border border-[#7657E8]/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-24 sm:px-8 lg:px-12 lg:pb-16 lg:pt-28">

        {/* Breadcrumb */}
        <div className="mb-7 text-xs text-slate-400">
          <Link
            to="/"
            className="transition hover:text-white"
          >
            Home
          </Link>

          <span className="mx-2 text-slate-600">›</span>

          <Link
            to="/services"
            className="transition hover:text-white"
          >
            Services
          </Link>

          <span className="mx-2 text-slate-600">›</span>

          <span className="text-slate-300">
            Mobile Applications
          </span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT */}
          <div>

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5EA2FF]">
                Mobile Applications
              </span>
            </div>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-[4.2rem]">
              Apps built for
              <br />
              the way people{" "}
              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                move.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              We design and engineer mobile applications that put
              powerful digital experiences directly in your users'
              hands.
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

            {/* Proof points */}
            <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/10 pt-6">

              <ProofPoint
                icon={<Smartphone size={19} />}
                title="Native & Cross-platform"
                text="Built for modern devices"
              />

              <ProofPoint
                icon={<Zap size={19} />}
                title="Connected"
                text="APIs, data & services"
              />

              <ProofPoint
                icon={<Database size={19} />}
                title="Built to scale"
                text="Ready for growth"
              />

            </div>
          </div>


          {/* RIGHT VISUAL */}
          <div className="relative mx-auto h-[430px] w-full max-w-[600px]">

            {/* Connection lines */}
            <div className="pointer-events-none absolute inset-0">

              <div className="absolute left-[16%] top-[46%] h-px w-[68%] bg-gradient-to-r from-transparent via-[#1677FF]/30 to-transparent" />

              <div className="absolute left-[25%] top-[34%] h-[90px] w-px rotate-[55deg] bg-gradient-to-b from-transparent via-[#1677FF]/20 to-transparent" />

              <div className="absolute right-[22%] top-[32%] h-[100px] w-px rotate-[-50deg] bg-gradient-to-b from-transparent via-[#7657E8]/20 to-transparent" />

            </div>


            {/* BACK PHONE */}
            <div className="absolute left-[9%] top-[55px] w-[170px] rotate-[-8deg] overflow-hidden rounded-[2rem] border-[6px] border-[#17283D] bg-[#F8FBFF] shadow-2xl shadow-black/50">

              <div className="h-6 bg-[#17283D]" />

              <div className="p-4">

                <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#1677FF]">
                  Dashboard
                </p>

                <p className="mt-3 text-lg font-semibold leading-tight text-[#0B1B34]">
                  Stay connected.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  <div className="h-16 rounded-xl bg-[#E6F0FB]" />
                  <div className="h-16 rounded-xl bg-[#EDE9FA]" />
                </div>

                <div className="mt-4 h-3 w-20 rounded-full bg-slate-200" />
                <div className="mt-2 h-3 w-28 rounded-full bg-slate-100" />

              </div>
            </div>


            {/* MAIN PHONE */}
            <div className="absolute left-1/2 top-[15px] z-20 w-[190px] -translate-x-1/2 overflow-hidden rounded-[2.3rem] border-[6px] border-[#17283D] bg-[#F8FBFF] shadow-2xl shadow-black/60">

              <div className="flex h-7 items-center justify-center bg-[#17283D]">
                <div className="h-1.5 w-16 rounded-full bg-black/30" />
              </div>

              <div className="p-5">

                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-bold text-[#0B1B34]">
                    AETHERIC
                  </span>

                  <div className="h-5 w-5 rounded-full bg-[#E5EFFA]" />
                </div>

                <div className="mt-8">

                  <p className="text-[8px] uppercase tracking-[0.2em] text-[#1677FF]">
                    Your experience
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold leading-[1.05] text-[#0B1B34]">
                    Everything
                    <br />
                    connected.
                  </h3>

                </div>

                <div className="mt-7 h-28 rounded-2xl bg-gradient-to-br from-[#DCEBFA] to-[#E8E2FA]" />

                <div className="mt-5 h-9 rounded-full bg-[#1677FF]" />

                <div className="mt-5 space-y-2">
                  <div className="h-2 w-full rounded-full bg-slate-200" />
                  <div className="h-2 w-3/4 rounded-full bg-slate-100" />
                </div>

              </div>
            </div>


            {/* FRONT PHONE */}
            <div className="absolute bottom-[5px] right-[5%] z-30 w-[155px] rotate-[7deg] overflow-hidden rounded-[2rem] border-[6px] border-[#17283D] bg-[#F8FBFF] shadow-2xl shadow-black/60">

              <div className="h-6 bg-[#17283D]" />

              <div className="p-4">

                <p className="text-[8px] uppercase tracking-[0.15em] text-[#1677FF]">
                  Activity
                </p>

                <p className="mt-3 text-base font-semibold text-[#0B1B34]">
                  You're on the move.
                </p>

                <div className="mt-5 space-y-3">

                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-[#E4EFFB]" />

                    <div>
                      <div className="h-2 w-16 rounded-full bg-slate-200" />
                      <div className="mt-1.5 h-1.5 w-10 rounded-full bg-slate-100" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-[#EDE8FA]" />

                    <div>
                      <div className="h-2 w-14 rounded-full bg-slate-200" />
                      <div className="mt-1.5 h-1.5 w-12 rounded-full bg-slate-100" />
                    </div>
                  </div>

                </div>

                <div className="mt-5 h-8 rounded-full bg-[#1677FF]" />

              </div>
            </div>


            {/* Floating label */}
            <div className="absolute bottom-8 left-[8%] z-40 rounded-xl border border-white/10 bg-[#102137]/95 px-4 py-3 shadow-xl backdrop-blur-xl">

              <p className="text-[9px] uppercase tracking-[0.2em] text-slate-500">
                Mobile Experience
              </p>

              <p className="mt-1 text-xs font-medium text-white">
                Real people. Real impact.
              </p>

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
        <p className="text-[11px] font-semibold leading-4 text-white">
          {title}
        </p>

        <p className="mt-1 text-[9px] leading-4 text-slate-500">
          {text}
        </p>
      </div>
    </div>
  );
};


export default MobileHero;