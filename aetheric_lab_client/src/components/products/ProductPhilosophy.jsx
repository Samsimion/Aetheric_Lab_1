import {
  Target,
  UsersRound,
  Infinity,
} from "lucide-react";

const ProductPhilosophy = () => {

  const principles = [
    {
      icon: Target,
      title: "Solve real problems",
      text: "We focus on meaningful challenges that technology can genuinely improve.",
    },
    {
      icon: UsersRound,
      title: "Design for people",
      text: "We put users, communities and human experiences at the center.",
    },
    {
      icon: Infinity,
      title: "Think long-term",
      text: "We build for lasting impact, not just short-term results.",
    },
  ];

  return (
    <section className="bg-[#F8F6F1] py-20">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.5fr]">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5B6470]">
              Our Product Philosophy
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0B1B34] sm:text-5xl">
              We build with purpose.
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-slate-600">
              Every product we create is guided by a simple belief —
              technology should create opportunities, empower people
              and contribute to a better, more inclusive world.
            </p>

          </div>

          <div className="grid gap-4 md:grid-cols-3">

            {principles.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#E2DED5] bg-white p-6"
                >

                  <Icon
                    size={27}
                    strokeWidth={1.7}
                    className="text-[#475569]"
                  />

                  <h3 className="mt-7 font-semibold text-[#0B1B34]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.text}
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

export default ProductPhilosophy;