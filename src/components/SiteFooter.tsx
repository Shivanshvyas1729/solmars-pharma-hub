import { Link } from "@tanstack/react-router";
import { Pill, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-navy text-white/85">
      <div className="container-pharma grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-white/10">
              <Pill className="h-5 w-5 text-white" />
            </span>
            <span className="font-display text-lg font-bold text-white">Solmars Pharma</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/65">
            Delivering trusted, affordable pharmaceutical formulations and healthcare products for humanity.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/quality" className="hover:text-white">Quality & Research</Link></li>
            <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link to="/downloads" className="hover:text-white">Downloads</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Business</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/products" className="hover:text-white">Products</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Distributor Inquiry</Link></li>
            <li><Link to="/contact" className="hover:text-white">Third-party Manufacturing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /><span>Ahmedabad, Gujarat, India</span></li>
            <li className="flex items-center gap-2.5"><Mail className="h-4 w-4" aria-hidden="true" /><a href="mailto:info@solmarspharma.com" className="hover:text-white">info@solmarspharma.com</a></li>
            <li className="flex items-center gap-2.5"><Phone className="h-4 w-4" aria-hidden="true" /><a href="tel:+910000000000" className="hover:text-white">+91 00000 00000</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-pharma flex flex-col items-start justify-between gap-2 py-5 text-xs text-white/55 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Solmars Pharma. All rights reserved.</p>
          <p>Quality medicines for a healthier tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
