import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

import ServiceCard from "../cards/ServiceCard";
import { services } from "../../data/homeData";

const ServicesPreview = () => {
  return (
    <section
      id="services"
      className="bg-[#EEF4FA] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#1677FF]">
              Our Services
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#0B1B34]">
              Your idea. Our technology.
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600">
              We help businesses, organizations and individuals
              bring their ideas to life with modern, scalable
              and reliable digital solutions.
            </p>
          </div>

          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1677FF]"
          >
            Explore all services
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServicesPreview;