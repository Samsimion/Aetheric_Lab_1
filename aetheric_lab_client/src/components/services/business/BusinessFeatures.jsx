import {
  Users,
  Workflow,
  BarChart3,
  Plug,
  MapPin,
  ShieldCheck,
  Layers3,
  Grid3X3,
} from "lucide-react";

const BusinessFeatures = () => {
  const features = [
    {
      icon: <Users size={20} />,
      title: "User Management",
      text: "Roles, permissions and access control.",
    },
    {
      icon: <Workflow size={20} />,
      title: "Workflow Automation",
      text: "Approvals, task management and notifications.",
    },
    {
      icon: <BarChart3 size={20} />,
      title: "Advanced Reporting",
      text: "Real-time insights and custom reports.",
    },
    {
      icon: <Plug size={20} />,
      title: "Integrations",
      text: "Connect with your tools and services.",
    },
    {
      icon: <MapPin size={20} />,
      title: "Multi-location Support",
      text: "Manage multiple branches or locations.",
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Security & Backups",
      text: "Keep your business data safe and secure.",
    },
    {
      icon: <Layers3 size={20} />,
      title: "Scalable Architecture",
      text: "Built to grow with your business.",
    },
    {
      icon: <Grid3X3 size={20} />,
      title: "Custom Modules",
      text: "Tailored to your specific business needs.",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-24">

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">

          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
                Key Features
              </span>

            </div>


            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#0B1B34] sm:text-5xl">

              Everything you need
              <br />

              to run and{" "}

              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                grow.
              </span>

            </h2>


            <p className="mt-5 max-w-md text-base leading-7 text-[#60728B]">
              Powerful features designed to simplify complex
              operations and give you complete control.
            </p>

          </div>


          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-[#DCE6F1] bg-[#F8FBFF] p-5 transition hover:-translate-y-0.5 hover:border-[#BFD7F4]"
              >

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEF6FF] text-[#1677FF]">
                  {feature.icon}
                </div>

                <h3 className="mt-4 text-sm font-semibold text-[#0B1B34]">
                  {feature.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#687B94]">
                  {feature.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default BusinessFeatures;