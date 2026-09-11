import {
  Monitor,
  Globe,
  Smartphone,
  Database,
  PenTool,
  Link2,
  Wrench,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern, high-performance websites and digital experiences.",
    icon: Monitor,
    slug: "websites",
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Custom web applications built around your workflow and goals.",
    icon: Globe,
    slug: "web-applications",
  },
  {
    number: "03",
    title: "Mobile Applications",
    description:
      "Cross-platform mobile experiences designed for modern users.",
    icon: Smartphone,
    slug: "mobile-applications",
  },
  {
    number: "04",
    title: "Business Systems",
    description:
      "Custom systems that streamline operations and processes.",
    icon: Database,
    slug: "business-systems",
  },
  {
    number: "05",
    title: "UI/UX Design",
    description:
      "Interfaces that are beautiful, intuitive and purposeful.",
    icon: PenTool,
    slug: "ui-ux",
  },
  {
    number: "06",
    title: "APIs & Integrations",
    description:
      "Connect systems and make your technology work together.",
    icon: Link2,
    slug: "apis-integrations",
  },
  {
    number: "07",
    title: "Maintenance & Support",
    description:
      "Ongoing support that keeps your digital products reliable.",
    icon: Wrench,
    slug: "maintenance-support",
  },
];

const ServicesGrid = () => {
  return (
    <section className="bg-[#EEF4FA]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.5fr]">

          {/* INTRO */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-14 bg-gradient-to-r from-blue-600 via-blue-500/70 to-transparent"></span>


              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
                Our Core Services
              </span>
              <span className="h-px w-14 bg-gradient-to-l from-blue-600 via-blue-500/70 to-transparent"></span>

            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B1B34] sm:text-5xl">
              Everything you need
              <br />
              to <span className="text-[#1677FF]">go digital.</span>
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-6 text-[#526784]">
              From powerful websites to complex business systems, we offer
              end-to-end digital solutions designed to help you work smarter,
              reach further and grow faster.
            </p>

            <Link
              to="/services"
              className="mt-7 inline-flex items-center rounded-full bg-[#1677FF] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0F63D4]"
            >
              View All Services
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>


          {/* SERVICES */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {services.slice(0, 4).map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
              />
            ))}

            <div className="sm:col-span-2 lg:col-span-2">
              <ServiceCard service={services[4]} />
            </div>

            <ServiceCard service={services[5]} />

            <ServiceCard service={services[6]} />

          </div>

        </div>

      </div>
    </section>
  );
};


const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group rounded-2xl border border-white/70 bg-white/75 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#BFD8F7] hover:shadow-xl hover:shadow-[#1677FF]/5"
    >
      <div className="flex items-center justify-between">
        <Icon
          size={23}
          strokeWidth={1.7}
          className="text-[#1677FF]"
        />

        <span className="text-xs font-semibold text-[#A1B0C4]">
          {service.number}
        </span>
      </div>

      <h3 className="mt-6 text-sm font-semibold text-[#0B1B34]">
        {service.title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-[#667991]">
        {service.description}
      </p>

      <div className="mt-5 flex items-center text-xs font-semibold text-[#1677FF]">
        Learn More
        <ArrowRight
          size={14}
          className="ml-1 transition-transform group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
};


export default ServicesGrid;