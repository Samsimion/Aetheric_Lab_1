import {
  Search,
  Map,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const MobileProcess = () => {
  const steps = [
    {
      number: "01",
      icon: <Search size={19} />,
      title: "Discover",
      text: "Understand your users, problem and goals.",
    },
    {
      number: "02",
      icon: <Map size={19} />,
      title: "Define",
      text: "Map features, flows and requirements.",
    },
    {
      number: "03",
      icon: <PenTool size={19} />,
      title: "Design",
      text: "Create the mobile experience and UI/UX.",
    },
    {
      number: "04",
      icon: <Code2 size={19} />,
      title: "Develop",
      text: "Build the app and connect its backend.",
    },
    {
      number: "05",
      icon: <ShieldCheck size={19} />,
      title: "Test",
      text: "Test devices, performance, functionality and security.",
    },
    {
      number: "06",
      icon: <Rocket size={19} />,
      title: "Launch",
      text: "Deploy, monitor and keep improving.",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="grid gap-12 lg:grid-cols-[0.45fr_1.55fr]">

          {/* Heading */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
                Our Process
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B1B34] sm:text-5xl">
              From idea
              <br />
              to{" "}
              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                impact.
              </span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[#687B94]">
              A clear, collaborative process to bring your mobile
              application to life.
            </p>
          </div>


          {/* Steps */}
          <div className="relative">

            {/* Timeline */}
            <div className="pointer-events-none absolute left-8 right-8 top-8 hidden h-px bg-[#C9DDF7] md:block" />

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">

              {steps.map((step) => (
                <div
                  key={step.number}
                  className="relative"
                >

                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#D6E6F7] bg-white text-[#1677FF] shadow-[0_5px_20px_rgba(22,119,255,0.08)]">
                    {step.icon}
                  </div>

                  <p className="mt-5 text-[10px] font-bold tracking-[0.15em] text-[#1677FF]">
                    {step.number}
                  </p>

                  <h3 className="mt-1 text-sm font-semibold text-[#0B1B34]">
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-[170px] text-[10px] leading-5 text-[#687B94]">
                    {step.text}
                  </p>

                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MobileProcess;