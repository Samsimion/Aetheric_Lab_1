import {
  Search,
  ClipboardList,
  Pencil,
  Code2,
  CheckCircle2,
  Rocket,
} from "lucide-react";

const BusinessProcess = () => {
  const steps = [
    {
      number: "01",
      icon: <Search size={19} />,
      title: "Discover",
      text: "Understand your business, challenges and goals.",
    },
    {
      number: "02",
      icon: <ClipboardList size={19} />,
      title: "Plan",
      text: "Define the system, features and roadmap.",
    },
    {
      number: "03",
      icon: <Pencil size={19} />,
      title: "Design",
      text: "Create the user experience and system architecture.",
    },
    {
      number: "04",
      icon: <Code2 size={19} />,
      title: "Develop",
      text: "Build and integrate your system.",
    },
    {
      number: "05",
      icon: <CheckCircle2 size={19} />,
      title: "Test",
      text: "Ensure reliability, security and performance.",
    },
    {
      number: "06",
      icon: <Rocket size={19} />,
      title: "Launch",
      text: "Deploy, train your team and provide support.",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-24">

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">

          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
                Our Process
              </span>

            </div>


            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#0B1B34] sm:text-5xl">

              From challenge
              <br />

              to{" "}

              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                solution.
              </span>

            </h2>


            <p className="mt-5 max-w-md text-base leading-7 text-[#60728B]">
              A clear, collaborative process to build the right
              system for your business.
            </p>

          </div>


          <div className="relative">

            {/* Connecting line */}
            <div className="absolute left-8 right-8 top-8 hidden h-px bg-[#DCE6F1] lg:block" />


            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">

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

export default BusinessProcess;