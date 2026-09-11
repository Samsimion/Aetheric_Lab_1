import {
  Search,
  PenLine,
  Code2,
  Rocket,
} from "lucide-react";

const WebsiteProcess = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discover",
      text: "Understand your goals and requirements.",
    },
    {
      number: "02",
      icon: PenLine,
      title: "Design",
      text: "Create a strategy and design that fits.",
    },
    {
      number: "03",
      icon: Code2,
      title: "Build",
      text: "Develop and test your website.",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch",
      text: "Deploy and support you after launch.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1677FF]">
                How We Work
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B1B34] sm:text-5xl">
              From idea
              <br />
              to{" "}
              <span className="text-[#1677FF]">
                launch.
              </span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[#637691]">
              A clear and collaborative process to ensure
              your website is delivered on time and built right.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DCE7F4] bg-white text-[#1677FF] shadow-[0_8px_25px_rgba(22,119,255,0.08)]">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <p className="mt-4 text-xs font-semibold text-[#6B7D95]">
                    {step.number}
                  </p>

                  <h3 className="mt-1 text-sm font-semibold text-[#0B1B34]">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[#637691]">
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

export default WebsiteProcess;