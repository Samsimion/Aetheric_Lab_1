import {
  Search,
  Pencil,
  Settings2,
} from "lucide-react";

const ServicesIntro = () => {
  return (
    <section className="bg-[#F8FBFF]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.25fr]">

          <div>
            <SectionLabel text="Beyond Software" />

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B1B34] sm:text-5xl">
              Technology should{" "}
              <span className="text-[#1677FF]">
                solve something.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#526784]">
              Every project begins with a problem, an opportunity, or an idea.
              We combine strategy, design and engineering to create technology
              that has a purpose — not simply software that exists.
            </p>
          </div>


          <div className="grid gap-0 border-y border-[#D8E3F0] sm:grid-cols-3">

            <Principle
              number="01"
              icon={<Search size={25} />}
              title="Understand"
              text="We learn the problem before building the solution."
            />

            <Principle
              number="02"
              icon={<Pencil size={25} />}
              title="Design"
              text="We create experiences that are intuitive and purposeful."
            />

            <Principle
              number="03"
              icon={<Settings2 size={25} />}
              title="Engineer"
              text="We build reliable technology that can grow with you."
            />

          </div>

        </div>
      </div>
    </section>
  );
};


const SectionLabel = ({ text }) => (
  <div className="flex items-center gap-3">
    <span className="h-px w-10 bg-[#1677FF]" />

    <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
      {text}
    </span>
  </div>
);


const Principle = ({ number, icon, title, text }) => (
  <div className="border-r border-[#D8E3F0] px-6 py-8 first:pl-0 last:border-r-0">
    <div className="flex items-center gap-3">
      <div className="text-[#1677FF]">
        {icon}
      </div>

      <span className="text-xl font-semibold text-[#8799B2]">
        {number}
      </span>
    </div>

    <h3 className="mt-4 text-sm font-semibold text-[#0B1B34]">
      {title}
    </h3>

    <p className="mt-2 text-xs leading-5 text-[#657891]">
      {text}
    </p>
  </div>
);


export default ServicesIntro;