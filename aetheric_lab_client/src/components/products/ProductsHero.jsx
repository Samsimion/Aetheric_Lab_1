import {
  ArrowRight,
  Lightbulb,
  Users,
  Orbit,
} from "lucide-react";

const ProductsHero = () => {
  return (
    <section className="relative min-h-[680px] overflow-hidden bg-[#07111F] text-white">

      {/* Background glow */}
      <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#1677FF]/20 blur-3xl" />

      <div className="absolute -bottom-40 left-1/3 h-[450px] w-[450px] rounded-full bg-[#7657E8]/10 blur-3xl" />

      {/* Orbital lines */}
      <div className="absolute right-[-120px] top-[80px] hidden h-[560px] w-[560px] rounded-full border border-[#1677FF]/30 lg:block" />

      <div className="absolute right-[-70px] top-[130px] hidden h-[460px] w-[460px] rounded-full border border-[#7657E8]/20 lg:block" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-2 lg:px-8">

        {/* Left */}
        <div className="relative z-10">

          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#1677FF]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5EA7FF]">
              Aetheric Products
            </span>
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            We don't just build
            <br />
            for today.
            <span className="block bg-gradient-to-r from-[#2D8CFF] to-[#8B6CFF] bg-clip-text text-transparent">
              We build what's next.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
            Explore the products, platforms and ideas being developed
            inside Aetheric Labs — technology designed to create a
            brighter tomorrow.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#products"
              className="group inline-flex items-center gap-3 rounded-full bg-[#1677FF] px-7 py-3.5 text-sm font-semibold transition hover:bg-[#2D8CFF]"
            >
              Explore Our Products

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="/about"
              className="inline-flex items-center rounded-full border border-slate-600 px-7 py-3.5 text-sm font-semibold transition hover:border-slate-400"
            >
              Our Vision
            </a>

          </div>

          {/* Principles */}
          <div className="mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">

            <div className="flex gap-3">
              <Lightbulb
                size={21}
                className="mt-1 text-[#3C9BFF]"
              />

              <div>
                <h3 className="text-sm font-semibold">
                  Real problems
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Solutions that create meaningful impact.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Orbit
                size={21}
                className="mt-1 text-[#7B6AFF]"
              />

              <div>
                <h3 className="text-sm font-semibold">
                  Long-term thinking
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  We build for the future, not just today.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Users
                size={21}
                className="mt-1 text-[#3C9BFF]"
              />

              <div>
                <h3 className="text-sm font-semibold">
                  People first
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Technology that improves lives.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right visual */}
        <div className="relative hidden h-[500px] lg:block">

          <div className="absolute right-[-30px] top-1/2 h-[390px] w-[390px] -translate-y-1/2 rounded-full bg-gradient-to-br from-[#1677FF]/20 to-[#7657E8]/10 blur-2xl" />

          <div className="absolute right-[-30px] top-1/2 h-[390px] w-[390px] -translate-y-1/2 rounded-full border border-[#3C9BFF]/30" />

          <div className="absolute right-[35px] top-1/2 h-[270px] w-[270px] -translate-y-1/2 rounded-full border border-[#7657E8]/30" />

          {/* Globe */}
          <div className="absolute right-[55px] top-1/2 h-[310px] w-[310px] -translate-y-1/2 overflow-hidden rounded-full bg-gradient-to-br from-[#102B4B] via-[#07111F] to-[#020812] shadow-[0_0_100px_rgba(22,119,255,0.3)]">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(45,140,255,0.25),transparent_45%)]" />

            <div className="absolute left-[20%] top-[35%] h-[2px] w-[65%] rotate-[18deg] bg-[#1677FF]/30" />

            <div className="absolute left-[10%] top-[55%] h-[1px] w-[80%] -rotate-[20deg] bg-[#7657E8]/30" />

          </div>

          {/* Floating words */}
          <div className="absolute right-0 top-24 space-y-2 text-xs uppercase tracking-[0.25em] text-slate-400">
            <p>Ideas</p>
            <p>Technology</p>
            <p>People</p>
            <p>A Brighter</p>
            <p>Tomorrow</p>
          </div>

          <div className="absolute bottom-16 right-24">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Built
            </p>

            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-white">
              In the Lab
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductsHero;