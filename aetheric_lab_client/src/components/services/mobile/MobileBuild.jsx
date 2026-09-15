import {
  Building2,
  ShoppingBag,
  Users,
  Settings2,
  Globe2,
  Lightbulb,
} from "lucide-react";

const MobileBuild = () => {
  const services = [
    {
      icon: <Building2 size={22} />,
      title: "Business Apps",
      text: "Apps that help teams work, communicate and manage operations.",
    },
    {
      icon: <Users size={22} />,
      title: "Customer Apps",
      text: "Digital experiences that keep customers connected to your business.",
    },
    {
      icon: <ShoppingBag size={22} />,
      title: "E-Commerce Apps",
      text: "Mobile shopping experiences built for convenience and conversion.",
    },
    {
      icon: <Settings2 size={22} />,
      title: "Management Apps",
      text: "Put business information, workflows and tools into one mobile experience.",
    },
    {
      icon: <Globe2 size={22} />,
      title: "Community Apps",
      text: "Connect people, organizations, resources and services.",
    },
    {
      icon: <Lightbulb size={22} />,
      title: "Custom Mobile Products",
      text: "Have a product idea? We can take it from concept to working application.",
    },
  ];

  return (
    <section className="bg-[#F8FBFF] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#1677FF]" />

            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
              What We Build
            </span>
          </div>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#0B1B34] sm:text-5xl">
            Mobile experiences
            <br />
            built around your users.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#60728B]">
            From internal business tools to consumer-facing products,
            we build mobile experiences around the people who will
            actually use them.
          </p>
        </div>


        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-[#DCE6F1] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#BFD7F4] hover:shadow-[0_15px_40px_rgba(11,27,52,0.07)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF6FF] text-[#1677FF] transition group-hover:bg-[#1677FF] group-hover:text-white">
                {service.icon}
              </div>

              <h3 className="mt-6 text-lg font-semibold text-[#0B1B34]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#687B94]">
                {service.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default MobileBuild;