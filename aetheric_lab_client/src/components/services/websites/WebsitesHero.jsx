import {
  ArrowRight,
  ArrowUpRight,
  Zap,
  Monitor,
  ShieldCheck,
} from "lucide-react";

import { Link } from "react-router";

const WebsitesHero = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-[#07111F] text-white">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-[#1677FF]/10 blur-3xl" />
        <div className="absolute right-[10%] top-[-180px] h-[400px] w-[400px] rounded-full border border-[#1677FF]/10" />
        <div className="absolute bottom-[-220px] right-[20%] h-[400px] w-[400px] rounded-full border border-[#7657E8]/10" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-6 sm:px-8 lg:px-12">

        {/* Breadcrumb */}
        <div className="mb-4 text-xs text-slate-400">
          <Link to="/" className="transition hover:text-white">
            Home
          </Link>
          <span className="mx-2 text-slate-600">›</span>
          <Link to="/services" className="transition hover:text-white">
            Services
          </Link>
          <span className="mx-2 text-slate-600">›</span>
          <span className="text-slate-300">Web Development</span>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">

          {/* LEFT */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-9 bg-[#1677FF]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5EA2FF]">
                Web Development
              </span>
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-[3.5rem]">
              Websites that
              <br />
              move your business{" "}
              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                forward.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              We design and build modern, high-performance websites
              that help you attract, engage and convert.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center rounded-full bg-[#1677FF] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0F63D4]"
              >
                Start a Project
                <ArrowRight
                  size={16}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#1677FF] hover:bg-white/5"
              >
                View Our Work
              </Link>
            </div>

            {/* Proof points */}
            <div className="mt-6 flex flex-wrap border-t border-white/10 pt-4">
              <ProofPoint
                icon={<Zap size={17} />}
                title="Fast"
                text="Load times"
              />
              <ProofPoint
                icon={<Monitor size={17} />}
                title="Responsive"
                text="All devices"
              />
              <ProofPoint
                icon={<ShieldCheck size={17} />}
                title="Built to grow"
                text="Scalable solutions"
              />
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative min-h-[300px] sm:min-h-[340px]">

            {/* Desktop website */}
            <div className="absolute right-0 top-2 w-[92%] overflow-hidden rounded-2xl border border-white/15 bg-[#0D1B2E] shadow-2xl shadow-black/40">

              {/* Browser bar */}
              <div className="flex h-8 items-center gap-1.5 border-b border-white/10 px-4">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <div className="ml-5 h-3 flex-1 rounded-full bg-white/5" />
              </div>

              {/* Website */}
              <div className="relative h-[220px] overflow-hidden bg-[#F8FBFF]">
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
                  <div className="text-[10px] font-bold text-[#0B1B34]">
                    AETHERIC
                  </div>
                  <div className="flex gap-3 text-[7px] text-slate-500">
                    <span>Home</span>
                    <span>About</span>
                    <span>Services</span>
                    <span>Contact</span>
                  </div>
                </div>

                <div className="grid h-[170px] grid-cols-2">
                  <div className="flex flex-col justify-center px-5">
                    <div className="text-[8px] uppercase tracking-[0.2em] text-[#1677FF]">
                      Digital Experience
                    </div>
                    <div className="mt-2 text-xl font-semibold leading-[1.05] text-[#0B1B34]">
                      Good ideas.
                      <br />
                      Built better.
                    </div>
                    <div className="mt-2 h-2 w-24 rounded-full bg-slate-200" />
                    <div className="mt-4 h-5 w-14 rounded-full bg-[#1677FF]" />
                  </div>

                  <div className="relative overflow-hidden bg-gradient-to-br from-[#DCEBFA] to-[#EEF4FA]">
                    <div className="absolute right-[-20px] top-[-10px] h-32 w-32 rounded-full border border-[#1677FF]/20" />
                    <div className="absolute bottom-4 right-4 h-24 w-20 rounded-t-full bg-gradient-to-t from-[#1677FF]/20 to-[#7657E8]/10" />
                  </div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="absolute bottom-0 left-0 w-24 overflow-hidden rounded-[1.2rem] border-4 border-[#14253A] bg-[#F8FBFF] shadow-2xl shadow-black/50 sm:w-28">
              <div className="h-4 bg-[#14253A]" />
              <div className="p-2.5">
                <div className="text-[6px] font-bold text-[#0B1B34]">
                  AETHERIC
                </div>
                <div className="mt-4 text-[10px] font-semibold leading-3 text-[#0B1B34]">
                  Innovation
                  <br />
                  in your hands.
                </div>
                <div className="mt-3 h-12 rounded-lg bg-gradient-to-br from-[#DCEBFA] to-[#E8E2FA]" />
                <div className="mt-3 h-4 w-12 rounded-full bg-[#1677FF]" />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-6 right-[-5px] rounded-xl border border-white/10 bg-[#102137]/95 px-3 py-2 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#1677FF]" />
                <span className="text-[9px] font-medium text-white">
                  Live & Scalable
                </span>
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
    <div className="flex items-center gap-2 border-r border-white/10 pr-4 mr-4 last:border-0 last:mr-0 last:pr-0">
      <div className="text-[#1677FF]">
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium text-white">
          {title}
        </p>
        <p className="text-[9px] text-slate-500">
          {text}
        </p>
      </div>
    </div>
  );
};

export default WebsitesHero;