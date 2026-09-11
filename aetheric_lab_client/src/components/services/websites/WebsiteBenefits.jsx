import {
  MonitorSmartphone,
  Smartphone,
  BarChart3,
  ShieldCheck,
  Settings,
} from "lucide-react";

const WebsiteBenefits = () => {
  const benefits = [
    {
      icon: MonitorSmartphone,
      title: "Modern Design",
      text: "Clean, engaging and on-brand.",
    },
    {
      icon: Smartphone,
      title: "Responsive",
      text: "Looks perfect everywhere.",
    },
    {
      icon: BarChart3,
      title: "SEO Ready",
      text: "Built to be found on search engines.",
    },
    {
      icon: ShieldCheck,
      title: "Secure",
      text: "Best practices for a safer web.",
    },
    {
      icon: Settings,
      title: "Easy to Manage",
      text: "Simple content management.",
    },
  ];

  return (
    <section className="bg-[#EEF6FF]">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-16">

        <div className="grid items-center gap-10 lg:grid-cols-[0.65fr_1.35fr]">

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1677FF]">
                What You Get
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B1B34] sm:text-5xl">
              More than
              <br />
              just a{" "}
              <span className="text-[#1677FF]">
                website.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">

            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#1677FF] shadow-[0_8px_25px_rgba(22,119,255,0.08)]">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-4 text-xs font-semibold text-[#0B1B34] sm:text-sm">
                    {benefit.title}
                  </h3>

                  <p className="mt-1 text-[10px] leading-4 text-[#637691] sm:text-xs">
                    {benefit.text}
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

export default WebsiteBenefits;