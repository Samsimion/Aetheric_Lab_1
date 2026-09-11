import {
  Building2,
  BriefcaseBusiness,
  ShoppingCart,
  PanelsTopLeft,
  UserRound,
  Code2,
  ArrowRight,
} from "lucide-react";

const WebsiteTypes = () => {
  const websites = [
    {
      icon: Building2,
      title: "Business Websites",
      text: "Establish your brand and attract customers.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Corporate Websites",
      text: "Build a strong and professional presence.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Websites",
      text: "Sell your products online with ease.",
    },
    {
      icon: PanelsTopLeft,
      title: "Landing Pages",
      text: "Turn ideas into action with high-converting pages.",
    },
    {
      icon: UserRound,
      title: "Portfolio Websites",
      text: "Showcase your work professionally.",
    },
    {
      icon: Code2,
      title: "Custom Websites",
      text: "Have something unique? We'll build it.",
    },
  ];

  return (
    <section className="bg-[#F8FBFF]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">

        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1677FF]">
                What We Build
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B1B34] sm:text-5xl">
              Websites built
              <br />
              for{" "}
              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                different goals.
              </span>
            </h2>
          </div>

          <div className="flex items-end lg:justify-end">
            <div className="max-w-md">
              <p className="text-sm leading-6 text-[#526784] sm:text-base">
                Whether you're a startup, business, or organization,
                we create websites tailored to your needs.
              </p>

              <button className="group mt-4 inline-flex items-center text-sm font-semibold text-[#1677FF]">
                Discuss Your Idea

                <ArrowRight
                  size={16}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>

        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          {websites.map((website) => {
            const Icon = website.icon;

            return (
              <div
                key={website.title}
                className="group flex min-h-[112px] items-center gap-4 rounded-xl border border-[#E3EBF4] bg-white p-5 shadow-[0_8px_30px_rgba(11,27,52,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#C9DDF7] hover:shadow-[0_15px_35px_rgba(11,27,52,0.08)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EEF5FF] text-[#1677FF]">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-[#0B1B34]">
                    {website.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[#637691]">
                    {website.text}
                  </p>
                </div>

                <ArrowRight
                  size={17}
                  className="text-[#1677FF] transition-transform group-hover:translate-x-1"
                />
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default WebsiteTypes;