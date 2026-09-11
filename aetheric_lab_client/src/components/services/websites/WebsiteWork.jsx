import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const WebsiteWork = () => {
  const projects = [
    {
      title: "Shuleni",
      category: "Education Platform",
      type: "education",
      gradient: "from-emerald-950 via-emerald-800 to-emerald-600",
    },
    {
      title: "Spectrum Care Connect",
      category: "Community & Healthcare",
      type: "spectrum",
      gradient: "from-fuchsia-950 via-purple-700 to-pink-500",
    },
    {
      title: "Home Smart",
      category: "Smart Living",
      type: "smart",
      gradient: "from-slate-950 via-slate-800 to-slate-700",
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
              Real projects.
              <br />
              Real{" "}
              <span className="text-[#1677FF]">
                results.
              </span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[#637691]">
              A look at some of the digital experiences
              we've designed and built.
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
              <ProjectPreview
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


const ProjectPreview = ({
  title,
  category,
  type,
  gradient,
}) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-[#E1E9F2] bg-white shadow-[0_8px_30px_rgba(11,27,52,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,27,52,0.09)]">

      {/* Mock project visual */}
      <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${gradient}`}>

        <div className="absolute left-4 top-4 h-3 w-20 rounded-full bg-white/20" />

        <div className="absolute bottom-0 left-4 right-4 top-10 rounded-t-lg border border-white/10 bg-white/10 p-3 backdrop-blur-sm">

          {type === "education" && (
            <>
              <div className="text-[10px] font-semibold text-white">
                Education
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="h-12 rounded bg-white/10" />
                <div className="h-12 rounded bg-white/10" />
                <div className="h-12 rounded bg-white/10" />
              </div>
            </>
          )}

          {type === "spectrum" && (
            <>
              <div className="text-[10px] font-semibold text-white">
                Stronger Together
              </div>

              <div className="mt-3 h-10 rounded-full bg-white/20" />

              <div className="mt-2 h-3 w-20 rounded bg-white/20" />
            </>
          )}

          {type === "smart" && (
            <>
              <div className="text-[10px] font-semibold text-white">
                Home Smart
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="h-10 rounded bg-white/10" />
                <div className="h-10 rounded bg-white/10" />
              </div>
            </>
          )}

        </div>
      </div>

      <div className="flex items-center justify-between p-4">
        <div>
          <h3 className="text-sm font-semibold text-[#0B1B34]">
            {title}
          </h3>

          <p className="mt-1 text-[10px] text-[#637691]">
            {category}
          </p>
        </div>

        <ArrowUpRight
          size={17}
          className="text-[#1677FF]"
        />
      </div>

    </div>
  );
};

export default WebsiteWork;