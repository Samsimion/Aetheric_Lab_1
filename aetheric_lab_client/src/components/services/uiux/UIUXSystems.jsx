import {
  Component,
  Type,
  Palette,
  Grid3X3,
  ToggleRight,
  Blocks,
} from "lucide-react";

const UIUXSystems = () => {
  const systems = [
    {
      icon: <Component size={20} />,
      title: "Components",
      text: "Reusable UI elements.",
    },
    {
      icon: <Type size={20} />,
      title: "Typography",
      text: "Clear and modern.",
    },
    {
      icon: <Palette size={20} />,
      title: "Colour",
      text: "Purposeful palettes.",
    },
    {
      icon: <Grid3X3 size={20} />,
      title: "Spacing",
      text: "Balanced layouts.",
    },
    {
      icon: <ToggleRight size={20} />,
      title: "States",
      text: "Interactive feedback.",
    },
    {
      icon: <Blocks size={20} />,
      title: "Patterns",
      text: "Proven design solutions.",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
                Design Systems
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B1B34] sm:text-5xl">
              Consistency
              <br />
              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                at every level.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-[#687B94]">
              We create design systems that keep your product
              consistent, scalable and future-ready.
            </p>
          </div>


          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {systems.map((system) => (
              <div
                key={system.title}
                className="rounded-xl border border-[#DCE6F1] bg-[#F8FBFF] p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#1677FF] shadow-sm">
                  {system.icon}
                </div>

                <h3 className="mt-4 text-sm font-semibold text-[#0B1B34]">
                  {system.title}
                </h3>

                <p className="mt-2 text-[10px] leading-4 text-[#687B94]">
                  {system.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default UIUXSystems;