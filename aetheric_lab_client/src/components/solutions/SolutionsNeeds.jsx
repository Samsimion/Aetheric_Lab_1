import {
  BarChart3,
  Box,
  Database,
  Gauge,
  Users,
  Zap,
} from "lucide-react";

const SolutionsNeeds = () => {
  const needs = [
    {
      icon: Gauge,
      title: "Digitize Operations",
      text: "Replace manual processes with connected digital systems.",
    },
    {
      icon: Users,
      title: "Connect People",
      text: "Bring teams, customers, communities and users together.",
    },
    {
      icon: Database,
      title: "Manage Information",
      text: "Organize, secure and unlock the value of your data.",
    },
    {
      icon: Zap,
      title: "Automate Work",
      text: "Reduce repetitive work and improve efficiency.",
    },
    {
      icon: Box,
      title: "Build Digital Products",
      text: "Turn ideas into platforms, applications and services.",
    },
    {
      icon: BarChart3,
      title: "Scale Existing Systems",
      text: "Improve and expand the technology you already have.",
    },
  ];

  return (
    <section className="bg-[#EEF6FF] text-[#0B1B34]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
              Solutions By Need
            </span>

            <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
              Different needs.
              <br />
              Tailored{" "}
              <span className="text-[#1677FF]">solutions.</span>
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-[#61738D]">
              No matter the challenge, we help turn it into an opportunity.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {needs.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-[#D9E8F8] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EDF5FF] text-[#1677FF]">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold">{title}</h3>

                  <p className="mt-1 text-xs leading-5 text-[#6B7D95]">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionsNeeds;