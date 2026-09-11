import {
  Search,
  FileText,
  PenTool,
  Code2,
  Rocket,
  Headphones,
} from "lucide-react";

import { Link } from "react-router";

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "Understand your needs.",
    icon: Search,
  },
  {
    number: "02",
    title: "Plan",
    text: "Define the right approach.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Design",
    text: "Create intuitive experiences.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Develop",
    text: "Build and bring it to life.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Launch",
    text: "Deploy with confidence.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Support",
    text: "Ongoing maintenance.",
    icon: Headphones,
  },
];

const ServicesProcess = () => {
  return (
    <section className="relative overflow-hidden bg-[#EEF4FA]">
      
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#F8FBFF]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

        <div className="grid items-center gap-12 lg:grid-cols-[0.65fr_1.7fr]">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-14 bg-gradient-to-r from-blue-600 via-blue-500/70 to-transparent"></span>

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
                Our Process
              </span>
              <span className="h-px w-14 bg-gradient-to-l from-blue-600 via-blue-500/70 to-transparent"></span>
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B1B34] sm:text-5xl">
              From idea
              <br />
              to <span className="text-[#1677FF]">reality.</span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[#526784]">
              A structured process keeps projects focused, transparent and
              moving forward.
            </p>

            <Link
              to="/how-we-work"
              className="mt-5 inline-flex items-center text-sm font-semibold text-[#1677FF]"
            >
              See How We Work
              <span className="ml-2">→</span>
            </Link>
          </div>


          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#D5E3F2] bg-white text-[#1677FF] shadow-sm">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <div className="mt-4 text-sm font-semibold text-[#0B1B34]">
                    {step.title}
                  </div>

                  <p className="mt-1 text-[10px] leading-4 text-[#71839C]">
                    {step.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesProcess;