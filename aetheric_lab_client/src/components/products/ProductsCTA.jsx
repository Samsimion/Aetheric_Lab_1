import { ArrowRight, Sparkles } from "lucide-react";

const ProductsCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#EAF4FF] py-24">

      <div className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full border border-[#BFD8F7]" />

      <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-[#D9D2FF]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-3xl">

          <div className="flex items-center gap-3">

            <Sparkles
              size={20}
              className="text-[#1677FF]"
            />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1677FF]">
              Have an idea?
            </span>

          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-[#0B1B34] sm:text-5xl">
            Let's build it together.
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-7 text-slate-600">
            Whether it's a product, a partnership or a new opportunity,
            we're excited to explore what's possible.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#1677FF] to-[#7657E8] px-7 py-3.5 text-sm font-semibold text-white shadow-lg"
            >
              Start a Conversation

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="/about"
              className="rounded-full border border-[#BFD0E3] px-7 py-3.5 text-sm font-semibold text-[#0B1B34] transition hover:bg-white"
            >
              Our Vision
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProductsCTA;