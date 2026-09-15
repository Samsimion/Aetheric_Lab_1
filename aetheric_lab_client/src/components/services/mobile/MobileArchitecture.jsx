import {
  Smartphone,
  Code2,
  Database,
  Link2,
  CheckCircle2,
  Server,
} from "lucide-react";

const MobileArchitecture = () => {
  const technologies = [
    {
      icon: <Smartphone size={20} />,
      title: "Mobile",
      text: "Android • Cross-platform • Responsive experiences",
    },
    {
      icon: <Code2 size={20} />,
      title: "Backend",
      text: "Python • Django • Flask • Node.js",
    },
    {
      icon: <Database size={20} />,
      title: "Database",
      text: "PostgreSQL • MySQL • MongoDB",
    },
    {
      icon: <Link2 size={20} />,
      title: "Integrations",
      text: "APIs • Payments • Messaging • Third-party services",
    },
  ];

  const benefits = [
    "Scalable architecture",
    "Secure infrastructure",
    "Ready for complex logic",
    "Integrates with your systems",
    "Supports future expansion",
  ];

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#1677FF]" />

            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
              From Interface To Infrastructure
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B1B34] sm:text-5xl">
            Engineered
            <br />
            for{" "}
            <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
              performance.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#60728B]">
            We build mobile applications with a solid technical
            foundation that ensures reliability, scalability and
            future growth.
          </p>
        </div>


        {/* Architecture */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Visual */}
          <div className="relative flex min-h-[350px] items-center justify-center">

            {/* Glow */}
            <div className="absolute h-64 w-64 rounded-full bg-[#1677FF]/10 blur-3xl" />

            {/* Layers */}
            <div className="relative w-[280px]">

              {/* Mobile */}
              <div className="relative z-40 mx-auto h-32 w-48 -rotate-6 rounded-2xl border-4 border-[#17283D] bg-[#07111F] p-4 shadow-2xl">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-bold text-white">
                    AETHERIC
                  </span>

                  <Smartphone
                    size={15}
                    className="text-[#5EA2FF]"
                  />
                </div>

                <div className="mt-5 h-2 w-20 rounded-full bg-[#1677FF]" />
                <div className="mt-2 h-2 w-28 rounded-full bg-white/10" />
              </div>


              {/* API */}
              <div className="relative z-30 mx-auto -mt-8 h-20 w-52 rounded-xl border border-[#BFD7F4] bg-[#EEF6FF] p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <Code2
                    size={18}
                    className="text-[#1677FF]"
                  />

                  <div>
                    <p className="text-[10px] font-semibold text-[#0B1B34]">
                      APIs & Services
                    </p>

                    <p className="mt-1 text-[8px] text-[#687B94]">
                      Connect your systems
                    </p>
                  </div>
                </div>
              </div>


              {/* Backend */}
              <div className="relative z-20 mx-auto -mt-7 h-20 w-56 rounded-xl border border-[#DCE6F1] bg-white p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <Server
                    size={18}
                    className="text-[#1677FF]"
                  />

                  <div>
                    <p className="text-[10px] font-semibold text-[#0B1B34]">
                      Backend
                    </p>

                    <p className="mt-1 text-[8px] text-[#687B94]">
                      Logic & infrastructure
                    </p>
                  </div>
                </div>
              </div>


              {/* Database */}
              <div className="relative z-10 mx-auto -mt-7 h-20 w-60 rounded-xl border border-[#DCE6F1] bg-[#F8FBFF] p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <Database
                    size={18}
                    className="text-[#1677FF]"
                  />

                  <div>
                    <p className="text-[10px] font-semibold text-[#0B1B34]">
                      Database
                    </p>

                    <p className="mt-1 text-[8px] text-[#687B94]">
                      Reliable data storage
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>


          {/* Technology + benefits */}
          <div className="grid gap-4 sm:grid-cols-2">

            <div className="space-y-3">
              {technologies.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#DCE6F1] bg-[#F8FBFF] p-4"
                >
                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEF6FF] text-[#1677FF]">
                      {item.icon}
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-[#0B1B34]">
                        {item.title}
                      </p>

                      <p className="mt-1 text-[9px] leading-4 text-[#687B94]">
                        {item.text}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>


            <div className="rounded-2xl bg-[#EEF6FF] p-6">

              <p className="text-sm font-semibold text-[#0B1B34]">
                Built to grow
                <br />
                with you.
              </p>

              <div className="mt-6 space-y-4">

                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2
                      size={15}
                      className="mt-0.5 shrink-0 text-[#1677FF]"
                    />

                    <span className="text-xs text-[#526784]">
                      {benefit}
                    </span>
                  </div>
                ))}

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default MobileArchitecture;