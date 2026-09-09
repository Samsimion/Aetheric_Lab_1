import { Sparkles, Target, Heart } from "lucide-react";

const VisionPreview = () => {
  return (
    <section className="relative overflow-hidden bg-[#07111F] py-24">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(22,119,255,0.15),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr_0.8fr] lg:items-center">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#62A9FF]">
              Our Vision
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Technology should do more
              <br />
              than exist.
            </h2>

          </div>

          <div className="border-l border-white/10 pl-8">

            <p className="text-base leading-8 text-slate-300">
              We envision a future where technology doesn't simply
              automate tasks, but expands human potential, connects
              communities and creates opportunities.
            </p>

          </div>

          <div className="grid grid-cols-3 gap-5">

            <div className="text-center">
              <Sparkles className="mx-auto text-[#62A9FF]" size={23} />
              <p className="mt-3 text-xs font-semibold text-white">
                Innovation
              </p>
            </div>

            <div className="text-center">
              <Target className="mx-auto text-[#62A9FF]" size={23} />
              <p className="mt-3 text-xs font-semibold text-white">
                Purpose
              </p>
            </div>

            <div className="text-center">
              <Heart className="mx-auto text-[#62A9FF]" size={23} />
              <p className="mt-3 text-xs font-semibold text-white">
                Impact
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default VisionPreview;