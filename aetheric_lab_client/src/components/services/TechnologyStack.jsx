const technologies = [
  {
    category: "Frontend",
    tools: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    tools: ["Python", "Django", "Flask"],
  },
  {
    category: "Database",
    tools: ["PostgreSQL", "MySQL"],
  },
  {
    category: "Cloud & DevOps",
    tools: ["AWS", "Docker", "Vercel"],
  },
];

const TechnologyStack = () => {
  return (
    <section className="bg-[#F8FBFF]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid items-center gap-10 lg:grid-cols-[0.7fr_1.8fr]">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
                Built With Modern Technology
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#0B1B34] sm:text-4xl">
              The right tools
              <br />
              for the <span className="text-[#1677FF]">right solutions.</span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[#526784]">
              We choose the best technology for each project, ensuring
              performance, security and scalability.
            </p>
          </div>


          <div className="grid border-y border-[#D8E3F0] sm:grid-cols-2 lg:grid-cols-4">

            {technologies.map((group) => (
              <div
                key={group.category}
                className="border-b border-[#D8E3F0] px-6 py-7 last:border-b-0 sm:border-r lg:border-b-0"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-[#0B1B34]">
                    {group.category}
                  </p>

                  <span className="text-[#1677FF]">+</span>
                </div>

                <div className="mt-5 space-y-2">
                  {group.tools.map((tool) => (
                    <div
                      key={tool}
                      className="text-sm text-[#667991]"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default TechnologyStack;