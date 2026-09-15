import {
  Palette,
  Code2,
  Server,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

const UIUXEngineering = () => {
  const stages = [
    {
      icon: <Palette size={21} />,
      title: "Design",
      text: "User experience and interface design.",
    },
    {
      icon: <Code2 size={21} />,
      title: "Frontend",
      text: "Responsive and interactive interfaces.",
    },
    {
      icon: <Server size={21} />,
      title: "Backend",
      text: "Powerful and secure infrastructure.",
    },
    {
      icon: <BrainCircuit size={21} />,
      title: "Product",
      text: "A complete solution that delivers value.",
    },
  ];

  return (
    <section className="bg-[#EEF4FA] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          <div>

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
                Design + Engineering
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B1B34] sm:text-5xl">
              Better together.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-[#60728B]">
              We work closely with our development team so every
              interface is technically feasible and built to scale.
            </p>

          </div>


          <div className="relative">

            <div className="pointer-events-none absolute left-8 right-8 top-8 hidden h-px bg-[#BFD7F4] md:block" />

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

              {stages.map((stage, index) => (
                <div
                  key={stage.title}
                  className="relative text-center"
                >

                  {index < stages.length - 1 && (
                    <ArrowRight
                      size={15}
                      className="absolute right-[-19px] top-7 hidden text-[#1677FF] md:block"
                    />
                  )}

                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#D1E2F5] bg-white text-[#1677FF] shadow-sm">
                    {stage.icon}
                  </div>

                  <h3 className="mt-4 text-sm font-semibold text-[#0B1B34]">
                    {stage.title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-[130px] text-[10px] leading-4 text-[#687B94]">
                    {stage.text}
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

export default UIUXEngineering;