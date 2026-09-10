import {
  Lightbulb,
  Users,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Understand the problem",
    text: "We don't start with technology. We start with understanding.",
  },
  {
    icon: Users,
    title: "Design for people",
    text: "Technology is only useful when people can actually use it.",
  },
  {
    icon: BarChart3,
    title: "Engineer to scale",
    text: "We build with the future in mind, not just today's requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Stay after launch",
    text: "Launch isn't the end. It's where the next stage begins.",
  },
];

const WhyAetheric = () => {
  return (
    <section className="bg-[#07111F] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">

        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.8fr]">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#5EA2FF]">
                Why Aetheric
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              We build
              <br />
              with{" "}
              <span className="text-[#1677FF]">
                purpose.
              </span>
            </h2>
          </div>


          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">

            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="border-t border-white/10 px-5 py-6 first:pl-0 sm:border-l sm:border-t-0"
                >
                  <Icon
                    size={23}
                    strokeWidth={1.6}
                    className="text-[#1677FF]"
                  />

                  <h3 className="mt-5 text-sm font-semibold">
                    {reason.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {reason.text}
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

export default WhyAetheric;