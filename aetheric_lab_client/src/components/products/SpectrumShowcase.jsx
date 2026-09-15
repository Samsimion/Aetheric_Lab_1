import {
  ArrowRight,
  HeartHandshake,
  Users,
  ShieldCheck,
} from "lucide-react";

const SpectrumShowcase = () => {
  return (
    <section className="overflow-hidden bg-[#F5F0FF] py-24">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">

          {/* Phone visuals */}
          <div className="relative order-2 flex justify-center lg:order-1">

            <div className="absolute h-[360px] w-[360px] rounded-full bg-[#8B6CFF]/10 blur-3xl" />

            <div className="relative flex items-end gap-5">

              <div className="hidden w-[170px] -rotate-6 rounded-[28px] border-8 border-[#17213A] bg-[#07111F] p-2 shadow-2xl sm:block">

                <div className="rounded-[20px] bg-[#18233F] p-5 text-white">
                  <p className="text-[9px] text-slate-400">
                    Spectrum Care
                  </p>

                  <p className="mt-5 text-sm font-bold">
                    You're not alone.
                  </p>

                  <div className="mt-6 rounded-xl bg-[#7657E8] p-3 text-center text-[9px]">
                    Find Support
                  </div>

                  <div className="mt-5 space-y-2">
                    <div className="h-8 rounded-lg bg-white/10" />
                    <div className="h-8 rounded-lg bg-white/10" />
                    <div className="h-8 rounded-lg bg-white/10" />
                  </div>
                </div>

              </div>

              <div className="w-[210px] rounded-[34px] border-8 border-[#17213A] bg-[#07111F] p-2 shadow-2xl">

                <div className="min-h-[390px] rounded-[26px] bg-white p-5">

                  <div className="flex items-center justify-between">

                    <HeartHandshake
                      size={20}
                      className="text-[#7657E8]"
                    />

                    <div className="h-7 w-7 rounded-full bg-[#F1EAFF]" />

                  </div>

                  <p className="mt-8 text-lg font-bold text-[#17213A]">
                    Support Groups
                  </p>

                  <div className="mt-5 space-y-3">

                    {[
                      "Parents Support Group",
                      "Young Adults",
                      "Caregivers Network",
                      "Educators",
                    ].map((group) => (
                      <div
                        key={group}
                        className="flex items-center gap-3 rounded-xl bg-[#F6F3FF] p-3"
                      >

                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                          <Users size={14} className="text-[#7657E8]" />
                        </div>

                        <span className="text-[10px] font-medium">
                          {group}
                        </span>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">

            <span className="inline-flex rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#7657E8]">
              ● Early Access
            </span>

            <div className="mt-6 flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7657E8] text-white">
                <HeartHandshake size={29} />
              </div>

              <h2 className="text-3xl font-bold text-[#1A1640] sm:text-4xl">
                Spectrum Care Connect
              </h2>

            </div>

            <p className="mt-5 text-lg font-medium text-[#665B8A]">
              Awareness. Support. Stronger Together.
            </p>

            <p className="mt-6 leading-7 text-slate-600">
              A platform designed to connect individuals, families and
              organizations within the autism and spectrum community.
              Bringing together support groups, resources, NGOs and
              opportunities for a more inclusive tomorrow.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">

              <div className="rounded-xl bg-white p-4">
                <HeartHandshake
                  size={19}
                  className="text-[#7657E8]"
                />

                <p className="mt-3 text-xs font-semibold">
                  Community
                </p>
              </div>

              <div className="rounded-xl bg-white p-4">
                <ShieldCheck
                  size={19}
                  className="text-[#7657E8]"
                />

                <p className="mt-3 text-xs font-semibold">
                  Support
                </p>
              </div>

              <div className="rounded-xl bg-white p-4">
                <Users
                  size={19}
                  className="text-[#7657E8]"
                />

                <p className="mt-3 text-xs font-semibold">
                  Inclusion
                </p>
              </div>

            </div>

            <a
              href="/products/spectrum-care-connect"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#7657E8] px-6 py-3 text-sm font-semibold text-white"
            >
              Explore Spectrum Care
              <ArrowRight size={16} />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default SpectrumShowcase;