import {
  Users,
  Workflow,
  Database,
  Wrench,
  BarChart3,
  Settings2,
  Plug,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const BusinessConnection = () => {
  const left = [
    {
      icon: <Users size={17} />,
      title: "People",
      text: "Teams, roles, permissions",
    },
    {
      icon: <Workflow size={17} />,
      title: "Processes",
      text: "Workflows, approvals",
    },
    {
      icon: <Database size={17} />,
      title: "Data",
      text: "Products, customers, finances",
    },
    {
      icon: <Wrench size={17} />,
      title: "Tools",
      text: "Inventory, sales, operations",
    },
  ];

  const right = [
    {
      icon: <BarChart3 size={17} />,
      title: "Insights",
      text: "Reports, analytics",
    },
    {
      icon: <Settings2 size={17} />,
      title: "Automation",
      text: "Tasks, notifications",
    },
    {
      icon: <Plug size={17} />,
      title: "Integrations",
      text: "APIs, third-party tools",
    },
    {
      icon: <TrendingUp size={17} />,
      title: "Growth",
      text: "Scale without limits",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#07111F] py-20 text-white lg:py-24">

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[35%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[#1677FF]/5 blur-3xl" />

        <div className="absolute right-[-100px] top-[-100px] h-[400px] w-[400px] rounded-full border border-[#1677FF]/10" />

      </div>


      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="grid items-center gap-14 lg:grid-cols-[0.65fr_1.35fr]">

          {/* LEFT TEXT */}
          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#5EA2FF]">
                Connecting Every Part
              </span>

            </div>


            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">

              One system.
              <br />

              <span className="bg-gradient-to-r from-white to-[#8BBFFF] bg-clip-text text-transparent">
                Total control.
              </span>

            </h2>


            <p className="mt-5 max-w-md text-base leading-7 text-slate-400">
              We bring together your people, data, tools and
              processes into one integrated business system that
              works seamlessly.
            </p>


            <button className="mt-7 inline-flex items-center rounded-full bg-[#1677FF] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#0F63D4]">

              See How It Works

              <ArrowRight
                size={15}
                className="ml-2"
              />

            </button>

          </div>


          {/* DIAGRAM */}
          <div className="relative">

            <div className="grid items-center gap-5 sm:grid-cols-[1fr_150px_1fr]">

              {/* LEFT */}
              <div className="space-y-2">

                {left.map((item) => (
                  <ConnectionCard
                    key={item.title}
                    {...item}
                  />
                ))}

              </div>


              {/* CENTER */}
              <div className="relative flex items-center justify-center">

                <div className="absolute h-40 w-40 rounded-full bg-[#1677FF]/10 blur-2xl" />

                <div className="relative flex h-32 w-32 flex-col items-center justify-center rounded-2xl border border-[#1677FF]/60 bg-[#0D1B2E] shadow-[0_0_35px_rgba(22,119,255,0.25)]">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1677FF] to-[#7657E8]">

                    <Database
                      size={25}
                      className="text-white"
                    />

                  </div>

                  <p className="mt-3 text-[9px] font-bold tracking-[0.12em]">
                    AETHERIC
                  </p>

                  <p className="mt-1 text-[8px] text-slate-400">
                    Business System
                  </p>

                </div>

              </div>


              {/* RIGHT */}
              <div className="space-y-2">

                {right.map((item) => (
                  <ConnectionCard
                    key={item.title}
                    {...item}
                    right
                  />
                ))}

              </div>

            </div>


            {/* CONNECTOR LINES */}
            <div className="pointer-events-none absolute inset-0 hidden sm:block">

              <div className="absolute left-[31%] top-[18%] h-px w-[19%] bg-gradient-to-r from-[#1677FF]/10 to-[#1677FF]/60" />

              <div className="absolute left-[31%] top-[38%] h-px w-[19%] bg-gradient-to-r from-[#1677FF]/10 to-[#1677FF]/60" />

              <div className="absolute left-[31%] top-[62%] h-px w-[19%] bg-gradient-to-r from-[#1677FF]/10 to-[#1677FF]/60" />

              <div className="absolute left-[31%] top-[82%] h-px w-[19%] bg-gradient-to-r from-[#1677FF]/10 to-[#1677FF]/60" />

              <div className="absolute right-[31%] top-[18%] h-px w-[19%] bg-gradient-to-l from-[#7657E8]/10 to-[#1677FF]/60" />

              <div className="absolute right-[31%] top-[38%] h-px w-[19%] bg-gradient-to-l from-[#7657E8]/10 to-[#1677FF]/60" />

              <div className="absolute right-[31%] top-[62%] h-px w-[19%] bg-gradient-to-l from-[#7657E8]/10 to-[#1677FF]/60" />

              <div className="absolute right-[31%] top-[82%] h-px w-[19%] bg-gradient-to-l from-[#7657E8]/10 to-[#1677FF]/60" />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};


const ConnectionCard = ({
  icon,
  title,
  text,
  right,
}) => {
  return (
    <div
      className={`rounded-xl border border-white/10 bg-[#0D1B2E]/80 p-3 backdrop-blur transition hover:border-[#1677FF]/30 ${
        right ? "sm:text-left" : ""
      }`}
    >

      <div className="flex items-center gap-3">

        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1677FF]/10 text-[#5EA2FF]">
          {icon}
        </div>

        <div>

          <p className="text-[10px] font-semibold text-white">
            {title}
          </p>

          <p className="mt-0.5 text-[8px] text-slate-500">
            {text}
          </p>

        </div>

      </div>

    </div>
  );
};

export default BusinessConnection;