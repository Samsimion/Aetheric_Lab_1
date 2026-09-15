import {
  BarChart3,
  Code2,
  Link2,
  Pencil,
  Search,
} from "lucide-react";

const SolutionsProcess = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Understand",
      text: "We listen, investigate and define the real problem.",
    },
    {
      number: "02",
      icon: Pencil,
      title: "Design",
      text: "We turn ideas and requirements into a clear solution.",
    },
    {
      number: "03",
      icon: Code2,
      title: "Engineer",
      text: "We build with precision, quality and scalability in mind.",
    },
    {
      number: "04",
      icon: Link2,
      title: "Integrate",
      text: "We connect the solution with the systems you already use.",
    },
    {
      number: "05",
      icon: BarChart3,
      title: "Evolve",
      text: "We support, improve and scale as your needs change.",
    },
  ];

  return (
    <section className="bg-white text-[#0B1B34]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
              How We Solve
            </span>

            <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
              A proven process for{" "}
              <span className="text-[#1677FF]">real results.</span>
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-[#61738D]">
              We combine strategic thinking, technical expertise and close
              collaboration to deliver solutions that work in the real world.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 right-8 top-7 hidden h-px bg-[#D6E4F5] lg:block" />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map(({ number, icon: Icon, title, text }) => (
                <div key={number} className="relative">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#D6E4F5] bg-white text-[#1677FF] shadow-sm">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <span className="mt-5 block text-[10px] font-bold tracking-[0.2em] text-[#1677FF]">
                    {number}
                  </span>

                  <h3 className="mt-1 text-base font-semibold">{title}</h3>

                  <p className="mt-2 text-sm leading-5 text-[#6B7D95]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionsProcess;