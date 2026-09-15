import {
  Zap,
  BarChart3,
  UserRound,
  Database,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

const IntegrationBenefits = () => {
  const benefits = [
    {
      icon: <Zap size={21} />,
      title: "Increase Efficiency",
      text: "Automate manual processes and save time.",
    },
    {
      icon: <BarChart3 size={21} />,
      title: "Better Decisions",
      text: "Unify data across systems for deeper insights.",
    },
    {
      icon: <UserRound size={21} />,
      title: "Enhanced Experiences",
      text: "Deliver seamless, connected experiences for your users.",
    },
    {
      icon: <Database size={21} />,
      title: "Reduce Costs",
      text: "Minimise duplication and operational overhead.",
    },
    {
      icon: <Lightbulb size={21} />,
      title: "Enable Innovation",
      text: "Unlock new features and business opportunities.",
    },
    {
      icon: <ShieldCheck size={21} />,
      title: "Future-Ready",
      text: "A flexible foundation that grows with you.",
    },
  ];

  return (
    <section className="bg-[#F8FBFF] py-16 lg:py-20">

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="grid items-center gap-12 lg:grid-cols-[0.72fr_1.28fr]">

          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
                Why APIs Matter
              </span>

            </div>


            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#0B1B34] sm:text-5xl">

              Your systems.
              <br />

              Working{" "}

              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                together.
              </span>

            </h2>


            <p className="mt-5 max-w-md text-sm leading-6 text-[#60728B]">
              APIs and integrations enable your tools, platforms
              and data to work as one. We help you create a
              connected ecosystem that improves efficiency,
              reduces complexity and delivers a better experience
              for your users.
            </p>

          </div>


          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-[#DCE6F1] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#BFD7F4] hover:shadow-[0_10px_30px_rgba(11,27,52,0.05)]"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF6FF] text-[#1677FF]">
                  {benefit.icon}
                </div>

                <h3 className="mt-4 text-sm font-semibold text-[#0B1B34]">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#71839C]">
                  {benefit.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default IntegrationBenefits;