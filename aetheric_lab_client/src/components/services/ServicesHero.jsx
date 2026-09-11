import { ArrowRight, ArrowUpRight, BarChart3, Layers3, Users } from "lucide-react";
import { Link } from "react-router";

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#07111F] text-white">
      
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-10 h-[500px] w-[500px] rounded-full bg-[#1677FF]/10 blur-3xl" />
        <div className="absolute right-[25%] top-[-150px] h-[400px] w-[400px] rounded-full border border-[#1677FF]/10" />
        <div className="absolute right-[15%] top-[-100px] h-[600px] w-[600px] rounded-full border border-[#7657E8]/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-24 sm:px-8 lg:px-12 lg:pb-12 lg:pt-28">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">

          {/* LEFT */}
          <div>

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-14 bg-gradient-to-r from-blue-600 via-blue-500/70 to-transparent"></span>


              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5EA2FF]">
                Aetheric Digital Solutions
              </span>
              <span className="h-px w-14 bg-gradient-to-l from-blue-600 via-blue-500/70 to-transparent"></span>

            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-[4.5rem]">
              We build what
              <br />
              businesses{" "}
              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                need next.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              From high-performance websites to custom business systems,
              Aetheric Labs designs and builds digital solutions that solve
              real problems and create lasting value.
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

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap gap-6 border-t border-white/10 pt-7">

              <HeroStat
                icon={<Users size={20} />}
                title="Business focused"
                text="Solutions built around real needs"
              />

              <HeroStat
                icon={<Layers3 size={20} />}
                title="End-to-end"
                text="From idea to deployment"
              />

              <HeroStat
                icon={<BarChart3 size={20} />}
                title="Built to grow"
                text="Technology with the future in mind"
              />

            </div>
          </div>


          {/* RIGHT VISUAL */}
          <div className="relative min-h-[370px] lg:min-h-[430px]">

            {/* Main laptop */}
            <div className="absolute right-0 top-2 w-[92%] overflow-hidden rounded-2xl border border-white/15 bg-[#0D1B2E] shadow-2xl shadow-black/40">

              <div className="flex h-8 items-center gap-1.5 border-b border-white/10 px-4">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#5EA2FF]">
                      Digital Platform
                    </p>

                    <p className="mt-2 text-lg font-semibold">
                      Turn ideas into impact.
                    </p>
                  </div>

                  <div className="rounded-lg bg-[#1677FF]/10 px-3 py-2 text-xs text-[#5EA2FF]">
                    Aetheric
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-3 gap-3">
                  <DashboardCard value="84%" label="Growth" />
                  <DashboardCard value="2.4k" label="Users" />
                  <DashboardCard value="98%" label="Performance" />
                </div>

                <div className="mt-5 h-36 rounded-xl border border-white/10 bg-gradient-to-br from-[#1677FF]/15 to-[#7657E8]/5 p-4">
                  <div className="flex h-full items-end gap-2">
                    {[35, 48, 42, 65, 58, 76, 68, 91, 82, 100].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t bg-[#1677FF]/70"
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>


            {/* Phone */}
            <div className="absolute bottom-1 left-0 w-36 overflow-hidden rounded-[1.7rem] border-4 border-[#14253A] bg-[#0D1B2E] shadow-2xl shadow-black/50 sm:w-40">

              <div className="h-7 bg-[#14253A]" />

              <div className="p-4">
                <div className="text-[9px] uppercase tracking-[0.2em] text-[#5EA2FF]">
                  Aetheric
                </div>

                <p className="mt-5 text-sm font-semibold leading-5">
                  Better experiences everywhere.
                </p>

                <div className="mt-5 h-20 rounded-xl bg-[#1677FF]/10" />

                <div className="mt-4 h-2 w-16 rounded-full bg-white/10" />
                <div className="mt-2 h-2 w-24 rounded-full bg-white/10" />
              </div>
            </div>


            {/* Floating analytics card */}
            <div className="absolute bottom-8 right-[-10px] w-52 rounded-xl border border-white/10 bg-[#102137]/95 p-5 shadow-2xl backdrop-blur-xl sm:w-60">

              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-400">
                  Business growth
                </p>

                <ArrowUpRight size={15} className="text-[#5EA2FF]" />
              </div>

              <p className="mt-2 text-2xl font-semibold">
                +42.8%
              </p>

              <div className="mt-4 flex h-14 items-end gap-1.5">
                {[30, 42, 35, 55, 48, 68, 60, 80].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t bg-gradient-to-t from-[#1677FF] to-[#7657E8]"
                      style={{ height: `${height}%` }}
                    />
                  )
                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};


const HeroStat = ({ icon, title, text }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 text-[#1677FF]">
        {icon}
      </div>

      <div>
        <p className="text-xs font-medium text-white">
          {title}
        </p>

        <p className="mt-1 max-w-[130px] text-[10px] leading-4 text-slate-500">
          {text}
        </p>
      </div>
    </div>
  );
};


const DashboardCard = ({ value, label }) => {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
      <p className="text-base font-semibold">{value}</p>
      <p className="mt-1 text-[9px] text-slate-500">{label}</p>
    </div>
  );
};


export default ServicesHero;