import { ArrowUpRight } from "lucide-react";

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <article className="group flex min-h-[220px] flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5">

      <div>
        <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-[#1677FF]">
          <Icon size={21} strokeWidth={1.8} />
        </div>

        <h3 className="text-base font-bold text-[#0B1B34]">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>

      <div className="mt-6 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-[#1677FF] transition-all duration-300 group-hover:border-[#1677FF] group-hover:bg-[#1677FF] group-hover:text-white">
        <ArrowUpRight size={16} />
      </div>

    </article>
  );
};

export default ServiceCard;