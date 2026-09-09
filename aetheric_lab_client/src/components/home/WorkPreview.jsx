import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

import ProjectCard from "../cards/ProjectCard";

const projects = [
  {
    title: "Business Website",
    category: "Concept",
    description: "A modern digital presence designed for a growing business.",
    image:
      "https://images.pexels.com/photos/34804001/pexels-photo-34804001.jpeg?cs=srgb&dl=pexels-dkomov-34804001.jpg&fm=jpg",
  },
  {
    title: "Digital Education Platform",
    category: "Concept",
    description: "A technology experience built around modern learning.",
    image:
      "https://images.pexels.com/photos/12585545/pexels-photo-12585545.jpeg?cs=srgb&dl=pexels-boom-12585545.jpg&fm=jpg",
  },
  {
    title: "Infrastructure Platform",
    category: "Concept",
    description: "A scalable digital foundation for organizations and systems.",
    image:
      "https://images.pexels.com/photos/5480781/pexels-photo-5480781.jpeg?cs=srgb&dl=pexels-brett-sayles-5480781.jpg&fm=jpg",
  },
];

const WorkPreview = () => {
  return (
    <section className="bg-[#07111F] py-24">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.8fr]">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#62A9FF]">
              Our Work
            </p>

            <h2 className="mt-3 text-4xl font-bold leading-tight text-white">
              Ideas we've turned
              <br />
              into reality.
            </h2>

            <p className="mt-5 max-w-md leading-7 text-slate-400">
              A selection of concepts, experiments and projects
              that demonstrate how we approach digital products.
            </p>

            <Link
              to="/portfolio"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#62A9FF]"
            >
              View all projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">

            {projects.map((project) => (
              <ProjectCard
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

export default WorkPreview;