import {
  ArrowRight,
  Building2,
  GraduationCap,
  Lightbulb,
  Network,
  ShieldCheck,
} from "lucide-react";

import { Link } from "react-router";

const SolutionsHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#07111F] text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#1677FF]/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-[300px] w-[300px] rounded-full bg-[#7657E8]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 sm:px-8 lg:px-12 lg:pb-20 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          
          {/* Content */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#3B91FF]">
                Solutions
              </span>
            </div>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Technology built around{" "}
              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                real problems.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              We create practical, scalable digital solutions that help
              businesses, schools, organizations and communities work better,
              connect better and grow.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/solutions"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#1677FF] to-[#7657E8] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Explore Solutions
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#1677FF] hover:bg-white/5"
              >
                Talk to Our Team
              </Link>
            </div>

            {/* Highlights */}
            <div className="mt-10 grid max-w-2xl grid-cols-3 border-t border-white/10 pt-7">
              <div className="border-r border-white/10 pr-5">
                <ShieldCheck size={21} className="text-[#1683FF]" />
                <h3 className="mt-3 text-sm font-semibold">
                  Real-world impact
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Solutions designed around meaningful outcomes.
                </p>
              </div>

              <div className="border-r border-white/10 px-5">
                <Network size={21} className="text-[#1683FF]" />
                <h3 className="mt-3 text-sm font-semibold">
                  End-to-end thinking
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  From understanding the problem to delivery.
                </p>
              </div>

              <div className="pl-5">
                <Lightbulb size={21} className="text-[#1683FF]" />
                <h3 className="mt-3 text-sm font-semibold">
                  Built for what's next
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Technology that can evolve with you.
                </p>
              </div>
            </div>
          </div>

          {/* Solution visual */}
          <div className="relative flex min-h-[430px] items-center justify-center">
            {/* Orbital rings */}
            <div className="absolute h-[340px] w-[340px] rounded-full border border-[#1677FF]/30 rotate-12" />
            <div className="absolute h-[400px] w-[400px] rounded-full border border-[#7657E8]/20 -rotate-12" />
            <div className="absolute h-[470px] w-[470px] rounded-full border border-white/5 rotate-45" />

            {/* Center */}
            <div className="relative z-10 flex h-48 w-48 flex-col items-center justify-center rounded-full border border-[#1677FF]/40 bg-[#0D1B2E] shadow-[0_0_80px_rgba(22,119,255,0.16)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1677FF] to-[#7657E8]">
                <Network size={28} />
              </div>

              <span className="mt-4 text-sm font-semibold tracking-wide">
                AETHERIC LABS
              </span>

              <span className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[#6EA8FF]">
                Solutions
              </span>
            </div>

            {/* Cards */}
            <div className="absolute left-0 top-8 rounded-2xl border border-[#1677FF]/30 bg-[#0D1B2E]/90 p-4 backdrop-blur">
              <Building2 size={22} className="text-[#1683FF]" />
              <p className="mt-2 text-sm font-semibold">Businesses</p>
              <p className="text-[11px] text-slate-400">
                Operate. Grow. Innovate.
              </p>
            </div>

            <div className="absolute right-0 top-16 rounded-2xl border border-[#7657E8]/30 bg-[#0D1B2E]/90 p-4 backdrop-blur">
              <GraduationCap size={22} className="text-[#8A6EFF]" />
              <p className="mt-2 text-sm font-semibold">Education</p>
              <p className="text-[11px] text-slate-400">
                Learn. Connect. Empower.
              </p>
            </div>

            <div className="absolute bottom-14 left-5 rounded-2xl border border-[#1677FF]/30 bg-[#0D1B2E]/90 p-4 backdrop-blur">
              <Network size={22} className="text-[#1683FF]" />
              <p className="mt-2 text-sm font-semibold">Organizations</p>
              <p className="text-[11px] text-slate-400">
                Serve. Manage. Scale.
              </p>
            </div>

            <div className="absolute bottom-4 right-2 rounded-2xl border border-[#7657E8]/30 bg-[#0D1B2E]/90 p-4 backdrop-blur">
              <Lightbulb size={22} className="text-[#8A6EFF]" />
              <p className="mt-2 text-sm font-semibold">Custom Solutions</p>
              <p className="text-[11px] text-slate-400">
                Your vision. Our expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;