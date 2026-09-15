import {
  BrainCircuit,
  HeartPulse,
  Sprout,
  ChartNoAxesCombined,
  ArrowRight,
} from "lucide-react";

const FutureExperiments = () => {

  const experiments = [
    {
      icon: BrainCircuit,
      title: "AI for Education",
      text: "Personalized learning experiences.",
    },
    {
      icon: HeartPulse,
      title: "Health Technology",
      text: "Better tools for healthier communities.",
    },
    {
      icon: Sprout,
      title: "Agritech",
      text: "Technology for sustainable farming.",
    },
    {
      icon: ChartNoAxesCombined,
      title: "Fintech for Impact",
      text: "Financial tools for more opportunities.",
    },
  ];

  return (
    <section className="bg-white py-20">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.5fr]">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1677FF]">
              Exploring the Future
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0B1B34]">
              Ideas in the making.
            </h2>

            <p className="mt-5 max-w-md leading-7 text-slate-600">
              We're always experimenting, researching and exploring
              new ideas. Here are a few areas we're currently looking
              into.
            </p>

            <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#1677FF] px-6 py-3 text-sm font-semibold text-white">
              See All Experiments
              <ArrowRight size={16} />
            </button>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {experiments.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-[#DCE8F5] bg-[#F8FBFF] p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#1677FF] shadow-sm">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-6 font-semibold text-[#0B1B34]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
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

export default FutureExperiments;