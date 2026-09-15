import {
  Bot,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Smartphone,
} from "lucide-react";

const SolutionsTechnology = () => {
  const technologies = [
    {
      icon: Code2,
      title: "Web",
      text: "Modern, high-performing web platforms.",
    },
    {
      icon: Smartphone,
      title: "Mobile",
      text: "Native and cross-platform applications.",
    },
    {
      icon: Cloud,
      title: "Cloud",
      text: "Scalable and reliable infrastructure.",
    },
    {
      icon: GitBranch,
      title: "APIs & Integrations",
      text: "Connected systems and services.",
    },
    {
      icon: Database,
      title: "Data",
      text: "Information turned into insights.",
    },
    {
      icon: Bot,
      title: "AI & Automation",
      text: "Intelligent solutions for greater efficiency.",
    },
  ];

  return (
    <section className="bg-white text-[#0B1B34]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
            Technology Behind The Solutions
          </span>

          <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
            The right technology.
            <br />
            For the right{" "}
            <span className="text-[#1677FF]">problem.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[#61738D]">
            We combine the technologies and engineering practices needed to
            build solutions that are reliable, scalable and ready for the
            future.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {technologies.map(({ icon: Icon, title, text }) => (
            <div key={title}>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF6FF] text-[#1677FF]">
                <Icon size={23} strokeWidth={1.7} />
              </div>

              <h3 className="mt-5 text-sm font-semibold">{title}</h3>

              <p className="mt-2 text-xs leading-5 text-[#6B7D95]">
                {text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionsTechnology;