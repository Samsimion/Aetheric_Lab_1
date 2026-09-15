import {
  Search,
  FileText,
  PanelsTopLeft,
  Play,
  Palette,
  UsersRound,
} from "lucide-react";

const UIUXProcess = () => {
  const steps = [
    {
      number: "01",
      icon: <Search size={19} />,
      title: "Research",
      text: "Understand users, goals and context.",
    },
    {
      number: "02",
      icon: <FileText size={19} />,
      title: "Structure",
      text: "Map information and user flows.",
    },
    {
      number: "03",
      icon: <PanelsTopLeft size={19} />,
      title: "Wireframe",
      text: "Create low-fidelity designs.",
    },
    {
      number: "04",
      icon: <Play size={19} />,
      title: "Prototype",
      text: "Test ideas and interactions.",
    },
    {
      number: "05",
      icon: <Palette size={19} />,
      title: "Visual Design",
      text: "Bring the interface to life.",
    },
    {
      number: "06",
      icon: <UsersRound size={19} />,
      title: "Test",
      text: "Validate with real users and iterate.",
    },
  ];

  return (
    <section className="bg-[#F8FBFF] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="grid gap-12 lg:grid-cols-[0.45fr_1.55fr]">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
                From Idea To Experience
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B1B34] sm:text-5xl">
              A clear design
              <br />
              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                process.
              </span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[#687B94]">
              We follow a structured, collaborative process to create
              meaningful and effective digital experiences.
            </p>

          </div>


          <div className="relative">

            <div className="pointer-events-none absolute left-8 right-8 top-8 hidden h-px bg-[#C9DDF7] md:block" />

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">

              {steps.map((step) => (
                <div key={step.number}>

                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#D6E6F7] bg-white text-[#1677FF] shadow-[0_6px_20px_rgba(22,119,255,0.08)]">
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

export default UIUXProcess;