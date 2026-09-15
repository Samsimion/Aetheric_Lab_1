import {
  Lightbulb,
  Box,
  Users,
  Globe2,
  ArrowRight,
} from "lucide-react";

const TheLab = () => {
  const stats = [
    {
      icon: Lightbulb,
      value: "3",
      title: "Core Products",
      text: "Actively in development",
    },
    {
      icon: Box,
      value: "5+",
      title: "Experiments",
      text: "Exploring new possibilities",
    },
    {
      icon: Users,
      value: "People",
      title: "At the center",
      text: "Technology that serves people",
    },
    {
      icon: Globe2,
      value: "Tomorrow",
      title: "The goal",
      text: "Building for what's next",
    },
  ];

  return (
    <section className="bg-[#F5F9FE] py-20">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1677FF]">
              The Lab
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight text-[#0B1B34] sm:text-5xl">
              More than projects.
              <br />
              A commitment to what matters.
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-slate-600">
              At Aetheric, we build our own products because we believe
              technology should solve real problems, create opportunities
              and improve lives.
            </p>

            <a
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1677FF] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1267DB]"
            >
              Our Approach
              <ArrowRight size={16} />
            </a>

          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {stats.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#DCE8F5] bg-white p-6 shadow-sm"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF6FF] text-[#1677FF]">
                    <Icon size={20} />
                  </div>

                  <p className="mt-6 text-2xl font-bold text-[#0B1B34]">
                    {item.value}
                  </p>

                  <h3 className="mt-2 text-sm font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {item.text}
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

export default TheLab;