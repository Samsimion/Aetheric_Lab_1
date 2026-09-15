import {
  ArrowRight,
  BarChart3,
  Database,
  Settings2,
  Users,
  Package,
  ShoppingCart,
  FileText,
  Bell,
  Search,
} from "lucide-react";

import { Link } from "react-router";

const BusinessHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#07111F] text-white">

      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -right-40 top-[-120px] h-[520px] w-[520px] rounded-full bg-[#1677FF]/10 blur-3xl" />

        <div className="absolute right-[10%] top-[-180px] h-[480px] w-[480px] rounded-full border border-[#1677FF]/10" />

        <div className="absolute bottom-[-250px] right-[25%] h-[500px] w-[500px] rounded-full border border-[#7657E8]/10" />

        <div className="absolute left-[45%] top-[45%] h-[300px] w-[300px] rounded-full bg-[#7657E8]/5 blur-3xl" />

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
            Business Systems
          </span>

        </div>


        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">

          {/* LEFT SIDE */}
          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5EA2FF]">
                Business Systems
              </span>

            </div>


            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-[4.2rem]">

              Systems that keep
              <br />

              your business{" "}

              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                moving.
              </span>

            </h1>


            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              We design and build custom business systems that
              streamline operations, connect your teams and give
              you the tools to grow with confidence.
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


            {/* Trust points */}
            <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/10 pt-6">

              <HeroPoint
                icon={<Settings2 size={19} />}
                title="Streamlined Operations"
                text="Work smarter"
              />

              <HeroPoint
                icon={<Database size={19} />}
                title="Centralized Data"
                text="Everything in one place"
              />

              <HeroPoint
                icon={<BarChart3 size={19} />}
                title="Built for Growth"
                text="Ready for what's next"
              />

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="relative mx-auto h-[430px] w-full max-w-[650px]">

            {/* Decorative connection lines */}

            <div className="pointer-events-none absolute inset-0">

              <div className="absolute left-[5%] top-[50%] h-px w-[90%] bg-gradient-to-r from-transparent via-[#1677FF]/20 to-transparent" />

              <div className="absolute right-[5%] top-[25%] h-[180px] w-[180px] rounded-full border border-[#1677FF]/10" />

            </div>


            {/* MAIN DASHBOARD */}
            <div className="absolute left-[4%] top-[25px] z-10 w-[88%] overflow-hidden rounded-2xl border border-white/15 bg-[#0D1B2E] shadow-2xl shadow-black/50">

              {/* Browser top */}
              <div className="flex h-9 items-center gap-1.5 border-b border-white/10 px-4">

                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />

                <div className="ml-5 h-4 flex-1 rounded-full bg-white/5" />

              </div>


              <div className="flex h-[315px]">

                {/* SIDEBAR */}
                <div className="hidden w-[115px] border-r border-white/10 p-3 sm:block">

                  <div className="mb-6 text-[9px] font-bold tracking-[0.15em] text-[#5EA2FF]">
                    AETHERIC
                  </div>

                  <DashboardNav icon={<BarChart3 size={12} />} text="Dashboard" active />
                  <DashboardNav icon={<Settings2 size={12} />} text="Operations" />
                  <DashboardNav icon={<Users size={12} />} text="Users" />
                  <DashboardNav icon={<Package size={12} />} text="Inventory" />
                  <DashboardNav icon={<ShoppingCart size={12} />} text="Finance" />
                  <DashboardNav icon={<FileText size={12} />} text="Reports" />

                </div>


                {/* CONTENT */}
                <div className="flex-1 p-5">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-[8px] uppercase tracking-[0.18em] text-slate-500">
                        Business Dashboard
                      </p>

                      <h3 className="mt-1 text-base font-semibold">
                        Welcome back.
                      </h3>

                    </div>


                    <div className="flex items-center gap-3">

                      <Search
                        size={13}
                        className="text-slate-500"
                      />

                      <Bell
                        size={13}
                        className="text-slate-500"
                      />

                      <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#1677FF] to-[#7657E8]" />

                    </div>

                  </div>


                  {/* STAT CARDS */}
                  <div className="mt-5 grid grid-cols-3 gap-2">

                    <DashboardStat
                      icon={<Users size={13} />}
                      value="1,248"
                      label="Active Users"
                    />

                    <DashboardStat
                      icon={<ShoppingCart size={13} />}
                      value="320"
                      label="New Orders"
                    />

                    <DashboardStat
                      icon={<BarChart3 size={13} />}
                      value="KES 542,200"
                      label="Revenue"
                    />

                  </div>


                  {/* CHART */}
                  <div className="mt-4 grid gap-3 sm:grid-cols-[1.35fr_0.65fr]">

                    <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">

                      <div className="flex items-center justify-between">

                        <p className="text-[9px] text-slate-400">
                          Revenue Overview
                        </p>

                        <span className="text-[8px] text-[#5EA2FF]">
                          Growth
                        </span>

                      </div>


                      <div className="mt-5 flex h-[115px] items-end gap-2">

                        {[35, 45, 38, 58, 50, 68, 63, 78, 72, 90].map(
                          (height, index) => (
                            <div
                              key={index}
                              className="flex-1 rounded-t bg-gradient-to-t from-[#1677FF]/50 to-[#5EA2FF]"
                              style={{
                                height: `${height}%`,
                              }}
                            />
                          )
                        )}

                      </div>

                    </div>


                    {/* ACTIVITY */}
                    <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">

                      <p className="text-[9px] text-slate-400">
                        Recent Activity
                      </p>

                      <ActivityItem
                        color="bg-[#1677FF]"
                        text="New order received"
                      />

                      <ActivityItem
                        color="bg-emerald-400"
                        text="Inventory updated"
                      />

                      <ActivityItem
                        color="bg-orange-400"
                        text="Payment confirmed"
                      />

                      <ActivityItem
                        color="bg-[#7657E8]"
                        text="New user registered"
                      />

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* PHONE */}
            <div className="absolute bottom-0 right-[2%] z-30 w-[125px] overflow-hidden rounded-[1.8rem] border-[5px] border-[#17283D] bg-[#F8FBFF] shadow-2xl shadow-black/60 sm:w-[145px]">

              <div className="flex h-6 items-center justify-center bg-[#17283D]">
                <div className="h-1 w-10 rounded-full bg-black/30" />
              </div>


              <div className="p-3">

                <p className="text-[7px] uppercase tracking-[0.15em] text-[#1677FF]">
                  Mobile
                </p>

                <p className="mt-3 text-sm font-semibold leading-4 text-[#0B1B34]">
                  Manage your
                  <br />
                  business anywhere.
                </p>


                <div className="mt-5 grid grid-cols-2 gap-2">

                  <MiniPhoneCard
                    icon={<ShoppingCart size={11} />}
                    label="Orders"
                  />

                  <MiniPhoneCard
                    icon={<Package size={11} />}
                    label="Inventory"
                  />

                  <MiniPhoneCard
                    icon={<BarChart3 size={11} />}
                    label="Finance"
                  />

                  <MiniPhoneCard
                    icon={<FileText size={11} />}
                    label="Reports"
                  />

                </div>


                <div className="mt-5 h-7 rounded-full bg-[#1677FF]" />

              </div>

            </div>


            {/* FLOATING LABEL */}
            <div className="absolute bottom-8 left-[1%] z-40 rounded-xl border border-white/10 bg-[#102137]/95 px-4 py-3 shadow-xl backdrop-blur-xl">

              <p className="text-[8px] uppercase tracking-[0.2em] text-slate-500">
                Aetheric
              </p>

              <p className="mt-1 text-xs font-medium text-white">
                Your business. Connected.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};


const HeroPoint = ({ icon, title, text }) => {
  return (
    <div className="flex items-start gap-2 border-r border-white/10 px-3 first:pl-0 last:border-0">

      <div className="mt-0.5 text-[#1677FF]">
        {icon}
      </div>

      <div>

        <p className="text-[10px] font-semibold leading-4 text-white">
          {title}
        </p>

        <p className="text-[8px] leading-4 text-slate-500">
          {text}
        </p>

      </div>

    </div>
  );
};


const DashboardNav = ({ icon, text, active }) => {
  return (
    <div
      className={`mb-1 flex items-center gap-2 rounded-md px-2 py-2 text-[8px] ${
        active
          ? "bg-[#1677FF]/15 text-white"
          : "text-slate-500"
      }`}
    >
      {icon}
      {text}
    </div>
  );
};


const DashboardStat = ({ icon, value, label }) => {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.025] p-2.5">

      <div className="flex items-center gap-1.5 text-[#5EA2FF]">
        {icon}

        <span className="text-[7px] text-slate-500">
          {label}
        </span>
      </div>

      <p className="mt-2 text-sm font-semibold">
        {value}
      </p>

    </div>
  );
};


const ActivityItem = ({ color, text }) => {
  return (
    <div className="mt-3 flex items-center gap-2">

      <span className={`h-1.5 w-1.5 rounded-full ${color}`} />

      <span className="text-[7px] text-slate-400">
        {text}
      </span>

    </div>
  );
};


const MiniPhoneCard = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center rounded-lg bg-[#EEF4FA] p-2 text-[#1677FF]">

      {icon}

      <span className="mt-1 text-[6px] text-[#526784]">
        {label}
      </span>

    </div>
  );
};


export default BusinessHero;