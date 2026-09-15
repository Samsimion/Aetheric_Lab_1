import {
  Building2,
  LayoutDashboard,
  Settings2,
  UsersRound,
  CloudCog,
  Code2,
  ArrowRight,
} from "lucide-react";

const ApplicationTypes = () => {
  const applications = [
    {
      icon: Building2,
      title: "Business Platforms",
      text: "Systems that manage operations, customers and workflows.",
    },
    {
      icon: LayoutDashboard,
      title: "Dashboards & Portals",
      text: "Give teams and customers the information they need.",
    },
    {
      icon: Settings2,
      title: "Management Systems",
      text: "Centralize data, processes and day-to-day operations.",
    },
    {
      icon: UsersRound,
      title: "Customer Platforms",
      text: "Build better digital experiences for your users.",
    },
    {
      icon: CloudCog,
      title: "SaaS Applications",
      text: "Turn ideas into scalable software products.",
    },
    {
      icon: Code2,
      title: "Custom Applications",
      text: "Something unique? We engineer it from the ground up.",
    },
  ];

  return (
    <section className="bg-[#F8FBFF]">

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">

          {/* Heading */}
          <div>

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1677FF]">
                What We Build
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B1B34] sm:text-5xl">
              Software that
              <br />
              works around
              <br />
              your{" "}
              <span className="text-[#1677FF]">
                business.
              </span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[#637691]">
              Every organization works differently. We build applications
              around your processes, users and goals.
            </p>

          </div>

          {/* Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {applications.map((application) => {
              const Icon = application.icon;

              return (
                <div
                  key={application.title}
                  className="group rounded-xl border border-[#E2EAF3] bg-white p-5 shadow-[0_8px_30px_rgba(11,27,52,0.035)] transition duration-300 hover:-translate-y-1 hover:border-[#C8DCF7] hover:shadow-[0_18px_40px_rgba(11,27,52,0.08)]"
                >

                  <div className="flex items-start justify-between">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF5FF] text-[#1677FF]">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <ArrowRight
                      size={16}
                      className="text-[#1677FF] transition-transform group-hover:translate-x-1"
                    />

                  </div>

                  <h3 className="mt-5 text-sm font-semibold text-[#0B1B34]">
                    {application.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#637691]">
                    {application.text}
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

export default ApplicationTypes;