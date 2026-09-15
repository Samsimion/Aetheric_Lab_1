import {
  ArrowRight,
  Home,
  Lightbulb,
  LockKeyhole,
  Thermometer,
  Leaf,
} from "lucide-react";

const HomeSmartShowcase = () => {
  const controls = [
    {
      icon: Lightbulb,
      title: "Lights",
      value: "On",
    },
    {
      icon: LockKeyhole,
      title: "Security",
      value: "Armed",
    },
    {
      icon: Thermometer,
      title: "Temperature",
      value: "22°C",
    },
    {
      icon: Leaf,
      title: "Energy",
      value: "Optimized",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#07111F] py-24 text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(22,119,255,0.15),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

          <div>

            <span className="inline-flex rounded-full border border-[#3C9BFF]/40 bg-[#102B4B] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#69B2FF]">
              ● Coming Soon
            </span>

            <div className="mt-6 flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102B4B] text-[#4AA2FF]">
                <Home size={29} />
              </div>

              <h2 className="text-3xl font-bold sm:text-4xl">
                Home Smart System
              </h2>

            </div>

            <p className="mt-5 text-lg font-medium text-slate-300">
              A smarter, safer, more connected home.
            </p>

            <p className="mt-6 max-w-xl leading-7 text-slate-400">
              Home Smart System brings your home to life with intelligent
              automation, security and energy management — designed for
              modern living and built for everyday people.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="/products/home-smart-system"
                className="inline-flex items-center gap-2 rounded-full bg-[#1677FF] px-6 py-3 text-sm font-semibold"
              >
                Join the Waitlist
                <ArrowRight size={16} />
              </a>

              <a
                href="/products/home-smart-system"
                className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold"
              >
                Learn More
              </a>

            </div>

          </div>

          {/* Smart home visual */}
          <div className="relative">

            <div className="absolute inset-0 rounded-[40px] bg-[#1677FF]/10 blur-3xl" />

            <div className="relative min-h-[400px] overflow-hidden rounded-[32px] border border-slate-700 bg-gradient-to-br from-[#132A40] to-[#050B13]">

              {/* House */}
              <div className="absolute bottom-0 left-1/2 h-[280px] w-[75%] -translate-x-1/2 rounded-t-[90px] border border-slate-600 bg-gradient-to-b from-[#263F50] to-[#0A1620]">

                <div className="absolute left-[15%] top-[30%] h-24 w-20 rounded-lg border border-[#3C9BFF]/30 bg-[#1677FF]/10" />

                <div className="absolute right-[15%] top-[30%] h-24 w-20 rounded-lg border border-[#3C9BFF]/30 bg-[#1677FF]/10" />

                <div className="absolute bottom-0 left-1/2 h-32 w-20 -translate-x-1/2 rounded-t-full bg-[#09121C]" />

              </div>

              {/* Controls */}
              {controls.map((control, index) => {

                const Icon = control.icon;

                const positions = [
                  "left-6 top-8",
                  "right-6 top-12",
                  "left-8 bottom-8",
                  "right-8 bottom-10",
                ];

                return (
                  <div
                    key={control.title}
                    className={`absolute ${positions[index]} flex items-center gap-3 rounded-xl border border-slate-600 bg-[#0D1B2E]/90 px-4 py-3 backdrop-blur`}
                  >

                    <Icon
                      size={18}
                      className="text-[#4AA2FF]"
                    />

                    <div>
                      <p className="text-[10px] text-slate-500">
                        {control.title}
                      </p>

                      <p className="text-xs font-semibold">
                        {control.value}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeSmartShowcase;