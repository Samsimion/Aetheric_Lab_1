import {
  ArrowRight,
  BarChart3,
  Layers3,
  ShieldCheck,
  Users,
  Database,
  Bell,
} from "lucide-react";

import { Link } from "react-router";

const WebApplicationsHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#07111F] text-white">

      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#1677FF]/10 blur-3xl" />

        <div className="absolute right-[12%] top-[-220px] h-[500px] w-[500px] rounded-full border border-[#1677FF]/10" />

        <div className="absolute bottom-[-250px] right-[25%] h-[500px] w-[500px] rounded-full border border-[#7657E8]/10" />

        <div className="absolute left-[40%] top-[20%] h-[1px] w-[300px] rotate-[-25deg] bg-gradient-to-r from-transparent via-[#1677FF]/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-24 sm:px-8 lg:px-12 lg:pb-14 lg:pt-28">

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
            Web Applications
          </span>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">

          {/* LEFT */}
          <div>

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5EA2FF]">
                Web Applications
              </span>
            </div>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-[4.2rem]">
              Web applications
              <br />
              built to{" "}
              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                do more.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              We design and engineer powerful web applications that
              turn complex processes into simple, intuitive digital
              experiences.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">

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
            <div className="mt-9 flex flex-wrap border-t border-white/10 pt-6">

              <ProofPoint
                icon={<Layers3 size={18} />}
                title="Custom Built"
                text="Built around you"
              />

              <ProofPoint
                icon={<BarChart3 size={18} />}
                title="Scalable"
                text="Ready to grow"
              />

              <ProofPoint
                icon={<ShieldCheck size={18} />}
                title="Secure"
                text="Built responsibly"
              />

            </div>
          </div>

          {/* RIGHT */}
          <ApplicationVisual />

        </div>
      </div>
    </section>
  );
};


const ApplicationVisual = () => {
  return (
    <div className="relative min-h-[350px] sm:min-h-[390px]">

      {/* Main application window */}
      <div className="absolute right-0 top-2 w-[92%] overflow-hidden rounded-2xl border border-white/15 bg-[#0D1B2E] shadow-2xl shadow-black/40">

        {/* Browser */}
        <div className="flex h-9 items-center gap-1.5 border-b border-white/10 px-4">

          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />

          <div className="ml-5 h-4 flex-1 rounded-full bg-white/5" />

        </div>

        <div className="flex h-[275px]">

          {/* Sidebar */}
          <div className="w-[22%] border-r border-white/10 bg-[#091725] p-3">

            <div className="mb-5 text-[8px] font-bold tracking-[0.15em] text-[#5EA2FF]">
              AETHERIC
            </div>

            {[
              "Dashboard",
              "Users",
              "Projects",
              "Analytics",
              "Messages",
              "Settings",
            ].map((item, index) => (
              <div
                key={item}
                className={`mb-2 rounded-md px-2 py-2 text-[7px] ${
                  index === 0
                    ? "bg-[#1677FF]/15 text-[#5EA2FF]"
                    : "text-slate-500"
                }`}
              >
                {item}
              </div>
            ))}

          </div>

          {/* Dashboard */}
          <div className="flex-1 bg-[#F8FBFF] p-5">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-[7px] uppercase tracking-[0.18em] text-[#1677FF]">
                  Dashboard
                </p>

                <p className="mt-1 text-sm font-semibold text-[#0B1B34]">
                  Welcome back.
                </p>
              </div>

              <div className="h-7 w-7 rounded-full bg-[#E7F0FA]" />

            </div>

            {/* Stats */}
            <div className="mt-5 grid grid-cols-3 gap-2">

              <DashboardStat
                value="1,284"
                label="Active Users"
              />

              <DashboardStat
                value="320"
                label="New Signups"
              />

              <DashboardStat
                value="98.4%"
                label="Performance"
              />

            </div>

            {/* Chart */}
            <div className="mt-4 grid grid-cols-[1.35fr_0.65fr] gap-3">

              <div className="rounded-lg border border-slate-200 bg-white p-3">

                <div className="flex items-center justify-between">
                  <span className="text-[7px] font-semibold text-[#0B1B34]">
                    User Growth
                  </span>

                  <span className="text-[6px] text-slate-400">
                    This year
                  </span>
                </div>

                <div className="relative mt-4 h-24">

                  <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200" />

                  <svg
                    viewBox="0 0 300 90"
                    className="absolute inset-0 h-full w-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 70 C30 65, 35 55, 60 60 S90 45, 115 50 S145 25, 170 38 S200 20, 225 30 S260 12, 300 8"
                      fill="none"
                      stroke="#1677FF"
                      strokeWidth="3"
                    />
                  </svg>

                </div>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-3">

                <span className="text-[7px] font-semibold text-[#0B1B34]">
                  Activity
                </span>

                <div className="mt-4 space-y-3">

                  <ActivityRow
                    icon={<Users size={9} />}
                    text="New user"
                  />

                  <ActivityRow
                    icon={<Database size={9} />}
                    text="Data updated"
                  />

                  <ActivityRow
                    icon={<Bell size={9} />}
                    text="Notification"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Floating growth card */}
      <div className="absolute left-0 top-20 rounded-xl border border-white/10 bg-[#102137]/95 px-4 py-3 shadow-2xl backdrop-blur-xl">

        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1677FF]/15 text-[#5EA2FF]">
            <BarChart3 size={14} />
          </div>

          <div>
            <p className="text-[9px] text-slate-400">
              Growth
            </p>

            <p className="text-sm font-semibold">
              +28.4%
            </p>
          </div>
        </div>

      </div>

      {/* Floating status */}
      <div className="absolute right-[-5px] top-10 rounded-xl border border-white/10 bg-[#102137]/95 px-4 py-3 shadow-2xl backdrop-blur-xl">

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />

          <span className="text-[9px] font-medium">
            99.9% System Uptime
          </span>
        </div>

      </div>

      {/* Mobile interface */}
      <div className="absolute bottom-0 right-[-2px] w-28 overflow-hidden rounded-[1.4rem] border-4 border-[#14253A] bg-[#F8FBFF] shadow-2xl shadow-black/50 sm:w-32">

        <div className="h-5 bg-[#14253A]" />

        <div className="p-3">

          <div className="flex items-center justify-between">
            <span className="text-[7px] font-bold text-[#0B1B34]">
              AETHERIC
            </span>

            <span className="h-3 w-3 rounded-full bg-[#E8F1FA]" />
          </div>

          <p className="mt-5 text-[10px] font-semibold leading-4 text-[#0B1B34]">
            Good morning.
            <br />
            Let's build progress.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2">

            <div className="h-12 rounded-lg bg-[#EEF5FF]" />
            <div className="h-12 rounded-lg bg-[#F1ECFF]" />

          </div>

          <div className="mt-3 h-2 w-16 rounded-full bg-[#E1EAF4]" />
          <div className="mt-2 h-2 w-20 rounded-full bg-[#EEF2F7]" />

        </div>

      </div>

    </div>
  );
};


const DashboardStat = ({ value, label }) => {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-2.5">
      <p className="text-xs font-semibold text-[#0B1B34]">
        {value}
      </p>

      <p className="mt-1 text-[6px] text-slate-400">
        {label}
      </p>
    </div>
  );
};


const ActivityRow = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-5 w-5 items-center justify-center rounded bg-[#EEF5FF] text-[#1677FF]">
        {icon}
      </div>

      <span className="text-[7px] text-slate-500">
        {text}
      </span>
    </div>
  );
};


const ProofPoint = ({ icon, title, text }) => {
  return (
    <div className="mr-5 flex items-center gap-2 border-r border-white/10 pr-5 last:mr-0 last:border-0 last:pr-0">

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

export default WebApplicationsHero;