import Button from "../Button";

const HomeCTA = () => {
  return (
    <section className="bg-[#07111F] px-6 pb-16 pt-8">

      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-[#0D1B2E] px-8 py-16 lg:px-16">

        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#62A9FF]">
              Start Something New
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
              Have an idea?
              <br />
              Let's build it.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-slate-400">
              Whether you need a website, a business system, a
              mobile application or you're developing something
              entirely new — let's turn your idea into technology.
            </p>

            <div className="mt-8">
              <Button to="/contact">
                Start a Project
              </Button>
            </div>

          </div>

          <div className="hidden justify-end lg:flex">
            <div className="relative h-56 w-56 rounded-full border border-blue-400/20">
              <div className="absolute inset-8 rounded-full border border-blue-400/20" />
              <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1677FF] shadow-[0_0_50px_rgba(22,119,255,0.7)]" />
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default HomeCTA;