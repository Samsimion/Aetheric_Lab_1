import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const HomeCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8FBFF] text-[#0B1B34]">
      {/* Subtle visual continuation */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[35%] opacity-50">
        <div className="absolute right-[-120px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-[#C9DDF7]" />
        <div className="absolute right-[-40px] top-1/2 h-[260px] w-[260px] -translate-y-1/2 rounded-full border border-[#D9E7F7]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-16">

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Text */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
                Have an idea?
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                build it.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#526784]">
              Whether you&apos;re starting a new project, improving an
              existing system, or exploring something different — we&apos;d
              love to hear what you&apos;re building.
            </p>
          </div>

          {/* Action */}
          <div className="relative flex flex-col items-start lg:items-end">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#1677FF] to-[#7657E8] px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(22,119,255,0.20)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(22,119,255,0.28)]"
            >
              Start a Project

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <p className="mt-4 text-sm text-[#71839C]">
              Let&apos;s turn your ideas into real solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;


// import Button from "../Button";

// const HomeCTA = () => {
//   return (
//     <section className="bg-[#07111F] px-6 pb-16 pt-8">

//       <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-[#0D1B2E] px-8 py-16 lg:px-16">

//         <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">

//           <div>

//             <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#62A9FF]">
//               Start Something New
//             </p>

//             <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
//               Have an idea?
//               <br />
//               Let's build it.
//             </h2>

//             <p className="mt-5 max-w-2xl leading-7 text-slate-400">
//               Whether you need a website, a business system, a
//               mobile application or you're developing something
//               entirely new — let's turn your idea into technology.
//             </p>

//             <div className="mt-8">
//               <Button to="/contact">
//                 Start a Project
//               </Button>
//             </div>

//           </div>

//           <div className="hidden justify-end lg:flex">
//             <div className="relative h-56 w-56 rounded-full border border-blue-400/20">
//               <div className="absolute inset-8 rounded-full border border-blue-400/20" />
//               <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1677FF] shadow-[0_0_50px_rgba(22,119,255,0.7)]" />
//             </div>
//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default HomeCTA;