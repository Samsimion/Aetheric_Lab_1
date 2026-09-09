import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({
  title,
  category,
  description,
  image,
}) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0D1B2E]">

      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/70 to-transparent" />
      </div>

      <div className="p-5">

        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#62A9FF]">
          {category}
        </p>

        <h3 className="mt-2 text-lg font-bold text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          {description}
        </p>

        <button className="mt-5 flex items-center gap-2 text-sm font-semibold text-white">
          View concept
          <ArrowUpRight size={16} />
        </button>

      </div>

    </article>
  );
};

export default ProjectCard;