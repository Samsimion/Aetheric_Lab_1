import {
  ShoppingCart,
  GraduationCap,
  HeartPulse,
  Factory,
  Hotel,
  BriefcaseBusiness,
} from "lucide-react";

const BusinessIndustries = () => {
  const industries = [
    {
      icon: <ShoppingCart size={21} />,
      title: "Retail",
      text: "Shops & Stores",
    },
    {
      icon: <GraduationCap size={21} />,
      title: "Education",
      text: "Schools & Institutions",
    },
    {
      icon: <HeartPulse size={21} />,
      title: "Healthcare",
      text: "Clinics & Hospitals",
    },
    {
      icon: <Factory size={21} />,
      title: "Manufacturing",
      text: "Production & Supply",
    },
    {
      icon: <Hotel size={21} />,
      title: "Hospitality",
      text: "Hotels & Restaurants",
    },
    {
      icon: <BriefcaseBusiness size={21} />,
      title: "Professional Services",
      text: "Agencies & Firms",
    },
  ];

  return (
    <section className="bg-[#F8FBFF] py-20 lg:py-24">

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="mb-12 max-w-xl">

          <div className="mb-5 flex items-center gap-3">

            <span className="h-px w-10 bg-[#1677FF]" />

            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
              Built For Real Businesses
            </span>

          </div>


          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#0B1B34] sm:text-5xl">

            Solutions across{" "}

            <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
              industries.
            </span>

          </h2>


          <p className="mt-5 text-base leading-7 text-[#60728B]">
            We build business systems for a wide range of
            industries and organizations.
          </p>

        </div>


        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">

          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group flex flex-col items-center rounded-2xl border border-[#DCE6F1] bg-white px-4 py-7 text-center transition hover:-translate-y-1 hover:border-[#BFD7F4] hover:shadow-[0_12px_30px_rgba(11,27,52,0.05)]"
            >

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF6FF] text-[#1677FF] transition group-hover:bg-[#1677FF] group-hover:text-white">
                {industry.icon}
              </div>

              <h3 className="mt-4 text-sm font-semibold text-[#0B1B34]">
                {industry.title}
              </h3>

              <p className="mt-1 text-[10px] text-[#71839C]">
                {industry.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default BusinessIndustries;