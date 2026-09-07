import React from "react";
import {logo}  from '../assets'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/10 bg-[#07111F]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Aetheric Labs"
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#services"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Services
          </a>

          <a
            href="#products"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Products
          </a>

          <a
            href="#company"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Company
          </a>

          <a
            href="#insights"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Insights
          </a>

        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden rounded-full bg-[#1677FF] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#0f63d4] md:block"
        >
          Let's Work Together →
        </a>

        {/* Mobile Menu */}
        <button
          className="text-2xl text-white md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>

      </div>
    </nav>
  );
};

export default Navbar;