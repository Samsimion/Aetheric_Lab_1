import { Code2, Lightbulb, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const principles = [
  {
    title: "Build",
    text: "We create digital solutions for businesses and organizations.",
    icon: Code2,
  },
  {
    title: "Innovate",
    text: "We develop our own technology products.",
    icon: Lightbulb,
  },
  {
    title: "Impact",
    text: "We use technology to solve meaningful problems.",
    icon: Target,
  },
];

const AboutPreview = () => {
  return (
    <section className="relative bg-white py-24">

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.7fr] lg:px-8">

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#1677FF]">
            About Aetheric
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0B1B34]">
            Technology
            <br />
            with purpose.
          </h2>

          <p className="mt-6 max-w-md leading-7 text-slate-600">
            Aetheric Labs is a technology company focused on
            creating meaningful digital solutions for businesses
            and developing innovative products that solve
            real-world problems.
          </p>

          <Link
            to="/about"
            className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#1677FF]"
          >
            Learn More About Us
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">

          {principles.map(({ title, text, icon: Icon }) => (
            <div
              key={title}
              className="border-l border-slate-200 pl-7"
            >

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-[#1677FF]">
                <Icon size={22} strokeWidth={1.7} />
              </div>

              <h3 className="text-xl font-bold text-[#0B1B34]">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default AboutPreview;