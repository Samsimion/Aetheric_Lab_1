const MobileStatement = () => {
  return (
    <section className="relative overflow-hidden bg-[#EEF4FA] py-20 lg:py-24">
      <div className="pointer-events-none absolute right-[-120px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-[#C9DDF7]" />

      <div className="pointer-events-none absolute right-[-40px] top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full border border-[#D8E7F6]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center sm:px-8">

        <div className="mx-auto mb-6 flex w-fit items-center gap-3">
          <span className="h-px w-10 bg-[#1677FF]" />

          <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
            The Aetheric Approach
          </span>

          <span className="h-px w-10 bg-[#1677FF]" />
        </div>

        <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#0B1B34] sm:text-6xl">
          Designed for humans.
          <br />
          <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
            Engineered for scale.
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#60728B] sm:text-lg">
          Your users shouldn't have to think about the technology
          behind the experience. They should simply enjoy using it.
        </p>

      </div>
    </section>
  );
};

export default MobileStatement;