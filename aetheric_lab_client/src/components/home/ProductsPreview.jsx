import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

import ProductCard from "../cards/ProductCard";
import { products } from "../../data/homeData";

const ProductsPreview = () => {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-white py-24"
    >

      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.7fr] lg:items-center">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#1677FF]">
              Our Products
            </p>

            <h2 className="mt-3 text-4xl font-bold leading-tight text-[#0B1B34]">
              We're not just
              <br />
              building for today.
            </h2>

            <p className="mt-5 max-w-md leading-7 text-slate-600">
              We're building products of our own — technology
              designed to solve meaningful problems at scale.
            </p>

            <Link
              to="/products"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#1677FF]"
            >
              Explore Our Products
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

          </div>

          <div className="grid gap-5 md:grid-cols-3">

            {products.map((product) => (
              <ProductCard
                key={product.title}
                {...product}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProductsPreview;