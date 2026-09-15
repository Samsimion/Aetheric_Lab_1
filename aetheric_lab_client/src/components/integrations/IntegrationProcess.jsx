import {
  Search,
  ClipboardList,
  Code2,
  Cloud,
  BarChart3,
} from "lucide-react";

const IntegrationProcess = () => {
  const steps = [
    {
      number: "01",
      icon: <Search size={19} />,
      title: "Discover",
      text: "Understand your systems and goals.",
    },
    {
      number: "02",
      icon: <ClipboardList size={19} />,
      title: "Plan",
      text: "Define the integration architecture.",
    },
    {
      number: "03",
      icon: <Code2 size={19} />,
      title: "Develop",
      text: "Build and test the integration.",
    },
    {
      number: "04",
      icon: <Cloud size={19} />,
      title: "Deploy",
      text: "Go live with confidence.",
    },
    {
      number: "05",
      icon: <BarChart3 size={19} />,
      title: "Monitor",
      text: "Ensure reliability and performance.",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-24">

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr]">

          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
                How We Work
              </span>

            </div>


            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#0B1B34] sm:text-5xl">

              A structured
              <br />

              integration{" "}

              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                process.
              </span>

            </h2>


            <p className="mt-5 max-w-md text-sm leading-6 text-[#60728B]">
              We follow a proven process to ensure secure,
              reliable and maintainable integrations.
            </p>

          </div>


          <div className="relative">

            {/* Timeline */}
            <div className="absolute left-[8%] right-[8%] top-8 hidden h-px bg-[#DCE6F1] lg:block" />


            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">

              {steps.map((step) => (
                <div
                  key={step.number}
                  className="relative text-center"
                >

                  <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#DCE6F1] bg-white text-[#1677FF] shadow-sm">

                    {step.icon}

                  </div>


                  <p className="mt-4 text-[9px] font-bold tracking-[0.15em] text-[#1677FF]">
                    {step.number}
                  </p>


                  <h3 className="mt-1 text-sm font-semibold text-[#0B1B34]">
                    {step.title}
                  </h3>


                  <p className="mt-2 text-[10px] leading-5 text-[#71839C]">
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

export default IntegrationProcess;