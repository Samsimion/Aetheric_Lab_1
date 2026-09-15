import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router";

const MobileProducts = () => {
  const products = [
    {
      name: "Shuleni",
      category: "Education & Student Growth",
      description:
        "A connected education platform bringing students, teachers, parents and schools together.",
      tags: ["Students", "Teachers", "Parents", "Schools"],
      gradient: "from-[#0D4A3B] to-[#07111F]",
    },
    {
      name: "Spectrum Care Connect",
      category: "Community & Support",
      description:
        "A digital platform designed to connect communities with resources, support and organizations.",
      tags: ["Community", "Resources", "Support", "Organizations"],
      gradient: "from-[#54248A] to-[#15102A]",
    },
    {
      name: "Home Smart",
      category: "Smart Living",
      description:
        "A connected smart-living ecosystem bringing devices, automation and monitoring together.",
      tags: ["Devices", "Automation", "Monitoring", "Energy"],
      gradient: "from-[#102D45] to-[#07111F]",
    },
  ];

  return (
    <section className="bg-[#F8FBFF] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
                Aetheric Products
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B1B34] sm:text-5xl">
              Mobile experiences
              <br />
              we're building{" "}
              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                ourselves.
              </span>
            </h2>
          </div>

          <Link
            to="/products"
            className="group inline-flex items-center text-sm font-semibold text-[#1677FF]"
          >
            Explore Aetheric Products

            <ArrowRight
              size={17}
              className="ml-2 transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>


        <p className="mt-5 max-w-2xl text-base leading-7 text-[#60728B]">
          Explore some of the mobile applications we're developing
          to solve real-world challenges and create meaningful
          experiences.
        </p>


        <div className="mt-12 grid gap-5 lg:grid-cols-3">

          {products.map((product) => (
            <div
              key={product.name}
              className="overflow-hidden rounded-2xl border border-[#DCE6F1] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(11,27,52,0.08)]"
            >

              {/* Product visual */}
              <div
                className={`relative h-48 overflow-hidden bg-gradient-to-br ${product.gradient}`}
              >

                <div className="absolute left-1/2 top-7 h-40 w-48 -translate-x-1/2 rounded-[1.5rem] border-4 border-white/10 bg-[#07111F] p-3 shadow-2xl">

                  <div className="flex items-center justify-between">
                    <div className="h-2 w-12 rounded-full bg-white/20" />
                    <div className="h-4 w-4 rounded-full bg-white/10" />
                  </div>

                  <div className="mt-5 h-12 rounded-lg bg-white/5" />

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div className="h-7 rounded bg-white/5" />
                    <div className="h-7 rounded bg-white/5" />
                  </div>

                </div>

              </div>


              {/* Content */}
              <div className="p-6">

                <div className="flex items-start justify-between gap-4">

                  <div>
                    <p className="text-lg font-semibold text-[#0B1B34]">
                      {product.name}
                    </p>

                    <p className="mt-1 text-xs font-medium text-[#1677FF]">
                      {product.category}
                    </p>
                  </div>

                  <ExternalLink
                    size={16}
                    className="text-[#1677FF]"
                  />

                </div>

                <p className="mt-4 text-sm leading-6 text-[#687B94]">
                  {product.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">

                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#EEF4FA] px-2.5 py-1 text-[9px] font-medium text-[#526784]"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default MobileProducts;