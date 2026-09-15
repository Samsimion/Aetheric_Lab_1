import {
  CreditCard,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Truck,
  BriefcaseBusiness,
} from "lucide-react";

const IntegrationUseCases = () => {
  const cases = [
    {
      icon: <CreditCard size={20} />,
      title: "Payments",
      text: "Secure payment processing and reconciliation.",
    },
    {
      icon: <ShoppingCart size={20} />,
      title: "E-Commerce",
      text: "Connect stores, inventory and orders.",
    },
    {
      icon: <HeartPulse size={20} />,
      title: "Healthcare",
      text: "Link patient data and health systems.",
    },
    {
      icon: <GraduationCap size={20} />,
      title: "Education",
      text: "Integrate learning platforms and student systems.",
    },
    {
      icon: <Truck size={20} />,
      title: "Logistics",
      text: "Connect tracking, shipping and delivery services.",
    },
    {
      icon: <BriefcaseBusiness size={20} />,
      title: "Business Tools",
      text: "Unify your CRM, ERP, accounting and internal tools.",
    },
  ];

  return (
    <section className="bg-[#EEF6FF] py-20 lg:py-24">

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr]">

          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
                Use Cases
              </span>

            </div>


            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#0B1B34] sm:text-5xl">

              Real-world
              <br />

              integrations.
              <br />

              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                Real impact.
              </span>

            </h2>


            <p className="mt-5 max-w-md text-sm leading-6 text-[#60728B]">
              We build integrations for a wide range of
              industries and use cases.
            </p>

          </div>


          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {cases.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#D4E4F5] bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(11,27,52,0.06)]"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF6FF] text-[#1677FF]">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-sm font-semibold text-[#0B1B34]">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#71839C]">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default IntegrationUseCases;