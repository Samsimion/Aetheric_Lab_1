import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#07111F] text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
        
        {/* Compact 4-column layout with smaller gaps and padding */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          
          {/* Brand & Socials */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-flex items-center">
              <img
                src={logo}
                alt="Aetheric Labs"
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="mt-3 text-sm leading-relaxed font-bold text-slate-400">
              Technology. Innovation. Impact. Building digital solutions that scale.
            </p>
            <div className="mt-4 flex gap-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-[#1677FF] hover:text-white"
              >
                <FaLinkedinIn size={14} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-[#1677FF] hover:text-white"
              >
                <FaGithub size={14} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-[#1677FF] hover:text-white"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-[#1677FF] hover:text-white"
              >
                <FaYoutube size={14} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white">
              Company
            </h3>
            <nav className="mt-3 space-y-2">
              <Link to="/about" className="block text-xs text-slate-400 transition hover:text-white">
                About Us
              </Link>
              <Link to="/portfolio" className="block text-xs text-slate-400 transition hover:text-white">
                Our Work
              </Link>
              <Link to="/insights" className="block text-xs text-slate-400 transition hover:text-white">
                Insights
              </Link>
              <Link to="/careers" className="block text-xs text-slate-400 transition hover:text-white">
                Careers
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white">
              Services
            </h3>
            <nav className="mt-3 space-y-2">
              <Link to="/services" className="block text-xs text-slate-400 transition hover:text-white">
                Custom Web Dev
              </Link>
              <Link to="/services" className="block text-xs text-slate-400 transition hover:text-white">
                Web Applications
              </Link>
              <Link to="/services" className="block text-xs text-slate-400 transition hover:text-white">
                Mobile Solutions
              </Link>
              <Link to="/services" className="block text-xs text-slate-400 transition hover:text-white">
                UI/UX Architecture
              </Link>
            </nav>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white">
              Products
            </h3>
            <nav className="mt-3 space-y-2">
              <Link to="/products" className="block text-xs text-slate-400 transition hover:text-white">
                Shuleni
              </Link>
              <Link to="/products" className="block text-xs text-slate-400 transition hover:text-white">
                Spectrum Care
              </Link>
              <Link to="/products" className="block text-xs text-slate-400 transition hover:text-white">
                Home Smart System
              </Link>
              <Link to="/products" className="block text-xs text-slate-400 transition hover:text-white">
                Product Roadmap
              </Link>
            </nav>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aetheric Labs. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4">
            <Link to="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition hover:text-white">
              Terms of Service
            </Link>
            <Link to="/contact" className="transition hover:text-white font-medium text-slate-400">
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;