import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const ApplicationWork = () => {
  const projects = [
    {
      title: "Shuleni",
      category: "Education Management Platform",
      description: "Students • Teachers • Parents • Administration",
      gradient: "from-emerald-950 via-emerald-800 to-emerald-600",
    },
    {
      title: "Spectrum Care Connect",
      category: "Community & Support Platform",
      description: "Communities • Resources • Support • Organizations",
      gradient: "from-purple-950 via-purple-800 to-pink-600",
    },
    {
      title: "Home Smart",
      category: "Smart Living Platform",
      description: "Devices • Automation • Monitoring • Energy",
      gradient: "from-slate-950 via-slate-800 to-slate-600",
    },
  ];

  return (
    <section className="bg-[#F8FBFF]">

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">

          {/* Intro */}
          <div>

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1677FF]">
                Selected Work
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B1B34] sm:text-5xl">
              Applications built
              <br />
              for real{" "}
              <span className="text-[#1677FF]">
                problems.
              </span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[#637691]">
              Explore some of the platforms we're building
              to solve complex real-world challenges.
            </p>

            <Link
              to="/portfolio"
              className="group mt-6 inline-flex items-center text-sm font-semibold text-[#1677FF]"
            >
              View All Projects

              <ArrowRight
                size={17}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </Link>

          </div>

          {/* Projects */}
          <div className="grid gap-5 md:grid-cols-3">

            {projects.map((project) => (
              <ApplicationCard
                key={project.title}
                {...project}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};


const ApplicationCard = ({
  title,
  category,
  description,
  gradient,
}) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-[#E0E8F1] bg-white shadow-[0_8px_30px_rgba(11,27,52,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,27,52,0.09)]">

      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${gradient}`}>

        {/* Fake dashboard */}
        <div className="absolute inset-x-5 bottom-0 top-5 rounded-t-xl border border-white/10 bg-white/10 p-3 backdrop-blur-sm">

          <div className="flex items-center justify-between">
            <div className="h-2 w-16 rounded-full bg-white/30" />
            <div className="h-4 w-4 rounded-full bg-white/20" />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="h-12 rounded bg-white/10" />
            <div className="h-12 rounded bg-white/10" />
            <div className="h-12 rounded bg-white/10" />
          </div>

          <div className="mt-3 h-16 rounded bg-white/10" />

        </div>

      </div>

      <div className="p-4">

        <div className="flex items-start justify-between">

          <div>
            <h3 className="text-sm font-semibold text-[#0B1B34]">
              {title}
            </h3>

            <p className="mt-1 text-[10px] font-medium text-[#1677FF]">
              {category}
            </p>
          </div>

          <ArrowUpRight
            size={17}
            className="text-[#1677FF]"
          />

        </div>

        <p className="mt-3 text-[10px] leading-5 text-[#637691]">
          {description}
        </p>

      </div>

    </div>
  );
};

export default ApplicationWork;