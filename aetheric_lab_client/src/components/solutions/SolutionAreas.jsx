import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  Lightbulb,
  Network,
} from "lucide-react";

const SolutionAreas = () => {
  const areas = [
    {
      icon: Building2,
      title: "For Businesses",
      text: "Digital solutions that help you operate, sell, connect and grow.",
    },
    {
      icon: GraduationCap,
      title: "For Education",
      text: "Technology that connects schools, students, teachers and families.",
    },
    {
      icon: Network,
      title: "For Organizations",
      text: "Platforms that help organizations serve people, manage operations and create impact.",
    },
    {
      icon: Lightbulb,
      title: "Custom Solutions",
      text: "When your problem doesn't fit a box, we build around it.",
    },
  ];

  return (
    <section className="bg-[#07111F] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#3B91FF]">
            Our Solution Areas
          </span>

          <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
            Solutions for{" "}
            <span className="text-[#6F62E8]">what matters most.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400">
            From businesses to education and organizations, we create
            technology that helps you move forward with confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {areas.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-[#0D1B2E] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#1677FF]/50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1677FF]/10 text-[#3B91FF]">
                <Icon size={22} strokeWidth={1.8} />
              </div>

              <h3 className="mt-6 text-lg font-semibold">{title}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {text}
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#5B9FFF]">
                Explore Solutions
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionAreas;