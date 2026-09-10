import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router";

const serviceData = {
  websites: {
    label: "Web Development",
    title: "Websites that make your business impossible to ignore.",
    description:
      "We design and develop modern websites that communicate your brand, engage visitors and turn attention into action.",
    points: [
      "Corporate websites",
      "Business websites",
      "Landing pages",
      "Portfolio websites",
      "E-commerce experiences",
      "High-performance web experiences",
    ],
  },

  "web-applications": {
    label: "Web Applications",
    title: "Digital applications built around the way you work.",
    description:
      "We build custom web applications that turn complex workflows into simple, usable digital experiences.",
    points: [
      "Customer portals",
      "Management platforms",
      "Dashboards",
      "Booking platforms",
      "Online platforms",
      "Custom SaaS applications",
    ],
  },

  "mobile-applications": {
    label: "Mobile Applications",
    title: "Mobile experiences designed for modern users.",
    description:
      "We create mobile applications that make your services accessible wherever your users are.",
    points: [
      "Android applications",
      "iOS applications",
      "Cross-platform applications",
      "Mobile dashboards",
      "Customer applications",
      "Business applications",
    ],
  },

  "business-systems": {
    label: "Business Systems",
    title: "Technology that makes your business work smarter.",
    description:
      "We create custom systems that streamline operations, organize information and improve decision-making.",
    points: [
      "Management systems",
      "CRM platforms",
      "Inventory systems",
      "School systems",
      "Attendance systems",
      "Workflow automation",
    ],
  },

  "ui-ux": {
    label: "UI/UX Design",
    title: "Experiences people understand naturally.",
    description:
      "We design interfaces that balance visual quality, usability and the needs of the people using them.",
    points: [
      "User research",
      "Wireframes",
      "User flows",
      "Interface design",
      "Design systems",
      "Prototyping",
    ],
  },

  "apis-integrations": {
    label: "APIs & Integrations",
    title: "Make your technology work together.",
    description:
      "We connect platforms, services and systems so your digital ecosystem can communicate efficiently.",
    points: [
      "REST APIs",
      "Third-party integrations",
      "Payment integrations",
      "Authentication",
      "System integrations",
      "Data exchange",
    ],
  },

  "maintenance-support": {
    label: "Maintenance & Support",
    title: "We don't disappear after launch.",
    description:
      "We help keep your digital products secure, reliable, updated and ready for what comes next.",
    points: [
      "Bug fixing",
      "Performance improvements",
      "Security updates",
      "Content updates",
      "Technical support",
      "Continuous improvements",
    ],
  },
};

const ServiceDetail = () => {
  const { service } = useParams();

  const data = serviceData[service];

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-[#0B1B34]">
            Service not found
          </h1>

          <Link
            to="/services"
            className="mt-5 inline-flex items-center text-[#1677FF]"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FBFF] text-[#0B1B34]">

      {/* HERO */}

      <section className="bg-[#07111F] text-white">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-36 sm:px-8 lg:px-12">

          <Link
            to="/services"
            className="inline-flex items-center text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={15} className="mr-2" />
            All Services
          </Link>

          <div className="mt-10 max-w-4xl">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#5EA2FF]">
              {data.label}
            </p>

            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              {data.title}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              {data.description}
            </p>

          </div>

        </div>
      </section>


      {/* CONTENT */}

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
                What We Can Build
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">
                Designed around your goals.
              </h2>
            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              {data.points.map((point, index) => (
                <div
                  key={point}
                  className="rounded-2xl border border-[#D8E3F0] bg-white p-6"
                >
                  <span className="text-xs font-semibold text-[#1677FF]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-4 text-base font-semibold">
                    {point}
                  </h3>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* CTA */}

      <section className="bg-[#07111F] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">

          <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-center">

            <div>
              <h2 className="text-3xl font-semibold">
                Ready to build?
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Let's turn your idea into something real.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center self-start rounded-full bg-[#1677FF] px-6 py-3.5 text-sm font-semibold"
            >
              Start a Project
              <ArrowRight size={16} className="ml-2" />
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
};

export default ServiceDetail;