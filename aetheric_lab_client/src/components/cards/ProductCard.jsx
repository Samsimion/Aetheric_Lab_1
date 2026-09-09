import { ArrowRight } from "lucide-react";

const ProductCard = ({
  title,
  description,
  icon: Icon,
}) => {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5">

      <div className="flex items-start justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF4FA] text-[#1677FF]">
          <Icon size={22} strokeWidth={1.7} />
        </div>

        <ArrowRight
          size={18}
          className="text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-[#1677FF]"
        />

      </div>

      <h3 className="mt-8 text-lg font-bold text-[#0B1B34]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        {description}
      </p>

    </article>
  );
};

export default ProductCard;