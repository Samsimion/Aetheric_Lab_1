import {
  Handshake,
  Target,
  Users,
} from "lucide-react";

const SolutionsApproach = () => {
  const principles = [
    {
      icon: Users,
      title: "People First",
      text: "Technology should work for people, not the other way around.",
    },
    {
      icon: Target,
      title: "Outcome Driven",
      text: "We focus on what the solution actually needs to achieve.",
    },
    {
      icon: Handshake,
      title: "Collaborative",
      text: "We work with you throughout the journey, not just at delivery.",
    },
  ];

  return (
    <section className="bg-[#F8FBFF] text-[#0B1B34]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
              Our Approach
            </span>

            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
              We don't start with technology.
              <br />
              We start with{" "}
              <span className="text-[#1677FF]">
                understanding the problem.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#526784]">
              Every organization is different. That's why we take the time to
              understand your goals, challenges and opportunities before
              designing the right solution.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {principles.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-[#DCE8F5] bg-white p-6 shadow-[0_10px_30px_rgba(30,70,110,0.04)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF5FF] text-[#1677FF]">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-base font-semibold">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-[#61738D]">
                  {text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionsApproach;