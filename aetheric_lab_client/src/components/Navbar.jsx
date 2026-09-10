import { useState } from "react";
import { Link } from "react-router";

import {
  ChevronDown,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07111F]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* LOGO */}
        <Link
          to="/"
          className="shrink-0"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src={logo}
            alt="Aetheric Labs"
            className="h-12 w-auto"
          />
        </Link>


        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="hidden items-center gap-8 md:flex">

          {/* SERVICES */}
          <div className="group relative">
            <button
              className="flex items-center gap-1.5 text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Services
              <ChevronDown
                size={15}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </button>

            <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 translate-y-3 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

              <div className="rounded-2xl border border-white/10 bg-[#0D1B2E] p-3 shadow-2xl shadow-black/30">

                <Link
                  to="/services"
                  className="mb-2 block rounded-xl bg-white/5 px-4 py-3"
                >
                  <p className="text-sm font-semibold text-white">
                    Aetheric Digital Solutions
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Everything we build for businesses.
                  </p>
                </Link>

                <DropdownLink to="/services/websites">
                  Websites
                </DropdownLink>

                <DropdownLink to="/services/web-applications">
                  Web Applications
                </DropdownLink>

                <DropdownLink to="/services/mobile-applications">
                  Mobile Applications
                </DropdownLink>

                <DropdownLink to="/services/business-systems">
                  Business Systems
                </DropdownLink>

                <DropdownLink to="/services/ui-ux">
                  UI/UX Design
                </DropdownLink>

                <DropdownLink to="/services/apis-integrations">
                  APIs & Integrations
                </DropdownLink>

                <DropdownLink to="/services/maintenance-support">
                  Maintenance & Support
                </DropdownLink>

                <Link
                  to="/pricing"
                  className="mt-2 flex items-center justify-between border-t border-white/10 px-4 pt-3 text-sm font-medium text-[#5EA2FF] transition hover:text-white"
                >
                  Pricing & Packages
                  <ArrowUpRight size={15} />
                </Link>

              </div>
            </div>
          </div>


          {/* SOLUTIONS */}
          <div className="group relative">
            <button
              className="flex items-center gap-1.5 text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Solutions
              <ChevronDown
                size={15}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </button>

            <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-3 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

              <div className="rounded-2xl border border-white/10 bg-[#0D1B2E] p-3 shadow-2xl shadow-black/30">

                <DropdownLink to="/solutions">
                  All Solutions
                </DropdownLink>

                <DropdownLink to="/solutions/businesses">
                  For Businesses
                </DropdownLink>

                <DropdownLink to="/solutions/education">
                  For Education
                </DropdownLink>

                <DropdownLink to="/solutions/organizations">
                  For Organizations
                </DropdownLink>

                <DropdownLink to="/solutions/custom">
                  Custom Solutions
                </DropdownLink>

              </div>
            </div>
          </div>


          {/* PRODUCTS */}
          <div className="group relative">
            <button
              className="flex items-center gap-1.5 text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Products
              <ChevronDown
                size={15}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </button>

            <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 translate-y-3 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

              <div className="rounded-2xl border border-white/10 bg-[#0D1B2E] p-3 shadow-2xl shadow-black/30">

                <Link
                  to="/products"
                  className="mb-2 block rounded-xl bg-white/5 px-4 py-3"
                >
                  <p className="text-sm font-semibold text-white">
                    Aetheric Products
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Technology we are building ourselves.
                  </p>
                </Link>

                <DropdownLink to="/products/shuleni">
                  Shuleni
                </DropdownLink>

                <DropdownLink to="/products/spectrum-care-connect">
                  Spectrum Care Connect
                </DropdownLink>

                <DropdownLink to="/products/home-smart-system">
                  Home Smart System
                </DropdownLink>

                <DropdownLink to="/products/future">
                  Future Products
                </DropdownLink>

              </div>
            </div>
          </div>


          {/* COMPANY */}
          <div className="group relative">
            <button
              className="flex items-center gap-1.5 text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Company
              <ChevronDown
                size={15}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </button>

            <div className="invisible absolute left-1/2 top-full w-60 -translate-x-1/2 translate-y-3 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

              <div className="rounded-2xl border border-white/10 bg-[#0D1B2E] p-3 shadow-2xl shadow-black/30">

                <DropdownLink to="/about">
                  About Aetheric
                </DropdownLink>

                <DropdownLink to="/portfolio">
                  Our Work
                </DropdownLink>

                <DropdownLink to="/how-we-work">
                  How We Work
                </DropdownLink>

                <DropdownLink to="/careers">
                  Careers
                </DropdownLink>

              </div>
            </div>
          </div>


          {/* INSIGHTS */}
          <Link
            to="/insights"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Insights
          </Link>

        </div>


        {/* ================= DESKTOP CTA ================= */}
        <Link
          to="/contact"
          className="hidden items-center rounded-full bg-[#1677FF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-[#0F63D4] md:inline-flex"
        >
          Let's Work Together
          <ArrowUpRight size={16} className="ml-2" />
        </Link>


        {/* ================= MOBILE BUTTON ================= */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={27} /> : <Menu size={27} />}
        </button>

      </nav>


      {/* ================= MOBILE NAVIGATION ================= */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#07111F] md:hidden">

          <div className="max-h-[calc(100vh-80px)] overflow-y-auto px-6 py-6">

            {/* SERVICES */}
            <MobileDropdown
              title="Services"
              open={openDropdown === "services"}
              onClick={() => toggleDropdown("services")}
            >
              <MobileLink to="/services">Aetheric Digital Solutions</MobileLink>
              <MobileLink to="/services/websites">Websites</MobileLink>
              <MobileLink to="/services/web-applications">
                Web Applications
              </MobileLink>
              <MobileLink to="/services/mobile-applications">
                Mobile Applications
              </MobileLink>
              <MobileLink to="/services/business-systems">
                Business Systems
              </MobileLink>
              <MobileLink to="/services/ui-ux">UI/UX Design</MobileLink>
              <MobileLink to="/services/apis-integrations">
                APIs & Integrations
              </MobileLink>
              <MobileLink to="/services/maintenance-support">
                Maintenance & Support
              </MobileLink>
              <MobileLink to="/pricing">Pricing & Packages</MobileLink>
            </MobileDropdown>


            {/* SOLUTIONS */}
            <MobileDropdown
              title="Solutions"
              open={openDropdown === "solutions"}
              onClick={() => toggleDropdown("solutions")}
            >
              <MobileLink to="/solutions">All Solutions</MobileLink>
              <MobileLink to="/solutions/businesses">
                For Businesses
              </MobileLink>
              <MobileLink to="/solutions/education">
                For Education
              </MobileLink>
              <MobileLink to="/solutions/organizations">
                For Organizations
              </MobileLink>
              <MobileLink to="/solutions/custom">
                Custom Solutions
              </MobileLink>
            </MobileDropdown>


            {/* PRODUCTS */}
            <MobileDropdown
              title="Products"
              open={openDropdown === "products"}
              onClick={() => toggleDropdown("products")}
            >
              <MobileLink to="/products">All Products</MobileLink>
              <MobileLink to="/products/shuleni">Shuleni</MobileLink>
              <MobileLink to="/products/spectrum-care-connect">
                Spectrum Care Connect
              </MobileLink>
              <MobileLink to="/products/home-smart-system">
                Home Smart System
              </MobileLink>
              <MobileLink to="/products/future">
                Future Products
              </MobileLink>
            </MobileDropdown>


            {/* COMPANY */}
            <MobileDropdown
              title="Company"
              open={openDropdown === "company"}
              onClick={() => toggleDropdown("company")}
            >
              <MobileLink to="/about">About Aetheric</MobileLink>
              <MobileLink to="/portfolio">Our Work</MobileLink>
              <MobileLink to="/how-we-work">How We Work</MobileLink>
              <MobileLink to="/careers">Careers</MobileLink>
            </MobileDropdown>


            {/* INSIGHTS */}
            <Link
              to="/insights"
              onClick={() => setMobileOpen(false)}
              className="block border-b border-white/10 py-4 text-sm font-medium text-slate-200"
            >
              Insights
            </Link>


            {/* CTA */}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 flex items-center justify-center rounded-full bg-[#1677FF] px-6 py-3.5 text-sm font-semibold text-white"
            >
              Let's Work Together
              <ArrowUpRight size={16} className="ml-2" />
            </Link>

          </div>
        </div>
      )}
    </header>
  );
};


/* =========================================================
   DESKTOP DROPDOWN LINK
========================================================= */

const DropdownLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="block rounded-lg px-4 py-2.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
    >
      {children}
    </Link>
  );
};


/* =========================================================
   MOBILE DROPDOWN
========================================================= */

const MobileDropdown = ({ title, open, onClick, children }) => {
  return (
    <div className="border-b border-white/10">

      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-4 text-sm font-medium text-slate-200"
      >
        {title}

        <ChevronDown
          size={17}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="pb-3 pl-4">
          {children}
        </div>
      )}

    </div>
  );
};


/* =========================================================
   MOBILE LINK
========================================================= */

const MobileLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="block py-2.5 text-sm text-slate-400 transition hover:text-white"
    >
      {children}
    </Link>
  );
};


export default Navbar;
