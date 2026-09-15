import {
  Quote,
  BarChart3,
  Clock3,
  ShieldCheck,
} from "lucide-react";

const BusinessResults = () => {
  return (
    <section className="relative overflow-hidden bg-[#EEF6FF] py-16 lg:py-20">

      <div className="pointer-events-none absolute -left-32 bottom-[-180px] h-[350px] w-[350px] rounded-full border border-[#C8DDF6]" />

      <div className="pointer-events-none absolute right-[-100px] top-[-150px] h-[350px] w-[350px] rounded-full border border-[#C8DDF6]" />


      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.5fr_0.7fr]">

          {/* QUOTE */}
          <div className="border-r border-[#C8DDF6] pr-8">

            <Quote
              size={35}
              className="text-[#1677FF]"
            />

            <p className="mt-4 text-sm leading-6 text-[#425875]">
              Aetheric transformed the way we operate.
              Our new system has made our processes faster,
              more organized and easier to manage.
            </p>

            <p className="mt-5 text-xs font-semibold text-[#0B1B34]">
              — Business Owner
            </p>

            <p className="mt-1 text-[10px] text-[#71839C]">
              Retail Industry
            </p>

          </div>


          {/* METRICS */}
          <div className="grid gap-3 sm:grid-cols-3">

            <Metric
              icon={<BarChart3 size={20} />}
              value="40%"
              label="Increase in Efficiency"
            />

            <Metric
              icon={<Clock3 size={20} />}
              value="60%"
              label="Reduction in Manual Work"
            />

            <Metric
              icon={<ShieldCheck size={20} />}
              value="99.9%"
              label="System Uptime"
            />

          </div>


          {/* STATEMENT */}
          <div className="border-l border-[#C8DDF6] pl-8">

            <p className="text-2xl font-semibold leading-tight text-[#0B1B34]">
              Real businesses.
              <br />

              <span className="text-[#1677FF]">
                Real results.
              </span>
            </p>

            <div className="mt-5 h-px w-10 bg-[#1677FF]" />

          </div>

        </div>

      </div>

    </section>
  );
};


const Metric = ({ icon, value, label }) => {
  return (
    <div className="rounded-xl border border-[#D6E5F5] bg-white p-5">

      <div className="text-[#1677FF]">
        {icon}
      </div>

      <p className="mt-4 text-2xl font-semibold tracking-tight text-[#0B1B34]">
        {value}
      </p>

      <p className="mt-1 text-[9px] leading-4 text-[#71839C]">
        {label}
      </p>

    </div>
  );
};

export default BusinessResults;