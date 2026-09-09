
import { Link } from "react-router";

import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07111F]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img
            src={logo}
            alt="Aetheric Labs"
            className="h-12 w-auto"
          />
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-9 md:flex">

          <Link
            to="/services"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Services
          </Link>

          <Link
            to="/products"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Products
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Company
          </Link>

          <Link
            to="/insights"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Insights
          </Link>

        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden rounded-full bg-[#1677FF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-[#0F63D4] md:block"
        >
          Let's Work Together
          <span className="ml-2">→</span>
        </Link>

        {/* Mobile button */}
        <button
          className="text-2xl text-white md:hidden"
          aria-label="Open navigation"
        >
          ☰
        </button>

      </nav>
    </header>
  );
};

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";

// const Navbar = () => {
//   return (
//     <header className="relative z-50 border-b border-white/10 bg-[#06101f]/90 backdrop-blur-md">
//       <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-10">

//         {/* LOGO */}
//         <Link to="/" className="flex items-center">
//           <img
//             src={logo}
//             alt="Aetheric Labs"
//             className="h-12 w-auto"
//           />
//         </Link>


//         {/* DESKTOP NAV */}
//         <div className="hidden items-center gap-9 md:flex">

//           <Link
//             to="/services"
//             className="text-sm text-slate-200 transition hover:text-cyan-400"
//           >
//             Services
//           </Link>

//           <Link
//             to="/products"
//             className="text-sm text-slate-200 transition hover:text-cyan-400"
//           >
//             Products
//           </Link>

//           <Link
//             to="/about"
//             className="text-sm text-slate-200 transition hover:text-cyan-400"
//           >
//             Company
//           </Link>

//           <Link
//             to="/insights"
//             className="text-sm text-slate-200 transition hover:text-cyan-400"
//           >
//             Insights
//           </Link>

//         </div>


//         {/* CTA */}
//         <Link
//           to="/contact"
//           className="
//             hidden
//             rounded-full
//             bg-gradient-to-r
//             from-cyan-500
//             to-purple-500
//             px-6
//             py-2.5
//             text-sm
//             font-semibold
//             text-white
//             transition
//             hover:-translate-y-0.5
//             md:inline-flex
//           "
//         >
//           Let's Work Together
//           <span className="ml-2">→</span>
//         </Link>


//         {/* MOBILE MENU */}
//         <button
//           className="text-2xl text-white md:hidden"
//           aria-label="Open menu"
//         >
//           ☰
//         </button>

//       </nav>
//     </header>
//   );
// };

// export default Navbar;
