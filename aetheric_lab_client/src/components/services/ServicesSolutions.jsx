import {
  Building2,
  GraduationCap,
  Landmark,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router";

const solutions = [
  {
    title: "For Businesses",
    description:
      "Digital tools that improve how businesses operate, sell and serve customers.",
    slug: "businesses",
    icon: Building2,
  },
  {
    title: "For Education",
    description:
      "Technology for schools, learning institutions and education growth.",
    slug: "education",
    icon: GraduationCap,
  },
  {
    title: "For Organizations",
    description:
      "Digital platforms for organizations and institutions.",
    slug: "organizations",
    icon: Landmark,
  },
  {
    title: "Custom Solutions",
    description:
      "Have something different in mind? Let's design it together.",
    slug: "custom",
    icon: Sparkles,
  },
];

const ServicesSolutions = () => {
  return (
    <section className="bg-[#F8FBFF]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
                Built Around Your World
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B1B34] sm:text-5xl">
              Solutions for
              <br />
              real-life <span className="text-[#1677FF]">needs.</span>
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-6 text-[#526784]">
              We design and build technology for different industries and
              communities, with solutions that fit their unique challenges.
            </p>

            <Link
              to="/solutions"
              className="mt-7 inline-flex items-center text-sm font-semibold text-[#1677FF]"
            >
              Explore All Solutions
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>


          <div className="grid gap-4 sm:grid-cols-2">

            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <Link
                  key={solution.slug}
                  to={`/solutions/${solution.slug}`}
                  className="group relative min-h-[230px] overflow-hidden rounded-2xl bg-[#0D1B2E] p-6 text-white transition hover:-translate-y-1"
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#1677FF]/10 blur-2xl transition group-hover:bg-[#1677FF]/20" />

                  <Icon
                    size={24}
                    strokeWidth={1.6}
                    className="relative text-[#5EA2FF]"
                  />

                  <div className="relative mt-20">
                    <h3 className="text-lg font-semibold">
                      {solution.title}
                    </h3>

                    <p className="mt-2 max-w-xs text-xs leading-5 text-slate-400">
                      {solution.description}
                    </p>

                    <div className="mt-5 flex items-center text-xs font-medium text-[#5EA2FF]">
                      Learn More
                      <ArrowRight
                        size={14}
                        className="ml-1 transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesSolutions;