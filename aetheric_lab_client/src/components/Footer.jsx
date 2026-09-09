import { Link } from "react-router";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

import { ArrowUpRight } from "lucide-react";

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#07111F] text-white">

      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">

        <div className="border-t border-white/10 pt-14">

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}
            <div className="lg:col-span-2">

              <Link to="/">
                <img
                  src={logo}
                  alt="Aetheric Labs"
                  className="h-14 w-auto"
                />
              </Link>

              <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
                Technology. Innovation. Impact.
                <br />
                Building digital solutions for today while creating
                products for tomorrow.
              </p>

              <div className="mt-7 flex gap-3">

                <a
                  href="#"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-[#1677FF] hover:text-white"
                >
                  <FaGithub size={17} />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-[#1677FF] hover:text-white"
                >
                  <FaLinkedinIn size={16} />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-[#1677FF] hover:text-white"
                >
                  <FaInstagram size={17} />
                </a>

                <a
                  href="#"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-[#1677FF] hover:text-white"
                >
                  <FaYoutube size={17} />
                </a>

              </div>

            </div>

            {/* Company */}
            <div>

              <h3 className="text-sm font-semibold text-white">
                Company
              </h3>

              <div className="mt-5 space-y-3">

                <Link
                  to="/about"
                  className="block text-sm text-slate-400 hover:text-white"
                >
                  About
                </Link>

                <Link
                  to="/portfolio"
                  className="block text-sm text-slate-400 hover:text-white"
                >
                  Our Work
                </Link>

                <Link
                  to="/insights"
                  className="block text-sm text-slate-400 hover:text-white"
                >
                  Insights
                </Link>

              </div>

            </div>

            {/* Services */}
            <div>

              <h3 className="text-sm font-semibold text-white">
                Services
              </h3>

              <div className="mt-5 space-y-3">

                <Link
                  to="/services"
                  className="block text-sm text-slate-400 hover:text-white"
                >
                  Websites
                </Link>

                <Link
                  to="/services"
                  className="block text-sm text-slate-400 hover:text-white"
                >
                  Web Applications
                </Link>

                <Link
                  to="/services"
                  className="block text-sm text-slate-400 hover:text-white"
                >
                  Mobile Applications
                </Link>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">

          <p>
            © {new Date().getFullYear()} Aetheric Labs. All rights reserved.
          </p>

          <div className="flex gap-5">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <Link
              to="/contact"
              className="flex items-center gap-1 hover:text-white"
            >
              Contact
              <ArrowUpRight size={12} />
            </Link>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;