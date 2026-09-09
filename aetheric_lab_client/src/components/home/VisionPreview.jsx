import {
  Lightbulb,
  Target,
  Heart,
} from "lucide-react";

const VisionPreview = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8FBFF] text-[#0B1B34]">
      {/* Soft transition from previous section */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#EEF4FA] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-20 lg:pt-32">

        {/* Main Vision */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* Text */}
          <div>
            <div className="flex items-center gap-4">
  <span className="h-px w-14 bg-gradient-to-r from-blue-600 via-blue-500/70 to-transparent"></span>

  <span className="text-xs font-semibold tracking-[0.3em] text-blue-600">
    OUR VISION
  </span>
</div>

            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Technology should
              <br />
              do{" "}
              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                more than exist.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#526784] sm:text-lg">
              We envision a future where technology expands human potential,
              connects communities, and creates opportunities.
            </p>

            {/* Vision principles */}
            <div className="mt-10 grid max-w-2xl grid-cols-3 border-t border-[#D8E3F0] pt-7">
              <div className="border-r border-[#D8E3F0] pr-5">
                <Lightbulb
                  size={23}
                  strokeWidth={1.8}
                  className="text-[#1677FF]"
                />

                <h3 className="mt-4 text-sm font-semibold text-[#0B1B34] sm:text-base">
                  Innovation
                </h3>

                <p className="mt-1 text-xs leading-5 text-[#6B7D95] sm:text-sm">
                  New possibilities.
                </p>
              </div>

              <div className="border-r border-[#D8E3F0] px-5">
                <Target
                  size={23}
                  strokeWidth={1.8}
                  className="text-[#1677FF]"
                />

                <h3 className="mt-4 text-sm font-semibold text-[#0B1B34] sm:text-base">
                  Purpose
                </h3>

                <p className="mt-1 text-xs leading-5 text-[#6B7D95] sm:text-sm">
                  Real outcomes.
                </p>
              </div>

              <div className="pl-5">
                <Heart
                  size={23}
                  strokeWidth={1.8}
                  className="text-[#1677FF]"
                />

                <h3 className="mt-4 text-sm font-semibold text-[#0B1B34] sm:text-base">
                  Impact
                </h3>

                <p className="mt-1 text-xs leading-5 text-[#6B7D95] sm:text-sm">
                  Better communities.
                </p>
              </div>
            </div>
          </div>

          {/* Architectural image */}
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] lg:min-h-[440px]">
            <img
              src="https://images.pexels.com/photos/35528877/pexels-photo-35528877.jpeg?cs=srgb&dl=pexels-glenn-deblaere-2157946351-35528877.jpg&fm=jpg"
              alt="Modern geometric glass architecture"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Fade image into page */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F8FBFF] via-transparent to-transparent lg:w-1/3" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B34]/35 via-transparent to-transparent" />

            {/* Small statement */}
            <div className="absolute bottom-7 left-7 max-w-[170px] border-l border-white/70 pl-4 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                Aetheric Labs
              </p>

              <p className="mt-2 text-sm font-medium leading-6">
                A brighter tomorrow is built today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionPreview;




// import { Sparkles, Target, Heart } from "lucide-react";

// const VisionPreview = () => {
//   return (
//     <section className="relative overflow-hidden bg-[#07111F] py-24">

//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(22,119,255,0.15),transparent_35%)]" />

//       <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

//         <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr_0.8fr] lg:items-center">

//           <div>

//             <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#62A9FF]">
//               Our Vision
//             </p>

//             <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
//               Technology should do more
//               <br />
//               than exist.
//             </h2>

//           </div>

//           <div className="border-l border-white/10 pl-8">

//             <p className="text-base leading-8 text-slate-300">
//               We envision a future where technology doesn't simply
//               automate tasks, but expands human potential, connects
//               communities and creates opportunities.
//             </p>

//           </div>

//           <div className="grid grid-cols-3 gap-5">

//             <div className="text-center">
//               <Sparkles className="mx-auto text-[#62A9FF]" size={23} />
//               <p className="mt-3 text-xs font-semibold text-white">
//                 Innovation
//               </p>
//             </div>

//             <div className="text-center">
//               <Target className="mx-auto text-[#62A9FF]" size={23} />
//               <p className="mt-3 text-xs font-semibold text-white">
//                 Purpose
//               </p>
//             </div>

//             <div className="text-center">
//               <Heart className="mx-auto text-[#62A9FF]" size={23} />
//               <p className="mt-3 text-xs font-semibold text-white">
//                 Impact
//               </p>
//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default VisionPreview;