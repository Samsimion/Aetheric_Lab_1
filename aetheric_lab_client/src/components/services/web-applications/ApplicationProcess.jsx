import {
  Search,
  Network,
  PenLine,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const ApplicationProcess = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Understand",
      text: "Study the problem, users and requirements.",
    },
    {
      number: "02",
      icon: Network,
      title: "Architect",
      text: "Define the system, data and technology.",
    },
    {
      number: "03",
      icon: PenLine,
      title: "Design",
      text: "Create the interface and user experience.",
    },
    {
      number: "04",
      icon: Code2,
      title: "Engineer",
      text: "Build the frontend, backend and integrations.",
    },
    {
      number: "05",
      icon: ShieldCheck,
      title: "Test",
      text: "Test functionality, performance and security.",
    },
    {
      number: "06",
      icon: Rocket,
      title: "Launch",
      text: "Deploy, monitor and keep improving.",
    },
  ];

  return (
    <section className="bg-white">

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">

        <div className="mb-10 max-w-xl">

          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-9 bg-[#1677FF]" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1677FF]">
              Our Process
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B1B34] sm:text-5xl">
            A clear path
            <br />
            to{" "}
            <span className="text-[#1677FF]">
              success.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-6 text-[#637691]">
            From discovery to deployment, we work closely
            with you throughout the entire development journey.
          </p>

        </div>

        {/* Steps */}
        <div className="relative">

          {/* Desktop connecting line */}
          <div className="absolute left-[7%] right-[7%] top-6 hidden h-px bg-[#D7E5F4] lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative"
                >

                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#DCE7F4] bg-white text-[#1677FF] shadow-[0_8px_25px_rgba(22,119,255,0.08)]">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <p className="mt-4 text-[10px] font-semibold text-[#8A9BB0]">
                    {step.number}
                  </p>

                  <h3 className="mt-1 text-sm font-semibold text-[#0B1B34]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[10px] leading-5 text-[#637691]">
                    {step.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ApplicationProcess;