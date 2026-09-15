import {
  Users,
  Database,
  Workflow,
  MessageSquare,
  CreditCard,
  Plug,
  BarChart3,
  Bot,
  Smartphone,
} from "lucide-react";

const ComplexitySection = () => {
  const left = [
    {
      icon: Users,
      title: "People",
      text: "Users, teams, roles",
    },
    {
      icon: Database,
      title: "Data",
      text: "Databases, files",
    },
    {
      icon: Workflow,
      title: "Processes",
      text: "Approvals, workflows",
    },
    {
      icon: MessageSquare,
      title: "Communication",
      text: "Email, SMS, WhatsApp",
    },
    {
      icon: CreditCard,
      title: "Payments",
      text: "Transactions, invoices",
    },
    {
      icon: Plug,
      title: "External Systems",
      text: "APIs, third-party tools",
    },
  ];

  const right = [
    {
      icon: BarChart3,
      title: "Dashboards",
      text: "Real-time insights",
    },
    {
      icon: Bot,
      title: "Automation",
      text: "Workflows & triggers",
    },
    {
      icon: Users,
      title: "Collaboration",
      text: "Teams & communication",
    },
    {
      icon: BarChart3,
      title: "Reports",
      text: "Data-driven decisions",
    },
    {
      icon: Smartphone,
      title: "Mobile Access",
      text: "Any device, anywhere",
    },
    {
      icon: Workflow,
      title: "Growth",
      text: "Scale without limits",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#07111F] text-white">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1677FF]/5 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1677FF]/10" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr]">

          {/* LEFT INTRO */}
          <div>

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5EA2FF]">
                From Complexity to Clarity
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
              Turn complex
              <br />
              processes into
              <br />
              connected{" "}
              <span className="text-[#3D91FF]">
                systems.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-300">
              We bring together your people, data, tools and
              workflows into one seamless web application.
            </p>

            <button className="mt-7 inline-flex items-center rounded-full bg-[#1677FF] px-6 py-3 text-sm font-semibold transition hover:bg-[#0F63D4]">
              See How It Works
              <span className="ml-2">→</span>
            </button>

          </div>

          {/* SYSTEM DIAGRAM */}
          <div className="relative min-h-[430px]">

            {/* Center */}
            <div className="absolute left-1/2 top-1/2 z-20 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border border-[#5EA2FF]/60 bg-[#0D1B2E] shadow-[0_0_45px_rgba(22,119,255,0.18)]">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1677FF] to-[#7657E8]">
                <span className="text-xl font-bold">
                  A
                </span>
              </div>

              <p className="mt-3 text-[10px] font-bold tracking-[0.2em] text-white">
                AETHERIC
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Web Application
              </p>

            </div>

            <p className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 text-xs text-slate-400">
              One Connected Experience
            </p>

            {/* Connection lines */}
            <div className="pointer-events-none absolute inset-0">

              <div className="absolute left-[30%] top-1/2 h-px w-[20%] bg-gradient-to-r from-transparent to-[#1677FF]" />

              <div className="absolute left-[50%] top-1/2 h-px w-[20%] bg-gradient-to-r from-[#1677FF] to-transparent" />

              <div className="absolute left-1/2 top-[25%] h-[25%] w-px bg-gradient-to-b from-[#1677FF]/0 to-[#1677FF]" />

              <div className="absolute bottom-[25%] left-1/2 h-[25%] w-px bg-gradient-to-t from-[#1677FF]/0 to-[#1677FF]" />

            </div>

            {/* Left nodes */}
            <div className="absolute left-0 top-2 space-y-3">

              {left.map((item) => {
                const Icon = item.icon;

                return (
                  <SystemNode
                    key={item.title}
                    icon={<Icon size={15} />}
                    title={item.title}
                    text={item.text}
                  />
                );
              })}

            </div>

            {/* Right nodes */}
            <div className="absolute right-0 top-2 space-y-3">

              {right.map((item) => {
                const Icon = item.icon;

                return (
                  <SystemNode
                    key={item.title}
                    icon={<Icon size={15} />}
                    title={item.title}
                    text={item.text}
                  />
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


const SystemNode = ({
  icon,
  title,
  text,
}) => {
  return (
    <div className="flex w-40 items-center gap-3 rounded-lg border border-white/10 bg-[#0D1B2E]/95 px-3 py-2.5 backdrop-blur-xl sm:w-48">

      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#1677FF]/10 text-[#5EA2FF]">
        {icon}
      </div>

      <div>
        <p className="text-[9px] font-semibold text-white">
          {title}
        </p>

        <p className="mt-0.5 text-[7px] text-slate-500">
          {text}
        </p>
      </div>

    </div>
  );
};

export default ComplexitySection;