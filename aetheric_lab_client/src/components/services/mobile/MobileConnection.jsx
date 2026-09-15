import {
  UserRound,
  Smartphone,
  Layers3,
  Database,
  BarChart3,
  ArrowRight,
  MapPin,
  Bell,
  CreditCard,
  Bot,
} from "lucide-react";

const MobileConnection = () => {
  const flow = [
    {
      icon: <UserRound size={22} />,
      title: "User",
      text: "People interact on the go.",
    },
    {
      icon: <Smartphone size={22} />,
      title: "Mobile App",
      text: "A seamless experience.",
    },
    {
      icon: <Layers3 size={22} />,
      title: "APIs & Services",
      text: "Connects your systems.",
    },
    {
      icon: <Database size={22} />,
      title: "Data",
      text: "Stores and processes information.",
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Real Impact",
      text: "Better experiences. Greater outcomes.",
    },
  ];

  const capabilities = [
    {
      icon: <MapPin size={15} />,
      label: "Location",
    },
    {
      icon: <Bell size={15} />,
      label: "Notifications",
    },
    {
      icon: <CreditCard size={15} />,
      label: "Payments",
    },
    {
      icon: <Bot size={15} />,
      label: "Automation",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#07111F] py-20 text-white lg:py-24">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-180px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#1677FF]/10" />

        <div className="absolute right-[-80px] top-1/2 h-[330px] w-[330px] -translate-y-1/2 rounded-full border border-[#7657E8]/10" />

        <div className="absolute left-[35%] top-[-200px] h-[400px] w-[400px] rounded-full bg-[#1677FF]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="grid items-center gap-14 lg:grid-cols-[0.75fr_1.25fr]">

          {/* LEFT */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#5EA2FF]">
                Mobile Is More Than a Screen
              </span>
            </div>

            <h2 className="max-w-md text-4xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-5xl">
              A connected
              <br />
              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                experience.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-slate-300">
              A great mobile application connects the experience users
              see with the technology working behind it.
            </p>

            <button className="group mt-8 inline-flex items-center rounded-full bg-[#1677FF] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0F63D4]">
              See How It Works

              <ArrowRight
                size={16}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>


          {/* RIGHT FLOW */}
          <div className="relative">

            <div className="hidden h-px bg-gradient-to-r from-[#1677FF]/10 via-[#1677FF]/40 to-[#7657E8]/10 lg:block" />

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-5 sm:gap-0">

              {flow.map((item, index) => (
                <div
                  key={item.title}
                  className="relative flex flex-col items-center text-center"
                >

                  {/* Connector */}
                  {index < flow.length - 1 && (
                    <div className="absolute right-[-20px] top-7 hidden items-center sm:flex">
                      <ArrowRight
                        size={16}
                        className="text-[#1677FF]"
                      />
                    </div>
                  )}

                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#1677FF]/30 bg-[#0D1B2E] text-[#5EA2FF] shadow-[0_0_25px_rgba(22,119,255,0.08)]">
                    {item.icon}
                  </div>

                  <h3 className="mt-4 text-xs font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-1 max-w-[110px] text-[9px] leading-4 text-slate-500">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>


            {/* Capabilities */}
            <div className="mt-10 flex flex-wrap justify-center gap-3">

              {capabilities.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 rounded-full border border-[#1677FF]/30 bg-[#0D1B2E] px-4 py-2 text-[10px] text-slate-300"
                >
                  <span className="text-[#5EA2FF]">
                    {item.icon}
                  </span>

                  {item.label}
                </div>
              ))}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileConnection;