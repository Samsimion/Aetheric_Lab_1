import {
  Monitor,
  Smartphone,
  Cloud,
  LayoutDashboard,
  BarChart3,
  Box,
} from "lucide-react";

const UIUXDesign = () => {
  const items = [
    {
      icon: <Monitor size={21} />,
      title: "Websites & Web Experiences",
      text: "Marketing sites, brand experiences and more.",
    },
    {
      icon: <Smartphone size={21} />,
      title: "Mobile Interfaces",
      text: "User-friendly mobile app designs.",
    },
    {
      icon: <Cloud size={21} />,
      title: "SaaS Products",
      text: "Scalable product interfaces and platforms.",
    },
    {
      icon: <LayoutDashboard size={21} />,
      title: "Business Systems",
      text: "Internal tools and management interfaces.",
    },
    {
      icon: <BarChart3 size={21} />,
      title: "Dashboards & Data Interfaces",
      text: "Data visualization and analytics designs.",
    },
    {
      icon: <Box size={21} />,
      title: "Digital Products",
      text: "End-to-end product design from idea to launch.",
    },
  ];

  return (
    <section className="bg-[#EEF4FA] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
                What We Design
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B1B34] sm:text-5xl">
              Interfaces for
              <br />
              a{" "}
              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                better tomorrow.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-[#687B94]">
              We design digital experiences across different
              platforms, industries and user needs.
            </p>
          </div>


          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/80 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,27,52,0.06)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F0F6FD] text-[#1677FF]">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-xs font-semibold leading-5 text-[#0B1B34]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[10px] leading-4 text-[#687B94]">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default UIUXDesign;