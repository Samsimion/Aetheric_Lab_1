import {
  Monitor,
  Server,
  Database,
  Cloud,
  Workflow,
  Plug,
} from "lucide-react";

const ApplicationArchitecture = () => {
  const layers = [
    {
      icon: Monitor,
      title: "Frontend",
      text: "Interfaces your users interact with.",
      technologies: "React • JavaScript • Tailwind",
    },
    {
      icon: Server,
      title: "Backend",
      text: "Logic, authentication and application services.",
      technologies: "Python • Django • Flask • Node.js",
    },
    {
      icon: Database,
      title: "Database",
      text: "Structured, reliable application data.",
      technologies: "PostgreSQL • MySQL • MongoDB",
    },
    {
      icon: Workflow,
      title: "APIs & Services",
      text: "Connect your application to other systems.",
      technologies: "REST APIs • Integrations • Automation",
    },
    {
      icon: Cloud,
      title: "Cloud & Deployment",
      text: "Reliable infrastructure for production.",
      technologies: "AWS • Docker • Deployment",
    },
    {
      icon: Plug,
      title: "External Systems",
      text: "Payments, messaging and third-party platforms.",
      technologies: "Payments • WhatsApp • Telegram • APIs",
    },
  ];

  return (
    <section className="bg-white">

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">

        <div className="mb-10 max-w-2xl">

          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-9 bg-[#1677FF]" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1677FF]">
              Built From The Ground Up
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B1B34] sm:text-5xl">
            The right technology
            <br />
            for the right{" "}
            <span className="text-[#1677FF]">
              solution.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-6 text-[#637691]">
            We use modern, proven technologies to build
            secure, maintainable and high-performance applications.
          </p>

        </div>

        {/* Architecture */}
        <div className="relative">

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {layers.map((layer) => {
              const Icon = layer.icon;

              return (
                <div
                  key={layer.title}
                  className="group rounded-xl border border-[#E2EAF3] bg-[#F8FBFF] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#C7DCF7] hover:bg-white"
                >

                  <div className="flex items-start justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#1677FF] shadow-sm">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#9AAAC0]">
                      Layer
                    </span>

                  </div>

                  <h3 className="mt-5 text-sm font-semibold text-[#0B1B34]">
                    {layer.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#637691]">
                    {layer.text}
                  </p>

                  <div className="mt-4 border-t border-[#E2EAF3] pt-3">
                    <p className="text-[9px] font-medium text-[#1677FF]">
                      {layer.technologies}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ApplicationArchitecture;