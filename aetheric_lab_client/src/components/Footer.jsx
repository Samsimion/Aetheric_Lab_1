import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#07111F] text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Footer grid */}
        <div className="grid gap-12 py-14 md:grid-cols-[1.35fr_0.8fr_0.9fr_1fr] lg:gap-16 lg:py-16">
          
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center">
              <img
                src="/src/assets/logo.png"
                alt="Aetheric Labs"
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 text-sm font-medium text-[#70A9FF]">
              Technology. Innovation. Impact.
            </p>

            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
              Engineered digital solutions for modern enterprises and forward-thinking technology products built to scale.
            </p>

            {/* Socials */}
            <div className="mt-6 flex gap-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-[#1677FF] hover:text-white"
              >
                <FaLinkedinIn size={15} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-[#1677FF] hover:text-white"
              >
                <FaGithub size={15} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-[#1677FF] hover:text-white"
              >
                <FaInstagram size={15} />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-[#1677FF] hover:text-white"
              >
                <FaYoutube size={15} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Company
            </h3>

            <nav className="mt-5 space-y-3">
              <Link
                to="/about"
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                About Us
              </Link>

              <Link
                to="/portfolio"
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                Our Work
              </Link>

              <Link
                to="/insights"
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                Insights
              </Link>

              <Link
                to="/careers"
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                Careers
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Services
            </h3>

            <nav className="mt-5 space-y-3">
              <Link
                to="/services"
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                Custom Web Dev
              </Link>

              <Link
                to="/services"
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                Web Applications
              </Link>

              <Link
                to="/services"
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                Mobile Solutions
              </Link>

              <Link
                to="/services"
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                UI/UX Architecture
              </Link>
            </nav>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Products
            </h3>

            <nav className="mt-5 space-y-3">
              <Link
                to="/products"
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                Shuleni
              </Link>

              <Link
                to="/products"
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                Spectrum Care
              </Link>

              <Link
                to="/products"
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                Home Smart System
              </Link>

              <Link
                to="/products"
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                Product Roadmap
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aetheric Labs. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-5">
            <Link to="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>

            <Link to="/terms" className="transition hover:text-white">
              Terms of Service
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 transition hover:text-white"
            >
              Contact Us
              <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;