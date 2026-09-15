import {
  UserRound,
  Target,
  PenTool,
  Lightbulb,
} from "lucide-react";

const UIUXPhilosophy = () => {
  const stages = [
    {
      icon: <UserRound size={22} />,
      title: "People",
      text: "Real needs. Real behaviour.",
    },
    {
      icon: <Target size={22} />,
      title: "Problems",
      text: "Discover opportunities.",
    },
    {
      icon: <PenTool size={22} />,
      title: "Experiences",
      text: "Design with purpose.",
    },
    {
      icon: <Lightbulb size={22} />,
      title: "Solutions",
      text: "Products people love.",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
                Design Is More Than Looks
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B1B34] sm:text-5xl">
              We design how
              <br />
              technology{" "}
              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                feels.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-[#60728B]">
              Great design goes beyond aesthetics. We combine research,
              strategy and creativity to design experiences that solve
              real problems.
            </p>
          </div>


          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">

            {stages.map((stage, index) => (
              <div
                key={stage.title}
                className="relative text-center"
              >

                {index < stages.length - 1 && (
                  <div className="absolute right-[-22px] top-8 hidden text-[#1677FF] sm:block">
                    →
                  </div>
                )}

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF6FF] text-[#1677FF] shadow-[0_8px_25px_rgba(22,119,255,0.08)]">
                  {stage.icon}
                </div>

                <h3 className="mt-4 text-sm font-semibold text-[#0B1B34]">
                  {stage.title}
                </h3>

                <p className="mx-auto mt-1 max-w-[110px] text-[10px] leading-4 text-[#687B94]">
                  {stage.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default UIUXPhilosophy;