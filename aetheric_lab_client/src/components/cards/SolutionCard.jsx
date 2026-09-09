import { ArrowRight } from "lucide-react";

const SolutionCard = ({
  title,
  description,
  icon: Icon,
  image,
}) => {
  return (
    <article className="group relative min-h-[330px] overflow-hidden rounded-2xl">

      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/60 to-transparent" />

      <div className="relative flex h-full flex-col justify-end p-6 text-white">

        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md">
          <Icon size={19} strokeWidth={1.7} />
        </div>

        <h3 className="text-lg font-bold">
          {title}
        </h3>

        <p className="mt-2 max-w-xs text-sm leading-6 text-slate-300">
          {description}
        </p>

        <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-white">
          Explore solution
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </div>

      </div>
    </article>
  );
};

export default SolutionCard;