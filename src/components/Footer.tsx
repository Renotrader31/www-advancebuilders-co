import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-secondary py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="mb-4">
            <img src={logo} alt="Advance Builders" className="h-20 w-auto" />
          </div>
          <p className="text-secondary-foreground/60 text-sm leading-relaxed">
            Quality construction services for commercial, residential, and handyman needs. Licensed, insured, and committed to excellence.
          </p>
        </div>
        <div>
          <h4 className="text-secondary-foreground font-bold mb-4 uppercase text-sm tracking-wider" style={{ fontFamily: 'system-ui' }}>Quick Links</h4>
          <div className="space-y-2">
            <Link to="/residential-construction" className="block text-secondary-foreground/60 hover:text-primary transition-colors text-sm">Residential</Link>
            <Link to="/commercial-construction" className="block text-secondary-foreground/60 hover:text-primary transition-colors text-sm">Commercial</Link>
            <Link to="/handyman-services" className="block text-secondary-foreground/60 hover:text-primary transition-colors text-sm">Handyman</Link>
            <Link to="/projects" className="block text-secondary-foreground/60 hover:text-primary transition-colors text-sm">Projects</Link>
            <a href="/#about" className="block text-secondary-foreground/60 hover:text-primary transition-colors text-sm">About Us</a>
            <a href="/#contact" className="block text-secondary-foreground/60 hover:text-primary transition-colors text-sm">Contact</a>
          </div>
        </div>
        <div>
          <h4 className="text-secondary-foreground font-bold mb-4 uppercase text-sm tracking-wider" style={{ fontFamily: 'system-ui' }}>Contact Info</h4>
          <div className="space-y-3">
            <a href="tel:+17758467796" className="flex items-center gap-2 text-secondary-foreground/60 hover:text-primary transition-colors text-sm">
              <Phone className="h-4 w-4 text-primary" /> (775) 846-7796
            </a>
            <a href="mailto:info@advancebc.co" className="flex items-center gap-2 text-secondary-foreground/60 hover:text-primary transition-colors text-sm">
              <Mail className="h-4 w-4 text-primary" /> info@advancebc.co
            </a>
            <div className="flex items-start gap-2 text-secondary-foreground/60 text-sm">
              <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span>2385 Harbor Circle<br />Reno, NV 89519</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10 pt-6 text-center space-y-2">
        <p className="text-secondary-foreground/60 text-sm font-semibold tracking-wider uppercase">
          Nevada State Contractors License #0086187
        </p>
        <p className="text-secondary-foreground/40 text-sm">
          © {new Date().getFullYear()} Advance Builders. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
