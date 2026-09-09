import { ArrowRight } from "lucide-react";
import { processSteps } from "../../data/homeData";

const ProcessPreview = () => {
  return (
    <section className="bg-[#EEF4FA] py-20">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[0.65fr_2fr] lg:items-center">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#1677FF]">
              How We Work
            </p>

            <h2 className="mt-3 text-4xl font-bold leading-tight text-[#0B1B34]">
              From idea
              <br />
              to reality.
            </h2>

            <p className="mt-5 max-w-md leading-7 text-slate-600">
              A clear and collaborative process designed to ensure
              every project is delivered with quality and care.
            </p>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">

            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 bg-white text-xs font-bold text-[#1677FF]">
                  {step.number}
                </div>

                <h3 className="mt-5 text-sm font-bold text-[#0B1B34]">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {step.description}
                </p>

                {index !== processSteps.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="absolute right-0 top-3 hidden text-slate-300 lg:block"
                  />
                )}

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProcessPreview;