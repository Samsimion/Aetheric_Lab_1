import {
  LockKeyhole,
  ShieldCheck,
  Activity,
  Server,
  BadgeCheck,
} from "lucide-react";

const IntegrationSecurity = () => {
  const features = [
    {
      icon: <LockKeyhole size={20} />,
      title: "Secure Authentication",
      text: "OAuth, API keys, JWT and more.",
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Data Protection",
      text: "Encrypted data in transit and at rest.",
    },
    {
      icon: <Activity size={20} />,
      title: "Monitoring & Alerts",
      text: "Proactive monitoring and issue detection.",
    },
    {
      icon: <Server size={20} />,
      title: "High Availability",
      text: "Reliable, scalable infrastructure.",
    },
    {
      icon: <BadgeCheck size={20} />,
      title: "Compliance Ready",
      text: "Aligned with applicable industry standards.",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-20">

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">

          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
                Security & Reliability
              </span>

            </div>


            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#0B1B34] sm:text-5xl">

              Built for trust
              <br />

              and{" "}

              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                performance.
              </span>

            </h2>


            <p className="mt-5 max-w-md text-sm leading-6 text-[#60728B]">
              Security and reliability are at the core of
              everything we build.
            </p>

          </div>


          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center lg:text-left"
              >

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF6FF] text-[#1677FF] lg:mx-0">
                  {feature.icon}
                </div>


                <h3 className="mt-4 text-sm font-semibold text-[#0B1B34]">
                  {feature.title}
                </h3>


                <p className="mt-2 text-[10px] leading-5 text-[#71839C]">
                  {feature.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default IntegrationSecurity;