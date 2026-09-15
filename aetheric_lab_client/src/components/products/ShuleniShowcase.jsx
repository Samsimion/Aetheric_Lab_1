import { ArrowRight, GraduationCap } from "lucide-react";

const ShuleniShowcase = () => {
  return (
    <section
      id="products"
      className="overflow-hidden bg-[#EEF6FF] py-24"
    >

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Content */}
          <div>

            <span className="inline-flex items-center rounded-full border border-[#A9D0FF] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1677FF]">
              ● In Development
            </span>

            <div className="mt-6 flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1677FF] text-white">
                <GraduationCap size={30} />
              </div>

              <h2 className="text-4xl font-bold text-[#0B1B34]">
                Shuleni
              </h2>

            </div>

            <p className="mt-4 text-lg font-medium text-[#31547A]">
              More than school management.
              <br />
              A platform for every learner's journey.
            </p>

            <p className="mt-6 max-w-xl leading-7 text-slate-600">
              Shuleni is an all-in-one education platform designed to
              connect students, teachers, parents and schools while
              nurturing talents, skills and real-world growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="/products/shuleni"
                className="inline-flex items-center gap-2 rounded-full bg-[#1677FF] px-6 py-3 text-sm font-semibold text-white"
              >
                Explore Shuleni
                <ArrowRight size={16} />
              </a>

              <a
                href="/products/shuleni"
                className="rounded-full border border-[#AFC7DE] px-6 py-3 text-sm font-semibold text-[#0B1B34]"
              >
                Learn More
              </a>

            </div>

            <div className="mt-8 flex flex-wrap gap-2">

              {[
                "Education",
                "School Management",
                "Talent Growth",
                "Community",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white px-4 py-2 text-xs text-slate-600"
                >
                  {tag}
                </span>
              ))}

            </div>

          </div>

          {/* Product UI */}
          <div className="relative">

            <div className="rounded-[28px] border border-[#D5E5F5] bg-white p-3 shadow-2xl">

              <div className="overflow-hidden rounded-[20px] border border-[#E3ECF5]">

                <div className="flex h-12 items-center justify-between border-b px-5">

                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#1677FF]" />
                    <span className="text-sm font-semibold">
                      Shuleni
                    </span>
                  </div>

                  <div className="h-7 w-7 rounded-full bg-slate-200" />

                </div>

                <div className="grid min-h-[340px] grid-cols-[110px_1fr]">

                  <aside className="bg-[#07111F] p-4 text-white">

                    <div className="space-y-5 text-[10px] text-slate-400">
                      <p className="text-white">Dashboard</p>
                      <p>Students</p>
                      <p>Teachers</p>
                      <p>Academics</p>
                      <p>Finance</p>
                      <p>Activities</p>
                      <p>Reports</p>
                    </div>

                  </aside>

                  <div className="bg-[#F8FAFC] p-6">

                    <p className="text-xs text-slate-400">
                      Dashboard
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-[#0B1B34]">
                      Good morning!
                    </h3>

                    <div className="mt-6 grid grid-cols-3 gap-3">

                      {[
                        ["Students", "1,248"],
                        ["Teachers", "84"],
                        ["Classes", "36"],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="rounded-xl bg-white p-4 shadow-sm"
                        >
                          <p className="text-[10px] text-slate-400">
                            {label}
                          </p>

                          <p className="mt-2 text-lg font-bold">
                            {value}
                          </p>
                        </div>
                      ))}

                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-4">

                      <div className="h-28 rounded-xl bg-white p-4 shadow-sm">
                        <p className="text-[10px] text-slate-400">
                          Recent Activity
                        </p>

                        <div className="mt-5 h-2 w-3/4 rounded bg-[#DCEAFF]" />
                        <div className="mt-3 h-2 w-1/2 rounded bg-[#E7EEF6]" />
                      </div>

                      <div className="h-28 rounded-xl bg-white p-4 shadow-sm">
                        <p className="text-[10px] text-slate-400">
                          Student Growth
                        </p>

                        <div className="mt-8 flex items-end gap-2">
                          {[35, 55, 45, 75, 65, 90].map((height, i) => (
                            <div
                              key={i}
                              className="w-full rounded-t bg-[#1677FF]"
                              style={{ height: `${height / 2}px` }}
                            />
                          ))}
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ShuleniShowcase;