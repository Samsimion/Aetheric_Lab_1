import {
  Settings2,
  Package,
  Users,
  BarChart3,
  UserCog,
  Code2,
  ArrowUpRight,
} from "lucide-react";

const BusinessBuild = () => {
  const systems = [
    {
      icon: <Settings2 size={21} />,
      title: "Operations Systems",
      text: "Streamline daily operations and workflows.",
    },
    {
      icon: <Package size={21} />,
      title: "Inventory Management",
      text: "Track stock, suppliers and movements in real-time.",
    },
    {
      icon: <Users size={21} />,
      title: "Sales & Customer Management",
      text: "Manage customers, sales and relationships.",
    },
    {
      icon: <BarChart3 size={21} />,
      title: "Finance & Accounting",
      text: "Track income, expenses and financial performance.",
    },
    {
      icon: <UserCog size={21} />,
      title: "HR & Staff Management",
      text: "Manage your team, roles and performance.",
    },
    {
      icon: <Code2 size={21} />,
      title: "Custom Business Systems",
      text: "Have a specific need? We'll build it for you.",
    },
  ];

  return (
    <section className="bg-[#F8FBFF] py-20 lg:py-24">

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          {/* INTRO */}
          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
                What We Build
              </span>

            </div>


            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#0B1B34] sm:text-5xl">

              Business systems
              <br />

              designed{" "}

              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                around you.
              </span>

            </h2>


            <p className="mt-5 max-w-md text-base leading-7 text-[#60728B]">
              Every business is unique. We build systems that fit
              your processes, teams and goals — not the other way
              around.
            </p>

          </div>


          {/* CARDS */}
          <div className="grid gap-3 sm:grid-cols-2">

            {systems.map((system) => (
              <div
                key={system.title}
                className="group flex items-start gap-4 rounded-xl border border-[#DCE6F1] bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#BFD7F4] hover:shadow-[0_12px_35px_rgba(11,27,52,0.06)]"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF6FF] text-[#1677FF] transition group-hover:bg-[#1677FF] group-hover:text-white">
                  {system.icon}
                </div>


                <div className="flex-1">

                  <div className="flex items-start justify-between gap-2">

                    <h3 className="text-sm font-semibold text-[#0B1B34]">
                      {system.title}
                    </h3>

                    <ArrowUpRight
                      size={15}
                      className="shrink-0 text-[#1677FF] opacity-0 transition group-hover:opacity-100"
                    />

                  </div>

                  <p className="mt-2 text-xs leading-5 text-[#687B94]">
                    {system.text}
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

export default BusinessBuild;