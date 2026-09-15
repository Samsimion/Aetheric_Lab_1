import {
  MousePointer2,
  Accessibility,
  Layers3,
  Type,
  MessageSquare,
  Sparkles,
} from "lucide-react";

const UIUXPrinciples = () => {
  const principles = [
    {
      icon: <MousePointer2 size={20} />,
      title: "Usability",
      text: "Easy to learn and use.",
    },
    {
      icon: <Accessibility size={20} />,
      title: "Accessibility",
      text: "Inclusive for everyone.",
    },
    {
      icon: <Layers3 size={20} />,
      title: "Consistency",
      text: "Familiar and predictable.",
    },
    {
      icon: <Type size={20} />,
      title: "Clarity",
      text: "Simple and focused.",
    },
    {
      icon: <MessageSquare size={20} />,
      title: "Feedback",
      text: "Keep users informed.",
    },
    {
      icon: <Sparkles size={20} />,
      title: "Interaction",
      text: "Engaging and meaningful.",
    },
  ];

  return (
    <section className="bg-[#EEF4FA] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
                Designed Around People
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B1B34] sm:text-5xl">
              Interfaces that
              <br />
              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                just work.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-[#687B94]">
              We focus on key principles that make digital products
              effective, accessible and enjoyable.
            </p>
          </div>


          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {principles.map((principle) => (
              <div
                key={principle.title}
                className="rounded-xl border border-white/80 bg-white/70 p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F4F8FD] text-[#1677FF]">
                  {principle.icon}
                </div>

                <h3 className="mt-4 text-sm font-semibold text-[#0B1B34]">
                  {principle.title}
                </h3>

                <p className="mt-2 text-[10px] leading-4 text-[#687B94]">
                  {principle.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default UIUXPrinciples;